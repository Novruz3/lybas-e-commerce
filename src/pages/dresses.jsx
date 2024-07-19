import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Sidebar from '../components/Sidebar';
import Breadcrumb from '../components/Breadcrumb';
import Dress from '../components/Dress';
import { AxiosCustom, AxiosUser } from '../common/AxiosInstance';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { fetchDataDressesUser, setLimit, setOffset, setSort, setType } from '../redux/features/DressesUser';
import { CircularProgress } from '@mui/material';
import { t } from 'i18next';


function Dresses() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get('type');
  const [categories, setCategories] = useState([]);
  const [dressmakers, setDressmakers] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [colors, setColors] = useState([]);
  const data = useSelector((state) => state?.DressesUser?.data);
  const offset = useSelector((state) => state?.DressesUser?.offset);
  const limit = useSelector((state) => state?.DressesUser?.limit);
  const sort = useSelector((state) => state?.DressesUser?.sort);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const getCategories = async () => {
    try {
      const res = await AxiosCustom(`/categories?limit=10000`);
      setCategories(res.data.categories)
    } catch (error) {
      console.log(error);
    }
  }
  const getDressmakers = async () => {
    try {
      const res = await AxiosCustom(`/seller?limit=10000`);
      setDressmakers(res.data.sellers)
    } catch (error) {
      console.log(error);
    }
  }
  const getSizes = async () => {
    try {
      const res = await AxiosCustom(`/sizes?limit=1000`);
      setSizes(res.data.data)
    } catch (error) {
      console.log(error);
    }
  }
  const getMaterials = async () => {
    try {
      const res = await AxiosCustom(`/materials?limit=1000`);
      setMaterials(res.data.data)
    } catch (error) {
      console.log(error);
    }
  }
  const getColors = async () => {
    try {
      const res = await AxiosCustom(`/colors?limit=${''}`);
      setColors(res.data.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (data?.length < 20) {
      dispatch(setType(type))
      dispatch(fetchDataDressesUser());
    }
    getCategories();
    getDressmakers();
    getSizes();
    getMaterials();
    getColors();
  }, [])

  const setSortLocal = async (sortNew) => {
    dispatch(setSort(sortNew))
    dispatch(fetchDataDressesUser())
  }

  const fetchData = async () => {
    setLoading(true);
    await dispatch(setOffset(offset + limit));
    await dispatch(fetchDataDressesUser());
    setLoading(false);
  }

  const setSortBy = async (name, value) => {
    navigate('/dresses?type=' + value)
    await dispatch(setType(value))
    await dispatch(fetchDataDressesUser());
  }


  return (
    <div className='dresses container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      {
        type == 0 &&
        <Breadcrumb page1={{ text: 'dresses', link: '/dresses' }} page2={{ text: t('all') }} />
      }
      {
        type == 3 &&
        <Breadcrumb page1={{ text: 'dresses', link: '/dresses' }} page2={{ text: t('recommendedDress') }} />
      }
      {
        type == 2 &&
        <Breadcrumb page1={{ text: 'dresses', link: '/dresses' }} page2={{ text: t('mostPopularDresses') }} />
      }
      {
        type == 4 &&
        <Breadcrumb page1={{ text: 'dresses', link: '/dresses' }} page2={{ text: t('onSale') }} />
      }
      {
        !type &&
        <Breadcrumb page1={{ text: 'dresses', link: '/dresses' }} />
      }
      <div className="dresses_main flex justify-between">
        <div className="dresses_main_left w-0 md:w-2/5 lg:w-1/5 h-fit md:sticky top-[100px]">
          <Sidebar setSortBy={setSortBy} sortBy={type} sort={sort} setSort={setSortLocal} categories={categories} dressmakersData={dressmakers} sizes={sizes} materials={materials} colors={colors} />
        </div>
        <div className='w-full md:w-3/5 lg:w-4/5'>
          <InfiniteScroll
            dataLength={data.length}
            next={fetchData}
            hasMore={true} // Replace with a condition based on your data source
            loader={<div className="loading flex justify-center items-center h-20">
              {
                loading &&
                <CircularProgress size={30} />
              }
            </div>}
            endMessage={<p>No more data to load.</p>}
          >
            <div className="dresses_right grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:ml-5 lg:ml-[30px]">
              {data.map((dress, index) => (
                <Dress key={index} data={dress} hover='small' />
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
}

export default Dresses;
