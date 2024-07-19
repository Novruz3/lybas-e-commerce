import { Fragment, useRef, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { t } from 'i18next';
import axios from 'axios';
import ip from '../../common/Config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function VerificationPopup({ open, setOpen }) {
  const cancelButtonRef = useRef(null);
  const [veri, setVeri] = useState('');
  const [errorText, setErrorText] = useState('');
  const [verification, setVerification] = useState({})

  const sendData = async () => {
    const data = JSON.parse(localStorage.getItem('verification-data'));
    const newData = { ...data, code: veri };
    newData.user_checked_phone = newData.user_phone;
    try {
      const res = await axios.post(ip + '/users/signup', newData);
      if (res.status === 201) {
        localStorage.setItem('lybas-user-token', res.data.token);
        localStorage.setItem('lybas-user', JSON.stringify(res.data.data.user));
        localStorage.setItem('verification-data', '{}');
        toast.success(t('successRegister'), { position: 'bottom-right', autoClose: 1000 });
        setInterval(() => {
          window.location.reload();
        }, 1200)
      }
    } catch (error) {
      setErrorText(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    let veriData = localStorage.getItem('verification-data');
    if (veriData) veriData = JSON.parse(localStorage.getItem('verification-data'));
    setVerification(veriData);
  }, [])

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
                        {t('verificationCode')}
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
                      <div className="inputs py-3">
                        <span className="text-left text-lybas-gray block w-full mb-3">{t('verificationHelpWord') + ' ' + (verification?.user_phone ? verification?.user_phone : '')}</span>
                        <input
                          type="text"
                          onChange={(e) => setVeri(e.target.value)}
                          className="input w-full"
                          placeholder={t('enterTheCode') + '*'}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-10 text-red-600">{errorText}</div>
                <div className="px-10 pt-3 pb-7 grid grid-cols-2 gap-5">
                  <button
                    type="button"
                    className="rounded-md bg-lybas-blue col-span-2 py-2 text-sm text-white hover:bg-blue-800"
                    onClick={sendData}
                  >
                    {t('confirm')}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
