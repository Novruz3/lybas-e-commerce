import React, { useEffect, useState, useContext } from 'react';
import Search from './components/Search';
import { t } from 'i18next';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataDresses, setOffset, setLimit, setFilter, setSearch, setCategory, setMaterial, setSize, setWelayat } from '../../redux/features/Dresses';
import { useNavigate } from 'react-router-dom';
import { AxiosSeller } from '../../common/AxiosInstance';
import ip from '../../common/Config';
import { AppContext } from '../../App';


const columns = [
  {
    id: 'nameOfDressAndDressmaker',
    label: 'nameOfDressAndDressmaker',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'price',
    label: 'price',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'fabric',
    label: 'fabric',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'dateTime',
    label: 'dateTime',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'edit',
    label: 'edit',
    minWidth: 100,
    align: 'right',
  },
  {
    action: 'action',
    label: 'action',
    minWidth: 100,
    align: 'right'
  }
];

function Dresses() {
  const { lang } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const data = useSelector((state) => state?.Dresses?.data);
  const offset = useSelector((state) => state?.Dresses?.offset);
  const limit = useSelector((state) => state?.Dresses?.limit);
  const count = useSelector((state) => state?.Dresses?.count);
  const [deleteId, setDeleteId] = useState('');
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChangePage = async (event, newPage) => {
    await dispatch(setOffset(newPage * limit));
    await dispatch(fetchDataDresses());
  };

  const handleChangeRowsPerPage = async (event) => {
    await dispatch(setLimit(event.target.value))
    await dispatch(fetchDataDresses());
  };

  useEffect(() => {
    dispatch(setLimit(5));
    if (!data.length) dispatch(fetchDataDresses());
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const deleteData = async () => {
    try {
      const res = await AxiosSeller('/products/delete/' + deleteId, { method: 'POST' })
      if (res.status === 200) {
        handleClose();
        dispatch(fetchDataDresses());
      }
    } catch (error) {
      alert(error);
    }
  }

  const changeIsActive = async (active, id, market) => {
    if(market.edited){
      try {
        await AxiosSeller('/products/isActive', { method: "POST", data: { isActive: active, id } })
        await dispatch(fetchDataDresses());
      } catch (error) {
        alert(error)
      }
    }else{
      alert(t('adminConfirm'))
    }
  }

  const setFilterData = async (filter) => {
    await dispatch(setFilter(filter));
    await dispatch(fetchDataDresses());
  }

  const setSearchData = async (search) => {
    await dispatch(setSearch(search));
    await dispatch(fetchDataDresses());
  }
  const setCategoryData = async (category) =>{
    await dispatch(setCategory(category));
    await dispatch(fetchDataDresses());
  }
  const setSizeData = async (size) =>{
    await dispatch(setSize(size));
    await dispatch(fetchDataDresses());
  }
  const setMaterialData = async (material) =>{
    await dispatch(setMaterial(material));
    await dispatch(fetchDataDresses());
  }
  const setWelayatData = async (welayat) =>{
    await dispatch(setWelayat(welayat));
    await dispatch(fetchDataDresses());
  }

  return (
    <div className='dresses'>
      <Search longFilter={true} setCategory={setCategoryData} setMaterial={setMaterialData} setSize={setSizeData} setWelayat={setWelayatData} title='dresses' className='mt-5' action={{ link: '/sellerProfile/dresses/add', text: 'addDress' }} setDate={setFilterData} setSearch={setSearchData} />
      <div className="dresses_table mt-5 shadow-lybas-1 rounded-lg overflow-hidden">
        <div className="relative overflow-x-auto">
          <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 500 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column, index) => (
                      <TableCell
                        key={index}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        <span className='font-bold'>{t(column.label)}</span>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    data?.length > 0 && data.map((market, index) => (
                      <TableRow key={index} hover role="checkbox" tabIndex={-1}>
                        <TableCell align={'left'}>
                          <div className={"table-with-grid_tr_data col-span-3 flex items-center"}>
                            {
                              market.images.length > 0 ?
                                <img className='w-12 h-12 rounded-lg object-cover mr-3' src={ip +'/'+ market.images[0].image} alt="" />
                                :
                                <svg className="w-12 h-12 mr-3" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="Person2Icon"><path d="M18.39 14.56C16.71 13.7 14.53 13 12 13s-4.71.7-6.39 1.56C4.61 15.07 4 16.1 4 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66zM9.78 12h4.44c1.21 0 2.14-1.06 1.98-2.26l-.32-2.45C15.57 5.39 13.92 4 12 4S8.43 5.39 8.12 7.29L7.8 9.74c-.16 1.2.77 2.26 1.98 2.26z"></path></svg>
                            }
                            <div className="data">
                              <div className="name font-bold">{market['name_' + lang]}</div>
                              <div className="province text-lybas-gray text-sm">{t(market.seller.name)}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell align={'left'}>
                          {market?.discount ? market?.price_old : market.price}
                        </TableCell>
                        <TableCell align={'left'}>
                          {market.material['name_' + lang]}
                        </TableCell>
                        <TableCell align={'left'}>
                          {market.createdAt.split('T')[0]} / {market.createdAt.split('T')[1].split('.')[0]}
                        </TableCell>
                        <TableCell align={'right'}>
                          <button onClick={() => navigate('/sellerProfile/dresses/' + market.id)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M19.3 8.925L15.05 4.725L16.45 3.325C16.8333 2.94167 17.3042 2.75 17.8625 2.75C18.4208 2.75 18.8917 2.94167 19.275 3.325L20.675 4.725C21.0583 5.10833 21.2583 5.57083 21.275 6.1125C21.2917 6.65417 21.1083 7.11667 20.725 7.5L19.3 8.925ZM17.85 10.4L7.25 21H3V16.75L13.6 6.15L17.85 10.4Z" fill="#1A54EB" />
                            </svg>
                          </button>
                        </TableCell>
                        <TableCell align={'right'}>
                          <div className='flex justify-end items-end'>
                            <button onClick={() => (setOpen(true), setDeleteId(market.id))} className='mr-3'>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="#FF3521" />
                              </svg>
                            </button>
                            <div
                              className={"md:w-10 md:h-5 w-10 h-4 flex items-center rounded-full p-1 cursor-pointer " + (market.isActive ? 'bg-green-600' : 'bg-gray-300')}
                              onClick={() => (changeIsActive(!market.isActive, market.id,market))}
                            >
                              <div
                                className={
                                  "bg-white md:w-4 md:h-4 h-3 w-3 rounded-full shadow-md transform duration-300 ease-in-out " +
                                  (market.isActive ? ' transform translate-x-4' : '')
                                }
                              ></div>
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  }
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, 100]}
              component="div"
              count={count}
              rowsPerPage={limit}
              page={offset / limit}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {t('doYouWantToDelete')}
          </DialogTitle>
          <DialogActions>
            <Button onClick={handleClose}>{t('cancel')}</Button>
            <Button onClick={deleteData} autoFocus sx={{ color: 'red' }}>
              {t('ok')}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div >
  );
}

export default Dresses;
