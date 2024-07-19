import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { t } from 'i18next';
import { AxiosUser } from '../../common/AxiosInstance';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function DeliveryAbroadPopup({ open, setOpen }) {

  const cancelButtonRef = useRef(null)
  const [isSignIn, setIsSignIn] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const [data, setData] = useState({
    address: '',
    link: '',
    note: '',
    mail: '',
  })

  const sendData = async () => {
    if (data.address && data.link && data.mail) {
      try {
        const res = await AxiosUser("/delivery", { method: "POST", data })
        if (res.status === 200) {
          toast.success(t('mailSended'), { position: 'bottom-right', autoClose: 2000 });
          setData({
            address: '',
            link: '',
            note: '',
            mail: '',
          })
          setOpen(false);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.warning(t('fillTheGaps'), { position: 'bottom-right', autoClose: 2000 });
    }
  }

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  return (
    <>
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
                        <Dialog.Title as="h3" className="text-2xl font-semibold leading-6 text-gray-900 mb-8 flex justify-between items-center">
                          {t("deliveryAbroad")}
                          <svg onClick={() => { setOpen(false) }} className='cursor-pointer' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="#0E1217" />
                          </svg>
                        </Dialog.Title>
                        <div className="inputs py-3">
                          <span className='text-left text-lybas-gray block w-full mb-3'>{t("deliveryAbroadDefinition")}</span>
                          <input type="text" name='mail' value={data.mail} onChange={handleInput} className='input w-full mb-3' placeholder={t('email') + "*"} />
                          <input type="text" name='link' value={data.link} onChange={handleInput} className='input w-full mb-3' placeholder={t('URLlink') + "*"} />
                          <input type="text" name='address' value={data.address} onChange={handleInput} className='input w-full mb-3' placeholder={t('yourAddress') + "*"} />
                          <input type="text" name='note' value={data.note} onChange={handleInput} className='input w-full' placeholder={t('note')} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-10 pt-3 pb-7 grid grid-cols-2 gap-5">
                    <button
                      type="button"
                      onClick={sendData}
                      className="rounded-md col-span-2 py-2 text-sm text-white hover:bg-blue-800 bg-lybas-blue"
                    >
                      {t('send')}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      {/* <ToastContainer /> */}
    </>
  )
}
