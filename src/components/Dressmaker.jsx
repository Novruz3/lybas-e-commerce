import { t } from 'i18next'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ip from '../common/Config'
import image from '../assets/images/lybas_black.svg'

function Dressmaker({className, data}) {
  const navigate = useNavigate();
  return (
    <div className={'dressmaker '+className}>
      <div className="bg-white">
        <div className="mx-auto max-w-full lg:max-w-7xl">
          <div className="group relative">
            <div className="overflow-hidden relative">
              {
                data.image ? 
                <img src={ip +'/'+ data.image} alt="" className='w-full object-cover object-center lg:h-full lg:w-full rounded-t-lg md:group-hover:opacity-75 lg:h-80' style={{ border: '1.5px solid rgba(100, 116, 139, 0.1)' }} />
                :<img className='w-full object-cover object-center lg:h-full lg:w-full rounded-t-lg md:group-hover:opacity-75 lg:h-80' style={{ border: '1.5px solid rgba(100, 116, 139, 0.1)' }} src={image} alt='default image'/>
              }
              <button onClick={()=>navigate('/dressmakers/'+data.id)} className='dressmaker-more-button hidden md:flex justify-between items-center py-[6px] px-[16px] bg-lybas-blue text-white rounded absolute bottom-[10px] right-[10px] transition-opacity duration-300 md:opacity-0 group-hover:opacity-[1]'>
                <svg className='mr-[16px]' width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.4 13L0 11.6L9.6 2H1V0H13V12H11V3.4L1.4 13Z" fill="white" />
                </svg>
                <span className='text-base'>{t('more')}</span>
              </button>
            </div>
            <div className="mt-4">
              <h3 className="text-base text-gray-700 text-center w-full font-bold mb-[8px]">
                {data?.name}
              </h3>
              <p className="text-sm text-gray-500 text-center">{t(data?.welayat)}</p>
            </div>
            <button onClick={()=>navigate('/dressmakers/'+data.id)} className='dressmaker-more-button w-full flex md:hidden justify-center items-center py-[6px] px-[16px] mt-2 bg-lybas-blue text-white rounded'>
              <svg className='mr-[16px]' width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.4 13L0 11.6L9.6 2H1V0H13V12H11V3.4L1.4 13Z" fill="white" />
              </svg>
              <span className='text-base'>{t('more')}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dressmaker
