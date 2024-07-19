import { Fragment, useState, useRef, useEffect, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { t } from 'i18next'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { fetchDataCart } from '../redux/features/Cart';
import ip from '../common/Config'
import { AppContext } from '../App'
import { AxiosUser } from '../common/AxiosInstance'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Cart({ open, setOpen }) {
  const cancelButtonRef = useRef(null)
  const { lang } = useContext(AppContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartData = useSelector((state) => state?.Cart.data)

  const calculateTotalPrice = (cart) => {
    return cart.reduce((sum, obj) => sum + obj.total_price, 0).toFixed(2);
  }

  const updateProductQuantity = async (product, quantity) => {
    if (product.stock >= quantity) {
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
    }else{
      toast.warning(t('outStock'),{ position: 'bottom-left', autoClose: 2000 })
    }
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-[15]" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-xl font-semibold text-gray-900">{t('myCart')}</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {cartData?.length > 0 && cartData.map((product, index) => (
                              <li key={index} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={ip + '/' + product.image}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <Link to={'/dresses/' + product.productId} className='font-semibold'>{product['name_' + lang]}</Link>
                                      </h3>
                                      <p className="ml-4 font-semibold">{product.total_price.toFixed(2)}{t('tmt')}</p>
                                    </div>
                                    <p className="mt-1 text-base text-lybas-gray">{product.size}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">{product.price} {t('tmt')} x {product.quantity}</p>

                                    <div className="flex flex-col justify-right">
                                      <div className="buttons shadow-lybas-1 h-[32px] flex items-center rounded-lg">
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
                                      <button
                                        onClick={() => updateProductQuantity(product, 0)}
                                        type="button"
                                        className="font-medium text-indigo-600 text-right hover:text-indigo-500 mt-1"
                                      >
                                        {t('remove')}
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p className='font-semibold'>{t('totalPrice')}</p>
                        <p className='font-semibold'>{calculateTotalPrice(cartData)} {t('tmt')}</p>
                      </div>
                      <div className="mt-6" onClick={() => setOpen(false)}>
                        <button
                          onClick={() => (cartData?.length > 0 ? navigate("/checkout") : toast.warning(t('noQuantity'), { position: 'bottom-right', autoClose: 2000 }))}
                          className="w-full flex items-center justify-center rounded-md border border-transparent bg-lybas-blue px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          {t('checkout')}
                        </button>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          {t('or')}{' '}
                          <button
                            type="button"
                            className="font-medium text-lybas-blue hover:text-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                            {t('continueShopping')}
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
          <ToastContainer />
        </div>
      </Dialog>
    </Transition.Root>
  )
}