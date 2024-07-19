import React, { useContext, useEffect, useState } from 'react';
import Breadcrumb from './components/Breadcrumb';
import { t } from 'i18next';
import { useParams } from 'react-router-dom';
import { AxiosSeller } from '../../common/AxiosInstance';
import ip from '../../common/Config';
import { AppContext } from '../../App';
import { useDispatch } from 'react-redux';
import { fetchDataOrders } from '../../redux/features/Orders';

const tableHeader = ['product', 'number', 'price']

function OneOrder() {
  const { lang } = useContext(AppContext);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('');
  const [data, setData] = useState({

  })
  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await AxiosSeller("/orders/order-products/" + id);
        if (res.status === 200) {
          setData(res.data);
          setStatus(res.data.status);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [])

  const handleStatus = async (st) => {
    setStatus(st);
    try {
      await AxiosSeller('/orders/status/' + id, { method: "PATCH", data: { status: st } })
      dispatch(fetchDataOrders())
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='one-order'>
      <Breadcrumb page={'orders'} pageLink={'/orders'} link={'1'} name={data?.user_name?.split(' ')[0]} />

      <div className="one-order_content bg-white border rounded-lg p-7 mt-5 flex">
        <div className="one-order_content_table w-3/5 mr-5">
          <div className="orders_table border rounded-lg overflow-hidden">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    {
                      tableHeader.map((th, index) => (
                        <th key={index} scope="col" className="px-6 py-3">
                          {t(th)}
                        </th>
                      ))
                    }
                  </tr>
                </thead>
                <tbody>
                  {
                    data?.order_products?.length > 0 && data.order_products.map((product, index) => (
                      <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center">
                          <img className='w-[48px] h-[48px] mr-2 rounded-lg' src={ip + '/' + product?.image} alt="" />
                          <div className='flex flex-col justify-center'>
                            <div className='font-bold mb-1'>{product?.product?.name_tm ? product?.product['name_' + lang]:''}</div>
                            <div className='text-sm text-gray-500'>{product?.material?.name_tm ? product?.material['name_' + lang] : ''} <span className='mr-2'></span> {product?.size} <span className='mr-2'></span> {product?.price?.toFixed(2)}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          {product.quantity}
                        </td>
                        <td className="px-6 py-4">
                          {product?.total_price?.toFixed(2)}
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="one-order_content_address w-2/5">
          <div className="title font-bold mb-3">{t('result')}</div>
          <div>{t(data?.status)}</div>

          <div className="name my-5"><span className='font-semibold'>{t('fullName')}:</span><span className='text-lybas-gray'> {data?.user_name}</span></div>
          {/* <div className="name my-5"><span className='font-semibold'>{t('dressmaker')}:</span><span className='text-lybas-gray'> Jeren Otelya</span></div> */}
        </div>
      </div>
    </div>
  );
}

export default OneOrder;
