import React from 'react';
import ProductSkeleton from './ProductSkeleton'

function BigProductsSkeleton() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10'>
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton className={'hidden md:block'}/>
    </div>
  );
}

export default BigProductsSkeleton;
