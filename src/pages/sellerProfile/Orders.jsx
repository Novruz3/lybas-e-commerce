import { t } from 'i18next';
import Search from './components/Search';
import React, { useContext, useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataOrders, setOffset, setFilter, setLimit, setSearch, setStatus } from '../../redux/features/Orders';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../App';
import { AxiosSeller } from '../../common/AxiosInstance';

const columns = [
  {
    id: 'clientPhoneNumber',
    label: 'nameSimple',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'product',
    label: 'product',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'number',
    label: 'number',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'dateTime',
    label: 'dateTime',
    minWidth: 100,
    align: 'right',
  },
  {
    action: 'status',
    label: 'status',
    minWidth: 100,
    align: 'right'
  }
];

function Orders() {
  const data = useSelector((state) => state?.Orders?.data);
  const offset = useSelector((state) => state?.Orders?.offset);
  const limit = useSelector((state) => state?.Orders?.limit);
  const count = useSelector((state) => state?.Orders?.count);
  const { lang } = useContext(AppContext)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangePage = async (event, newPage) => {
    await dispatch(setOffset(newPage * limit));
    await dispatch(fetchDataOrders());
  };

  const handleChangeRowsPerPage = async (event) => {
    await dispatch(setLimit(event.target.value))
    await dispatch(fetchDataOrders());
  };

  const setFilterData = async (filter) => {
    await dispatch(setFilter(filter));
    await dispatch(fetchDataOrders());
  }
  const setSearchData = async (search) => {
    await dispatch(setSearch(search));
    await dispatch(fetchDataOrders());
  }
  const setStatusData = async (status) => {
    await dispatch(setStatus(status));
    await dispatch(fetchDataOrders());
  }

  useEffect(() => {
    const getData = async()=>{
      try {
        const res = await AxiosSeller('/orders/isRead')
        if(res.status === 200){
          dispatch(fetchDataOrders())
        }
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);
  return (
    <div className='orders-page'>
      <Search title='orders' className='mt-5' setDate={setFilterData} setSearch={setSearchData} setWelayat={setStatusData} filter={[{ text: 'waiting' }, { text: 'accepted' }, { text: 'onTheWay' }, { text: 'cancelled' }]} />

      <div className='orders_table mt-5 shadow-lybas-1 rounded-lg overflow-hidden'>
        <div className="relative overflow-x-auto">
          <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
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
                    data?.length > 0 && data.map((order, index) => (
                      <TableRow key={index} hover role="checkbox" sx={{ cursor: 'pointer' }} onClick={() => navigate('/sellerProfile/orders/' + order?.id)} tabIndex={-1}>
                        <TableCell align={'left'}>
                          <div className={"table-with-grid_tr_data"}>
                            <div className="name font-semibold">{order?.user_name?.split(' ')[0]}</div>
                            {/* <div className="phone-number text-gray-600">{order?.user_phone}</div> */}
                          </div>
                        </TableCell>
                        <TableCell align={'left'}>
                          <div className={"table-with-grid_tr_data text-gray-600"}>
                            <div className="name font-semibold">{order?.order_products[0]?.product?.name_tm ? order?.order_products[0]?.product['name_' + lang] : ''}</div>
                            <div className="phone-number text-gray-600">{order?.order_products[0]?.material?.name_tm ? order?.order_products[0]?.material['name_' + lang] : ''},{order?.order_products[0]?.size}</div>
                          </div>
                        </TableCell>
                        <TableCell align={'left'}>
                          #{order?.id.slice(0, 8)}
                        </TableCell>
                        <TableCell align={'right'}>
                          {order?.createdAt.split('T')[0]} / {order?.createdAt.split('T')[1].split('.')[0]}
                        </TableCell>
                        <TableCell align={'right'}>
                          {
                            order?.status === 'waiting' &&
                            <div className={'bg-orange-100 w-fit float-right rounded-full flex items-center justify-between py-2 px-5'}>
                              <div className='w-2 h-2 mr-3 rounded-full bg-orange-400'></div>{t(order?.status)}
                            </div>
                          }
                          {
                            order?.status === 'accepted' &&
                            <div className={'bg-green-100 w-fit float-right rounded-full flex items-center justify-between py-2 px-5'}>
                              <div className='w-2 h-2 mr-3 rounded-full bg-green-400'></div>{t(order?.status)}
                            </div>
                          }
                          {
                            order?.status === 'onTheWay' &&
                            <div className={'bg-blue-100 w-fit float-right rounded-full flex items-center justify-between py-2 px-5'}>
                              <div className='w-2 h-2 mr-3 rounded-full bg-blue-400'></div>{t(order?.status)}
                            </div>
                          }
                          {
                            order?.status === 'cancelled' &&
                            <div className={'bg-red-100 w-fit float-right rounded-full flex items-center justify-between py-2 px-5'}>
                              <div className='w-2 h-2 mr-3 rounded-full bg-red-400'></div>{t(order?.status)}
                            </div>
                          }
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
      </div>
    </div>


  );
}

export default Orders;
