import React, { useContext, useEffect, useState } from 'react';

import Sidebar from '../components/Sidebar';
import Breadcrumb from '../components/Breadcrumb';
import Dress from '../components/Dress';
import { AxiosCustom, AxiosUser } from '../common/AxiosInstance';
import { useParams } from 'react-router-dom';
import { t } from 'i18next';
import { AppContext } from '../App';
import ip from '../common/Config';

function Dressmaker() {
  const { id } = useParams();
  const { lang } = useContext(AppContext);
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [dressmaker, setDressmaker] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [colors, setColors] = useState([]);
  const [sort, setSort] = useState({
    category: [],
    price: {},
    size: [],
    material: [],
    welayat: [],
    color: [],
  });
  const [type,setType] = useState(0);
  const getData = async (sortBy=type) => {
    try {
      if(localStorage.getItem('lybas-user-token')){
        var res = await AxiosUser(`/seller/${id}?sort=${JSON.stringify(sort)}&sortBy=${sortBy}`);
      }else{
        var res = await AxiosCustom(`/seller/${id}?sort=${JSON.stringify(sort)}&sortBy=${sortBy}`);
      }
      setDressmaker(res?.data?.seller)
      setCategories(res?.data?.seller?.category)
      setData(res?.data?.product?.rows);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, [sort]);

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
    getSizes();
    getMaterials();
    getColors();
  }, [])

  const setSortBy = async(name,value)=>{
    setType(value);
    getData(value);
  }
  return (
    <div className='dressmaker container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <Breadcrumb page1={{ text: 'dressmakers', link: '/dressmakers' }} page2={{text:dressmaker?.name}} />
      <div className="dressmaker_header rounded-lg  p-3 mb-5 flex flex-wrap">
        {/* <div className='flex'> */}
          {
            dressmaker?.image &&
            <img className='dressmaker_header_image rounded-lg h-[70px] md:h-[100px] w-[70px] md:w-[100px] mr-5 object-cover' src={ip + '/' + dressmaker?.image} alt="" />
          }
          <div className="dressmaker_header_content h-full flex flex-col justify-start md:justify-center">
            <h1 className='text-[20px] md:text-[30px] font-bold'>{dressmaker?.name}</h1>
            <div className="location flex items-center">
              <svg className='mr-1 md:mr-2 h-4 md:h-5 w-3 md:w-4' viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 10C8.55 10 9.02083 9.80417 9.4125 9.4125C9.80417 9.02083 10 8.55 10 8C10 7.45 9.80417 6.97917 9.4125 6.5875C9.02083 6.19583 8.55 6 8 6C7.45 6 6.97917 6.19583 6.5875 6.5875C6.19583 6.97917 6 7.45 6 8C6 8.55 6.19583 9.02083 6.5875 9.4125C6.97917 9.80417 7.45 10 8 10ZM8 17.35C10.0333 15.4833 11.5417 13.7875 12.525 12.2625C13.5083 10.7375 14 9.38333 14 8.2C14 6.38333 13.4208 4.89583 12.2625 3.7375C11.1042 2.57917 9.68333 2 8 2C6.31667 2 4.89583 2.57917 3.7375 3.7375C2.57917 4.89583 2 6.38333 2 8.2C2 9.38333 2.49167 10.7375 3.475 12.2625C4.45833 13.7875 5.96667 15.4833 8 17.35ZM8 20C5.31667 17.7167 3.3125 15.5958 1.9875 13.6375C0.6625 11.6792 0 9.86667 0 8.2C0 5.7 0.804167 3.70833 2.4125 2.225C4.02083 0.741667 5.88333 0 8 0C10.1167 0 11.9792 0.741667 13.5875 2.225C15.1958 3.70833 16 5.7 16 8.2C16 9.86667 15.3375 11.6792 14.0125 13.6375C12.6875 15.5958 10.6833 17.7167 8 20Z" fill="#1A54EB" />
              </svg>
              <span className='font-bold text-[13px] md:text-[16px]'>{t(dressmaker?.welayat)}</span>
            </div>
          </div>
        {/* </div> */}
        <div className="dressmaker_header_categories text-lybas-blue text-[14px] md:text-[20px] mt-3 md:mt-5 md:ml-5">
          {
            categories.length > 0 && categories.map((category, index) => {
              if (index === categories.length - 1) {
                return (
                  <span key={index}>{category['name_' + lang]} </span>
                )
              }
              return (
                <span key={index}>{category['name_' + lang]}, </span>
              )
            })
          }
        </div>
      </div>
      <div className="dresses_main flex justify-between">
        <div className="dresses_main_left w-0 md:w-2/5 lg:w-1/5 h-fit md:sticky top-[100px]">
          <Sidebar setSortBy={setSortBy} sortBy={type} sort={sort} setSort={setSort} categories={categories} sizes={sizes} materials={materials} colors={colors} />
        </div>
        <div className="dresses_right w-full md:w-3/5 lg:w-4/5 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:ml-5 lg:ml-[30px]">
          {
            data.length > 0 && data.map((product, index) => (
              <Dress data={product} key={index} hover='small' />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Dressmaker;
