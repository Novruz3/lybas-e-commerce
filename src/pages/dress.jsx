import React, { useContext, useEffect, useRef, useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { AppContext } from '../App';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { fetchDataCart } from '../redux/features/Cart';

import DressComp from '../components/Dress';
import Popup from '../components/Popup';
import Comment from '../components/ProductComment';
import { AxiosCustom, AxiosUser } from '../common/AxiosInstance';
import ip from '../common/Config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Dress() {
  const { t, lang } = useContext(AppContext);
  const refImage = useRef(null);
  const refImageOpenButton = useRef(null);
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);
  const [similarData, setSimilarData] = useState(null);
  const [sizeChartOpen, setSizeChartOpen] = useState(false);
  const [inStock, setInStock] = useState(!data?.stock > 0);
  const [popupOpen, setPopupOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [like, setLike] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState();
  const [quantity, setQuantity] = useState(0);
  const [orderedData, setOrderedData] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const isOrdered = async (id) => {
    try {
      const res = await AxiosUser("/is-ordered?productsizeId=" + id);
      if (res?.data?.status === 1) {
        setOrderedData(res?.data?.order_product);
        setQuantity(res?.data?.order_product?.quantity)
        setTotalPrice(res?.data?.order_product?.total_price.toFixed(2))
      } else {
        setQuantity(0)
        const zero = 0;
        setTotalPrice(zero.toFixed(2))
        setOrderedData(null)
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    const getData = async () => {
      try {
        var res;
        if (localStorage.getItem('lybas-user-token')) {
          res = await AxiosUser(`/products/${id}`)
        } else {
          res = await AxiosCustom(`/products/${id}`)
        }
        setData(res?.data?.data?.oneProduct)
        setCount(res?.data?.data.count)
        setLike(res?.data?.data?.oneProduct?.isLiked)
        setSimilarData(res?.data?.data?.recommendations);
        setSelectedSize({ size: res?.data?.data?.oneProduct?.product_sizes[0], index: 0 })
        setInStock(res?.data?.data?.oneProduct?.product_sizes[0]?.stock)
        if (localStorage.getItem('lybas-user-token')) isOrdered(res?.data?.data?.oneProduct?.product_sizes[0].id);
      } catch (error) {
        console.log(error);
      }
    }
    getData();

    const handleClickOutside = (event) => {
      if (refImage.current && !refImage.current.contains(event.target) && !refImageOpenButton.current.contains(event.target)) {
        setSizeChartOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, [id]);

  const handleLike = async (id) => {
    if (localStorage.getItem('lybas-user-token')) {
      try {
        if (like) {
          await AxiosUser("/dislike?id=" + id, { method: "POST" })
        } else {
          await AxiosUser("/like?id=" + id, { method: "POST" })
        }
      } catch (error) {
        console.log(error);
      }
      setLike(!like)
    } else {
      toast.warning(t('loginWorning'), { position: 'bottom-right', autoClose: 2000 });
    }
  }

  const handleSize = async (size, index) => {
    await setInStock(size.stock ? true : false);
    await setSelectedSize({ size, index });
    await isOrdered(size.id)
  }

  const addToCart = async () => {
    if (localStorage.getItem('lybas-user-token')) {
      if (quantity) {
        const data = {
          id: id,
          productsizeId: selectedSize.size.id,
          quantity
        }
        try {
          const res = await AxiosUser('/to-my-cart', { method: 'POST', data })
          dispatch(fetchDataCart())
          setOrderedData(res.data)

          toast.success(t('addedToCart'), { position: 'bottom-right', autoClose: 2000 });
        } catch (error) {
          console.log(error);
        }
      } else {
        if (orderedData) {
          try {
            await AxiosUser('/delete/not-ordered/' + orderedData.id, { method: 'POST' })
            await dispatch(fetchDataCart());
            setOrderedData(null);
            toast.warning(t('removedFromCart'), { position: 'bottom-right', autoClose: 2000 });
          } catch (error) {
            console.log(error);
          }
        } else {
          toast.warning(t('noQuantity'), { position: 'bottom-right', autoClose: 2000 });
        }
      }
    } else {
      toast.warning(t('loginWorning'), { position: 'bottom-right', autoClose: 2000 });
    }
  }

  const instantOrder = async () => {
    if (localStorage.getItem('lybas-user-token')) {
      if (quantity) {
        await localStorage.setItem('instantProduct', JSON.stringify({ id, size: selectedSize.size, quantity, data }))
        navigate('/checkout?instantOrder=true');
      } else {
        toast.warning(t('noQuantity'), { position: 'bottom-right', autoClose: 2000 });
      }
    } else {
      toast.warning(t('loginWorning'), { position: 'bottom-right', autoClose: 2000 });
    }
  }

  const setQuantityFunc = () => {
    console.log(inStock);
    if(inStock > quantity){
      setQuantity(quantity + 1)
      setTotalPrice(((quantity + 1) * data?.price).toFixed(2))
    }else{
      toast.warning(t('outStock'), { position: 'bottom-right', autoClose: 2000 });
    }
  }


  return (
    <div className="dress-page container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Breadcrumb page1={{ text: 'dresses', link: '/dresses' }} page2={{ text: data && data['name_' + lang] }} />
      <div className="dress-page-container flex flex-row justify-between mb-[120px]">
        <div className="dress-page_left w-full md:w-7/10 lg:w-4/5 mr-0 md:mr-[30px]">
          <div className="flex flex-col lg:flex-row">
            <div className="dress-page_left_image w-full lg:w-1/2 flex mr-0 md:mr-[30px]">
              <div className="dress-page_left_image_small-images w-1/5 flex flex-col h-[490px] mt-2.5">
                {
                  data?.images.length > 0 && data.images.map((image, index) => (
                    <img key={index} onClick={() => setActiveImage(index)} src={ip + '/' + image.image} alt="" className="rounded h-[90px] object-cover mb-[10px] cursor-pointer" />
                  ))
                }
              </div>
              <div className="dress-page_left_big-image relative w-4/5 ml-[10px] mt-[10px]">
                {
                  data?.images[activeImage].image &&
                  <img src={ip + '/' + data?.images[activeImage].image} alt="" className="w-full object-cover rounded h-[490px]" />
                }
                {
                  selectedSize?.size?.discount > 0 &&
                  <div className="dress-page_left_big-image_discount absolute top-[5px] left-[5px] bg-lybas-red rounded py-[5px] px-[10px] text-sm text-white">
                    {selectedSize?.size?.discount}%
                  </div>
                }
                <div onClick={() => handleLike(data?.id)} className="dress-page_left_big-image_like absolute top-[5px] right-[5px] bg-black rounded py-[5px] px-[10px] cursor-pointer">
                  {
                    like ?
                      <svg width="23" height="23" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8 1.314C12.4384 -3.24799 23.5343 4.7355 8 15C-7.53427 4.7355 3.56164 -3.24799 8 1.314Z" fill="white" />
                      </svg> :
                      <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5 20.125L10.1104 18.8791C8.49718 17.4257 7.1635 16.1718 6.10933 15.1177C5.05517 14.0635 4.21663 13.1172 3.59371 12.2786C2.97079 11.4401 2.53555 10.6694 2.28798 9.96663C2.04041 9.26386 1.91663 8.54511 1.91663 7.81038C1.91663 6.309 2.41975 5.05518 3.426 4.04893C4.43225 3.04268 5.68607 2.53955 7.18746 2.53955C8.01802 2.53955 8.80864 2.71525 9.55933 3.06663C10.31 3.41802 10.9569 3.91316 11.5 4.55205C12.043 3.91316 12.6899 3.41802 13.4406 3.06663C14.1913 2.71525 14.9819 2.53955 15.8125 2.53955C17.3138 2.53955 18.5677 3.04268 19.5739 4.04893C20.5802 5.05518 21.0833 6.309 21.0833 7.81038C21.0833 8.54511 20.9595 9.26386 20.7119 9.96663C20.4644 10.6694 20.0291 11.4401 19.4062 12.2786C18.7833 13.1172 17.9448 14.0635 16.8906 15.1177C15.8364 16.1718 14.5027 17.4257 12.8895 18.8791L11.5 20.125ZM11.5 17.5375C13.0333 16.1639 14.2951 14.9859 15.2854 14.0036C16.2757 13.0213 17.0583 12.1668 17.6333 11.4401C18.2083 10.7133 18.6076 10.0665 18.8312 9.49945C19.0548 8.93243 19.1666 8.36941 19.1666 7.81038C19.1666 6.85205 18.8472 6.05344 18.2083 5.41455C17.5694 4.77566 16.7708 4.45622 15.8125 4.45622C15.0618 4.45622 14.367 4.66785 13.7281 5.09111C13.0892 5.51438 12.65 6.05344 12.4104 6.7083H10.5895C10.35 6.05344 9.91072 5.51438 9.27183 5.09111C8.63295 4.66785 7.93815 4.45622 7.18746 4.45622C6.22913 4.45622 5.43052 4.77566 4.79163 5.41455C4.15274 6.05344 3.83329 6.85205 3.83329 7.81038C3.83329 8.36941 3.9451 8.93243 4.16871 9.49945C4.39232 10.0665 4.79163 10.7133 5.36663 11.4401C5.94163 12.1668 6.72427 13.0213 7.71454 14.0036C8.70482 14.9859 9.96663 16.1639 11.5 17.5375Z" fill="white" />
                      </svg>
                  }
                </div>
              </div>
            </div>
            <div className="dress-page_left_content w-full lg:w-1/2 mt-[10px]">
              <h1 className="dress-page_left_content_name text-xl md:text-2xl lg:text-3xl font-semibold">{data ? data['name_' + lang] : ''}</h1>
              <div className="dress-page_left_content_prices my-1 md:my-2 lg:my-[10px] flex items-center">
                <div className="dress-page_left_content_prices_price font-bold text-xl mr-[10px]">{data?.price} {t('tmt')}</div>
                {
                  data?.discount > 0 &&
                  <div className="dress-page_left_content_prices_discount text-lybas-red line-through">{data?.price_old} {t('tmt')}</div>
                }
              </div>
              <div className="dress-page_left_content_rating-stock flex items-center mb-[10px]">
                <span>{t('rating')}: </span>
                <span className="font-semibold mx-[8px]"> {data?.rating?.toFixed(1)}</span>
                <div className="stars flex items-center">
                  {
                    Array.from({ length: Math.round(data?.rating) }).map((star, index) => (
                      <svg
                        className="mr-[2px]"
                        key={index}
                        width="15"
                        height="16"
                        viewBox="0 0 15 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.9923 6.10156L9.75008 5.44531L7.82821 1.41406C7.68758 1.13281 7.31258 1.13281 7.17196 1.41406L5.25008 5.46875L1.03133 6.10156C0.726647 6.14844 0.60946 6.54688 0.843835 6.75781L3.91415 9.92188L3.18758 14.3516C3.14071 14.6562 3.4454 14.9141 3.72665 14.7266L7.54696 12.6406L11.3438 14.7266C11.6016 14.8672 11.9298 14.6328 11.8595 14.3516L11.1329 9.92188L14.2032 6.75781C14.3907 6.54688 14.297 6.14844 13.9923 6.10156Z"
                          fill="#FFA645"
                        />
                      </svg>
                    ))
                  }
                  {
                    Array.from({ length: 5 - Math.round(data?.rating) }).map((star, index) => (
                      <svg
                        className="mr-[2px]"
                        key={index}
                        width="15"
                        height="16"
                        viewBox="0 0 15 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.63289 15.1953C3.44539 15.1953 3.25789 15.1484 3.09383 15.0313C2.78914 14.8203 2.62508 14.4453 2.69539 14.0703L3.3282 10.0859L0.586015 7.25C0.328203 6.99219 0.234453 6.59375 0.35164 6.24219C0.468828 5.89063 0.750078 5.65625 1.10164 5.58594L4.92195 4.97656L6.63289 1.34375C6.79695 1.01563 7.12508 0.804688 7.47664 0.804688C7.85164 0.804688 8.15633 1.01563 8.32039 1.34375L10.0782 4.95313L13.8985 5.5625C14.2501 5.60938 14.5313 5.86719 14.6485 6.21875C14.7657 6.57031 14.672 6.96875 14.4141 7.22656L11.6485 10.0625L12.3048 14.0703C12.3751 14.4453 12.211 14.8203 11.9063 15.0313C11.6251 15.2422 11.2501 15.2656 10.922 15.1016L7.50008 13.2266L4.0782 15.1016C3.93758 15.1719 3.79695 15.1953 3.63289 15.1953ZM1.17195 6.6875L4.00789 9.59375C4.14851 9.73438 4.21883 9.94531 4.17195 10.1563L3.5157 14.2109C3.49226 14.3047 3.56258 14.3516 3.58601 14.375C3.63289 14.4219 3.67976 14.3984 3.7032 14.375L7.21883 12.4531C7.40633 12.3594 7.61726 12.3594 7.80476 12.4531L11.3204 14.3516C11.3438 14.3516 11.3673 14.375 11.4376 14.3516C11.461 14.3281 11.5079 14.2813 11.5079 14.1875L10.8516 10.1094C10.8282 9.89844 10.8751 9.71094 11.0157 9.54688L13.8282 6.64063C13.8985 6.57031 13.8751 6.5 13.8751 6.45313C13.8751 6.42969 13.8282 6.35938 13.7813 6.35938L9.84383 5.75C9.63289 5.72656 9.46883 5.58594 9.37508 5.39844L7.61726 1.69531C7.59383 1.625 7.54695 1.625 7.50008 1.625C7.47664 1.625 7.42976 1.64844 7.38289 1.69531L5.62508 5.42188C5.53133 5.60938 5.36726 5.75 5.15633 5.77344L1.24227 6.40625C1.17195 6.40625 1.14852 6.47656 1.14852 6.5C1.12508 6.52344 1.10164 6.61719 1.17195 6.6875Z"
                          fill="#FFA645"
                        />
                      </svg>
                    ))
                  }
                </div>
                <div className="stock ml-[20px] flex items-center">
                  {
                    inStock ? <>
                      <svg className="mr-[10px]" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_418_21362)">
                          <path
                            d="M10.8975 19.625C5.37152 19.625 0.918213 15.3125 0.918213 10C0.918213 4.6875 5.37152 0.40625 10.8975 0.40625C16.4235 0.40625 20.9093 4.6875 20.9093 10C20.9093 15.3125 16.4235 19.625 10.8975 19.625ZM10.8975 1.5C6.02164 1.5 2.05592 5.3125 2.05592 10C2.05592 14.6875 6.02164 18.5313 10.8975 18.5313C15.7734 18.5313 19.7716 14.6875 19.7716 10C19.7716 5.3125 15.7734 1.5 10.8975 1.5Z"
                            fill="#1A54EB"
                          />
                          <path
                            d="M9.7923 12.1875C9.56476 12.1875 9.36972 12.125 9.17469 11.9687L7.0293 9.96875C6.80176 9.75 6.80176 9.40625 7.0293 9.1875C7.25684 8.96875 7.6144 8.96875 7.84195 9.1875L9.7923 11.0312L13.953 7.15625C14.1806 6.9375 14.5382 6.9375 14.7657 7.15625C14.9932 7.375 14.9932 7.71875 14.7657 7.9375L10.4424 12C10.2149 12.125 9.98733 12.1875 9.7923 12.1875Z"
                            fill="#1A54EB"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_418_21362">
                            <rect width="20.7595" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="font-semibold">{t('inStock')}</span>
                    </> : <>
                      <svg className="mr-[10px]" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.9793 19.625C4.45331 19.625 0 15.3125 0 10C0 4.6875 4.45331 0.40625 9.9793 0.40625C15.5053 0.40625 19.9911 4.6875 19.9911 10C19.9911 15.3125 15.5053 19.625 9.9793 19.625ZM9.9793 1.5C5.10342 1.5 1.13771 5.3125 1.13771 10C1.13771 14.6875 5.10342 18.5313 9.9793 18.5313C14.8552 18.5313 18.8534 14.6875 18.8534 10C18.8534 5.3125 14.8552 1.5 9.9793 1.5Z" fill="#FF3521" />
                        <path d="M6.6199 14.313C6.42463 14.5083 6.10805 14.5083 5.91279 14.313L5.68656 14.0868C5.4913 13.8915 5.4913 13.575 5.68656 13.3797L8.71279 10.3535C8.90805 10.1582 8.90805 9.84163 8.71279 9.64637L5.68656 6.62014C5.4913 6.42488 5.4913 6.10829 5.68656 5.91303L5.91279 5.68681C6.10805 5.49154 6.42463 5.49154 6.61989 5.68681L9.64612 8.71303C9.84138 8.90829 10.158 8.90829 10.3532 8.71303L13.3795 5.68681C13.5747 5.49154 13.8913 5.49154 14.0866 5.68681L14.3128 5.91303C14.508 6.10829 14.508 6.42488 14.3128 6.62014L11.2866 9.64636C11.0913 9.84163 11.0913 10.1582 11.2866 10.3535L14.3128 13.3797C14.508 13.575 14.508 13.8915 14.3128 14.0868L14.0866 14.313C13.8913 14.5083 13.5747 14.5083 13.3795 14.313L10.3532 11.2868C10.158 11.0915 9.84138 11.0915 9.64612 11.2868L6.6199 14.313Z" fill="#FF3521" />
                      </svg>


                      <span className="font-semibold">{t('outStock')}</span>
                    </>
                  }
                </div>
              </div>
              <div className="dress-page_left_content_velayat">
                <span>{t(data?.welayat)} </span>
                <span className="text-lybas-red">( {t('_2_5days')} )</span>
              </div>
              <div className="dress-page_left_content_devider w-full h-[2px] bg-lybas-light-gray my-[20px]"></div>
              <div className="dress-page_left_content_fabric-name text-sm text-lybas-gray mb-[10px]">{t('fabricName')}:</div>
              <div className="dress-page_left_content_fabrics flex flex-wrap mb-[15px]">
                <button className="dress-page_left_content_fabrics_fabric mb-1 mr-[12px] py-[6px] px-[12px] rounded-lg border border-lybas-blue text-lybas-blue">
                  {data?.material?.name_tm && data.material['name_' + lang]}
                </button>
                <button ref={refImageOpenButton} onClick={() => setSizeChartOpen(true)} className="dress-page_left_content_size-chart flex items-center ml-5 text-">
                  <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.94529 13.4783H16.0525V13.8981C16.0525 13.9617 15.9972 14.0147 15.9308 14.0147H6.06698C5.99839 14.0147 5.94529 13.9617 5.94529 13.8981V13.4783ZM13.1252 0.00888328H9.13366C9.43236 1.72198 12.8464 1.74319 13.1252 0.00888328ZM5.54481 5.21179C5.62003 5.15666 5.72181 5.1503 5.80811 5.19059C5.88997 5.22875 5.94529 5.31356 5.94529 5.40473V13.0013H16.0525V5.40261C16.0525 5.31144 16.1078 5.22875 16.1919 5.18847C16.276 5.14818 16.3778 5.15454 16.4552 5.20967L17.7097 6.1171L19.9002 3.33332L16.1521 0.625854C15.4462 0.0894499 14.5103 -0.0377605 13.6319 0.00888328C13.3044 2.36652 8.95002 2.3644 8.6314 0.00888328H7.77954C7.08478 0.00888328 6.39666 0.229381 5.84572 0.630094L2.09756 3.33544L4.28804 6.11922L5.54481 5.21179ZM21.8982 16.1688C21.7721 16.2706 0.0154883 15.978 0 16.2643V19.9046C0 19.9576 0.0442522 20 0.0995675 20H1.37403V18.5625C1.37403 18.4311 1.48466 18.3229 1.62406 18.3229C1.76124 18.3229 1.87408 18.4311 1.87408 18.5625V20H2.87418V19.0417C2.87418 18.9102 2.98481 18.8021 3.12421 18.8021C3.26139 18.8021 3.37423 18.9102 3.37423 19.0417V20H4.37433V18.5625C4.37433 18.4311 4.48496 18.3229 4.62436 18.3229C4.76154 18.3229 4.87438 18.4311 4.87438 18.5625V20H5.87448V19.0417C5.87448 18.9102 5.98511 18.8021 6.12451 18.8021C6.26169 18.8021 6.37453 18.9102 6.37453 19.0417V20H7.12461V18.5625C7.12461 18.4311 7.23524 18.3229 7.37463 18.3229C7.51182 18.3229 7.62466 18.4311 7.62466 18.5625V20H8.62476V19.0417C8.62476 18.9102 8.73539 18.8021 8.87479 18.8021C9.01197 18.8021 9.12481 18.9102 9.12481 19.0417V20H10.1249V18.5625C10.1249 18.4311 10.2355 18.3229 10.3749 18.3229C10.5121 18.3229 10.625 18.4311 10.625 18.5625V20H11.6251V19.0417C11.6251 18.9102 11.7357 18.8021 11.8751 18.8021C12.0123 18.8021 12.1251 18.9102 12.1251 19.0417V20H12.8752V18.5625C12.8752 18.4311 12.9858 18.3229 13.1252 18.3229C13.2624 18.3229 13.3752 18.4311 13.3752 18.5625V20H14.3753V19.0417C14.3753 18.9102 14.486 18.8021 14.6254 18.8021C14.7625 18.8021 14.8754 18.9102 14.8754 19.0417V20H15.8755V18.5625C15.8755 18.4311 15.9861 18.3229 16.1255 18.3229C16.2627 18.3229 16.3755 18.4311 16.3755 18.5625V20H17.3756V19.0417C17.3756 18.9102 17.4863 18.8021 17.6257 18.8021C17.7628 18.8021 17.8757 18.9102 17.8757 19.0417V20H18.6258V18.5625C18.6258 18.4311 18.7364 18.3229 18.8758 18.3229C19.013 18.3229 19.1258 18.4311 19.1258 18.5625V20H20.1259V19.0417C20.1259 18.9102 20.2365 18.8021 20.3759 18.8021C20.5131 18.8021 20.626 18.9102 20.626 19.0417V20H21.9004C21.9557 20 22 19.9576 22 19.9046V16.2664C21.9978 16.2134 21.9535 16.171 21.8982 16.1688Z" fill="#1A54EB" />
                  </svg>
                  <span className='text-lybas-blue underline ml-3 tracking-tighter'>{t('sizeChart')}</span>
                </button>

                {/* Size chart big image */}
                {
                  sizeChartOpen &&
                  <div className='size-chart-container w-full h-full fixed z-[15] top-0 left-0 bg-[#5d5c5c61] flex items-center justify-center'>
                    <div ref={refImage} className="size-chart-container_image-container bg-white flex flex-col items-end rounded-lg overflow-hidden p-5">
                      <button onClick={() => setSizeChartOpen(false)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" fill="#0E1217" />
                        </svg>
                      </button>
                      <img className='max-h-[80vh]' src={require('../assets/images/sizeChart.png')} alt="" />
                    </div>
                  </div>
                }
              </div>
              <div className="dress-page_left_content_size-name text-sm text-lybas-gray mb-[10px]">{t('size')}:</div>
              <div className="dress-page_left_content_sizes flex flex-wrap items-center mb-[15px]">
                {
                  data?.product_sizes?.length > 0 && data?.product_sizes?.map((size, index) => (
                    <button onClick={() => (handleSize(size, index))} key={index} className={"relative dress-page_left_content_sizes_size mr-4 mb-1 py-[6px] px-[12px] rounded-lg border " + (selectedSize.index === index ? 'border-lybas-blue text-lybas-blue' : (size?.stock ? 'border-gray-600' : 'border-gray-300')) + (size?.stock ? '' : ' text-gray-500')}> {/*border-lybas-blue text-lybas-blue  (active yagdayy)*/}
                      {size?.size?.size}
                      {
                        !size?.stock &&
                        <div className={'absolute -top-3 -right-3 w-6 h-6 p-1 rounded-full ' + (selectedSize.index === index ? 'bg-lybas-blue' : 'bg-gray-200')}>
                          <svg className={'w-full h-full ' + (selectedSize.index === index ? 'fill-white' : 'fill-[#0E1217]')} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 11.875V10.625H3.75V6.25C3.75 5.38542 4.01042 4.61719 4.53125 3.94531C5.05208 3.27344 5.72917 2.83333 6.5625 2.625V2.1875C6.5625 1.92708 6.65365 1.70573 6.83594 1.52344C7.01823 1.34115 7.23958 1.25 7.5 1.25C7.76042 1.25 7.98177 1.34115 8.16406 1.52344C8.34635 1.70573 8.4375 1.92708 8.4375 2.1875V2.625C9.27083 2.83333 9.94792 3.27344 10.4688 3.94531C10.9896 4.61719 11.25 5.38542 11.25 6.25V10.625H12.5V11.875H2.5ZM7.5 13.75C7.15625 13.75 6.86198 13.6276 6.61719 13.3828C6.3724 13.138 6.25 12.8438 6.25 12.5H8.75C8.75 12.8438 8.6276 13.138 8.38281 13.3828C8.13802 13.6276 7.84375 13.75 7.5 13.75ZM5 10.625H10V6.25C10 5.5625 9.75521 4.97396 9.26562 4.48438C8.77604 3.99479 8.1875 3.75 7.5 3.75C6.8125 3.75 6.22396 3.99479 5.73438 4.48438C5.24479 4.97396 5 5.5625 5 6.25V10.625Z" />
                          </svg>
                        </div>
                      }
                    </button>

                  ))
                }
              </div>
              <div className="dress-page_left_content_color-name text-sm text-lybas-gray mb-[10px]">{t('color')}:</div>
              <div className="dress-page_left_content_colors flex items-center">
                <button className="dress-page_left_content_colors_color flex items-center justify-center rounded-full h-[30px] w-[30px] mr-[6px] border border-lybas-blue">
                  <span className="w-[22px] h-[22px] rounded-full" style={{ background: data?.color?.hex }}></span>
                </button>
              </div>
              <div className='mobile-but-actions block md:hidden mt-5 flex items-center sticky bottom-[100px] bg-white'>
                <div className="buttons shadow-lybas-1 h-[32px] flex items-center rounded-lg">
                  <button onClick={() => (setQuantity(quantity > 0 ? quantity - 1 : 0), setTotalPrice(((quantity - 1) * data?.price).toFixed(2)))} className="h-full px-[8px] group border-r border-r-lybas-light-gray">
                    <svg
                      className="fill-lybas-gray group-hover:fill-lybas-blue"
                      width="16"
                      height="2"
                      viewBox="0 0 16 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0.666748 1.66659V0.333252H15.3334V1.66659H0.666748Z" />
                    </svg>
                  </button>
                  <span className="w-10 text-center text-semibold">{quantity}</span>
                  <button onClick={() => (setQuantity(quantity + 1), setTotalPrice(((quantity + 1) * data?.price).toFixed(2)))} className="h-full px-[8px] group border-l border-l-lybas-light-gray">
                    <svg
                      className="fill-lybas-gray group-hover:fill-lybas-blue"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5.23793 6.76199H0.666504V5.23818H5.23793V0.666748H6.76174V5.23818H11.3332V6.76199H6.76174V11.3334H5.23793V6.76199Z" />
                    </svg>
                  </button>
                </div>
                <button
                  disabled={!inStock}
                  onClick={instantOrder}
                  className={
                    'dress-page_right_add-card_order-button w-full py-[4px] mx-3 rounded-lg ' +
                    (inStock ? 'bg-lybas-blue text-white' : 'bg-lybas-light-gray text-lybas-gray cursor-not-allowed')
                  }
                >
                  {t('order')}
                </button>
                <button disabled={!inStock} onClick={addToCart} className={"dress-page_right_add-checkout-button w-full py-[4px] shadow-lybas-1 rounded-lg " + (inStock ? 'text-lybas-blue' : 'text-gray-400 cursor-not-allowed')}>
                  {orderedData ? t('changeCart') : t('addToCard')}
                </button>
              </div>
              <div className="dress-page_left_content_devider w-full h-[2px] bg-lybas-light-gray my-[20px]"></div>
              <div className="dress-page_left_content _definition break-words">
                {data?.body_tm && data['body_' + lang]}
              </div>
            </div>
          </div>
          <div className="dress-page_left_devider w-full h-[2px] bg-lybas-light-gray my-[20px]"></div>
          <div className="comment-similars flex flex-col-reverse md:block">
            {
              data?.comments?.length > 0 &&
              <div className="dress-page_left_comments w-full mt-5 md:mt-0">
                <div className="dress-page_left_comments_header flex items-center justify-between mb-[20px]">
                  <span className="text-xl font-semibold">{t('comments')}</span>
                  <Link to={'/comments/' + id} className="flex items-center text-lybas-blue">
                    <span className="hidden md:inline">{t('viewAll')}</span>
                    <svg className="ml-[8px]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="#1A54EB" />
                    </svg>
                  </Link>
                </div>
                {
                  data.comments.map((comment, index) => (
                    <Comment key={index} data={comment} />
                  ))
                }
              </div>
            }
            {
              similarData?.length > 0 &&
              <div className="dress-page_left_similar-dresses">
                <div className="dress-page_left_similar-dresses_header flex items-center justify-between my-[25px]">
                  <span className="text-xl font-semibold">{t('similarDresses')}</span>
                  {/* <Link to={'/'} className="flex items-center text-lybas-blue">
                    <span className="hidden md:inline">{t('viewAll')}</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="#1A54EB" />
                    </svg>
                  </Link> */}
                </div>
                <div className="dress-page_left_similar-dresses_dresses grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {similarData.map((sim, index) => (
                    <DressComp key={index} hover="small" data={sim} />
                  ))}
                </div>
              </div>
            }
          </div>
        </div>
        <div className="dress-page_right md:w-3/10 lg:w-1/5 hidden md:block">
          {/* Add card */}
          <div className="dress-page_right_add-card p-[20px] mb-[20px] rounded-lg shadow-lybas-1">
            <div className="dress-page_right_add-card_name text-lg font-semibold">{t('addToCard')}</div>
            <div className="dress-page_right_add-card_number my-[15px] flex flex-wrap justify-between items-center">
              <span className="text-lybas-gray">{t('numbers')}:</span>
              <div className="buttons shadow-lybas-1 h-[32px] flex items-center rounded-lg">
                <button onClick={() => (setQuantity(quantity > 0 ? quantity - 1 : 0), setTotalPrice(((quantity > 0 && quantity - 1) * data?.price).toFixed(2)))} className="h-full px-[8px] group border-r border-r-lybas-light-gray">
                  <svg
                    className="fill-lybas-gray group-hover:fill-lybas-blue"
                    width="16"
                    height="2"
                    viewBox="0 0 16 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0.666748 1.66659V0.333252H15.3334V1.66659H0.666748Z" />
                  </svg>
                </button>
                <span className="w-10 text-center text-semibold">{quantity}</span>
                <button onClick={()=>setQuantityFunc('add')} className="h-full px-[8px] group border-l border-l-lybas-light-gray">
                  <svg
                    className="fill-lybas-gray group-hover:fill-lybas-blue"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.23793 6.76199H0.666504V5.23818H5.23793V0.666748H6.76174V5.23818H11.3332V6.76199H6.76174V11.3334H5.23793V6.76199Z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="dress-page_right_add-card_devider w-full h-[2px] bg-lybas-light-gray my-[20px]"></div>
            <div className="dress-page_right_add-card_total-price mb-[20px] flex justify-between items-center">
              <span className="text-lybas-gray">{t('total')}:</span>
              <span className="font-semibold">{totalPrice}{t('tmt')}</span>
            </div>
            <button
              disabled={!inStock}
              onClick={instantOrder}
              className={
                'dress-page_right_add-card_order-button w-full py-[10px] mb-[15px] rounded-lg ' +
                (inStock ? 'bg-lybas-blue text-white' : 'bg-lybas-light-gray text-lybas-gray cursor-not-allowed')
              }
            >
              {t('order')}
            </button>
            <button disabled={!inStock} onClick={addToCart} className={"dress-page_right_add-checkout-button w-full py-[10px] shadow-lybas-1 rounded-lg " + (inStock ? 'text-lybas-blue' : 'text-gray-400 cursor-not-allowed')}>
              {orderedData ? t('changeCart') : t('addToCard')}
            </button>
          </div>

          {/* Seller box */}
          <div className="dress-page_right_seller-card p-[20px] mb-[20px] rounded-lg shadow-lybas-1">
            <div className="text-lg font-semibold pb-3">{t('seller')}</div>
            <div className="dress-page_right_seller-card_location flex">
              {
                data?.seller?.image ?
                  <img className='mr-4 h-full w-[70px] rounded-lg' src={ip + '/' + data?.seller?.image} />
                  :
                  <svg className="mr-4 h-full" width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="70" height="70" rx="8" fill="#64748B" />
                    <path
                      d="M19.6667 23.5001V19.6667H50.3333V23.5001H19.6667ZM19.6667 50.3334V38.8334H17.75V35.0001L19.6667 25.4167H50.3333L52.25 35.0001V38.8334H50.3333V50.3334H46.5V38.8334H38.8333V50.3334H19.6667ZM23.5 46.5001H35V38.8334H23.5V46.5001Z"
                      fill="white"
                    />
                  </svg>
              }
              <div className="flex flex-col">
                <span className="font-semibold">{data?.seller?.name}</span>
                <span className="text-lybas-gray">{count} {t('typesOfProducts')}</span>
              </div>
            </div>
            <div className="dress-page_right_seller-card_velayat flex items-center font-semibold my-[20px]">
              <svg className="mr-[10px]" width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8 10C8.55 10 9.02083 9.80417 9.4125 9.4125C9.80417 9.02083 10 8.55 10 8C10 7.45 9.80417 6.97917 9.4125 6.5875C9.02083 6.19583 8.55 6 8 6C7.45 6 6.97917 6.19583 6.5875 6.5875C6.19583 6.97917 6 7.45 6 8C6 8.55 6.19583 9.02083 6.5875 9.4125C6.97917 9.80417 7.45 10 8 10ZM8 17.35C10.0333 15.4833 11.5417 13.7875 12.525 12.2625C13.5083 10.7375 14 9.38333 14 8.2C14 6.38333 13.4208 4.89583 12.2625 3.7375C11.1042 2.57917 9.68333 2 8 2C6.31667 2 4.89583 2.57917 3.7375 3.7375C2.57917 4.89583 2 6.38333 2 8.2C2 9.38333 2.49167 10.7375 3.475 12.2625C4.45833 13.7875 5.96667 15.4833 8 17.35ZM8 20C5.31667 17.7167 3.3125 15.5958 1.9875 13.6375C0.6625 11.6792 0 9.86667 0 8.2C0 5.7 0.804167 3.70833 2.4125 2.225C4.02083 0.741667 5.88333 0 8 0C10.1167 0 11.9792 0.741667 13.5875 2.225C15.1958 3.70833 16 5.7 16 8.2C16 9.86667 15.3375 11.6792 14.0125 13.6375C12.6875 15.5958 10.6833 17.7167 8 20Z"
                  fill="#1A54EB"
                />
              </svg>
              <span>{t('ashgabat')}</span>
            </div>
            <button onClick={() => navigate('/dressmakers/' + data?.seller.id)} className="dress-page_right_seller-card_more-button lybas-blue-button mb-[15px]">{t('more')}</button>
            <button
              onClick={() => { localStorage.getItem('lybas-user-token') ? setPopupOpen(true) : toast.warning(t('loginWorning'), { position: 'bottom-right', autoClose: 2000 }); }}
              disabled={inStock}
              className={
                'dress-page_right_seller-card_remind-button lybas-button ' +
                (inStock ? 'bg-lybas-light-gray text-lybas-gray cursor-not-allowed' : 'bg-lybas-blue text-white')
              }
            >
              {t('remindMe')}
            </button>
          </div>
        </div>
      </div>
      <Popup open={popupOpen} setOpen={setPopupOpen} size={selectedSize} data={data} />
      <div className='mobile-button w-full fixed z-[11] md:hidden bg-white shadow-t shadow-lybas-1 px-6 py-5 bottom-0 left-0 right-0'>
        <button disabled={inStock} className={'w-full rounded-lg py-2 flex items-center justify-center ' + (!inStock ? 'bg-lybas-blue' : 'bg-gray-500')} onClick={() => setPopupOpen(true)}>
          <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.66667 18.3333C1.20833 18.3333 0.815972 18.1701 0.489583 17.8437C0.163194 17.5173 0 17.1249 0 16.6666V6.66659C0 6.20825 0.163194 5.81589 0.489583 5.4895C0.815972 5.16311 1.20833 4.99992 1.66667 4.99992H3.33333C3.33333 3.84714 3.73958 2.8645 4.55208 2.052C5.36458 1.2395 6.34722 0.833252 7.5 0.833252C8.65278 0.833252 9.63542 1.2395 10.4479 2.052C11.2604 2.8645 11.6667 3.84714 11.6667 4.99992H13.3333C13.7917 4.99992 14.184 5.16311 14.5104 5.4895C14.8368 5.81589 15 6.20825 15 6.66659V16.6666C15 17.1249 14.8368 17.5173 14.5104 17.8437C14.184 18.1701 13.7917 18.3333 13.3333 18.3333H1.66667ZM7.5 11.6666C8.65278 11.6666 9.63542 11.2603 10.4479 10.4478C11.2604 9.63534 11.6667 8.6527 11.6667 7.49992H10C10 8.19436 9.75694 8.78464 9.27083 9.27075C8.78472 9.75686 8.19444 9.99992 7.5 9.99992C6.80556 9.99992 6.21528 9.75686 5.72917 9.27075C5.24306 8.78464 5 8.19436 5 7.49992H3.33333C3.33333 8.6527 3.73958 9.63534 4.55208 10.4478C5.36458 11.2603 6.34722 11.6666 7.5 11.6666ZM5 4.99992H10C10 4.30547 9.75694 3.7152 9.27083 3.22909C8.78472 2.74297 8.19444 2.49992 7.5 2.49992C6.80556 2.49992 6.21528 2.74297 5.72917 3.22909C5.24306 3.7152 5 4.30547 5 4.99992Z" fill="white" />
          </svg>
          <span className='ml-2 text-white'>{t('remindMe')}</span>
        </button>
      </div>
    </div>
  );
}

export default Dress;
