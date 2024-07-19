import React, { useContext, useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { t } from 'i18next';
import DOMPurify from 'dompurify';
import AddAddressPopup from '../components/popups/addAddressPopup';
import AccountOneAddress from '../components/AccountOneAddress';
import { useSelector, useDispatch } from "react-redux";
import { fetchDataCart } from '../redux/features/Cart';
import { AxiosUser } from '../common/AxiosInstance';
import ip from '../common/Config';
import { AppContext } from '../App'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useSearchParams } from 'react-router-dom';

function Checkout() {
  const { lang } = useContext(AppContext)
  const [addAddressPopupOpen, setAddAddressPopupOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [instantOrder, setInstantOrder] = useState(searchParams.get('instantOrder'))
  const [instantOrderData, setInstantOrderData] = useState(instantOrder ? JSON.parse(localStorage.getItem('instantProduct')) : '')
  const cartData = useSelector((state) => state?.Cart.data)
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState();
  const [data, setData] = useState({
    name: '',
    surname: '',
    user_phone: '',
    note: '',
    address: '',
  })

  const getAddress = async () => {
    try {
      const res = await AxiosUser("/address");
      setAddresses(res.data.address);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('lybas-user'));
    setData({
      name: user.username ? user.username.split(' ')[0] : '',
      surname: user.username ? user.username.split(' ')[1] : '',
      user_phone: user.user_phone,
      note: '',
      address: '',
    });
    getAddress();
  }, [])

  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleAddress = (address, index) => {
    setSelectedAddress(index)
    handleData({ target: { name: 'address', value: address.welayat + ',/' + address.address } })
  }

  const handleAddressAdded = async (bool) => {
    if (bool) {
      await getAddress()
    }
  }



  const calculateTotalPrice = (cart) => {
    return cart.reduce((sum, obj) => sum + obj.total_price, 0).toFixed(2);
  }

  const updateProductQuantity = async (product, quantity) => {
    if (product.stock >= quantity) {
      if (instantOrder) {
        setInstantOrderData({ ...instantOrderData, quantity })
      } else {
        if (quantity > 0) {
          try {
            const data = {
              id: product.productId,
              productsizeId: product.productsizeId,
              quantity
            }
            await AxiosUser('/to-my-cart', { method: 'POST', data })
            await dispatch(fetchDataCart());
          } catch (error) {
            console.log(error);
          }
        } else {
          try {
            await AxiosUser('/delete/not-ordered/' + product.orderproductId, { method: 'POST' })
            await dispatch(fetchDataCart());
          } catch (error) {
            console.log(error);
          }
        }
      }
    } else {
      toast.warning(t('outStock'), { position: 'bottom-left', autoClose: 2000 })
    }
  }

  const sendData = async () => {
    console.log(data);
    if (data.user_phone && data.address && data.name && data.surname) {
      if (instantOrder) {
        const newData = {
          id: instantOrderData.id,
          productsizeId: instantOrderData.size.id,
          quantity: instantOrderData.quantity,
          address: data.address,
          user_phone: data.user_phone,
          name: data.name,
          surname: data.surname
        }
        try {
          const res = await AxiosUser("/my-orders/instant-order", { method: 'POST', data: newData });
          if (res.status === 201) {
            toast.success(t('thankYouOrder'), { position: 'bottom-right', autoClose: 2000 })
            localStorage.setItem('instantProduct', '')
            navigate('/')
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          const res = await AxiosUser("/my-orders/add", { method: 'POST', data });
          if (res.status === 200) {
            toast.success(t('thankYouOrder'), { position: 'bottom-right', autoClose: 2000 })
            dispatch(fetchDataCart())
            navigate('/')
          }
        } catch (error) {
          console.log(error)
        }
      }
    } else {
      toast.warning(t('fillTheGaps'), { position: 'bottom-right', autoClose: 2000 });
    }
  }

  return (
    <>
      <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <Breadcrumb page1={{ text: 'checkout', link: '/checkout' }} />
        <h1 className="text-2xl lg:text-3xl font-bold tracking-tighter mb-3">{t('checkout')}</h1>
        <p className="text-lybas-gray tracking-tighter lg:mb-7">{(cartData?.length > 1 ? t('thereAre') : t('thereIs'))} {instantOrder ? 1 : cartData?.length} {cartData?.length > 1 ? t('productsInYourCart') : t('productInYourCart')}</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-7">
          <div className="order-2 lg:order-none">
            <h3 className="text-xl lg:text-2xl font-bold mb-5">{t('billingDetails')}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-7 mb-7'>
              <input type="text" placeholder={t('firstName') + '*'} name='name' value={data.name} onChange={handleData} className="text-lybas-gray rounded-lg tracking-tighter outline-none p-3 border focus:border-lybas-blue" />
              <input type="text" placeholder={t('lastName') + '*'} name='surname' value={data.surname} onChange={handleData} className="text-lybas-gray rounded-lg tracking-tighter outline-none p-3 border focus:border-lybas-blue" />
              <input type="text" placeholder={t('phoneNumber') + '*'} name='user_phone' value={data.user_phone} onChange={handleData} className="text-lybas-gray rounded-lg tracking-tighter outline-none p-3 border focus:border-lybas-blue" />
              <input type="text" placeholder={t('note')} name='note' value={data.note} onChange={handleData} className="text-lybas-gray rounded-lg tracking-tighter outline-none p-3 border focus:border-lybas-blue" />
            </div>
            <div className='order_addresses flex flex-wrap w-full h-[200px] overflow-auto border-2 border-lybas-light-gray p-2 rounded-lg'>
              {/* <textarea name="" id="" rows="5" disabled placeholder={t('yourAddress')+'*'} className="resize-none text-lybas-gray rounded-lg tracking-tighter outline-none p-3 border focus:border-lybas-blue"></textarea> */}
              {
                addresses?.length > 0 ? addresses.map((address, index) => (
                  <button key={index} onClick={() => handleAddress(address, index)} className='text-left mr-3 mb-3 flex h-fit'>
                    <AccountOneAddress active={index === selectedAddress} key={index} className={'w-[250px] cursor-pointer'} data={data} setData={setData} address={address} action={false} />
                  </button>
                )) :
                  <span></span>
              }
            </div>
            <button disabled={addresses?.length > 3} onClick={() => setAddAddressPopupOpen(true)} className={"text-white rounded-lg py-2 px-10 mt-5 mb-10 " + (addresses?.length > 3 ? 'bg-gray-400' : 'bg-lybas-blue')}>{t('addAddress')}</button>
            <div className='orderLaw' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(t('deliveryAndPaymentBody')) }}></div>
          </div>
          <div className="order-1 lg:order-none mb-5 lg:mb-0">
            <h3 className="text-xl lg:text-2xl font-bold mb-5">{t('yourOrder')}</h3>
            {/* Cart's products card */}
            <div className="shadow-lybas-1 rounded-lg">
              <div className="p-5 bg-lybas-light-gray grid grid-cols-4 gap-1">
                <h4 className='col-span-2'>{t('products')}</h4>
                <h4 className='hidden lg:block'>{t('quantity')}</h4>
                <h4 className='text-end hidden lg:block'>{t('subtotal')}</h4>
              </div>
              <div className="">
                {/* One cart product */}
                {
                  cartData?.length > 0 && !instantOrder && cartData.map((product, index) => (
                    <div key={index} className="grid grid-cols-4 gap-1 p-5 border-b border-b-lybas-light-gray">
                      <div className="col-span-2 flex">
                        <div className="">
                          <img src={ip + '/' + product.image} alt="" className='min-h-12 min-w-12 max-h-12 max-w-12 rounded mr-4' />
                        </div>
                        <div className="">
                          <h4 className="font-semibold mb-1">{product['name_' + lang]}</h4>
                          <p className="text-sm text-lybas-gray">{product.material['name_' + lang]} {product.size} {product.price.toFixed(2)} TMT X {product.quantity}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end col-span-2 lg:col-span-1">
                        <div className="buttons shadow-lybas-1 h-[32px] flex items-center rounded-lg mb-1">
                          <button onClick={() => updateProductQuantity(product, product.quantity - 1)} className='h-full px-[8px] group border-r border-r-lybas-light-gray'>
                            <svg className='fill-lybas-gray group-hover:fill-lybas-blue' width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0.666748 1.66659V0.333252H15.3334V1.66659H0.666748Z" />
                            </svg>
                          </button>
                          <span className='px-[20px] text-semibold'>{product.quantity}</span>
                          <button onClick={() => updateProductQuantity(product, product.quantity + 1)} className='h-full px-[8px] group border-l border-l-lybas-light-gray'>
                            <svg className='fill-lybas-gray group-hover:fill-lybas-blue' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.23793 6.76199H0.666504V5.23818H5.23793V0.666748H6.76174V5.23818H11.3332V6.76199H6.76174V11.3334H5.23793V6.76199Z" />
                            </svg>
                          </button>
                        </div>
                        <button onClick={() => updateProductQuantity(product, 0)} className='flex text-lybas-blue font-semibold tracking-tighter'>{t('delete')}</button>
                      </div>
                      <p className="text-end font-semibold col-span-4 lg:col-span-1">{product.total_price.toFixed(2)} {t('tmt')}</p>
                    </div>
                  ))
                }
                {
                  instantOrder &&
                  <div className="grid grid-cols-4 gap-1 p-5 border-b border-b-lybas-light-gray">
                    <div className="col-span-2 flex">
                      <img src={ip + '/' + instantOrderData?.data?.images[0]?.image} alt="" className='min-h-12 min-w-12 max-h-12 max-w-12 rounded mr-4' />
                      <div className="">
                        <h4 className="font-semibold mb-1">{instantOrderData?.data['name_' + lang]}</h4>
                        <p className="text-sm text-lybas-gray">{instantOrderData?.data?.material['name_' + lang]} {instantOrderData?.size?.size?.size} {instantOrderData?.data?.price.toFixed(2)} TMT X {instantOrder.quantity}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end col-span-2 lg:col-span-1">
                      <div className="buttons shadow-lybas-1 h-[32px] flex items-center rounded-lg mb-1">
                        <button onClick={() => updateProductQuantity(instantOrderData, instantOrderData.quantity - 1)} className='h-full px-[8px] group border-r border-r-lybas-light-gray'>
                          <svg className='fill-lybas-gray group-hover:fill-lybas-blue' width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.666748 1.66659V0.333252H15.3334V1.66659H0.666748Z" />
                          </svg>
                        </button>
                        <span className='px-[20px] text-semibold'>{instantOrderData.quantity}</span>
                        <button onClick={() => updateProductQuantity(instantOrderData, instantOrderData.quantity + 1)} className='h-full px-[8px] group border-l border-l-lybas-light-gray'>
                          <svg className='fill-lybas-gray group-hover:fill-lybas-blue' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.23793 6.76199H0.666504V5.23818H5.23793V0.666748H6.76174V5.23818H11.3332V6.76199H6.76174V11.3334H5.23793V6.76199Z" />
                          </svg>
                        </button>
                      </div>
                      <button onClick={() => updateProductQuantity(instantOrderData, 0)} className='flex text-lybas-blue font-semibold tracking-tighter'>{t('delete')}</button>
                    </div>
                    <p className="text-end font-semibold col-span-4 lg:col-span-1">{(instantOrderData.quantity * instantOrderData?.data?.price).toFixed(2)} {t('tmt')}</p>
                  </div>
                }
              </div>
              <div className="p-5 flex justify-between items-center">
                <h3 className="">{t('totalPrice')}</h3>
                <p className="font-semibold">{instantOrder ? (instantOrderData.quantity * instantOrderData?.data?.price).toFixed(2) : calculateTotalPrice(cartData)} TMT</p>
              </div>
            </div>
            <button type="submit" onClick={sendData} className='lybas-blue-button mt-5 fixed bottom-2 left-0 lg:static z-[11]'>{t('checkout')}</button>
          </div>
          <div>
          </div>
        </div>
      </div>
      <ToastContainer />
      <AddAddressPopup setAddedAddress={handleAddressAdded} open={addAddressPopupOpen} setOpen={setAddAddressPopupOpen} />
    </>
  );
}

export default Checkout;