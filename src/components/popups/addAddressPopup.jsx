import { Fragment, useEffect, useState, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { t } from 'i18next';
import { AxiosUser } from '../../common/AxiosInstance';

export default function Popup({setAddedAddress=()=>{}, open, setOpen =()=>{}, edit = false, editData = null, addresses = [], setAddresses = ()=>{} }) {
  const [provinceOpen, setProvinceOpen] = useState(false)
  const [dataFull, setDataFull] = useState(false);
  const [addres,setAddres] = useState(editData?.address?editData.address:'')

  const data = useRef({
    province: '',
    address: '',
  })

  const cancelButtonRef = useRef(null)

  const sendData = async () => {
    try {
      if (edit) {
        const res = await AxiosUser('/address/'+editData.id, { method: "PATCH", data: { welayat: data.current.province, address: data.current.address } })
        if (res.status === 200) {
          const help = []
          for(let i = 0; i<addresses.length; i++){
            if(addresses[i].id === editData.id){
              const hel = {...editData};
              hel.address = data.current.address
              hel.welayat = data.current.province
              help.push(hel)
            }else{
              help.push(addresses[i])
            }
            setAddresses([...help])
          }
          setOpen(false);
        }
      } else {
        const res = await AxiosUser('/address', { method: "POST", data: { welayat: data.current.province, address: data.current.address } })
        if (res.status === 201) {
          setAddresses([...addresses, res.data])
          setOpen(false);
          setAddedAddress(true);
        }
      }
    } catch (error) {

    }
    setOpen(false);
  }

  useEffect(() => {
    if (edit) {
      data.current = {
        province: editData.welayat,
        address: editData.address,
      }
    } else {
      data.current = {
        province: '',
        address: '',
      }
    }
  }, [open])

  const checkDataFull = () => {
    for (const key in data.current) {
      if (!data.current[key]) {
        setDataFull(false);
        return
      }
    }
    setDataFull(true);
  }

  const handleChange = ({ name, value }) => {
    setAddres(value);
    data.current.address = value;
    checkDataFull();
  }

  const selectProvince = (province) => {
    data.current.province = province;
    checkDataFull();
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
                      <Dialog.Title as="h3" className="text-2xl font-semibold leading-6 text-gray-900 mb-10 flex justify-between items-center">
                        {t('addNewAddress')}
                        <svg onClick={() => { setOpen(false) }} className='cursor-pointer' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="#0E1217" />
                        </svg>
                      </Dialog.Title>
                      <div className="mt-2">
                        <div onClick={() => setProvinceOpen(!provinceOpen)} className='w-full rounded-lg border-2 border-lybas-light-gray p-2 mb-3 outline-none text-lybas-gray text-sm flex justify-between'>
                          <span>{data?.current?.province ? t(data.current.province) : t('province')}</span>
                          <svg className={'transition-all ' + (provinceOpen ? 'rotate-180' : 'rotate-0')} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 17L4 9.7027L5.86667 8L12 13.5946L18.1333 8L20 9.7027L12 17Z" fill="#0E1217" />
                          </svg>
                        </div>
                        <div className={"add-address_addresses border-2 border-lybas-light-gray rounded-lg mb-3 overflow-hidden transition-all " + (provinceOpen ? 'h-[225px]' : 'h-0')}>
                          <div onClick={() => (selectProvince('ashgabat'), setProvinceOpen(false))} className={'w-full p-2 hover:bg-blue-100 hover:text-lybas-blue text-gray-500 text-[14px] text-left cursor-pointer tracking-tight ' + (data.current.province === 'ashgabat' && 'bg-blue-100 text-lybas-blue')}>{t('ashgabat')}</div>
                          <div onClick={() => (selectProvince('balkan'), setProvinceOpen(false))} className={'w-full p-2 hover:bg-blue-100 hover:text-lybas-blue text-gray-500 text-[14px] text-left cursor-pointer tracking-tight ' + (data.current.province === 'balkan' && 'bg-blue-100 text-lybas-blue')}>{t('balkan')}</div>
                          <div onClick={() => (selectProvince('ahal'), setProvinceOpen(false))} className={'w-full p-2 hover:bg-blue-100 hover:text-lybas-blue text-gray-500 text-[14px] text-left cursor-pointer tracking-tight ' + (data.current.province === 'ahal' && 'bg-blue-100 text-lybas-blue')}>{t('ahal')}</div>
                          <div onClick={() => (selectProvince('mary'), setProvinceOpen(false))} className={'w-full p-2 hover:bg-blue-100 hover:text-lybas-blue text-gray-500 text-[14px] text-left cursor-pointer tracking-tight ' + (data.current.province === 'mary' && 'bg-blue-100 text-lybas-blue')}>{t('mary')}</div>
                          <div onClick={() => (selectProvince('lebap'), setProvinceOpen(false))} className={'w-full p-2 hover:bg-blue-100 hover:text-lybas-blue text-gray-500 text-[14px] text-left cursor-pointer tracking-tight ' + (data.current.province === 'lebap' && 'bg-blue-100 text-lybas-blue')}>{t('lebap')}</div>
                          <div onClick={() => (selectProvince('dashoguz'), setProvinceOpen(false))} className={'w-full p-2 hover:bg-blue-100 hover:text-lybas-blue text-gray-500 text-[14px] text-left cursor-pointer tracking-tight ' + (data.current.province === 'dashoguz' && 'bg-blue-100 text-lybas-blue')}>{t('dashoguz')}</div>
                        </div>
                        <input onChange={(e) => handleChange(e.target)} name='address' value={addres} type="text" id='address' className='w-full rounded-lg border-2 border-lybas-light-gray p-2 outline-none text-lybas-gray text-sm' placeholder={t('yourAddress')} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-10 pt-3 pb-5">
                  <button
                    type="button"
                    className={"w-full rounded-md px-20 py-2 text-sm text-white shadow-sm " + (dataFull ? 'bg-lybas-blue' : 'bg-lybas-gray')}
                    onClick={sendData}
                    disabled={!dataFull}
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
