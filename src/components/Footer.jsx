import React, { useContext, useState } from 'react';
import { NavLink, Link } from "react-router-dom";

import { AppContext } from '../App';
import DeliveryAbroadPopup from './popups/deliveryAbroadPopup';
import Logo from '../assets/images/lybas_black_1.svg'
import { AxiosUser } from '../common/AxiosInstance';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ThanksNewsletterPopup from './popups/thanksNewsletterPopup';

const footer_rights_styles = {
  background: 'white',
  fontSize: '14px',
}

function Footer() {
  const { t } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const [newsletter,setNewsletter] = useState('');
  const [openNewsletter,setOpenNewsletter] = useState(false);

  const sendNewsletter = async(e)=>{
    e.preventDefault();
    if(newsletter){
      try {
        const res = await AxiosUser("/newsletter",{method:"POST",data:{email:newsletter}})
        if(res.status === 200){
          setOpenNewsletter(true)
          setNewsletter('');
        }
      } catch (error) {
       console.log(error); 
      }
    }else{
      toast.warning(t('fillTheGaps'), { position: 'bottom-right', autoClose: 2000 });
    }
  }
  return (
    <>
      <footer className="relative z-10 pt-10 md:pt-50 pb-10 lg:pt-[50px] lg:pb-[46px] mt-20 md:mt-[120px]" style={{ borderTop: '1px solid rgba(246, 246, 246, 1)', background: 'rgba(246, 246, 246, 1)' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="mb-3 md:mb-10 w-full pb-2 border-b border-b-white">
                <Link to="#" className="mb-0 md:mb-6 inline-block max-w-[160px]">
                  <img className='h-16 min-w-[150px]' src={Logo} alt="" />
                </Link>
                <p className="text-dark mt-5 md:mt-0 flex items-center text-sm font-medium">
                  <Link to='https://www.instagram.com/lybas.com.tm/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==' target="_blank" className="text-primary mr-[36px]">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_522_699)">
                        <path d="M12.8336 10.5C12.8336 11.7889 11.7889 12.8336 10.5 12.8336C9.21113 12.8336 8.16638 11.7898 8.16638 10.5C8.16638 9.21113 9.21113 8.16638 10.5 8.16638C11.7889 8.16638 12.8336 9.21113 12.8336 10.5ZM16.1989 7.672C16.2321 8.40963 16.2391 8.631 16.2391 10.5C16.2391 12.369 16.2321 12.5904 16.1989 13.3289C16.1114 15.2101 15.2285 16.1122 13.3298 16.198C12.5913 16.2312 12.3699 16.2391 10.5 16.2391C8.631 16.2391 8.40875 16.2321 7.672 16.1989C5.76975 16.1123 4.88862 15.2084 4.80288 13.3298C4.76875 12.5904 4.76087 12.369 4.76087 10.5C4.76087 8.631 4.76875 8.40963 4.802 7.672C4.88863 5.789 5.77238 4.88862 7.67113 4.80288C8.40963 4.76875 8.631 4.76175 10.5 4.76175C12.369 4.76175 12.5912 4.76875 13.3289 4.802C15.2259 4.88863 16.1114 5.789 16.1989 7.672ZM14.0945 10.5C14.0945 8.51462 12.4845 6.9055 10.5 6.9055C8.51462 6.9055 6.9055 8.51462 6.9055 10.5C6.9055 12.4854 8.5155 14.0945 10.5 14.0945C12.4854 14.0945 14.0945 12.4854 14.0945 10.5ZM15.0763 6.76375C15.0763 6.3 14.7 5.92375 14.2362 5.92375C13.7725 5.92375 13.3963 6.3 13.3963 6.76375C13.3963 7.2275 13.7725 7.60375 14.2362 7.60375C14.7009 7.60375 15.0763 7.2275 15.0763 6.76375ZM21 0V21H0V0H21ZM17.5 10.5C17.5 8.5995 17.4921 8.36062 17.458 7.61425C17.3434 5.075 15.9311 3.65925 13.3866 3.54287C12.6394 3.50787 12.4014 3.5 10.5 3.5C8.59863 3.5 8.3615 3.50787 7.61425 3.542C5.0715 3.65837 3.65925 5.06888 3.542 7.61338C3.50787 8.36063 3.5 8.5995 3.5 10.5C3.5 12.4014 3.50787 12.6394 3.542 13.3857C3.65925 15.9285 5.06975 17.3416 7.61425 17.458C8.3615 17.4921 8.59863 17.5 10.5 17.5C12.4014 17.5 12.6394 17.4921 13.3866 17.458C15.9259 17.3416 17.3434 15.9311 17.458 13.3857C17.4921 12.6394 17.5 12.4014 17.5 10.5Z" fill="#0E1217" />
                      </g>
                      <defs>
                        <clipPath id="clip0_522_699">
                          <rect width="21" height="21" rx="4" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                  <Link to="https://www.tiktok.com/@lybas.com.tm?is_from_webapp=1&sender_device=pc" target="_blank" className="text-primary mr-[36px]">
                    <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.7728 5.40744C14.8158 5.20271 13.9491 4.69765 13.2992 3.96587C12.6493 3.23409 12.2502 2.31385 12.1599 1.33931V0.916687H8.85846V14.019C8.85642 14.5991 8.67268 15.1639 8.33307 15.6342C7.99345 16.1044 7.51503 16.4564 6.96503 16.6407C6.41504 16.8251 5.82111 16.8324 5.26672 16.6618C4.71233 16.4911 4.22533 16.1511 3.87417 15.6894C3.51756 15.22 3.31974 14.6492 3.30939 14.0598C3.29905 13.4704 3.47672 12.893 3.81664 12.4113C4.15656 11.9297 4.64106 11.5688 5.19988 11.3811C5.7587 11.1934 6.36279 11.1886 6.92455 11.3673V8.01314C5.67187 7.83997 4.39638 8.06268 3.27651 8.65012C2.15663 9.23755 1.24838 10.1603 0.678782 11.2894C0.109186 12.4184 -0.0932596 13.6973 0.0997615 14.9471C0.292783 16.1969 0.871616 17.355 1.7553 18.2596C2.59802 19.1219 3.67856 19.7135 4.85901 19.9589C6.03946 20.2043 7.26625 20.0923 8.3828 19.6374C9.49934 19.1824 10.455 18.405 11.1277 17.4045C11.8005 16.404 12.1599 15.2257 12.1599 14.02V7.32506C13.4942 8.27893 15.0939 8.79039 16.734 8.78748V5.5071C16.411 5.5075 16.0889 5.4741 15.7728 5.40744Z" fill="#0E1217" />
                    </svg>
                  </Link>
                  <Link to='https://s.imoim.net/xRdY2W' target="_blank" className="text-primary mr-3">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_522_705)">
                        <path d="M10.7095 21C8.63871 21.0034 6.6156 20.3663 4.90712 19.1729C4.12796 19.5911 2.37554 19.6838 1.61107 19.5915C0.499749 19.4572 -0.666281 18.518 0.456598 17.6045C2.1954 16.1902 1.72846 15.6299 1.72846 15.6299C0.867118 14.063 0.416094 12.2963 0.418867 10.5C0.418867 4.70099 5.02615 0 10.7095 0C16.3927 0 21 4.70099 21 10.5C21 16.299 16.3927 21 10.7095 21ZM10.7095 1.5366C9.13957 1.53783 7.59821 1.96475 6.24336 2.7736C4.8885 3.58245 3.76887 4.74415 2.9992 6.13965C2.22953 7.53515 1.8375 9.11427 1.86328 10.7152C1.88907 12.3161 2.33174 13.8812 3.14593 15.2502C3.14593 15.2502 3.72484 16.7846 2.23855 17.9268C3.16931 18.2469 5.13681 17.6583 5.23755 17.6583C6.34657 18.5475 7.64793 19.1533 9.03314 19.4254C10.4183 19.6975 11.8473 19.628 13.2008 19.2225C14.5543 18.8171 15.7931 18.0876 16.8141 17.0947C17.835 16.1019 18.6084 14.8745 19.0699 13.515C19.5313 12.1554 19.6674 10.7031 19.4668 9.27896C19.2662 7.85486 18.7347 6.5003 17.9167 5.32822C17.0986 4.15613 16.0177 3.20047 14.764 2.54092C13.5103 1.88136 12.1201 1.53702 10.7095 1.5366ZM15.4443 13.1461C14.3601 13.1461 13.526 12.4189 13.526 11.1965C13.526 9.97416 14.3146 9.19281 15.5049 9.19281C16.6423 9.19281 17.4005 9.98964 17.4005 11.1269C17.4005 12.5117 16.4376 13.1461 15.4443 13.1461ZM15.4747 10.0283C14.9212 10.0283 14.7164 10.6085 14.7164 11.1656C14.7164 11.8154 14.9818 12.3028 15.4747 12.3028C15.922 12.3028 16.2101 11.8463 16.2101 11.1656C16.2101 10.6008 15.9978 10.0283 15.4747 10.0283ZM12.2525 13.061H11.6315C11.3365 13.061 11.3957 12.6264 11.3957 12.6264V11.0031C11.3957 10.4538 11.2213 10.1366 10.8498 10.1366C10.5844 10.1366 10.3949 10.3223 10.319 10.5467C10.2886 10.6442 10.2732 10.746 10.2735 10.8484V12.6898C10.2735 12.6898 10.2771 13.061 9.95443 13.061H9.44205C9.44205 13.061 9.1514 13.0383 9.1514 12.6581V10.9412C9.1514 10.4616 8.98462 10.1366 8.62064 10.1366C8.32499 10.1366 8.15058 10.3687 8.08233 10.5622C8.0488 10.6562 8.03335 10.756 8.0368 10.8561V12.6581C8.0368 12.6581 8.07692 13.061 7.78061 13.061H7.28373C6.91466 13.061 6.91466 12.6581 6.91466 12.6581V10.4848C6.91466 10.116 6.89415 9.50588 6.89415 9.50588C6.89305 9.4747 6.89845 9.44363 6.90999 9.41473C6.92152 9.38583 6.93893 9.35975 6.96107 9.33821C6.9832 9.31666 7.00957 9.30015 7.03841 9.28976C7.06726 9.27936 7.09795 9.27532 7.12844 9.2779H7.60981C7.67341 9.27818 7.73494 9.30093 7.78393 9.34229C7.83292 9.38365 7.86633 9.44105 7.87848 9.50472L7.90793 9.78851H7.93065C8.08988 9.54864 8.41597 9.19281 9.0528 9.19281C9.53048 9.19281 9.90956 9.44038 10.0688 9.83494H10.084C10.2119 9.65196 10.3743 9.49678 10.5616 9.37846C10.7753 9.25125 11.0194 9.18699 11.2668 9.19281C11.9795 9.19281 12.5178 9.70342 12.5178 10.8329V12.6581C12.5178 13.0341 12.2525 13.061 12.2525 13.061ZM5.10268 8.49362C4.73878 8.49362 4.49612 8.23057 4.50376 7.90562C4.49612 7.56527 4.73878 7.30992 5.11031 7.30992C5.48185 7.30992 5.71687 7.56527 5.72442 7.90562C5.72442 8.23057 5.48185 8.49362 5.10268 8.49362ZM4.76823 9.2779H5.43591C5.43591 9.2779 5.68652 9.27999 5.68652 9.56855V12.7215C5.68652 12.7215 5.70195 13.061 5.42041 13.061H4.73714C4.73714 13.061 4.53403 13.0484 4.53403 12.769V9.52103C4.53403 9.52103 4.53484 9.2779 4.76823 9.2779Z" fill="#0E1217" />
                      </g>
                      <defs>
                        <clipPath id="clip0_522_705">
                          <rect width="21" height="21" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </p>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
              <div className="w-full">
                <h4 className="text-dark mb-2 md:mb-[20px] text-lg font-bold" style={{ fontSize: '16px', textTransform: 'uppercase' }}>{t('aboutUs')}</h4>
                <ul>
                  <li>
                    <Link to='/aboutUs'
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                      style={{ fontSize: '14px' }}
                    >
                      {t('aboutUs')}
                    </Link>
                  </li>
                  <li>
                    <Link to='/deliveryPayment'
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                      style={{ fontSize: '14px' }}
                    >
                      {t('deliveryAndPaymentOptions')}
                    </Link>
                  </li>
                  <li>
                    <Link to='/termsCondition'
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                      style={{ fontSize: '14px' }}
                    >
                      {t('termAndConditions')}
                    </Link>
                  </li>
                  <li>
                    <button
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                      style={{ fontSize: '14px' }}
                      onClick={()=>setOpen(true)}
                    >
                      {t('deliveryAbroad')}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="contact w-full px-4 sm:w-1/2 lg:w-3/12 hidden md:block">
              <div className="w-full">
                <h4 className="text-dark mb-2 md:mb-[20px] text-lg font-bold" style={{ fontSize: '16px', textTransform: 'uppercase' }}>{t('contactUs')}</h4>
                <ul>
                  <li>
                    <span
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                      style={{ fontSize: '14px' }}
                    >
                      +993 61 163167
                    </span>
                  </li>
                  <li>
                    <span
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                      style={{ fontSize: '14px' }}
                    >
                       info@lybas.com.tm
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 lg:w-3/12 mb-6 md:mb-0">
              <div className="w-full">
                <h4 className="text-dark mb-2 md:mb-[20px] text-lg font-bold" style={{ fontSize: '16px', textTransform: 'uppercase' }}>{t('subcribeNewsLetter')}</h4>
                <div className="footer-input-focus relative mt-2 rounded-md shadow-sm">
                  <form onSubmit={sendNewsletter}>
                  <input
                    type="email"
                    required
                    name="message"
                    id="message"
                    value={newsletter}
                    onChange={(e)=>setNewsletter(e.target.value)}
                    style={{
                      outline: 'none',
                    }}
                    className="block w-full rounded-md border-0 py-1.5 pl-[13px] pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder={t('enterEmail')}
                  />
                  <div className="footer-input-button-container absolute inset-y-0 right-0 flex items-center">
                    <span className="footer-input-devider h-full w-px" style={{ background: '#d1d5db' }} aria-hidden="true" />
                    <button type='submit' className='mr-[15px] ml-[15px]'>
                      <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM10 9L18 4V2L10 7L2 2V4L10 9Z" fill="#1A54EB" />
                      </svg>
                    </button>
                  </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="contact w-full px-4 sm:w-1/2 lg:w-3/12  md:hidden mt-3">
              <div className="w-full">
                <h4 className="text-dark mb-2 md:mb-[20px] font-bold" style={{textTransform: 'uppercase' }}>{t('contactUs')}</h4>
                <ul className='flex justify-between md:block'>
                  <li>
                    <span
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                      style={{ fontSize: '14px' }}
                    >
                      +993 61 163167
                    </span>
                  </li>
                  <li>
                    <span
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                      style={{ fontSize: '14px' }}
                    >
                      lybas_info@gmail.com
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4' style={footer_rights_styles}>
        © {t('allRightsReserved')}
      </div>
      <DeliveryAbroadPopup open={open} setOpen={setOpen}/>
      <ThanksNewsletterPopup open={openNewsletter} setOpen={setOpenNewsletter}/>
    </>
  );
}

export default Footer;
