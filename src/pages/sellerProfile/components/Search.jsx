import { t } from 'i18next';
import React, { useEffect, useState,useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Filter from './Filter';
import Datepicker from "react-tailwindcss-datepicker";
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataMaterials, setLimit as setLimitMaterial } from '../../../redux/features/Materials';
import { fetchDataCategories, setLimit as setLimitCategory } from '../../../redux/features/Categories';
import { fetchDataSizes, setLimit as setLimitSize } from '../../../redux/features/Sizes';
import { AppContext } from '../../../App';

const welayat = [{ text: 'ashgabat' }, { text: 'ahal' }, { text: 'balkan' }, { text: 'dashoguz' }, { text: 'lebap' }]

function Search({ className, title, action = null, filter = [], setDate, setSearch, setWelayat, longFilter = false, setCategory, setSize,setMaterial }) {
  const {lang} = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [dropdown, setDropdown] = useState(-1);
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11)
  });
  const dataMaterial = useSelector((state) => state?.Materials?.data);
  const dataCategory = useSelector((state) => state?.Categories?.data);
  const dataSize = useSelector((state) => state?.Sizes?.data);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/dresses') {
      dispatch(fetchDataCategories())
      dispatch(fetchDataSizes())
      dispatch(fetchDataMaterials())
    }
  }, [])

  const handleValueChange = newValue => {
    setValue(newValue)
    setDate(newValue);
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    setSearch(e.target.value)
  }

  const handleDropdown = (index) => {
    if(dropdown < 0 || dropdown !== index){
      setDropdown(index)
    }else{
      setDropdown(-1)
    }
  }

  return (
    <div className={'search p-5 bg-white rounded-lg shadow-lybas-1 w-full ' + className}>
      <div className="search_header flex justify-between items-center">
        <div className="search_header_title text-lg font-bold">{t(title)}</div>
        {
          action && (
            <Link to={action.link} className='text-white bg-lybas-blue px-5 py-3 rounded-lg hover:bg-blue-700'>{t(action.text)}</Link>
          )
        }
      </div>
      <div className="search_header_actions mt-5 flex justify-between items-center">
        <div className="search_header_actions_search w-1/3 border flex items-center py-2 px-5 rounded-lg">
          <svg className='mr-2.5' width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M7.79175 2.83366C5.05334 2.83366 2.83341 5.05358 2.83341 7.79199C2.83341 10.5304 5.05334 12.7503 7.79175 12.7503C10.5302 12.7503 12.7501 10.5304 12.7501 7.79199C12.7501 5.05358 10.5302 2.83366 7.79175 2.83366ZM1.41675 7.79199C1.41675 4.27118 4.27093 1.41699 7.79175 1.41699C11.3126 1.41699 14.1667 4.27118 14.1667 7.79199C14.1667 11.3128 11.3126 14.167 7.79175 14.167C4.27093 14.167 1.41675 11.3128 1.41675 7.79199Z" fill="#64748B" />
            <path fillRule="evenodd" clipRule="evenodd" d="M11.2929 11.2924C11.5695 11.0158 12.018 11.0158 12.2946 11.2924L15.3759 14.3737C15.6525 14.6503 15.6525 15.0988 15.3759 15.3754C15.0993 15.652 14.6508 15.652 14.3742 15.3754L11.2929 12.2942C11.0163 12.0175 11.0163 11.569 11.2929 11.2924Z" fill="#64748B" />
          </svg>
          <input className='w-full outline-none' value={searchValue} onChange={handleSearch} type="text" placeholder={t('searchHere')} />
        </div>
        <div className="search_header_actions_filter-date flex">
          {
            filter.length > 0 &&
            <Filter open={open} setOpen={setOpen}>
              {
                filter.map((list, index) => (
                  <button onClick={() => (setWelayat(list.text), setOpen(false))} className="list w-[200px] text-lybas-gray py-2 px-5 text-left hover:bg-blue-100 hover:text-blue-600" key={index}>{t(list.text)}</button>
                ))
              }
            </Filter>
          }
          {
            longFilter && <Filter open={open} setOpen={setOpen}>
              <div className='dropdown rounded-lg overflow-hidden'>
                {/* Category */}
                <button onClick={() => handleDropdown(0)} className="dropdown_head flex justify-between w-[200px] py-2 px-5 items-center text-left hover:bg-blue-50 hover:text-blue-600">
                  <span className='text-lybas-gray'>{t('allCategories')}</span>
                  <svg className={dropdown === 0 ? '-rotate-180' : ''} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.99998 14.1667L3.33331 8.08567L4.88887 6.66675L9.99998 11.3289L15.1111 6.66675L16.6666 8.08567L9.99998 14.1667Z" fill="#64748B" />
                  </svg>
                </button>
                {
                  dropdown === 0 && dataCategory.map((list, index) => (
                    <button onClick={() => (setCategory(list.id), setOpen(false))} className="list w-[200px] text-lybas-gray py-2 px-5 pl-10 text-left hover:bg-blue-100 hover:text-blue-600" key={index}>{list['name_'+lang]}</button>
                  ))
                }
                {/* Size */}
                <button onClick={() => handleDropdown(1)} className="dropdown_head flex justify-between w-[200px] py-2 px-5 items-center text-left hover:bg-blue-50 hover:text-blue-600">
                  <span className='text-lybas-gray'>{t('size')}</span>
                  <svg className={dropdown === 1 ? '-rotate-180' : ''} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.99998 14.1667L3.33331 8.08567L4.88887 6.66675L9.99998 11.3289L15.1111 6.66675L16.6666 8.08567L9.99998 14.1667Z" fill="#64748B" />
                  </svg>
                </button>
                {
                  dropdown === 1 && dataSize.map((list, index) => (
                    <button onClick={() => (setSize(list.id), setOpen(false))} className="list w-[200px] text-lybas-gray py-2 px-5 pl-10 text-left hover:bg-blue-100 hover:text-blue-600" key={index}>{list.size}</button>
                  ))
                }
                {/* Material */}
                <button onClick={() => handleDropdown(2)} className="dropdown_head flex justify-between w-[200px] py-2 px-5 items-center text-left hover:bg-blue-50 hover:text-blue-600">
                  <span className='text-lybas-gray'>{t('fabric')}</span>
                  <svg className={dropdown === 2 ? '-rotate-180' : ''} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.99998 14.1667L3.33331 8.08567L4.88887 6.66675L9.99998 11.3289L15.1111 6.66675L16.6666 8.08567L9.99998 14.1667Z" fill="#64748B" />
                  </svg>
                </button>
                {
                  dropdown === 2 && dataMaterial.map((list, index) => (
                    <button onClick={() => (setMaterial(list.id), setOpen(false))} className="list w-[200px] text-lybas-gray py-2 px-5 pl-10 text-left hover:bg-blue-100 hover:text-blue-600" key={index}>{list['name_'+lang]}</button>
                  ))
                }
                {/* Welayat */}
                <button onClick={() => handleDropdown(3)} className="dropdown_head flex justify-between w-[200px] py-2 px-5 items-center text-left hover:bg-blue-50 hover:text-blue-600">
                  <span className='text-lybas-gray'>{t('province')}</span>
                  <svg className={dropdown === 3 ? '-rotate-180' : ''} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.99998 14.1667L3.33331 8.08567L4.88887 6.66675L9.99998 11.3289L15.1111 6.66675L16.6666 8.08567L9.99998 14.1667Z" fill="#64748B" />
                  </svg>
                </button>
                {
                  dropdown === 3 && welayat.map((list, index) => (
                    <button onClick={() => (setWelayat(list.text), setOpen(false))} className="list w-[200px] text-lybas-gray py-2 px-5 pl-10 text-left hover:bg-blue-100 hover:text-blue-600" key={index}>{t(list.text)}</button>
                  ))
                }
              </div>
            </Filter>
          }
          <div className="search_header_actions_date-picker border rounded-lg ml-5">
            <Datepicker value={value} onChange={handleValueChange} showShortcuts={true} primaryColor={"blue"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
