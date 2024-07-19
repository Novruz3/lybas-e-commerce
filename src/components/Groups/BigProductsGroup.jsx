import React,{useState,useEffect} from 'react';
import Dress from '../../components/Dress';
import { AxiosCustom, AxiosUser } from '../../common/AxiosInstance';

function BigProductsGroup() {
  const [recom, setRecom] = useState([]);
  useEffect(() => {

    const getData = async () => {
      try {
        if (localStorage.getItem('lybas-user-token')) {
          const res = await AxiosUser("/products?sort=3&limit=3")
          setRecom(res.data)
        } else {
          const res = await AxiosCustom("/products?sort=3&limit=3")
          setRecom(res.data)
        }
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [])
  return (
    <div className="recommended-products_container grid grid-cols-2 md:grid-cols-3 gap-4">
      {
        recom[0] &&
        <Dress hover={'big'} data={recom[0]} />
      }
      {
        recom[1] &&
        <Dress hover={'big'} data={recom[1]} />
      }
      {
        recom[2] &&
        <Dress hover={'big'} className={'hidden md:block'} data={recom[2]} />
      }
    </div>
  );
}

export default BigProductsGroup;
