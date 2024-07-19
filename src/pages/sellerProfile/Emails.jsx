import React, { useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataEmails, setOffset, setLimit, setSearch } from '../../redux/features/Emails';
import { useNavigate } from 'react-router-dom';
import { AxiosSeller } from '../../common/AxiosInstance';
import ip from '../../common/Config';

const columns = [
  {
    id: 'nameSimple',
    label: 'nameSimple',
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
    id: 'result',
    label: 'result',
    minWidth: 170,
    align: 'right',
  },
];

function Emails() {
  const data = useSelector((state) => state?.Emails?.data);
  const offset = useSelector((state) => state?.Emails?.offset);
  const limit = useSelector((state) => state?.Emails?.limit);
  const count = useSelector((state) => state?.Emails?.count);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChangePage = async (event, newPage) => {
    await dispatch(setOffset(newPage * limit));
    await dispatch(fetchDataEmails());
  };

  const handleChangeRowsPerPage = async (event) => {
    await dispatch(setLimit(event.target.value))
    await dispatch(fetchDataEmails());
  };

  useEffect(() => {
    if (!data?.length) dispatch(fetchDataEmails());
    const isReadOff = async () => {
      try {
        const res = await AxiosSeller('/mails/isRead')
        if(res.status === 200){
          dispatch(fetchDataEmails());
        }
      } catch (error) {
        console.log(error);
      }
    }
    isReadOff();
  }, []);

  const setSearchData = async (search) => {
    await dispatch(setSearch(search));
    await dispatch(fetchDataEmails());
  }

  return (
    <div className='dresses'>
      <Search title='email' className='mt-5'  setSearch={setSearchData}  />
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
                    data?.length > 0 && data.map((mail, index) => (
                      <TableRow className='cursor-pointer' onClick={() => navigate(`/sellerProfile/emails/${mail.id}/${mail.type}`)} key={index} hover role="checkbox" tabIndex={-1}>
                        <TableCell align={'left'}>
                          <div className={"table-with-grid_tr_data col-span-3 flex items-center"}>
                            {
                              mail.image ?
                                <img className='w-12 h-12 rounded-lg object-cover mr-3' src={ip + mail.image} alt="" />
                                :
                                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <g clipPath="url(#clip0_1088_18441)">
                                    <path d="M30.7579 33.647C27.5195 36.371 23.4385 38 18.9996 38C14.5607 38 10.4802 36.371 7.24124 33.647C5.66421 32.3209 4.28533 30.7376 3.16602 28.951C4.70658 27.5023 7.72245 26.401 9.27644 25.6592C10.2446 25.1966 11.34 24.9173 11.9195 24.4476L14.5621 21.7194L13.2408 17.7802C11.6297 17.2879 10.8813 13.2347 11.9195 13.1335C11.5861 11.1868 11.2627 8.57723 11.6379 6.69258C12.0337 3.82018 15.1734 1.58334 18.9895 1.58334C22.6416 1.58334 25.6733 3.63228 26.274 6.32551C26.7772 8.2271 26.4337 11.0569 26.0777 13.133C27.116 13.2342 26.3949 17.2766 24.7828 17.7694L23.4351 21.7184L26.0787 24.4466C26.6573 24.9163 27.7526 25.1961 28.7213 25.6582C30.2762 26.4 33.2921 27.5017 34.8327 28.9505C33.7134 30.7381 32.3345 32.3214 30.7579 33.647Z" fill="#64748B" />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_1088_18441">
                                      <rect width="38" height="38" fill="white" />
                                    </clipPath>
                                  </defs>
                                </svg>
                            }
                            <div className="data">
                              <div className="name font-bold">{mail.name}</div>
                              <div className="province text-lybas-gray text-sm">{t(mail.welayat)}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell align={'left'}>
                          {mail.createdAt.split('T')[0]} / {mail.createdAt.split('T')[1].split('.')[0]}
                        </TableCell>
                        <TableCell align={'right'}>
                          {
                            (mail.type === 'newsletter' || mail.type === 'deliveryAbroad' || mail.type === 'newDressmaker') &&
                            <div className={'bg-blue-100 w-fit float-right rounded-full flex items-center justify-between py-2 px-5'}>
                              <div className='w-2 h-2 mr-3 rounded-full bg-blue-400'></div>{t(mail.type)}
                            </div>
                          }
                          {
                            mail.type === 'outStock' &&
                            <div className={'bg-orange-100 w-fit float-right rounded-full flex items-center justify-between py-2 px-5'}>
                              <div className='w-2 h-2 mr-3 rounded-full bg-orange-400'></div>{t(mail.type)}
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
    </div >
  );
}

export default Emails;
