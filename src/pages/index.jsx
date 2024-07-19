import React, { useContext, useEffect, useState, lazy, Suspense } from 'react'

import { AppContext } from '../App';
import { Link } from 'react-router-dom';

import Dress from '../components/Dress';
import Dressmaker from '../components/Dressmaker';
import Blog from '../components/Blog';

import { AxiosCustom, AxiosUser } from '../common/AxiosInstance';

import BannerSkeleton from '../components/Skeletons/BannerSkeleton';
import BigProductsSkeleton from '../components/Skeletons/BigProductsSkeleton';

const Banner = lazy(() => import('../components/Banner'));
const BigProductsGroup = lazy(() => import('../components/Groups/BigProductsGroup'));



function Index() {

  const { t, lang } = useContext(AppContext);
  const [popular, setPopular] = useState([]);
  const [sale, setSale] = useState([]);
  const [dressmakers, setDressmakers] = useState([])
  const [blogs, setBlogs] = useState([]);
  const [rec, setRec] = useState([]);


  useEffect(() => {

    const getData = async () => {
      try {
        if (localStorage.getItem('lybas-user-token')) {
          const res = await AxiosUser("/products?sort=3&limit=1")
          const res2 = await AxiosUser("/products?sort=2&limit=5")
          const res3 = await AxiosUser("/products?sort=4&limit=5")
          setRec(res.data)
          setPopular(res2.data)
          setSale(res3.data)
        } else {
          const res = await AxiosCustom("/products?sort=3&limit=1")
          const res2 = await AxiosCustom("/products?sort=2&limit=5")
          const res3 = await AxiosCustom("/products?sort=4&limit=5")
          setRec(res.data)
          setPopular(res2.data)
          setSale(res3.data)
        }
        const resDressmakers = await AxiosCustom("/seller?limit=5")
        setDressmakers(resDressmakers.data.sellers);
        const resBlogs = await AxiosCustom('/blogs?limit=2');
        setBlogs(resBlogs.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [])

  return (
    <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      {/* Banner */}
      <Suspense fallback={<BannerSkeleton />}>
        <Banner />
      </Suspense>
      {/* Recommended */}
      {
        rec.length > 0 &&
        <Suspense fallback={<BigProductsSkeleton />}>
          <div className="recommended-products">
            <div className="section-header">
              <div className="section-header_name text-lg">{t('recommendedDress')}</div>
              <Link to="/dresses?type=3" className="section-header_link flex items-center">
                <span className='mr-2 text-lybas-blue hidden sm:block'>{t('viewAll')}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="#1A54EB" />
                </svg>
              </Link>
            </div>
            <BigProductsGroup />
          </div>
        </Suspense>
      }

      {/* Most Popular */}
      {
        popular.length > 0 &&
        <div className="most-popular-products pt-5">
          <div className="section-header">
            <div className="section-header_name">{t('mostPopularDresses')}</div>
            <Link to="/dresses?type=2" className="section-header_link flex items-center">
              <span className='mr-2 text-lybas-blue hidden sm:block'>{t('viewAll')}</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="#1A54EB" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {
              popular[0] &&
              <Dress hover={'small'} data={popular[0]} />
            }
            {
              popular[1] &&
              <Dress hover={'small'} data={popular[1]} />
            }
            {
              popular[2] &&
              <Dress hover={'small'} data={popular[2]} />
            }
            {
              popular[3] &&
              <Dress hover={'small'} className={"blcok sm:hidden md:block"} data={popular[3]} />
            }
            {
              popular[4] &&
              <Dress hover={'small'} className={"hidden lg:block"} data={popular[4]} />
            }
          </div>
        </div>
      }

      {/* On Sale */}
      {
        sale.length > 0 &&
        <div className="on-sale-products pt-5">
          <div className="section-header">
            <div className="section-header_name">{t('onSale')}</div>
            <Link to="/dresses?type=4" className="section-header_link flex items-center">
              <span className='mr-2 text-lybas-blue hidden sm:block'>{t('viewAll')}</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="#1A54EB" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {
              sale[0] &&
              <Dress hover={'small'} data={sale[0]} />
            }
            {
              sale[1] &&
              <Dress hover={'small'} data={sale[1]} />
            }
            {
              sale[2] &&
              <Dress hover={'small'} data={sale[2]} />
            }
            {
              sale[3] &&
              <Dress hover={'small'} className={"blcok sm:hidden md:block"} data={sale[3]} />
            }
            {
              sale[4] &&
              <Dress hover={'small'} className={"hidden lg:block"} data={sale[4]} />
            }
          </div>
        </div>
      }

      {/* Dress makers */}
      {
        dressmakers.length > 0 &&
        <div className="dress-makers-products pt-5">
          <div className="section-header">
            <div className="section-header_name">{t('dressmakers')}</div>
            <Link to="/dressmakers" className="section-header_link flex items-center">
              <span className='mr-2 text-lybas-blue hidden sm:block'>{t('viewAll')}</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="#1A54EB" />
              </svg>
            </Link>
          </div>
          <div className="dressmakers grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {
              dressmakers[0] &&
              <Dressmaker data={dressmakers[0]} />
            }
            {
              dressmakers[1] &&
              <Dressmaker data={dressmakers[1]} />
            }
            {
              dressmakers[2] &&
              <Dressmaker data={dressmakers[2]} />
            }
            {
              dressmakers[3] &&
              <Dressmaker data={dressmakers[3]} className={"blcok sm:hidden md:block"} />
            }
            {
              dressmakers[4] &&
              <Dressmaker data={dressmakers[4]} className={"hidden lg:block"} />
            }
          </div>
        </div>
      }

      {/* Blogs */}
      <Suspense fallback={<p>Loading...</p>}>
        {
          blogs.length > 0 &&
          <div className="blogs -products pt-5">
            <div className="section-header">
              <div className="section-header_name">{t('blog')}</div>
              <Link to="/blog" className="section-header_link flex items-center"><span className='mr-2 text-lybas-blue'>{t('viewAll')}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="#1A54EB" />
                </svg>
              </Link>
            </div>
            <div className="blogs grid md:grid-cols-2 gap-5 mb-[120px]">
              {
                blogs[0] &&
                <Blog data={blogs[0]} />
              }
              {
                blogs[1] &&
                <Blog data={blogs[1]} />
              }
            </div>
          </div>
        }
      </Suspense>
    </div>
  )
}

export default Index
