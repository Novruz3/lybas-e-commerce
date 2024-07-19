import { t } from 'i18next';
import React from 'react';

function StatisticaBox({ icon, name, date, price, percent, up, count }) {
  return (
    <div className='statistica-box shadow-lybas-1 p-5 rounded-lg bg-white w-full col-span-6'>
      <div className="statistica-box_top flex flex-wrap">
        <div className="statistica-box_top_icon p-3 bg-lybas-light-blue rounded-lg mr-3">
          {icon}
        </div>
        <div className="statistica-box_top_content flex flex-col justify-center">
          <div className='font-semibold'>{t(name)}</div>
          <div className="text-sm">{t(date)}</div>
        </div>
      </div>
      <div className="statistica-box_bottom flex flex-wrap items-end my-5">
        {
          price > -1 ?
            <div className='font-bold text-2xl mr-2'>{price}TMT</div>
            :
            <div className='font-bold text-2xl mr-2'>{count}</div>
        }
        <div className='flex items-center'>
          <span className={'text-sm ' + (up ? 'text-green-500' : 'text-red-500')}>{percent}%</span>
          {
            up ?
              <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.64284 2.8925L9.09103 6.245L10 5.36125L5 0.499999L4.49244e-07 5.36125L0.908974 6.245L4.35716 2.8925L4.35716 10.5L5.64284 10.5L5.64284 2.8925Z" fill="#45CB85" />
              </svg> :
              <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.64284 8.1075L9.09103 4.755L10 5.63875L5 10.5L4.49244e-07 5.63875L0.908974 4.755L4.35716 8.1075L4.35716 0.5L5.64284 0.5L5.64284 8.1075Z" fill="#FF3521" />
              </svg>
          }
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className={"bg-blue-600 h-2.5 rounded-full"} style={{width:(percent ? (percent > 100 ? `100%` : `${percent}%`) : 0)}}></div>
      </div>
    </div>
  );
}

export default StatisticaBox;
