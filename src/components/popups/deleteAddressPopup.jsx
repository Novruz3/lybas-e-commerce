import { Fragment, useEffect, useState, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { t } from 'i18next';
import { AxiosUser } from '../../common/AxiosInstance';

export default function DeleteAddressPopup({ open, setOpen, address, setAddresses,addresses }) {

  const cancelButtonRef = useRef(null)
  const [loading, setLoading] = useState(false);

  const sendData = async () => {
    setLoading(true);
    const help = []
    for(let i = 0; i<addresses.length; i++){
      if(addresses[i].id !== address.id){
        help.push(addresses[i])
      }
    }
    try {
      const res = await AxiosUser("/address/delete/"+address.id,{method:'POST'})
      if(res.status === 200){
        setAddresses([...help]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setOpen(false);
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
                    <div className="text-center">
                      <Dialog.Title as="h3" className="text-2xl font-semibold leading-6 text-gray-900 mb-10 flex justify-between items-center">
                        {t('doYouWantToDelete')}
                        <svg onClick={() => { setOpen(false) }} className='cursor-pointer' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="#0E1217" />
                        </svg>
                      </Dialog.Title>
                    </div>
                  </div>
                </div>
                <div className="px-10 pb-7">
                  <button
                    type="button"
                    className={"w-full rounded-md px-20 py-2 text-sm text-red-500 shadow-sm border border-red-500"}
                    onClick={sendData}
                    disabled={loading}
                  >
                    {t('delete')}
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
