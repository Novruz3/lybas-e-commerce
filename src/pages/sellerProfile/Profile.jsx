import React, { useEffect, useState } from 'react';
import Breadcrumb from './components/Breadcrumb';
import { t } from 'i18next';
import { AxiosSeller } from '../../common/AxiosInstance';
import { useNavigate } from 'react-router-dom';
import { Select, MenuItem, FormControl } from '@mui/material';
import Person2Icon from '@mui/icons-material/Person2';
import ip from '../../common/Config';

function Profile() {
  const [data, setData] = useState({
    image:'',
    username:'',
    newPassword:'',
    welayat:'ashgabat',
    email:'',
    user_phone:''
  })
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  const welayat = ['ashgabat', 'ahal', 'mary', 'lebap', 'dashoguz', 'balkan'];

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await AxiosSeller("/account/get-me");
        setData({
          image:'',
          username:res.data.name,
          welayat:res.data.welayat,
          email:res.data.email,
          user_phone:res.data.phone_number,
        });
        setImage({url: res.data.image ? (ip+'/'+res.data.image) : null})
      } catch (error) {
        console.log(error.response.data.message);
        if (error.response.status === 401) {
          localStorage.setItem('lybas-seller-token', '');
          navigate('/login')
        }
      }
    }
    getData();
  }, [])

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  const handleUploadImage = (event) => {
    const files = event.target.files;
    setData({ ...data, image: files[0] })
    setImage({
      url: URL.createObjectURL(files[0])
    })
  }

  const sendData = async ()=>{
    try {
      const res = await AxiosSeller('/account/edit',{method:'PATCH',data})
      const formData = new FormData();
      if(data.image){
        formData.append('image',data.image);
        await AxiosSeller('/account/upload-image',{method:'POST',data:formData},true);
      }
      alert(t('save'))
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className='one-comment'>
      <Breadcrumb page={'profile'} pageLink={'/profile'} name={data?.username} />

      <div className="one-comment_content flex mt-5">
        <div className="one-comment_content_left bg-white rounded-lg w-3/5 mr-5">
          <div className="title py-3 px-5 font-semibold border-b">{t('personalInformation')}</div>

          <div className="inputs grid grid-cols-4 gap-5 p-5">
            <div className="data col-span-2">
              <div className="data_title font-semibold mb-2">{t('nameSimple')}</div>
              <input name='username' value={data.username} onChange={handleInput} className="data_title w-full outline-none text-lybas-gray bg-gray-200 rounded-lg py-2.5 px-5" placeholder={t('username')} />
            </div>
            <div className="data col-span-2">
              <div className="data_title font-semibold mb-2">{t('phoneNumber')}</div>
              <input name='user_phone' value={data.user_phone} onChange={handleInput} className="data_title w-full outline-none text-lybas-gray bg-gray-200 rounded-lg py-2.5 px-5" placeholder={t('phoneNumber')} />
            </div>
            <div className="data col-span-2">
              <div className="data_title font-semibold mb-2">{t('email')}</div>
              <input name='email' value={data.email} onChange={handleInput} className="data_title w-full outline-none text-lybas-gray bg-gray-200 rounded-lg py-2.5 px-5" placeholder={t('email')} />
            </div>
            <div className="data col-span-2">
              <div className="data_title font-semibold mb-2">{t('province')}</div>
              <FormControl fullWidth>
                <Select
                  labelId="multi-select-label"
                  id="multi-select"
                  value={data?.welayat}
                  name='welayat'
                  onChange={handleInput}
                  sx={{ background: '#eeeeee', height: '44px' }}
                >
                  {welayat.map((option, index) => (
                    <MenuItem key={index} value={option}>
                      {t(option)}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="data col-span-4">
              <div className="data_title font-semibold mb-2">{t('password')}</div>
              <div className="data_title text-lybas-gray bg-gray-200 rounded-lg flex justify-between items-center pr-5">
                <input type="password" name='newPassword' onChange={handleInput} className='py-2.5 px-5 w-full bg-gray-200 rounded-lg outline-none' />
              </div>
            </div>
          </div>
        </div>
        <div className='w-2/5 flex flex-col justify-between'>
          <div className="one-comment_content_right bg-white rounded-lg h-fit">
            <div className="title py-3 px-5 font-semibold border-b">{t('profileImage')}</div>
            <div className="inputs p-5">
              <div className="flex items-center">
                <div className="image w-[55px] h-[55px] rounded-full flex justify-center items-center bg-gray-100 object-fit mr-3 overflow-hidden">
                  {
                    image.url ?
                      <img className='h-full w-full object-cover' src={image.url} alt="" />
                      :
                      <Person2Icon sx={{ width: '90%', height: '90%' }} />
                  }
                </div>
                <div className="titleAndAction flex flex-col justify-center">
                  <div className="title font-semibold mb-1">{t('uploadImage')}</div>
                  <div className="actions flex items-center">
                    <label htmlFor='upload-image' className='text-lybas-blue mr-2 cursor-pointer'>{t('upload')}</label>
                    <input id='upload-image' onChange={handleUploadImage} type="file" className='hidden' />
                    <button className='text-lybas-gray' onClick={() => (setImage(''), setData({...data,image:''}))}>{t('delete')}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="actions flex">
            <button onClick={()=>navigate('/sellerProfile')} className='w-full bg-white rounded-lg py-2 mr-5 hover:bg-gray-100'>{t('cancel')}</button>
            <button onClick={sendData} className='bg-lybas-blue text-white rounded-lg w-full py-2 hover:bg-blue-700'>{t('save')}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
