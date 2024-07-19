import React, { useEffect, useState } from 'react'
import Blog from '../components/Blog'
import Breadcrumb from '../components/Breadcrumb'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector, useDispatch } from "react-redux";
import { fetchDataBlogsUser, setLimit, setOffset } from '../redux/features/BlogsUser';
import { CircularProgress } from '@mui/material';

function Blogs() {
  const data = useSelector((state) => state?.BlogsUser?.data);
  const offset = useSelector((state) => state?.BlogsUser?.offset);
  const limit = useSelector((state) => state?.BlogsUser?.limit);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (data?.length < 10) {
      dispatch(fetchDataBlogsUser());
    }
  }, [])
  const fetchData = async () => {
    setLoading(true);
    await dispatch(setOffset(offset + limit));
    await dispatch(fetchDataBlogsUser());
    setLoading(false);
  }
  return (
    <div className='blogpage container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <Breadcrumb page1={{ text: 'blog', link: '/blog' }} />
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
        <div className="blogpage_blogs grid gap-5 grid-cols-1 md:grid-cols-2">
          {
            data?.length > 0 && data.map((blog, index) => (
              <Blog key={index} data={blog} />
            ))
          }
        </div>
      </InfiniteScroll>

    </div>
  )
}

export default Blogs
