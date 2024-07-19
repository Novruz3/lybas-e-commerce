import React, { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Comment from '../components/ProductComment';
import { useParams } from 'react-router-dom';
import { AxiosCustom } from '../common/AxiosInstance'
import { t } from 'i18next';

function Comments() {
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await AxiosCustom('products/comments/' + id)
        setData(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [])
  return (
    <div className='comments container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <Breadcrumb page1={{ text: 'comment', link: '/' }} />

      <div className="revivers-container mb-10 bg-gray-100 rounded-[8px] flex flex-col sm:flex-row justify-between items-center px-10 py-10">

        <div className="revivers-container__left w-[130px] mr-10 mb-5 sm:mb-0">
          <p className="rate text-[70px] sm:text-[80px] md:text-[96px] font-bold mb-[12px]">{data?.product?.rating}</p>
          <p className="text-[16px] md:text-[18px] font-medium leading-[24px] text-slate-500 mb-[10px]">{data?.product?.rating} {data?.product?.rating > 1 ? t('stars') : t('star')}</p>
          <p className="text-[16px] md:text-[18px] font-medium leading-[24px] text-slate-500">{data?.count + ' ' + (data?.count > 1 ? t('commentPageMoreComment') : t('commentPageOneComment'))}</p>
        </div>

        <div className="revivers-container__rigth w-full">

          <div className="line mb-[12px] w-full flex items-center">
            <p className="text-[18px] font-medium leading-[24px] text-slate-500 mr-[12px]">5</p>
            <div className="rate-line w-full bg-white">
              <div className="h-[12px] bg-lybas-blue rounded-[20px]" style={{ width: `${data?.ratings ? data?.ratings[4] : 0}%` }}></div>
            </div>
          </div>

          <div className="line mb-[12px] flex items-center">
            <p className="text-[18px] font-medium leading-[24px] text-slate-500 mr-[12px]">4</p>

            <div className="rate-line w-full bg-white">
              <div className="h-[12px] bg-lybas-blue rounded-[20px]" style={{ width: `${data?.ratings ? data?.ratings[3] : 0}%` }}></div>
            </div>
          </div>

          <div className="line mb-[12px] flex items-center">
            <p className="text-[18px] font-medium leading-[24px] text-slate-500 mr-[12px]">3</p>

            <div className="rate-line w-full bg-white">
              <div className="h-[12px] bg-lybas-blue rounded-[20px]" style={{ width: `${data?.ratings ? data?.ratings[2] : 0}%` }}></div>
            </div>
          </div>

          <div className="line mb-[12px] flex items-center">
            <p className="text-[18px] font-medium leading-[24px] text-slate-500 mr-[12px]">2</p>

            <div className="rate-line w-full bg-white">
              <div className="h-[12px] bg-lybas-blue rounded-[20px]" style={{ width: `${data?.ratings ? data?.ratings[1] : 0}%` }}></div>
            </div>
          </div>

          <div className="line mb-[12px] flex items-center">
            <p className="text-[18px] font-medium leading-[24px] text-slate-500 mr-[12px]">1</p>

            <div className="rate-line w-full bg-white">
              <div className="h-[12px] bg-lybas-blue rounded-[20px]" style={{ width: `${data?.ratings ? data?.ratings[0] : 0}%` }}></div>
            </div>
          </div>

        </div>

      </div>
      {
        data?.comments?.length > 0 && data.comments.map((comment, index) => (
          <Comment data={comment} key={index} />
        ))
      }
    </div>
  );
}

export default Comments;
