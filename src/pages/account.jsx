import React, { useContext, useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { AxiosUser } from '../common/AxiosInstance';
import { t } from 'i18next';
import { AppContext } from '../App'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Visibility, VisibilityOff } from '@mui/icons-material';

// component
import AddAddressPopup from '../components/popups/addAddressPopup';
import LogoutPopup from '../components/LogoutPopup';

// Mui components for accordion
import { styled } from '@mui/material/styles';
import { AccordionDetails, AccordionSummary } from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import FeedbackPopup from '../components/popups/feedbackPopup';
import Comment from '../components/Comment';
import AccountOneAddress from '../components/AccountOneAddress';
import MobileSlide from '../components/MobileSlide';
import { useLocation, useNavigate } from 'react-router-dom';
import ip from '../common/Config';


function Account() {
  // Accordion style
  const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '&:before': {
      display: 'none'
    }
  }));
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get('type');
  const { lang } = useContext(AppContext)
  const [contentTitle, setContentTitle] = useState(type ? type : 'myAccount'); //myAccount
  const [editAccount, setEditAccount] = useState(false);
  const [passType, setPassType] = useState('password');
  const [feedbackPopupOpen, setFeedbackPopupOpen] = useState(false);
  const [mobileSlideOpen, setMobileSlideOpen] = useState(false);
  const [imageUpload, setImageUpload] = useState();
  const [accountData, setAccountData] = useState({
    name: '',
    surname: '',
    password: '',
    user_phone: '',
    image: '',
  });
  const [addresses, setAddresses] = useState([]);
  const [myOrders, setMyOrders] = useState([]);
  const [addAddressOpen, setAddAddressOpen] = useState(false);
  const [logoutOpen, setLogoutOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(0);
  const [productId, setProductId] = useState('');
  const [orderproductId, setOrderProductId] = useState('')
  const [myFeedback, setMyFeedback] = useState([]);

  const saveProfile = async () => {
    const data = {
      username: accountData.name + ' ' + accountData.surname,
      user_phone: accountData.user_phone,
      password: accountData.password,
    }
    try {
      const res = await AxiosUser('/update-me', { method: "PATCH", data })
      if (res.status = 200) {
        if (accountData.image) {
          const formData = new FormData();
          formData.append("image", accountData.image);
          await AxiosUser('/upload-image', { method: "POST", data: formData }, true)
        }
        const getUserBack = await AxiosUser('/get-me');
        localStorage.setItem('lybas-user', JSON.stringify(getUserBack.data))
        setEditAccount(false);
      }
    } catch (error) {
      console.log(error);
    }

  };

  const handleImageAccount = (e) => {
    const files = e.target.files;
    setImageUpload(
      URL.createObjectURL(files[0]),
    )
    setAccountData({ ...accountData, image: files[0] })
  }

  const handleAccardion = (index) => {
    if (index === openAccordion) {
      setOpenAccordion(-1);
    } else {
      setOpenAccordion(index);
    }
  }

  const deleteOrderedProduct = async (id) => {
    try {
      const res = await AxiosUser('/my-orders/delete-product?id=' + id, { method: "POST" });
      if (res.status === 200) {
        const res2 = await AxiosUser("/my-orders");
        setMyOrders(res2?.data)
      }
    } catch (error) {
      console.log(error);
    }
  }

  const renderContent = (content) => {
    if (content === 'myAccount') {
      return (
        <div className="account_card_content col-span-2 p-7 flex flex-col justify-between">
          <div>
            <div className="account_card_content_title text-xl font-semibold mb-10">{t('profile')}</div>
            {/* my account card form */}
            <div className="account_card_content_form-account grid grid-cols-2 gap-5 md:pr-20">
              <div className="account_card_content_form-account_image flex">
                {
                  imageUpload &&
                  <img className="h-[55px] w-[55px] rounded-full object-cover mr-5" src={imageUpload} alt="1" />

                }
                {
                  !imageUpload && accountData.image &&
                  <img className="h-[55px] w-[55px] rounded-full object-cover mr-5" src={accountData.image} alt="2" />
                }
                {
                  !accountData.image && !imageUpload &&
                  <svg className="h-[55px] w-[55px] rounded-full object-cover mr-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C10.625 12 9.44792 11.5104 8.46875 10.5312C7.48958 9.55208 7 8.375 7 7C7 5.625 7.48958 4.44792 8.46875 3.46875C9.44792 2.48958 10.625 2 12 2C13.375 2 14.5521 2.48958 15.5312 3.46875C16.5104 4.44792 17 5.625 17 7C17 8.375 16.5104 9.55208 15.5312 10.5312C14.5521 11.5104 13.375 12 12 12ZM2 22V18.5C2 17.7917 2.18229 17.1406 2.54688 16.5469C2.91146 15.9531 3.39583 15.5 4 15.1875C5.29167 14.5417 6.60417 14.0573 7.9375 13.7344C9.27083 13.4115 10.625 13.25 12 13.25C13.375 13.25 14.7292 13.4115 16.0625 13.7344C17.3958 14.0573 18.7083 14.5417 20 15.1875C20.6042 15.5 21.0885 15.9531 21.4531 16.5469C21.8177 17.1406 22 17.7917 22 18.5V22H2Z" fill="#64748B" />
                  </svg>
                }
                <div className="image_actions flex flex-col justify-center">
                  {
                    editAccount && <>
                      <div className="image_actions_title font-semibold">{t('editPhoto')}</div>
                      <div className="image_actoins_buttons flex">
                        <label
                          htmlFor={editAccount ? 'upload-image' : ''}
                          className={'text-sm text-semibold text-lybas-blue mr-3 ' + (editAccount && 'cursor-pointer')}
                        >
                          {t('upload')}
                        </label>
                        <input onChange={handleImageAccount} className="hidden" type="file" id="upload-image" />
                        <button disabled={!editAccount} className="text-sm text-semibold">
                          {t('delete')}
                        </button>
                      </div>
                    </>
                  }
                </div>
              </div>
              <div className="free"></div>
              <input type="text" className="input" onChange={(e) => setAccountData({ ...accountData, name: e.target.value })} placeholder={t('nameSimple')} value={accountData.name} disabled={!editAccount} />
              <input type="text" className="input" onChange={(e) => setAccountData({ ...accountData, surname: e.target.value })} placeholder={t('surname')} value={accountData.surname} disabled={!editAccount} />
              <input type="text" className="input" value={accountData.user_phone} disabled={true} />
              <label className="input cursor-pointer flex" htmlFor="password">
                <input type={passType} placeholder={t('password')} onChange={(e) => setAccountData({ ...accountData, password: e.target.value })} id="password" className="w-full outline-none" value={accountData.password} disabled={!editAccount} />
                {editAccount && (
                  <button onClick={() => setPassType(passType === 'text' ? 'password' : 'text')}>
                    {
                      passType === 'text' ? <Visibility /> : <VisibilityOff />
                    }
                  </button>
                )}
              </label>
            </div>
          </div>
          {/* my account card edit button */}
          {editAccount ? (
            <span className="mt-5">
              <button
                onClick={() => setEditAccount(false)}
                className="account_card_content_button px-20 py-2 text-lybas-blue shadow-lybas-1 rounded-lg hover:bg-lybas-light-gray mr-7"
              >
                {t('cancel')}
              </button>
              <button
                onClick={saveProfile}
                className="account_card_content_button px-20 py-2 text-white bg-lybas-blue rounded-lg hover:opacity-75"
              >
                {t('save')}
              </button>
            </span>
          ) : (
            <span className="mt-5">
              <button
                onClick={() => setEditAccount(true)}
                className="account_card_content_button px-20 py-2 text-lybas-blue border border-lybas-light-gray rounded-lg hover:bg-lybas-light-gray"
              >
                {t('edit')}
              </button>
            </span>
          )}
        </div>
      );
    } else if (content === 'myAddresses') {
      return (
        <div className="account_card_content col-span-2 p-7 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-10">
              <div className="account_card_content_title text-xl font-semibold">{t(contentTitle)}</div>
              <div className="account_card_content_number text-lybas-gray text-sm">{addresses.length}/4</div>
            </div>
            {/* my account card form */}
            <div className="account_card_content_cards grid grid-cols-1 sm:grid-cols-2 gap-5 md:pr-20">
              {addresses.map((address, index) => (
                <AccountOneAddress key={index} address={address} action={true} setAddresses={setAddresses} addresses={addresses} />
              ))}
            </div>
          </div>
          {/* my address card add button */}
          <span>
            <button
              onClick={() => setAddAddressOpen(true)}
              disabled={addresses.length > 3}
              className={"account_card_content_button w-full sm:w-auto px-20 py-2 text-white rounded-lg mt-5 hover:opacity-75 " + (addresses.length > 3 ? 'bg-lybas-gray' : 'bg-lybas-blue')}
            >
              {t('add')}
            </button>
          </span>

        </div>
      );
    } else if (content === 'orders') {
      return (
        <div className="account_card_order col-span-2 md:w-full">
          <div className="account_card_order_header hidden md:grid grid-cols-5 gap-4 py-4 px-10 bg-gray-200">
            <div className="font-bold">{t('statusAccount')}</div>
            <div className="font-bold">{t('orderNumber')}</div>
            <div className="font-bold text-right">{t('date')}</div>
            <div className="font-bold text-center">{t('totalPrice')}</div>
            <div className="font-bold text-right">{t('more')}</div>
          </div>
          <div className="account_card_order_orders p-5">
            <div className="w-full account_card_order_list rounded-lg border mb-5">
              {
                myOrders?.length > 0 && myOrders.map((order, index) => {
                  console.log(order);
                  return (
                    <div key={index}>
                      <div className="account_card_order_list_top grid grid-cols-3 md:grid-cols-5 gap-4 px-5 py-2 flex items-center border-b">
                        {
                          order.status === 'waiting' &&
                          <div className="account_card_order_list_top_col text-left text-orange-600">{t(order.status)}</div>
                        }
                        {
                          order.status === 'accepted' &&
                          <div className="account_card_order_list_top_col text-left text-blue-600">{t(order.status)}</div>
                        }
                        {
                          order.status === 'onTheWay' &&
                          <div className="account_card_order_list_top_col text-left text-green-600">{t(order.status)}</div>
                        }
                        {
                          order.status === 'cancelled' &&
                          <div className="account_card_order_list_top_col text-left text-red-600">{t(order.status)}</div>
                        }
                        <div className="account_card_order_list_top_col text-left text-lybas-gray">{order.id.slice(0, 8)}</div>
                        <div className="account_card_order_list_top_col text-right text-lybas-gray">{order.createdAt.split('T')[0]} / {order.createdAt.split('T')[1].split('.')[0]}</div>
                        <div className="account_card_order_list_top_col text-center text-lybas-gray">{order.total_price}TMT</div>
                        <button onClick={() => handleAccardion(index)} className="account_card_order_list_top_col col-span-2 md:col-span-1 flex justify-end items-center">
                          <svg
                            className={"w-8 h-8 text-gray-400 mx-1 cursor-pointer p-2 box-size " + (openAccordion === index ? '-rotate-90' : 'rotate-90')}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"></path>
                          </svg>
                        </button>
                      </div>
                      <div className={"account_card_order_list_bottom overflow-hidden " + (openAccordion === index ? 'h-auto' : 'h-0')}>
                        {
                          order?.order_products.length > 0 && order?.order_products.map((product, index2) => (
                            <div key={index2} className="account_card_order_list_bottom_order grid grid-cols-12 md:grid-cols-5 gap-4 flex items-center px-5 py-3 border-b">
                              <div className="name-price-quantity col-span-6 md:col-span-2">
                                <div className="name font-semibold">{product?.product?.name_tm ? product.product['name_' + lang] : ''}</div>
                                <div className="price-quantity flex text-[12px] text-lybas-gray">
                                  <div className="material mr-2">{product?.material?.name_tm ? product.material['name_' + lang] : ''}</div>
                                  <div className="size mr-2">{product.size}</div>
                                  <div className="price">{product.price.toFixed(2)}{t('tmt')} X {product.quantity}</div>
                                </div>
                              </div>
                              <div className="quantity col-span-4 md:col-span-1 text-right font-semibold">{product.quantity} pcs</div>
                              <div className="price font-bold col-span-5 md:col-span-1 text-center">{product.total_price.toFixed(2)} {t('tmt')}</div>
                              <div className="space flex items-center justify-between col-span-7 md:col-span-1 text-right">
                                <button disabled={!(product.status === 'onTheWay' && !product.isCommented)} className={"text-white px-3 py-2 rounded-lg " + ((product.status === 'onTheWay' && !product.isCommented) ? 'bg-lybas-blue' : 'bg-gray-500')} onClick={() => (setProductId(product.productId), setOrderProductId(product.id), setFeedbackPopupOpen(true))}>
                                  {t('feedback')}
                                </button>
                                <button onClick={() => deleteOrderedProduct(product.id)}>
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="#FF3521" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  )
                }
                )
              }
            </div>
          </div>
        </div>
      );
    } else if (content === 'myFeedback') {
      return (
        <div className="account_card_feedback col-span-2 p-7 flex flex-col max-h-full">
          <div className="account_card_feedback_header text-xl font-bold mb-10">{t('myFeedback')}</div>
          <div className="account_card_feedback_feedbacks max-h-[60vh] md:max-h-[38vh] overflow-auto pr-3">
            {
              myFeedback?.length > 0 && myFeedback.map((feed, index) => (
                <Comment data={feed} key={index} />
              ))
            }
          </div>
        </div>
      );
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('lybas-user-token')

    if (token) {
      const user = JSON.parse(localStorage.getItem('lybas-user'));
      setAccountData({
        name: user.username ? user.username.split(' ')[0] : '',
        surname: user.username ? user.username.split(' ')[1] : '',
        user_phone: user.user_phone,
        image: user.image ? ip + '/' + user.image : '',
        password: '',
      })
    } else {
      navigate('/')
    }
  }, [])

  const getOrderData = async () => {
    try {
      const res = await AxiosUser("/my-orders");
      setMyOrders(res?.data)
    } catch (error) {
      console.log(error);
    }
  }
  const getMyFeedbackData = async () => {
    try {
      const res = await AxiosUser("/comments");
      setMyFeedback(res?.data?.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const getData = async () => {
      if (contentTitle === 'myAddresses' && !addresses.length) {
        try {
          const res = await AxiosUser("/address");
          setAddresses(res.data.address);
        } catch (error) {
          console.log(error);
        }
      } else if (contentTitle === 'orders' && !myOrders.length) {
        await getOrderData();
      } else if (contentTitle === 'myFeedback' && !myFeedback.length) {
        await getMyFeedbackData();
      }
    }
    getData();
  }, [contentTitle])

  return (
    <div className="account container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
      <Breadcrumb page1={{ text: 'profile', link: '/account' }} />

      <div className="account_title text-3xl font-bold mb-5 tracking-tighter">{t('myAccount')}</div>
      {/* my account card */}
      <div className="account_card md:min-h-[50vh] md:shadow-lybas-1 rounded-lg grid grid-cols-1 md:grid-cols-3">
        <div className="account_card_links md:bg-lybas-light-gray md:min-h-[50vh] md:p-7">
          <button
            onClick={() => (setContentTitle('myAccount'), setMobileSlideOpen(true))}
            className={'w-full text-left px-5 py-3 rounded-lg bg-gray-100 md:bg-none mb-3 text-lybas-gray text-lg flex justify-between items-center ' + (contentTitle === 'myAccount' ? 'active' : '')}
          >
            {t('profile')}
            <svg className='block md:hidden' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.166 10.0001L8.08493 16.6667L6.66602 15.1112L11.3282 10.0001L6.66602 4.88897L8.08493 3.33341L14.166 10.0001Z" fill="#0E1217" />
            </svg>
          </button>
          <button
            onClick={() => (setContentTitle('myAddresses'), setMobileSlideOpen(true))}
            className={'w-full text-left px-5 py-3 rounded-lg bg-gray-100 md:bg-none mb-3 text-lybas-gray text-lg flex justify-between items-center ' + (contentTitle === 'myAddresses' ? 'active' : '')}
          >
            {t('myAddresses')}
            <svg className='block md:hidden' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.166 10.0001L8.08493 16.6667L6.66602 15.1112L11.3282 10.0001L6.66602 4.88897L8.08493 3.33341L14.166 10.0001Z" fill="#0E1217" />
            </svg>
          </button>
          <button
            onClick={() => (setContentTitle('orders'), setMobileSlideOpen(true))}
            className={'w-full text-left px-5 py-3 rounded-lg bg-gray-100 md:bg-none mb-3 text-lybas-gray text-lg flex justify-between items-center ' + (contentTitle === 'orders' ? 'active' : '')}
          >
            {t('orders')}
            <svg className='block md:hidden' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.166 10.0001L8.08493 16.6667L6.66602 15.1112L11.3282 10.0001L6.66602 4.88897L8.08493 3.33341L14.166 10.0001Z" fill="#0E1217" />
            </svg>
          </button>
          <button
            onClick={() => (setContentTitle('myFeedback'), setMobileSlideOpen(true))}
            className={'w-full text-left px-5 py-3 rounded-lg bg-gray-100 md:bg-none mb-3 text-lybas-gray text-lg flex justify-between items-center ' + (contentTitle === 'myFeedback' ? 'active' : '')}
          >
            {t('myFeedback')}
            <svg className='block md:hidden' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.166 10.0001L8.08493 16.6667L6.66602 15.1112L11.3282 10.0001L6.66602 4.88897L8.08493 3.33341L14.166 10.0001Z" fill="#0E1217" />
            </svg>
          </button>
          <div onClick={() => setLogoutOpen(true)} className="block bg-gray-100 md:bg-none mb-3 px-5 py-3 rounded-lg text-lybas-gray text-lg cursor-pointer flex justify-between items-center">
            {t('logout')}
            <svg className='block md:hidden' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.166 10.0001L8.08493 16.6667L6.66602 15.1112L11.3282 10.0001L6.66602 4.88897L8.08493 3.33341L14.166 10.0001Z" fill="#0E1217" />
            </svg>
          </div>
        </div>

        {/* Edit account data card */}
        <div className='w-full col-span-2 hidden md:block'>
          {renderContent(contentTitle)}
        </div>
        <MobileSlide open={mobileSlideOpen} setOpen={setMobileSlideOpen} title={contentTitle}>
          {renderContent(contentTitle)}
        </MobileSlide>
        <LogoutPopup open={logoutOpen} setOpen={setLogoutOpen} />
        <FeedbackPopup open={feedbackPopupOpen} setOpen={setFeedbackPopupOpen} productId={productId} orderproductId={orderproductId} getOrderData={getOrderData} />
        <AddAddressPopup open={addAddressOpen} setOpen={setAddAddressOpen} setAddresses={setAddresses} addresses={addresses} />
        <ToastContainer />
      </div>
    </div>
  );
}

export default Account;
