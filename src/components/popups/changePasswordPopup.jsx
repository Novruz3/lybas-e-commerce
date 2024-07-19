import { Fragment, useRef, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { t } from 'i18next';
import axios from 'axios';
import ip from '../../common/Config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function ChangePasswordPopup({ open, setOpen, phone_number, isSeller }) {
  const cancelButtonRef = useRef(null);
  const [veri, setVeri] = useState('');
  const [errorText, setErrorText] = useState('');
  const navigate = useNavigate();
  const [verification, setVerification] = useState()
  const [passwordOpen, setPasswordOpen] = useState({
    pass1: false,
    pass2: false
  })
  const [data2, setData2] = useState({
    password: '',
    password_confirm: '',
    user_checked_phone: '',
  })
  const sendData = async (e) => {
    e.preventDefault();
    const data = { ...data2, user_checked_phone: phone_number.user_phone }
    try {
      if(isSeller === 'user'){
        var res = await axios.patch(ip + '/users/forgot-password', data);
      }else if(isSeller === 'seller'){
        var res = await axios.patch(ip + '/seller/account/forgot-password', data);
      }
      if (res.status === 200) {
        if(isSeller === 'user'){
          localStorage.setItem('lybas-user-token', res.data.token)
          localStorage.setItem('lybas-user', JSON.stringify(res.data.data.user))
          setErrorText('');
          toast.success(t('successRegister'), { position: 'bottom-right', autoClose: 1000 });
          setOpen(false);
          setInterval(()=>{
            window.location.reload();
          },1200)
        }else{
          localStorage.setItem('lybas-seller-token', res.data.token);
          localStorage.setItem('lybas-seller', JSON.stringify(res.data.data.seller));
          navigate('/sellerProfile')
        }
      }
    } catch (error) {
      setErrorText(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-[15]" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-10 py-7">
                  <div className="">
                    <div className="mt-3 text-center">
                      <Dialog.Title
                        as="h3"
                        className="text-2xl font-semibold leading-6 text-gray-900 mb-8 flex justify-between items-center"
                      >
                        {t('changePassword')}
                        <svg
                          onClick={() => {
                            setOpen(false);
                          }}
                          className="cursor-pointer"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
                            fill="#0E1217"
                          />
                        </svg>
                      </Dialog.Title>
                      <form onSubmit={sendData}>
                        <div className="inputs py-3">
                          <span className="text-left text-lybas-gray block w-full mb-3">{t('password')}</span>
                          <div className='input flex'>
                            <input
                              type={passwordOpen.pass1 ? 'text' : 'password'}
                              value={data2.password}
                              onChange={(e) => setData2({ ...data2, password: e.target.value })}
                              className="outline-none mr-5 w-full"
                              pattern=".{6,}"
                              onInvalid={(e) => e.target.setCustomValidity(t('minimum6Letter'))}
                              onInput={(e) => e.target.setCustomValidity('')}
                              required
                              placeholder={t('password') + '*'}
                            />
                            {
                              passwordOpen?.pass1 ?
                                <Visibility sx={{ color: 'gray' }} className='cursor-pointer' onClick={() => { setPasswordOpen({ ...passwordOpen, pass1: !passwordOpen.pass1 }) }} /> : <VisibilityOff sx={{ color: 'gray' }} className='cursor-pointer' onClick={() => { setPasswordOpen({ ...passwordOpen, pass1: !passwordOpen.pass1 }) }} />
                            }
                          </div>
                        </div>
                        <div className="inputs py-3">
                          <span className="text-left text-lybas-gray block w-full mb-3">{t('confirmPassword')}</span>
                          <div className='input flex'>
                            <input
                              type={passwordOpen.pass2 ? 'text' : 'password'}
                              value={data2.password_confirm}
                              onChange={(e) => setData2({ ...data2, password_confirm: e.target.value })}
                              className="outline-none mr-5 w-full"
                              pattern=".{6,}"
                              onInvalid={(e) => e.target.setCustomValidity(t('minimum6Letter'))}
                              onInput={(e) => e.target.setCustomValidity('')}
                              required
                              placeholder={t('confirmPassword') + '*'}
                            />
                            {
                              passwordOpen?.pass2 ?
                                <Visibility sx={{ color: 'gray' }} className='cursor-pointer' onClick={() => { setPasswordOpen({ ...passwordOpen, pass2: !passwordOpen.pass2 }) }} /> : <VisibilityOff sx={{ color: 'gray' }} className='cursor-pointer' onClick={() => { setPasswordOpen({ ...passwordOpen, pass2: !passwordOpen.pass2 }) }} />
                            }
                          </div>
                        </div>
                        <div className="text-red-600">{errorText}</div>
                        <div className="pt-3 pb-7 grid grid-cols-2 gap-5">
                          <button
                            type="submit"
                            className="rounded-md bg-lybas-blue col-span-2 py-2 text-sm text-white hover:bg-blue-800"
                          // onClick={sendData}
                          >
                            {t('confirm')}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
