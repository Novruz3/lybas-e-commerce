import React, { useContext, useEffect, useState } from 'react';
import CheckButton from './CheckButton';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AppContext } from '../App';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';



const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: 'row',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
}));




const Sidebar = ({ setSortBy, sortBy, dressmakers = false, sizes, categories, materials, colors, sort, setSort }) => {
  const [sidebar, setSidebar] = useState(false);
  const [expanded, setExpanded] = useState(dressmakers ? 'panel5' : 'panel0');

  useEffect(() => {
    sidebar ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'auto';
  }, [sidebar])

  const getSortedData = (name, value) => {
    if (name === 'price') {
      setSort({ ...sort, price: value.min_price === sort.price.min_price ? {} : value })
    } else {
      const updatedArray = sort[name].includes(value)
        ? sort[name].filter((item) => item !== value)
        : [...sort[name], value];
      const sendSort = {
        ...sort,
        [name]: updatedArray,
      };
      setSort(sendSort);
    }
  }

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const { t, lang } = useContext(AppContext);
  return (
    <>
      {
        sidebar ?
          <div className='sidebar_mobile_back fixed top-0 left-0 h-screen w-screen bg-lybas-sidebar-back z-[14] md:hidden' onClick={() => setSidebar(false)}></div>
          : ''
      }
      <div className={"sidebar rounded-3xl md:rounded-lg pb-5 fixed z-[15] bg-white left-0 right-0 bottom-0 md:relative container md:mx-0 min-w-full mx-auto px-6 md:px-0 md:max-h-full transition-max-height duration-300 " + (sidebar ? 'max-h-[90%]' : 'max-h-[50px]')}>
        <div className="sidebar_mobile-top w-full flex md:hidden justify-center py-5" onClick={() => setSidebar(!sidebar)}>
          <span className="h-2 w-10 bg-gray-500 rounded-full flex justify-center"></span>
        </div>

        <div className="p-5 pt-0 max-h-[80vh] md:max-h-auto overflow-auto w-full md:w-auto">
          {
            !dressmakers && <>
              <div className="select all_categories">
                <Accordion expanded={expanded === 'panel0'} onChange={handleChange('panel0')}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon style={{ fill: 'black' }} />} style={{ padding: '0', margin: '0' }}>
                    <button className="top">
                      <p className="top_title">{t('sortBy')}</p>
                    </button>
                  </AccordionSummary>
                  <hr style={{ marginBottom: '10px' }} />
                  <AccordionDetails>
                    <CheckButton checked={sortBy == 0} setData={setSortBy} name={'all'} value={'0'} text={t('all')} />
                    <CheckButton checked={sortBy == 3} setData={setSortBy} name={'recommended'} value={'3'} text={t('recommendedDress')} />
                    <CheckButton checked={sortBy == 2} setData={setSortBy} name={'popular'} value={'2'} text={t('mostPopularDresses')} />
                    <CheckButton checked={sortBy == 4} setData={setSortBy} name={'onsale'} value={'4'} text={t('onSale')} />
                  </AccordionDetails>
                </Accordion>
              </div>
              <div className="select all_categories">
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon style={{ fill: 'black' }} />} style={{ padding: '0', margin: '0' }}>
                    <button className="top">
                      <p className="top_title">{t('allCategories')}</p>
                    </button>
                  </AccordionSummary>
                  <hr style={{ marginBottom: '10px' }} />
                  <AccordionDetails>
                    {
                      categories?.length > 0 && categories.map((cate, index) => (
                        <CheckButton checked={sort.category.includes(cate.id)} key={index} data={sort} setData={getSortedData} name={'category'} value={cate.id} text={t(cate['name_' + lang])} />
                      ))
                    }
                  </AccordionDetails>
                </Accordion>
              </div>

              <div className="select all_categories">
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon style={{ fill: 'black' }} />} style={{ padding: '0', margin: '0' }}>
                    <button className="top">
                      <p className="top_title">{t('price')}</p>
                    </button>
                  </AccordionSummary>
                  <hr style={{ marginBottom: '10px' }} />
                  <AccordionDetails>
                    <CheckButton checked={sort.price.min_price == 0} data={sort} setData={getSortedData} name={'price'} value={{ min_price: 0, max_price: 1000 }} text={'0 TMT - 1000 TMT'} />
                    <CheckButton checked={sort.price.min_price == 1000} data={sort} setData={getSortedData} name={'price'} value={{ min_price: 1000, max_price: 2000 }} text={'1000 TMT - 2000 TMT'} />
                    <CheckButton checked={sort.price.min_price == 2000} data={sort} setData={getSortedData} name={'price'} value={{ min_price: 2000, max_price: 5000 }} text={'2000 TMT - 5000 TMT'} />
                    <CheckButton checked={sort.price.min_price == 5000} data={sort} setData={getSortedData} name={'price'} value={{ min_price: 5000, max_price: 10000 }} text={'5000 TMT - 10000 TMT'} />
                    <CheckButton checked={sort.price.min_price == 10000} data={sort} setData={getSortedData} name={'price'} value={{ min_price: 10000, max_price: 20000 }} text={'10000 TMT - 20000 TMT'} />
                    <CheckButton checked={sort.price.min_price == 20000} data={sort} setData={getSortedData} name={'price'} value={{ min_price: 20000, max_price: '' }} text={'20000 TMT +'} />
                  </AccordionDetails>
                </Accordion>
              </div>
              <div className="select all_categories">
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon style={{ fill: 'black' }} />} style={{ padding: '0', margin: '0' }}>
                    <button className="top">
                      <p className="top_title">{t('size')}</p>
                    </button>
                  </AccordionSummary>
                  <hr style={{ marginBottom: '10px' }} />
                  <AccordionDetails>
                    {
                      sizes?.length > 0 && sizes.map((size, index) => (
                        <CheckButton checked={sort.size.includes(size.id)} key={index} data={sort} setData={getSortedData} name={'size'} value={size.id} text={size.size} />
                      ))
                    }
                  </AccordionDetails>
                </Accordion>
              </div>
              <div className="select all_categories">
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon style={{ fill: 'black' }} />} style={{ padding: '0', margin: '0' }}>
                    <button className="top">
                      <p className="top_title">{t('fabric')}</p>
                    </button>
                  </AccordionSummary>
                  <hr style={{ marginBottom: '10px' }} />
                  <AccordionDetails>
                    {
                      materials?.length > 0 && materials.map((material, index) => (
                        <CheckButton checked={sort.material.includes(material.id)} key={index} data={sort} setData={getSortedData} name={'material'} value={material.id} text={t(material['name_' + lang])} />
                      ))
                    }
                  </AccordionDetails>
                </Accordion>
              </div>
            </>
          }

          <div className="select all_categories">
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
              <AccordionSummary expandIcon={<ExpandMoreIcon style={{ fill: 'black' }} />} style={{ padding: '0', margin: '0' }}>
                <button className="top">
                  <p className="top_title">{t('location')}</p>
                </button>
              </AccordionSummary>
              <hr style={{ marginBottom: '10px' }} />
              <AccordionDetails>
                <CheckButton checked={sort.welayat.includes('ashgabat')} data={sort} setData={getSortedData} name={'welayat'} value={'ashgabat'} text={t('ashgabat')} />
                <CheckButton checked={sort.welayat.includes('ahal')} data={sort} setData={getSortedData} name={'welayat'} value={'ahal'} text={t('ahal')} />
                <CheckButton checked={sort.welayat.includes('balkan')} data={sort} setData={getSortedData} name={'welayat'} value={'balkan'} text={t('balkan')} />
                <CheckButton checked={sort.welayat.includes('mary')} data={sort} setData={getSortedData} name={'welayat'} value={'mary'} text={t('mary')} />
                <CheckButton checked={sort.welayat.includes('dashoguz')} data={sort} setData={getSortedData} name={'welayat'} value={'dashoguz'} text={t('dashoguz')} />
                <CheckButton checked={sort.welayat.includes('lebap')} data={sort} setData={getSortedData} name={'welayat'} value={'lebap'} text={t('lebap')} />
              </AccordionDetails>
            </Accordion>
          </div>
          {
            !dressmakers &&
            <div className="select all_categories">
              <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon style={{ fill: 'black' }} />} style={{ padding: '0', margin: '0' }}>
                  <button className="top">
                    <p className="top_title">{t('color')}</p>
                  </button>
                </AccordionSummary>
                <hr style={{ marginBottom: '10px' }} />
                <AccordionDetails>
                  <div className='flex flex-wrap items-center'>
                    {
                      colors?.length && colors.map((color, index) => (
                        <CheckButton key={index} checked={sort.color.includes(color.id)} data={sort} setData={getSortedData} name={'color'} value={color.id} color={color.hex} />
                      ))
                    }
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default Sidebar;
