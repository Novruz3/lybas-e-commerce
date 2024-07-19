import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { t } from 'i18next';
import { AxiosCustom } from '../../common/AxiosInstance';
import axios from 'axios';
import ip from '../../common/Config';
import { useNavigate } from 'react-router-dom';
import { Valid } from '../../common/Valid';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function DressmakerPopup({ open, setOpen, waitFunc, setWritePhone, setIsSeller }) {
  const cancelButtonRef = useRef(null)
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [passType, setPassType] = useState('password');

  const [data, setData] = useState({
    phone_number: '+993',
    password: ''
  })

  const [dataUp, setDataUp] = useState({
    phone_number: '+993',
    name: '',
    name1: '',
    surname: '',
  })

  const handleData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  }
  const handleDataUp = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDataUp({ ...dataUp, [name]: value });
  }

  const sendData = async (e) => {
    e.preventDefault();
    if (Valid((isSignIn ? data : dataUp))) {
      try {
        var res;
        if (isSignIn) {
          res = await axios.post(ip + '/seller/login', data);
        } else {
          res = await axios.post(ip + '/seller/account/new-account', { dataUp: { name: dataUp.name, mail: dataUp.phone_number, dataUp: { name: dataUp.name1, surname: dataUp.surname } } });
        }
        if (res.status === 200 && isSignIn) {
          localStorage.setItem('lybas-seller-token', res.data.token);
          localStorage.setItem('lybas-seller', JSON.stringify(res.data.data.seller));
          navigate('/sellerProfile')
        } else {
          waitFunc(true);
          setOpen(false);
        }
      } catch (error) {
        console.log(error)
        setErrorText(error?.response?.data?.message);
      }
    } else {
      setErrorText(t('fillTheGaps'))
    }
  }

  const forgotPassword = () => {
    setIsSeller('seller')
    setOpen(false);
    setWritePhone(true)
  }

  const handleSignIn = (bool) => {
    setIsSignIn(bool);
    setErrorText('')
    setData({
      phone_number: '+993',
      password: ''
    })

    setDataUp({
      phone_number: '+993',
      name: '',
      name1: '',
      surname: '',
    })
  }

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
                <div className="bg-white px-10 pt-7">
                  <div className="">
                    <div className="mt-3 text-center">
                      <Dialog.Title as="h3" className="text-2xl font-semibold leading-6 text-gray-900 mb-8 flex justify-between items-center">
                        {t('dressmaker')}
                        <svg onClick={() => { setOpen(false) }} className='cursor-pointer' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="#0E1217" />
                        </svg>
                      </Dialog.Title>
                      <div className="buttons flex">
                        <button onClick={() => handleSignIn(false)} className={'w-1/2 border-2 py-2 rounded-lg font-bold ' + (!isSignIn && 'border-lybas-blue text-lybas-blue')}>{t('signUp')}</button>
                        <button onClick={() => handleSignIn(true)} className={'w-1/2 border-2 py-2 rounded-lg font-bold ' + (isSignIn && 'border-lybas-blue text-lybas-blue')}>{t('signIn')}</button>
                      </div>
                      <form onSubmit={sendData}>
                        {
                          !isSignIn ?
                            <div className="inputs py-3">
                              <input type="text" name='name1' value={dataUp.name1} onChange={handleDataUp} required className='input w-full mb-3' placeholder={t('firstName')} />
                              <input type="text" name='surname' value={dataUp.surname} onChange={handleDataUp} required className='input w-full mb-3' placeholder={t('lastName')} />
                              <input type="text" name='name' value={dataUp.name} onChange={handleDataUp} required className='input w-full mb-3' placeholder={t('bussinessName')} />
                              <input type="text" name='phone_number' value={dataUp.phone_number} pattern="\+9936\d{7}" required onChange={handleDataUp} className='input w-full' placeholder={t('phoneNumber')} />
                            </div> :
                            <div className="inputs py-3">
                              <input type="tel" name='phone_number' value={data.phone_number} onChange={handleData} pattern="\+9936\d{7}" required className='input w-full mb-3' placeholder={'+9936'} />
                              <label className="input cursor-pointer flex mb-3" htmlFor="password">
                                <input type={passType} name='password' value={data.password} pattern=".{6,}" onInvalid={(e) => e.target.setCustomValidity(t('minimum6Letter'))} onInput={(e) => e.target.setCustomValidity('')} onChange={handleData} required className='w-full outline-none' placeholder={t('password')} />
                                {/* <input type={passConType} name='passwordConfirm' pattern=".{6,}" onInvalid={(e) => e.target.setCustomValidity(t('minimum6Letter'))} onInput={(e) => e.target.setCustomValidity('')} value={data.passwordConfirm} required onChange={handleData} className="w-full outline-none" placeholder={t('confirmPassword') + '*'} /> */}
                                <div onClick={() => setPassType(passType === 'text' ? 'password' : 'text')}>
                                  {
                                    passType === 'text' ? <Visibility /> : <VisibilityOff />
                                  }
                                </div>
                              </label>
                            </div>
                        }
                        {
                          isSignIn &&
                          <div className='flex justify-between'>
                            <div className='flex items-center' onClick={() => { setCheckbox(!checkbox) }}>
                              {
                                !checkbox ?
                                  <svg className='cursor-pointer' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.75" y="0.75" width="28.5" height="28.5" rx="7.25" fill="white" />
                                    <rect x="0.75" y="0.75" width="28.5" height="28.5" rx="7.25" stroke="#F7F7F7" strokeWidth="1.5" />
                                  </svg> :
                                  <svg className='cursor-pointer' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="29" height="29" rx="7.5" fill="#1A54EB" />
                                    <path d="M12.5516 21.0001L6.85156 15.3001L8.27656 13.8751L12.5516 18.1501L21.7266 8.9751L23.1516 10.4001L12.5516 21.0001Z" fill="white" />
                                    <rect x="0.5" y="0.5" width="29" height="29" rx="7.5" stroke="#1A54EB" />
                                  </svg>
                              }
                              <span className='ml-3 text-sm text-lybas-gray'>{t('rememberMe')}</span>
                            </div>
                            <span className='text-lybas-blue text-sm underline underline-offset-1 cursor-pointer' onClick={forgotPassword}>{t('forgotYourPassword')}</span>
                          </div>
                        }
                        <div className='text-red-600'>{errorText}</div>
                        <div className="pt-3 pb-7 grid grid-cols-2 gap-5">
                          <button
                            // onClick={sendData}
                            type="submit"
                            className="rounded-md bg-lybas-blue col-span-2 py-2 text-sm text-white hover:bg-blue-800"
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
  )
}
