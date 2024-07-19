import { t } from 'i18next';
import React from 'react';
import { Link } from 'react-router-dom';


function SellerBox() {
  return (
    <Link to='/' className='seller p-5 rounded-lg shadow-lybas-1 mb-5 hidden md:block'>
      <div className="seller_name text-lg font-semibold mb-[15px]">{t('seller')}</div>
      <div className="seller_address flex">
        <svg className='mr-4 h-full' width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="70" height="70" rx="8" fill="#64748B" />
          <path d="M19.6667 23.5001V19.6667H50.3333V23.5001H19.6667ZM19.6667 50.3334V38.8334H17.75V35.0001L19.6667 25.4167H50.3333L52.25 35.0001V38.8334H50.3333V50.3334H46.5V38.8334H38.8333V50.3334H19.6667ZM23.5 46.5001H35V38.8334H23.5V46.5001Z" fill="white" />
        </svg>
        <div className='flex flex-col'>
          <span className='font-semibold'>Kümuş.G</span>
          <span className='text-lybas-gray'>105 Types of dresses</span>
        </div>
      </div>
    </Link>
  );
}

export default SellerBox;
