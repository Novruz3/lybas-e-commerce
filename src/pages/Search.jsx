import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { AxiosCustom, AxiosUser } from '../common/AxiosInstance';
import Breadcrumb from '../components/Breadcrumb';
import { t } from 'i18next';
import Dress from '../components/Dress';
import Dressmaker from '../components/Dressmaker';
import Blog from '../components/Blog';

function Search() {
  const { keyword } = useParams();
  const location = useLocation();
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const user = localStorage.getItem('lybas-user-token');
      if (user) {
        var res = await AxiosUser('/products/search?keyword=' + keyword)
        if(res.status === 200) setData(res.data)
      } else {
        var res = await AxiosCustom('/products/search?keyword=' + keyword);
        if (res.status === 200) {
          setData(res.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, [location])
  return (
    <div className='search container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <Breadcrumb page1={{ text: ' ' + keyword, link: '/' }} />

      {
        data?.products?.length > 0 && <>
          <h1 className='text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-5'>{t('products')}</h1>
          <div className='carts grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
            {
              data?.products?.length > 0 && data.products.map((product, index) => (
                <Dress key={index} hover={'small'} data={product} />
              ))
            }
          </div>
        </>
      }

      {
        data?.seller?.length > 0 && <>
          <h1 className='text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-5'>{t('dressmakers')}</h1>
          <div className='carts grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
            {
              data?.seller?.length > 0 && data.seller.map((product, index) => (
                <Dressmaker key={index} data={product} />
              ))
            }
          </div>
        </>
      }

      {
        data?.blogs?.length > 0 && <>
          <h1 className='text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-5'>{t('blog')}</h1>
          <div className='carts grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {
              data?.blogs?.length > 0 && data.blogs.map((product, index) => (
                <Blog key={index} data={product} />
              ))
            }
          </div>
        </>
      }
    </div>
  );
}

export default Search;