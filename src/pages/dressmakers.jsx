import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Dressmaker from '../components/Dressmaker';
import Breadcrumb from '../components/Breadcrumb';
import { AxiosCustom } from '../common/AxiosInstance';
import { useSelector, useDispatch } from "react-redux";
import { fetchDataDressmakersUser, setLimit, setOffset, setSort } from '../redux/features/DressmakersUser';
import { CircularProgress } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';

function Dressmakers() {
  const data = useSelector((state) => state?.DressmakersUser?.data);
  const offset = useSelector((state) => state?.DressmakersUser?.offset);
  const limit = useSelector((state) => state?.DressmakersUser?.limit);
  const sort = useSelector((state) => state?.DressmakersUser?.sort);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);


  const fetchData = async () => {
    setLoading(true);
    await dispatch(setOffset(offset + limit));
    await dispatch(fetchDataDressmakersUser());
    setLoading(false);
  }

  useEffect(() => {
    if (data?.length < 1) {
      dispatch(fetchDataDressmakersUser());
    }
  }, [])

  const setSortLocal = (obj)=>{
    dispatch(setSort(obj));
    dispatch(fetchDataDressmakersUser())
  }

  return (
    <div className='dressmakers container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <Breadcrumb page1={{ text: 'dressmakers', link: '/dressmakers' }} />
      <div className="dressmakers_content flex">
        <div className="dressmakers_sidebar w-0 h-fit md:sticky top-[100px] md:w-1/5 md:mr-10">
          <Sidebar sort={sort} setSort={setSortLocal} dressmakers={true} />
        </div>

        <div className='dressmakers_dressmakers w-full md:w-4/5'>
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
                <Dressmaker key={index} data={dress} hover='small' />
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
}

export default Dressmakers;
