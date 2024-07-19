import React, { useContext, useEffect, useState } from 'react';
import Breadcrumb from './components/Breadcrumb';
import { t } from 'i18next';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataMaterials, setLimit as setLimitMaterial } from '../../redux/features/Materials';
import { fetchDataCategories, setLimit as setLimitCategory } from '../../redux/features/Categories';
import { fetchDataSizes, setLimit as setLimitSize } from '../../redux/features/Sizes';
import { fetchDataColors, setLimit as setLimitColor } from '../../redux/features/Colors';
import { Select, MenuItem, FormControl, Chip, Box, CircularProgress } from '@mui/material';
import { AxiosSeller, AxiosSellerImages } from '../../common/AxiosInstance';
import { Valid } from '../../common/Valid';
import { useNavigate } from 'react-router-dom';
import { fetchDataDresses } from '../../redux/features/Dresses';
import { AppContext } from './../../App'

const velayats = ['ashgabat', 'ahal', 'balkan', 'mary', 'dashoguz'];

function DressesAdd() {
  const [data, setData] = useState({
    name_tm: '',
    name_ru: '',
    name_en: '',
    price: '',
    body_tm: '',
    body_en: '',
    body_ru: '',
    categoryId: '',
    materialId: '',
    colorId: '',
    image: [],
    discount: 0,
    welayat: 'ashgabat',
  });

  const dataMaterial = useSelector((state) => state?.Materials?.data);
  const dataCategory = useSelector((state) => state?.Categories?.data);
  const dataSize = useSelector((state) => state?.Sizes?.data);
  const dataColor = useSelector((state) => state?.Colors?.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [sizes, setSizes] = useState([]);
  const [selectedSize, setSelectedSize] = useState('');
  const [file, setFile] = useState([]);
  const [loading, setLoading] = useState(false);
  const [colorIndex, setColorIndex] = useState(null);

  const { lang } = useContext(AppContext);

  useEffect(() => {
    dispatch(fetchDataCategories())
    dispatch(fetchDataColors())
    dispatch(fetchDataSizes())
    dispatch(fetchDataMaterials())
  }, [])

  const handleSize = (e) => {
    setSizes([...sizes, {
      sizeId: e.target.value.id,
      stock: 0,
      name: e.target.value.name
    }])
  }
  const handleSizeSub = (e) => {
    const index = Number(e.target.id);
    const value = e.target.value;
    const name = e.target.name;
    const helpData = [...sizes];
    helpData[index][name] = value;
    setSizes([...helpData]);
  }
  const sizeDelete = (index) => {
    const helpData = [...sizes];
    helpData.splice(index, 1);
    setSizes(helpData);
  }

  const handleVelayat = (e) => {
    setData({ ...data, welayat: e.target.value })
  }

  function convertBytesToKBorMB(bytes) {
    const KB = 1024;
    const MB = 1024 * KB;

    if (bytes < KB) {
      return bytes + ' bytes';
    } else if (bytes < MB) {
      return (bytes / KB).toFixed(2) + ' KB';
    } else {
      return (bytes / MB).toFixed(2) + ' MB';
    }
  }
  function calculateImageSize(size) {
    const isImageTooBig = size > 10 * 1024 * 1024; // 10 MB in bytes

    if (isImageTooBig) {
      return false
    }
    return true
  }
  const handleUploadImage = (event) => {
    const files = event.target.files;
    const arr1 = []
    const arr2 = []
    let bigImage = false;
    for (let i = 0; i < (files.length + file.length < 5 ? files.length : 5 - file.length); i++) {
      if (calculateImageSize(files[i].size)) {
        arr1.push(files[i]);
        arr2.push({
          url: URL.createObjectURL(files[i]),
          name: files[i].name,
          size: convertBytesToKBorMB(files[i].size),
        })
      } else {
        bigImage = true;
      }
    }
    setData({ ...data, image: [...data.image, ...arr1] })
    setFile([...file, ...arr2])
    if (bigImage) alert(t('noLarger'))
  }
  const deleteImage = (index) => {
    const newData = data.image
    newData.splice(index, 1)
    setData({ ...data, image: [...newData] })
    const newFile = file
    newFile.splice(index, 1);
    setFile([...newFile]);
  }

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  }

  const localValid = () => {
    if (sizes.length > 0) {
      for (let i = 0; i < sizes.length; i++) {
        if (!sizes[i].stock.toString().length) {
          return false;
        }
      }
    } else {
      return false
    }
    return true
  }

  const sendData = async () => {
    setLoading(true);

    const dataNew = { ...data };
    dataNew.discount = (data.discount < 0 || !data.discount) ? 0 : data.discount;
    if (Valid(dataNew) && localValid()) {
      try {
        const res = await AxiosSeller("/products/add", { method: "POST", data: dataNew })
        await AxiosSeller("/products/add/size/" + res.data.id, { method: "POST", data: { sizes } })
        for (let i = 0; i < data.image.length; i++) {
          const formData = new FormData();
          formData.append("Image", data.image[i]);
          var res2 = await AxiosSeller("/products/upload-image/" + res.data.id, { method: "POST", data: formData }, true)
          if (res2.status !== 201) {
            break
          }
        }
        if (res2.status === 201) {
          dispatch(fetchDataDresses());
          navigate('/sellerProfile/dresses');
          setLoading(false)
        } else {
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    } else {
      alert(t("fillTheGaps"))
      setLoading(false);
    }
  }
  const handleColor = (color, index) => {
    setColorIndex(index);
    setData({ ...data, colorId: color.id })
  }
  return (
    <div className='dress-add'>
      <Breadcrumb page={'dresses'} pageLink={'/dresses'} name={t('addDress')} />

      <div className="dress-add_content flex justify-between mt-5">
        <div className="dress-add_content_left w-3/5 h-[70vh] overflow-auto rounded-lg border bg-white mr-5">
          <div className="name px-5 py-4 font-bold border-b">{t('aboutTheDress')}</div>
          <div className="inputs grid grid-cols-2 gap-5 p-5">
            <div className="dress-input">
              <label className="label font-semibold block mb-2.5" htmlFor='name-tm'>{t('nameTm')}</label>
              <input name='name_tm' value={data.name_tm} onChange={handleInput} type="text" className='w-full text-lybas-gray bg-gray-100 rounded-lg outline-none px-5 py-2.5' placeholder={t('nameTm')} id='name-tm' />
            </div>
            <div className="dress-input">
              <label className="label font-semibold block mb-2.5" htmlFor='name-en'>{t('nameEn')}</label>
              <input name='name_en' value={data.name_en} onChange={handleInput} type="text" className='w-full text-lybas-gray bg-gray-100 rounded-lg outline-none px-5 py-2.5' placeholder={t('nameEn')} id='name-tm' />
            </div>
            <div className="dress-input">
              <label className="label font-semibold block mb-2.5" htmlFor='name-ru'>{t('nameRu')}</label>
              <input name='name_ru' value={data.name_ru} onChange={handleInput} type="text" className='w-full text-lybas-gray bg-gray-100 rounded-lg outline-none px-5 py-2.5' placeholder={t('nameRu')} id='name-tm' />
            </div>
            <div className="dress-input">
              <label className="label font-semibold block mb-2.5" htmlFor='name-tm'>{t('fabric')}</label>
              <FormControl fullWidth>
                <Select
                  labelId="multi-select-label"
                  id="multi-select"
                  value={data.materialId}
                  name='materialId'
                  onChange={handleInput}
                >
                  {dataMaterial.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option['name_' + lang]}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="dress-input">
              <label className="label font-semibold block mb-2.5" htmlFor='price'>{t('price')}</label>
              <input name='price' value={data.price} onChange={handleInput} type="number" className='w-full text-lybas-gray bg-gray-100 rounded-lg outline-none px-5 py-2.5' placeholder={t('price')} id='name-tm' />
            </div>
            <div className="dress-input">
              <label className="label font-semibold block mb-2.5" htmlFor='discount'>{t('discount')}</label>
              <input name='discount' value={data.discount} onChange={handleInput} type="number" className='w-full text-lybas-gray bg-gray-100 rounded-lg outline-none px-5 py-2.5' placeholder={t('discount')} id='discount' />
            </div>
            <div className="dress-input">
              <label className="label font-semibold block mb-2.5" htmlFor='category'>{t('category')}</label>
              <FormControl fullWidth>
                <Select
                  labelId="multi-select-label"
                  id="multi-select"
                  value={data.categoryId}
                  name='categoryId'
                  onChange={handleInput}
                >
                  {dataCategory.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option['name_' + lang]}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="dress-input sizes">
              <div className="label font-semibold block mb-2.5" htmlFor='province'>{t('province')}</div>
              <div className="size flex flex-wrap items-center">
                <FormControl fullWidth>
                  <Select
                    labelId="multi-select-label"
                    id="multi-select"
                    onChange={handleVelayat}
                    value={data.welayat}
                  >
                    {velayats.map((option, index) => (
                      <MenuItem key={index} value={option}>
                        {t(option)}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="dress-input col-span-2">
              <div className="label font-semibold block mb-2.5" htmlFor='color'>{t('color')}</div>
              <div className="colors flex flex-wrap items-center">
                {
                  dataColor?.length > 0 && dataColor?.map((color, index) => (
                    <button onClick={() => handleColor(color, index)} key={index} className={'rounded-full mr-3 border-blue-600 ' + (colorIndex === index ? 'border-2 p-0.5' : '')}>
                      <div className='w-5 h-5 rounded-full' style={{ background: color.hex }}></div>
                    </button>
                  ))
                }
              </div>
            </div>
            <div className="dress-input sizes col-span-2">
              <div className="label font-semibold block mb-2.5" htmlFor='size'>{t('size')}</div>
              <div className="size flex flex-wrap items-center">
                <FormControl fullWidth>
                  <Select
                    labelId="multi-select-label"
                    id="multi-select"
                    value={selectedSize}
                    name='Size'
                    onChange={handleSize}
                  >
                    {dataSize.map((option) => (
                      <MenuItem key={option.id} value={{ id: option.id, name: option.size }}>
                        {option.size}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
            {
              sizes.length > 0 && sizes.map((size, index) => (
                <div key={index} className='col-span-2'>
                  <div className="dress-input sizes flex justify-between items-center">
                    <div className="dress-input">
                      <label className="label font-semibold block mb-2.5" htmlFor='qauntity'>{size.name} {t('quantity')}</label>
                      <input name='stock' id={index} onChange={handleSizeSub} type="number" className='w-full text-lybas-gray bg-gray-100 rounded-lg outline-none px-5 py-2.5' placeholder={t('quantity')} />
                    </div>
                    <button className='bg-red-400 rounded text-white h-10 py-1 px-10 mt-5' onClick={() => sizeDelete(index)}>{t('delete')}</button>
                  </div>
                </div>
              ))
            }
            <div className="dress-input sizes col-span-2">
              <label className="label font-semibold block mb-2.5" htmlFor='body-tm'>{t('writeContentTm')}</label>
              <textarea name='body_tm' value={data.body_tm} onChange={handleInput} className='w-full text-lybas-gray bg-gray-100 rounded-lg outline-none px-5 py-2.5 resize-none' placeholder={t('writeContentTm')} id="body-tm" cols="30" rows="5"></textarea>
            </div>
            <div className="dress-input sizes col-span-2">
              <label className="label font-semibold block mb-2.5" htmlFor='body-en'>{t('writeContentEn')}</label>
              <textarea name='body_en' value={data.body_en} onChange={handleInput} className='w-full text-lybas-gray bg-gray-100 rounded-lg outline-none px-5 py-2.5 resize-none' placeholder={t('writeContentEn')} id="body-tm" cols="30" rows="5"></textarea>
            </div>
            <div className="dress-input sizes col-span-2">
              <label className="label font-semibold block mb-2.5" htmlFor='body-ru'>{t('writeContentRu')}</label>
              <textarea name='body_ru' value={data.body_ru} onChange={handleInput} className='w-full text-lybas-gray bg-gray-100 rounded-lg outline-none px-5 py-2.5 resize-none' placeholder={t('writeContentRu')} id="body-tm" cols="30" rows="5"></textarea>
            </div>
          </div>
        </div>
        <div className='right-container w-2/5 h-[70vh]'>
          <div className="dress-add_content_right w-full overflow-auto rounded-lg border bg-white">
            <div className="name px-5 py-4 font-bold border-b">{t('uploadImage')}</div>
            <div className="inputs p-5">
              <div className="flex items-center justify-center w-full mt-3">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full  border-2 border-lybas-blue border-dashed rounded-lg cursor-pointer bg-gray-50">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className='mb-3' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 16V7.85L8.4 10.45L7 9L12 4L17 9L15.6 10.45L13 7.85V16H11ZM6 20C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18V15H6V18H18V15H20V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H6Z" fill="#0E1217" />
                    </svg>
                    <p className="mb-2 text-sm text-lybas-blue">{t('clickToUpload')}</p>
                    <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px) {file.length}/5</p>
                  </div>
                  <input id="dropzone-file" multiple onChange={handleUploadImage} type="file" className="hidden" />
                </label>
              </div>
              {/* Images */}
              {
                file?.length > 0 && file.map((image, index) => (
                  <div key={index} className="uploading-image_progressbar mb-3">
                    <div className='uploading-image mt-5 flex justify-between items-center'>
                      <div className="left flex items-center">
                        <div className="image w-16 h-16 rounded-lg overflow-hidden mr-3">
                          <img className='h-full w-full object-cover' src={image.url} alt="" />
                        </div>
                        <div className="info flex flex-col justify-center">
                          <div className="name">{image.name}</div>
                          <div className="size text-lybas-gray">{image.size}</div>
                        </div>
                      </div>
                      <button onClick={() => deleteImage(index)}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.33317 15.8337L4.1665 14.667L8.83317 10.0003L4.1665 5.33366L5.33317 4.16699L9.99984 8.83366L14.6665 4.16699L15.8332 5.33366L11.1665 10.0003L15.8332 14.667L14.6665 15.8337L9.99984 11.167L5.33317 15.8337Z" fill="#0B1527" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="actions flex mt-10">
            <button onClick={() => navigate('/sellerProfile/dresses')} className='bg-white border mr-5 w-full py-2 rounded hover:bg-gray-100'>{t("cancel")}</button>
            <button disabled={loading} onClick={sendData} className={'text-white border flex items-center justify-center w-full py-2 rounded ' + (loading ? 'bg-gray-500 opacity-60' : 'bg-lybas-blue hover:bg-blue-800')}>
              <span className='mr-3'>{t("save")}</span>
              {
                loading &&
                <CircularProgress size={20} />
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DressesAdd;
