import React, { useEffect, useState } from 'react';

import Sidebar from '../components/Sidebar';
import Breadcrumb from '../components/Breadcrumb';
import Dress from '../components/Dress';
import SellerBox from '../components/SellerBox';
import { AxiosUser } from '../common/AxiosInstance';
import { Co2Sharp } from '@mui/icons-material';

function Favorites() {
  const [data,setData] = useState([]);
  useEffect(()=>{
    const getData = async ()=>{
      try {
        const res = await AxiosUser("/like");
        setData(res?.data?.data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  },[])
  return (
    <div className="favorites container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Breadcrumb page1={{ text: 'favorites', link: '/favorites' }} />
      <div className="dresses_main w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {
          data?.length>0 && data.map((pro,index)=>(
            <Dress hover="small" data={pro} key={index}/>
          ))
        }
      </div>
    </div>
  );
}

export default Favorites;
