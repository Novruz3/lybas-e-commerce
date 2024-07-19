import React, { useRef, useState, useEffect } from 'react';
import ip from '../common/Config';

function ProductComment({ data }) {
  const [stars, setStars] = useState(Array.from({ length: data?.rate }));
  const [freeStars, setFreeStars] = useState(Array.from({ length: 5 - data?.rate }));
  const [lineClampOpen, setLineClampOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const galleryRef = useRef(null);
  const littleImagesRef = useRef(null);
  const [user, setUser] = useState({})
  const [activeImage,setActiveImage] = useState(0)

  useEffect(() => {
    setUser(data?.user);

    const handleClickOutside = (event) => {
      if (galleryRef.current && !galleryRef.current.contains(event.target) && !littleImagesRef.current.contains(event.target)) {
        setGalleryOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="dress-page_left_comments_comment flex flex-col md:flex-row items-start md:justify-between p-3 md:p-[25px] mb-[15px] bg-lybas-light-gray rounded-lg">
      <div className='flex'>
        <div className="dress-page_left_comments_comment_image mr-[15px]">
          <img src={ip + '/' + user?.image} alt="" className="min-w-[60px] max-w-[60px] object-cover min-h-[60px] max-h-[60px] rounded-full" />
        </div>
        <div className="dress-page_left_comments_comment_content">
          <div className="dress-page_left_comments_comment_content_name font-semibold">{user?.username}</div>
          <div className="dress-page_left_comments_comment_content_rate my-[10px]">
            <div className="stars flex items-center">
              {stars.map((e, key) => (
                <svg
                  className="mr-[2px]"
                  key={key + 100}
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.9923 6.10156L9.75008 5.44531L7.82821 1.41406C7.68758 1.13281 7.31258 1.13281 7.17196 1.41406L5.25008 5.46875L1.03133 6.10156C0.726647 6.14844 0.60946 6.54688 0.843835 6.75781L3.91415 9.92188L3.18758 14.3516C3.14071 14.6562 3.4454 14.9141 3.72665 14.7266L7.54696 12.6406L11.3438 14.7266C11.6016 14.8672 11.9298 14.6328 11.8595 14.3516L11.1329 9.92188L14.2032 6.75781C14.3907 6.54688 14.297 6.14844 13.9923 6.10156Z"
                    fill="#FFA645"
                  />
                </svg>
              ))}
              {freeStars.map((e, key) => (
                <svg
                  className="mr-[2px]"
                  key={key}
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.63289 15.1953C3.44539 15.1953 3.25789 15.1484 3.09383 15.0313C2.78914 14.8203 2.62508 14.4453 2.69539 14.0703L3.3282 10.0859L0.586015 7.25C0.328203 6.99219 0.234453 6.59375 0.35164 6.24219C0.468828 5.89063 0.750078 5.65625 1.10164 5.58594L4.92195 4.97656L6.63289 1.34375C6.79695 1.01563 7.12508 0.804688 7.47664 0.804688C7.85164 0.804688 8.15633 1.01563 8.32039 1.34375L10.0782 4.95313L13.8985 5.5625C14.2501 5.60938 14.5313 5.86719 14.6485 6.21875C14.7657 6.57031 14.672 6.96875 14.4141 7.22656L11.6485 10.0625L12.3048 14.0703C12.3751 14.4453 12.211 14.8203 11.9063 15.0313C11.6251 15.2422 11.2501 15.2656 10.922 15.1016L7.50008 13.2266L4.0782 15.1016C3.93758 15.1719 3.79695 15.1953 3.63289 15.1953ZM1.17195 6.6875L4.00789 9.59375C4.14851 9.73438 4.21883 9.94531 4.17195 10.1563L3.5157 14.2109C3.49226 14.3047 3.56258 14.3516 3.58601 14.375C3.63289 14.4219 3.67976 14.3984 3.7032 14.375L7.21883 12.4531C7.40633 12.3594 7.61726 12.3594 7.80476 12.4531L11.3204 14.3516C11.3438 14.3516 11.3673 14.375 11.4376 14.3516C11.461 14.3281 11.5079 14.2813 11.5079 14.1875L10.8516 10.1094C10.8282 9.89844 10.8751 9.71094 11.0157 9.54688L13.8282 6.64063C13.8985 6.57031 13.8751 6.5 13.8751 6.45313C13.8751 6.42969 13.8282 6.35938 13.7813 6.35938L9.84383 5.75C9.63289 5.72656 9.46883 5.58594 9.37508 5.39844L7.61726 1.69531C7.59383 1.625 7.54695 1.625 7.50008 1.625C7.47664 1.625 7.42976 1.64844 7.38289 1.69531L5.62508 5.42188C5.53133 5.60938 5.36726 5.75 5.15633 5.77344L1.24227 6.40625C1.17195 6.40625 1.14852 6.47656 1.14852 6.5C1.12508 6.52344 1.10164 6.61719 1.17195 6.6875Z"
                    fill="#FFA645"
                  />
                </svg>
              ))}
            </div>
          </div>
          <div onClick={() => setLineClampOpen(!lineClampOpen)} className={"dress-page_left_comments_comment_content_definition cursor-pointer mb-[10px] " + (!lineClampOpen && 'line-clamp-2')}>
            {data?.text}
          </div>
          <div ref={littleImagesRef} className="dress-page_left_comments_comment_content_connects flex items-center">
            {
              data?.images?.length > 0 && data.images.map((image, index) => {
                if (index < 3) {
                  return (
                    <img key={index} src={ip + '/' + image.image} onClick={() => setGalleryOpen(true)} alt="" className="h-[48px] w-[48px] mr-[8px] rounded" />
                  )
                }
              }
              )
            }
            {
              data?.images?.length > 3 &&
              <div className="more h-[48px] w-[48px] mr-[8px] rounded flex items-center justify-center bg-lybas-gray text-white">
                <span>+{data?.images?.length-3}</span>
              </div>
            }
          </div>
          {/* Image show like gallery */}
          {
            galleryOpen &&
            <div className='gallery-container w-full h-full fixed z-[100] top-0 left-0 bg-[#5d5c5c61] flex items-center justify-center'>
              <div ref={galleryRef} className="gallery-container_image-container w-full md:w-3/5 lg:w-2/5 bg-white flex flex-col items-end rounded-lg overflow-hidden p-5">
                <button onClick={() => setGalleryOpen(false)} className='mb-5'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" fill="#0E1217" />
                  </svg>
                </button>
                <img className='w-full rounded-lg' src={ip + '/' + data?.images[activeImage].image} alt="" />
                <div className="gallery-container_small-images flex flex-wrap w-full">
                  {
                    data?.images?.length > 0 && data.images.map((image, index) => (
                      <img onClick={()=>setActiveImage(index)} key={index} className={'w-[48px] h-[48px] object-cover rounded-lg mr-2 mt-2 cursor-pointer ' +(activeImage === index ? 'opacity-50' : '')} src={ip + '/' + image.image} alt="" />
                    ))
                  }
                </div>
              </div>
            </div>
          }
        </div>
      </div>
      <div className="dress-page_left_comments_comment_time md:min-w-fit text-right mt-4 md:mt-0">{data?.createdAt?.split('T')[0]}</div>
    </div>
  );
}

export default ProductComment;
