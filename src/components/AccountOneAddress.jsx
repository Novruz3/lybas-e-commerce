import React, { useEffect, useState } from 'react';
import Popup from './popups/addAddressPopup';
import DeleteAddressPopup from './popups/deleteAddressPopup';
import { t } from 'i18next';

function AccountOneAddress({active, address, action, className, data, setData, setAddresses,addresses }) {
  // const setData
  const [open,setOpen] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);

  return (
    <div
      className={"account_card_content_cards_card flex relative group p-5 pr-10 rounded-lg border hover:border-lybas-blue break-all "+className+(active ? ' border-lybas-blue' : '')}
      onClick={setData}
    >
      {/* hidden tick icon */}
      <div className={"transition-all duration-300  mr-3 min-w-[20px] opacity-0 group-hover:opacity-100 overflow-hidden "+(active?'opacity-100':'')}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.6 14.6L15.65 7.55L14.25 6.15L8.6 11.8L5.75 8.95L4.35 10.35L8.6 14.6ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20Z"
            fill="#1A54EB"
          />
        </svg>
      </div>
      {/* content */}
      <div className="content">
        <div className="address_name text-lybas-gray mb-2">{t(address.welayat)}</div>
        <div className="name text-lybas-gray mb-2">{address.address}</div>
      </div>
      {/* Buttons */}
      {
        action && <>
          <button onClick={()=>setOpen(true)} className="hidden absolute group-hover:block top-5 right-5">
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.3 6.925L12.05 2.725L13.45 1.325C13.8333 0.941667 14.3042 0.75 14.8625 0.75C15.4208 0.75 15.8917 0.941667 16.275 1.325L17.675 2.725C18.0583 3.10833 18.2583 3.57083 18.275 4.1125C18.2917 4.65417 18.1083 5.11667 17.725 5.5L16.3 6.925ZM14.85 8.4L4.25 19H0V14.75L10.6 4.15L14.85 8.4Z"
                fill="#64748B"
              />
            </svg>
          </button>
          <button onClick={()=>setDeletePopup(true)} className="hidden absolute group-hover:block top-14 right-5">
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 18C2.45 18 1.97917 17.8042 1.5875 17.4125C1.19583 17.0208 1 16.55 1 16V3H0V1H5V0H11V1H16V3H15V16C15 16.55 14.8042 17.0208 14.4125 17.4125C14.0208 17.8042 13.55 18 13 18H3ZM5 14H7V5H5V14ZM9 14H11V5H9V14Z"
                fill="#64748B"
              />
            </svg>
          </button>
        </>
      }
      <Popup open={open} setOpen={setOpen} edit={true} editData={address} setAddresses={setAddresses} addresses={addresses}/>
      <DeleteAddressPopup open={deletePopup} setOpen={setDeletePopup} address={address} setAddresses={setAddresses} addresses={addresses}/>
    </div>
  );
}

export default AccountOneAddress;
