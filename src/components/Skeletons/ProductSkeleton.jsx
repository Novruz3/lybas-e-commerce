import React from 'react';

function ProductSkeleton({className}) {
  return (
    <div className={'one-product-skeleton w-full animate-pulse '+className}>
      <div className='h-[200px] sm:h-[250px] bg-gray-200 rounded-lg'></div>
      <div className='w-[70%] h-[30px] mt-3 rounded bg-gray-200'></div>
      <div className='flex justify-between'>
        <div className='w-[50%] h-[30px] mt-3 rounded bg-gray-200'></div>
        <div className='w-[20%] h-[30px] mt-3 mr-5 rounded bg-gray-200'></div>
      </div>
      <div className='w-[40%] h-[20px] mt-2 rounded bg-gray-200'></div>
    </div>
  );
}

export default ProductSkeleton;
