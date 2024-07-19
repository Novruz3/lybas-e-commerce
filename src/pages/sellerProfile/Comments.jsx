import React, { useContext, useEffect, useState } from 'react';
import Search from './components/Search';
import { Rating } from "@material-tailwind/react";
import { t } from 'i18next';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
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
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataComments, setFilter, setLimit, setOffset, setSearch } from '../../redux/features/Comments';
import { AppContext } from '../../App';
import { AxiosCustom } from '../../common/AxiosInstance';
import ip from '../../common/Config';

const columns = [
  {
    id: 'nameLocation',
    label: 'nameLocation',
    minWidth: 250,
    align: 'left',
  },
  {
    id: 'commentRating',
    label: 'commentRating',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'dateTime',
    label: 'dateTime',
    minWidth: 200,
    align: 'left',
  },
  {
    action: 'action',
    label: 'action',
    minWidth: 100,
    align: 'right'
  }
];
function Comments() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.Comments?.data);
  const count = useSelector((state) => state?.Comments?.count);
  const limit = useSelector((state) => state?.Comments?.limit);
  const offset = useSelector((state) => state?.Comments?.offset);
  const { lang } = useContext(AppContext);
  const [deleteId, setDeleteId] = useState('');
  const navigate = useNavigate();

  const handleChangePage = async (event, newPage) => {
    await dispatch(setOffset(newPage * limit));
    await dispatch(fetchDataComments());
  };

  const handleChangeRowsPerPage = async (event) => {
    await dispatch(setLimit(event.target.value))
    await dispatch(fetchDataComments());
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!data?.length) dispatch(fetchDataComments());
  }, [])

  const deleteData = async () => {
    try {
      const res = await AxiosCustom('/comments/delete/' + deleteId, { method: 'POST' })
      if (res.status === 200) {
        handleClose();
        dispatch(fetchDataComments());
      }
    } catch (error) {
      alert(error);
    }
  }

  const changeIsActive = async (active, id) => {
    try {
      await AxiosCustom('/comments/isActive', { method: "POST", data: { isActive: active, id } })
      await dispatch(fetchDataComments());
    } catch (error) {
      alert(error)
    }
  }

  const setFilterData = async (filter) => {
    await dispatch(setFilter(filter));
    await dispatch(fetchDataComments());
  }

  const setSearchData = async (search) => {
    await dispatch(setSearch(search));
    await dispatch(fetchDataComments());
  }

  return (
    <div className='comments py-5'>
      <Search title='comments' className='mt-5' setDate={setFilterData} setSearch={setSearchData} />
      <div className="comments_table mt-5 shadow-lybas-1 rounded-lg overflow-auto">
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
                    data?.length > 0 && data.map((comment, index) => (
                      <TableRow key={index} hover role="checkbox" tabIndex={-1}>
                        <TableCell align={'left'}>
                          <div className={"table-with-grid_tr_data col-span-3 flex items-center"}>
                            <img className='w-[90px] h-[50px] rounded-lg object-cover mr-3' src={ip+'/' + comment?.user?.image} alt="" />
                            <div className="data">
                              <div className="name font-bold">{comment?.user?.username?.split(' ')[0]}</div>
                              <div className="province text-lybas-gray text-sm">{t(comment.welayat)}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell align={'left'} >
                          <div className='banner_name w-full'>
                            <Rating value={comment?.rate} readonly/>
                            <div className='line-clamp-2'>{comment?.text}</div>
                          </div>
                        </TableCell>
                        <TableCell align={'left'}>
                          {comment.createdAt.split('T')[0]} / {comment.createdAt.split('T')[1].split('.')[0]}
                        </TableCell>
                        <TableCell align={'right'}>
                          <div className='flex justify-end items-end'>
                            <Link to={'/comments/'+comment.id} className='mr-3'>
                              <OpenInNewIcon sx={{ color: 'green' }} />
                            </Link>
                            <button onClick={() => (setOpen(true), setDeleteId(comment.id))} className='mr-3'>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="#FF3521" />
                              </svg>
                            </button>
                            <div
                              className={"md:w-10 md:h-5 w-10 h-4 flex items-center rounded-full p-1 cursor-pointer " + (comment.isActive ? 'bg-green-600' : 'bg-gray-300')}
                              onClick={() => (changeIsActive(!comment.isActive, comment.id))}
                            >
                              <div
                                className={
                                  "bg-white md:w-4 md:h-4 h-3 w-3 rounded-full shadow-md transform duration-300 ease-in-out " +
                                  (comment.isActive ? ' transform translate-x-4' : '')
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
    </div>
  );
}

export default Comments;
