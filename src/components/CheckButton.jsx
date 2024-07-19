import React, { useState } from 'react';

function CheckButton({ text = '', setData, name, value, checked, color = null }) {

  const check = () => {
    setData(name, value)
  }

  if (!color) {
    return (
      <div className='item' onClick={check}>
        {
          !checked ?
            <span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="19" height="19" rx="3.5" fill="white" stroke="#64748B" />
              </svg>
            </span>
            :
            <span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="20" rx="4" fill="#1A54EB" />
                <path d="M14.5281 7.4936C14.4237 7.38449 14.2596 7.38449 14.1551 7.4936L8.70927 13.0115C8.6645 13.0583 8.60482 13.0583 8.56006 13.0115L5.85952 10.2681C5.75507 10.159 5.59095 10.159 5.48651 10.2681C5.38207 10.3772 5.38207 10.5487 5.48651 10.6578L8.18706 13.4012C8.30642 13.5259 8.47054 13.5882 8.61974 13.5882C8.78387 13.5882 8.93307 13.5259 9.05243 13.4012L14.4983 7.88328C14.6176 7.77417 14.6176 7.60271 14.5281 7.4936Z" fill="white" />
                <path fillRule="evenodd" clipRule="evenodd" d="M14.8326 7.21891L14.8426 7.23105C15.0602 7.49632 15.0634 7.91328 14.7816 8.17982L9.34363 13.6897C9.14781 13.893 8.89365 14 8.61974 14C8.36597 14 8.09529 13.8967 7.89568 13.6895L5.19286 10.9439C4.93569 10.6752 4.93572 10.2508 5.19289 9.98211C5.45701 9.70619 5.88561 9.70535 6.15072 9.9796L8.63494 12.5032L13.8642 7.20479C14.1293 6.93081 14.5577 6.93174 14.8217 7.20757L14.8326 7.21891ZM5.85952 10.2681C5.75507 10.159 5.59095 10.159 5.48651 10.2681C5.38207 10.3772 5.38207 10.5487 5.48651 10.6578L8.18706 13.4012C8.30642 13.5259 8.47054 13.5882 8.61974 13.5882C8.78387 13.5882 8.93307 13.5259 9.05243 13.4012L14.4983 7.88328C14.6176 7.77417 14.6176 7.60271 14.5281 7.4936C14.4237 7.38449 14.2596 7.38449 14.1551 7.4936L8.70927 13.0115C8.6645 13.0583 8.60482 13.0583 8.56006 13.0115L5.85952 10.2681Z" fill="white" />
              </svg>
            </span>
        }
        <p>{text}</p>
      </div>
    );
  }
  return (
    <div className={'mr-2 mb-2 rounded-full '+(checked ? 'p-1 border border-lybas-blue' : 'p-1 border border-white')}>
      <button onClick={check} className={'block rounded-full w-5 h-5'} style={{ background: color }}></button>
    </div>
  )
}

export default CheckButton;
