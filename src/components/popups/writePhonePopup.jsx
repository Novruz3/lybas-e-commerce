import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { t } from 'i18next';
import axios from 'axios';
import ip from '../../common/Config';

export default function WritePhonePopup({ open, setOpen, setOpenVeri,setData2,isSeller }) {
  const cancelButtonRef = useRef(null)
  const [errorText, setErrorText] = useState('');
  const [data, setData] = useState({
    user_phone: '+993',
  })

  const sendData = async (e) => {
    e.preventDefault();
    if (data.user_phone.length > 4) {
      try {
        
        if(isSeller === 'user'){
          var res = await axios.patch(ip + '/users/forgot-password', { user_phone: data.user_phone });
        }else if(isSeller === 'seller'){
          var res = await axios.patch(ip + '/seller/account/forgot-password', { user_phone: data.user_phone });
        }
        if (res.status === 200) {
          setErrorText('')
          setData2(data);
          setOpen(false);
          setData({user_phone:'+9936'})
          setOpenVeri(true);
        }
      } catch (error) {
        console.log(error)
        setErrorText(error.response.data.message);
      }
    } else {
      setErrorText(t('fillTheGaps'))
    }
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
                <div className="bg-white px-10 py-7">
                  <div className="">
                    <div className="mt-3 text-center">
                      <Dialog.Title as="h3" className="text-lg sm:text-xl md:text-2xl font-semibold leading-6 text-gray-900 mb-8 flex justify-between items-center">
                        {t('writePhoneNumber')}
                        <div></div>
                        <svg onClick={() => { setOpen(false) }} className='cursor-pointer' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="#0E1217" />
                        </svg>
                      </Dialog.Title>
                      <div className="inputs py-3">
                        <form onSubmit={sendData}>
                          <input type="text" name='user_phone' value={data.user_phone} onChange={e=>setData({user_phone:e.target.value})} pattern="\+9936\d{7}" required className='input w-full mb-3' placeholder='+993' />

                          <div className='text-red-600'>{errorText}</div>
                          <div className="pt-3 pb-7 grid grid-cols-2 gap-5">
                            <button
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
                </div>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
