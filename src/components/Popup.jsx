import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { t } from 'i18next';
import { AxiosUser } from '../common/AxiosInstance';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Popup({ open, setOpen,size,data }) {
  // const [open, setOpen] = useState(true)
  const [email, setEmail] = useState('');
  const [full, setFull] = useState(false);
  const [loading, setLoading] = useState(false);

  const cancelButtonRef = useRef(null)

  const sendEmail = async() => {
    if(full){
      try {
        await AxiosUser('/products/reminder',{method:"POST",data:{productsizeId:size.size.id,mail:email,sellerId:data.sellerId,size:size.size.size.size}})
        toast.success(t('successSended'), { position: 'bottom-right', autoClose: 2000 });
        setOpen(false);
        setFull(false);
      } catch (error) {
        console.log(error);
      }
    }
  }

  const checkEmail = (e) => {
    const str = e.target.value;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setFull(emailRegex.test(str));
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

        <div className="fixed inset-0 z-[12] w-screen overflow-y-auto">
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
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 sm:ml-4 sm:mt-0 text-left">
                      <div className='flex justify-between mb-5'>
                        <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                          {t('remindMeWhenInStock')}
                        </Dialog.Title>
                        <button onClick={()=>setOpen(false)}>
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="#0E1217" />
                          </svg>
                        </button>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500 mb-9">
                          {t('remindMeText')}
                        </p>
                        <input onChange={(e) => setEmail(e.target.value)} onKeyDown={checkEmail} type="email" className='w-full rounded-lg border-2 border-lybas-light-gray p-2 mb-2 outline-none text-lybas-gray' placeholder={t('remindMePlaceholder')} />
                        <input disabled className='w-full rounded-lg border-2 border-lybas-light-gray p-2 outline-none text-lybas-gray' placeholder={t('size')} value={size?.size?.size?.size} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 w-full sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    disabled={loading}
                    className={"inline-flex w-full justify-center rounded-md px-20 py-2 text-sm text-white shadow-sm sm:ml-3 mb-5 " + (full ? ' bg-lybas-blue hover:bg-blue-500' : 'bg-gray-300')}
                    onClick={sendEmail}
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
  )
}
