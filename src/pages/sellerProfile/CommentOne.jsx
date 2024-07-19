import React from 'react';
import Breadcrumb from './components/Breadcrumb';
import { t } from 'i18next';
import { Rating } from '@material-tailwind/react';

function CommentOne() {
  return (
    <div className='one-comment'>
      <Breadcrumb page={'comments'} pageLink={'/sellerProfile/comments'} name={'Jeren'} />

      <div className="one-comment_content flex mt-5">
        <div className="one-comment_content_left bg-white rounded-lg w-3/5 mr-5">
          <div className="title py-3 px-5 font-semibold border-b">{t('personalInformation')}</div>

          <div className="inputs grid grid-cols-4 gap-5 p-5">
            <div className="data">
              <div className="data_title font-semibold mb-2">{t('nameSimple')}</div>
              <div className="data_title text-lybas-gray">{t('nameSimple')}</div>
            </div>
            <div className="data col-span-3">
              <div className="data_title font-semibold mb-2">{t('phoneNumber')}</div>
              <div className="data_title text-lybas-gray">{t('nameSimple')}</div>
            </div>
            <div className="data">
              <div className="data_title font-semibold mb-2">{t('province')}</div>
              <div className="data_title text-lybas-gray">{t('nameSimple')}</div>
            </div>
            <div className="data col-span-3">
              <div className="data_title font-semibold mb-2 col-span-4">{t('rating')}</div>
              <div className="data_title text-lybas-gray"><Rating value={4} readonly /></div>
            </div>
            <div className="data col-span-3">
              <div className="data_title font-semibold mb-2 col-span-4">{t('comment')}</div>
              <div className="data_title text-lybas-gray">{t('nameSimple')}</div>
            </div>
            <div className="data col-span-3">
              <div className="data_title font-semibold mb-2 col-span-4">{t('link')}</div>
              <div className="data_title text-lybas-gray">{t('nameSimple')}</div>
            </div>
            <div className="data col-span-3">
              <div className="data_title font-semibold mb-2 col-span-4">{t('photos')}</div>
              <div className="data_images flex flex-wrap">
                <img className='rounded-lg w-[50px] object-cover mr-3 mb-3' src={require("./../../assets/images/dressImage.png")} alt="" />
                <img className='rounded-lg w-[50px] object-cover mr-3 mb-3' src={require("./../../assets/images/dressImage.png")} alt="" />
                <img className='rounded-lg w-[50px] object-cover mr-3 mb-3' src={require("./../../assets/images/dressImage.png")} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="one-comment_content_right bg-white rounded-lg w-2/5">
          <div className="title py-3 px-5 font-semibold border-b">{t('profileImage')}</div>
          <div className="photo p-5 flex items-center">
            <div className="image w-[55px] h-[55px] flex items-center justify-center rounded-full bg-gray-200 mr-3">
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1196_22316)">
                  <path d="M30.7589 33.6467C27.5204 36.3707 23.4395 37.9997 19.0006 37.9997C14.5617 37.9997 10.4812 36.3707 7.24221 33.6467C5.66519 32.3206 4.28631 30.7373 3.16699 28.9507C4.70755 27.5019 7.72343 26.4007 9.27742 25.6589C10.2456 25.1963 11.3409 24.917 11.9205 24.4473L14.5631 21.7191L13.2418 17.7799C11.6307 17.2875 10.8823 13.2343 11.9205 13.1332C11.5871 11.1864 11.2637 8.57689 11.6389 6.69225C12.0347 3.81984 15.1743 1.58301 18.9905 1.58301C22.6425 1.58301 25.6743 3.63194 26.2749 6.32517C26.7782 8.22676 26.4347 11.0566 26.0787 13.1327C27.1169 13.2338 26.3958 17.2763 24.7838 17.7691L23.4361 21.7181L26.0797 24.4462C26.6583 24.916 27.7536 25.1958 28.7223 25.6578C30.2772 26.3997 33.2931 27.5014 34.8337 28.9502C33.7143 30.7378 32.3355 32.3211 30.7589 33.6467Z" fill="#64748B" />
                </g>
                <defs>
                  <clipPath id="clip0_1196_22316">
                    <rect width="38" height="38" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="title font-semibold">{t('photo')}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentOne;
