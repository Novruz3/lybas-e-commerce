import React, { useContext, useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { useParams } from 'react-router-dom';
import { AxiosCustom } from '../common/AxiosInstance';
import { AppContext } from '../App';
import ip from '../common/Config';

function OneBlog() {
  const { id } = useParams();
  const { lang } = useContext(AppContext);
  const [data, setData] = useState(null);
  const getData = async () => {
    try {
      const res = await AxiosCustom("/blogs/" + id);
      setData(res?.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, [])

  return (
    <div className='one-blog container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <Breadcrumb page1={{ text: 'blog', link: '/blog' }} />
      <div className="one-blog_center-container md:px-[10%]">
        <div className="one-blog_center-container_date text-lybas-gray mb-2">{data?.createdAt.split('T')[0]}</div>
        <h1 className="one-blog_center-container_title text-3xl font-bold">{data && data['header_' + lang]}</h1>
        {
          data?.image &&
          <img className='my-8 rounded-lg' src={ip + '/' + data.image} alt="" />
        }
        <div className="one-blog_container_body text-xl whitespace-pre-line">{data && data['body_' + lang]}</div>
      </div>
    </div>
  );
}

export default OneBlog;
