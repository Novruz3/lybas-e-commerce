import React from 'react';

function BannerSkeleton() {
  return (
    <div className="banner-skeleton bg-gray-300 w-full h-[320px] md:h-[400px] lg:h-[500px] my-[20px] md:my-[30px] lg:my-[40px] p-10 pt-40 rounded-lg animate-pulse" >
      <div className='w-3/5 h-5 md:h-10 lg:h-20 bg-gray-400 mb-3 md:mb-10 rounded-full'></div>
      <div className='w-2/5 h-5 md:h-10 lg:h-20 bg-gray-400 rounded-full'></div>
    </div>
  );
}

export default BannerSkeleton;
