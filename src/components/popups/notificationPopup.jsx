import { t } from 'i18next';
import React, { useEffect, useRef, useState } from 'react';
import MobileSlide from '../MobileSlide';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataNotifications } from '../../redux/features/Notifications';
import ip from '../../common/Config';
import { Link } from 'react-router-dom';

function NotificationPopup({ open, setOpen }) {
  const ref = useRef(null);
  const data = useSelector((state) => state?.Notifications?.data)
  const count = useSelector((state) => state?.Notifications?.count)
  const [toggle, setToggle] = useState(-1);
  const dispatch = useDispatch()
  const [user, setUser] = useState();

  useEffect(() => {
    if (localStorage.getItem('lybas-user-token')) {
      setUser(JSON.parse(localStorage.getItem('lybas-user')))
    }
    if (!data.length && localStorage.getItem('lybas-user-token')) dispatch(fetchDataNotifications());

    const handleClickOutside = (event) => {
      const el = document.querySelector("#root > div > div.bg-white > header > nav > div > div > div:nth-child(5) > div > div.relative.flex")
      if (ref.current && !ref.current.contains(event.target) && !el.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleFunc = (index) => {
    if (index === toggle) {
      setToggle(-1)
    } else {
      setToggle(index)
    }
  }
  return (
    <>
      <div ref={ref} className='notification hidden lg:block absolute z-[100] w-[400px] h-[300px] top-[35px] -right-[150px] bg-white shadow-lybas-1 rounded-lg overflow-hidden md:overflow-auto'>
        <div className="notification_title p-4 pb-0 font-bold text-lg text-left">{t('notification')} {count > 0 ? `(${count})` : ''}</div>
        {
          data?.length > 0 && data.map((noti, index) => {
            if (noti?.type === 'accepted') {
              return (
                <div onClick={() => toggleFunc(index)} key={index} className="notification_list flex justify-between p-4 hover:bg-gray-200 cursor-pointer">
                  <div className={"notification_list_content text-sm " + (toggle === index ? '' : 'line-clamp-3')}>
                    <div className='font-semibold mb-3'>{`${t('hi')} ${user?.username ? user?.username?.split(' ')[0] : ''}`}</div>
                    <div className='font-semibold mb-3'>{t('yourOrderConfirmedNotifStart') + noti?.text + t('yourOrderConfirmedNotifEnd')}</div>
                    <div className={'text-lybas-gray mb-3'}>{t('yourOrderConfirmedNotif2')}</div>
                    <div className={'text-lybas-gray'}>{t('yourOrderConfirmedNotif3')}</div>
                  </div>
                  <div className="notification_list_date ml-3 min-w-[100px]">{noti?.createdAt?.split('T')[0]}</div>
                </div>
              )
            } else if (noti?.type === 'register') {
              return (
                <div onClick={() => toggleFunc(index)} key={index} className="notification_list flex justify-between p-4 hover:bg-gray-200 cursor-pointer">
                  <div className={"notification_list_content text-sm " + (toggle === index ? '' : 'line-clamp-3')}>
                    <div className='font-semibold mb-3'>{`${t('welcomeAboardNotif')}`}</div>
                    <div className='font-semibold mb-3'>{t('welcomeAboardNotif2')}</div>
                    <div onClick={() => setOpen(false)} className={'text-lybas-gray mb-3'}>{t('welcomeAboardNotif3')} <Link className='text-lybas-blue' to={'/dresses'}>{t('link')}</Link></div>
                    <div className={'text-lybas-gray mb-3'}>{t('welcomeAboardNotif4')}</div>
                    <div>{t('welcomeAboardNotif5')}</div>
                  </div>
                  <div className="notification_list_date ml-3 min-w-[100px]">{noti?.createdAt?.split('T')[0]}</div>
                </div>
              )
            } else if (noti?.type === 'waiting') {
              return (
                <div onClick={() => toggleFunc(index)} key={index} className="notification_list flex justify-between p-4 hover:bg-gray-200 cursor-pointer">
                  <div className={"notification_list_content text-sm " + (toggle === index ? '' : 'line-clamp-3')}>
                    <div className='font-semibold mb-3'>{`${t('hi')} ${user?.username ? user?.username?.split(' ')[0] : ''}`}</div>
                    <div className='font-semibold mb-3'>{t('waitingNotif1') + noti?.text + t('waitingNotif2')}</div>
                    <div className={'text-lybas-gray mb-3'}>{t('waitingNotif3')}</div>
                    <div>{t('waitingNotif4')}</div>
                  </div>
                  <div className="notification_list_date ml-3 min-w-[100px]">{noti?.createdAt?.split('T')[0]}</div>
                </div>
              )
            } else if (noti?.type === 'rate') {
              return (
                <div onClick={() => toggleFunc(index)} key={index} className="notification_list flex justify-between p-4 hover:bg-gray-200 cursor-pointer">
                  <div className={"notification_list_content text-sm " + (toggle === index ? '' : 'line-clamp-3')}>
                    <div className='font-semibold mb-3'>{`${t('hi')} ${user?.username ? user?.username?.split(' ')[0] : ''}`}</div>
                    <div className='font-semibold mb-2'>{t('rateNotif1')}</div>
                    <div onClick={() => { setOpen(false) }}>
                      <Link to={'/account?type=orders'} className='text-lybas-blue mb-2 block'>{t('goOrder')}</Link>
                    </div>
                    <div>{t('rateNotif2')}</div>
                  </div>
                  <div className="notification_list_date ml-3 min-w-[100px]">{noti?.createdAt?.split('T')[0]}</div>
                </div>
              )
            } else if (noti?.type === 'public') {
              return (
                <div onClick={() => toggleFunc(index)} key={index} className="notification_list flex justify-between p-4 hover:bg-gray-200 cursor-pointer">
                  <div className="notification_list_content text-sm">
                    <div className='font-semibold mb-3'>{noti.name === 'order' ? t('orderNotification') : noti.name}</div>
                    <div className={'text-lybas-gray break-all ' + (toggle === index ? '' : 'line-clamp-2')}>{noti.name === 'order' ? t('orderNotificationBody') : noti.text}</div>
                    <div onClick={() => setOpen(false)}>
                      <Link to={noti?.link} className='text-lybas-blue font-semibold'>{t('link')}</Link>
                    </div>
                  </div>
                  <div className="notification_list_date ml-3 min-w-[100px]">{noti?.createdAt?.split('T')[0]}</div>
                </div>
              )
            }
          })
        }
      </div>
      <div>
        <MobileSlide open={open} setOpen={setOpen} title={'notification'}>
          {
            data?.length > 0 && data.map((noti, index) => {
              if (noti?.type === 'accepted') {
                return (
                  <div onClick={() => toggleFunc(index)} key={index} className="notification_list flex justify-between p-4 hover:bg-gray-200 cursor-pointer">
                    <div className={"notification_list_content text-sm " + (toggle === index ? '' : 'line-clamp-3')}>
                      <div className='font-semibold mb-3'>{`${t('hi')} ${user?.username ? user?.username?.split(' ')[0] : ''}`}</div>
                      <div className='font-semibold mb-3'>{t('yourOrderConfirmedNotifStart') + noti?.text + t('yourOrderConfirmedNotifEnd')}</div>
                      <div className={'text-lybas-gray mb-3'}>{t('yourOrderConfirmedNotif2')}</div>
                      <div className={'text-lybas-gray'}>{t('yourOrderConfirmedNotif3')}</div>
                    </div>
                    <div className="notification_list_date ml-3 min-w-[100px]">{noti?.createdAt?.split('T')[0]}</div>
                  </div>
                )
              } else if (noti?.type === 'register') {
                return (
                  <div onClick={() => toggleFunc(index)} key={index} className="notification_list flex justify-between p-4 hover:bg-gray-200 cursor-pointer">
                    <div className={"notification_list_content text-sm " + (toggle === index ? '' : 'line-clamp-3')}>
                      <div className='font-semibold mb-3'>{`${t('welcomeAboardNotif')}`}</div>
                      <div className='font-semibold mb-3'>{t('welcomeAboardNotif2')}</div>
                      <div onClick={() => setOpen(false)} className={'text-lybas-gray mb-3'}>{t('welcomeAboardNotif3')} <Link className='text-lybas-blue' to={'/dresses'}>{t('link')}</Link></div>
                      <div className={'text-lybas-gray mb-3'}>{t('welcomeAboardNotif4')}</div>
                      <div>{t('welcomeAboardNotif5')}</div>
                    </div>
                    <div className="notification_list_date ml-3 min-w-[100px]">{noti?.createdAt?.split('T')[0]}</div>
                  </div>
                )
              } else if (noti?.type === 'waiting') {
                return (
                  <div onClick={() => toggleFunc(index)} key={index} className="notification_list flex justify-between p-4 hover:bg-gray-200 cursor-pointer">
                    <div className={"notification_list_content text-sm " + (toggle === index ? '' : 'line-clamp-3')}>
                      <div className='font-semibold mb-3'>{`${t('hi')} ${user?.username ? user?.username?.split(' ')[0] : ''}`}</div>
                      <div className='font-semibold mb-3'>{t('waitingNotif1') + noti?.text + t('waitingNotif2')}</div>
                      <div className={'text-lybas-gray mb-3'}>{t('waitingNotif3')}</div>
                      <div>{t('waitingNotif4')}</div>
                    </div>
                    <div className="notification_list_date ml-3 min-w-[100px]">{noti?.createdAt?.split('T')[0]}</div>
                  </div>
                )
              } else if (noti?.type === 'rate') {
                return (
                  <div onClick={() => toggleFunc(index)} key={index} className="notification_list flex justify-between p-4 hover:bg-gray-200 cursor-pointer">
                    <div className={"notification_list_content text-sm " + (toggle === index ? '' : 'line-clamp-3')}>
                      <div className='font-semibold mb-3'>{`${t('hi')} ${user?.username ? user?.username?.split(' ')[0] : ''}`}</div>
                      <div className='font-semibold mb-2'>{t('rateNotif1')}</div>
                      <div onClick={() => { setOpen(false) }}>
                        <Link to={'/account?type=orders'} className='text-lybas-blue mb-2 block'>{t('goOrder')}</Link>
                      </div>
                      <div>{t('rateNotif2')}</div>
                    </div>
                    <div className="notification_list_date ml-3 min-w-[100px]">{noti?.createdAt?.split('T')[0]}</div>
                  </div>
                )
              } else if (noti?.type === 'public') {
                return (
                  <div onClick={() => toggleFunc(index)} key={index} className="notification_list flex justify-between p-4 hover:bg-gray-200 cursor-pointer">
                    <div className="notification_list_content text-sm">
                      <div className='font-semibold mb-3'>{noti.name === 'order' ? t('orderNotification') : noti.name}</div>
                      <div className={'text-lybas-gray break-all ' + (toggle === index ? '' : 'line-clamp-2')}>{noti.name === 'order' ? t('orderNotificationBody') : noti.text}</div>
                      <div onClick={() => setOpen(false)}>
                        <Link to={noti?.link} className='text-lybas-blue font-semibold'>{t('link')}</Link>
                      </div>
                    </div>
                    <div className="notification_list_date ml-3 min-w-[100px]">{noti?.createdAt?.split('T')[0]}</div>
                  </div>
                )
              }
            })
          }
        </MobileSlide>
      </div>
    </>
  );
}

export default NotificationPopup;