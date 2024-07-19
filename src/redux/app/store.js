import { configureStore } from '@reduxjs/toolkit';

import dropdowns from '../features/Dropdowns';
import banners from '../features/Banners';
import blogs from '../features/Blogs';
import Dresses from '../features/Dresses';
import Colors from '../features/Colors';
import Sizes from '../features/Sizes';
import Categories from '../features/Categories';
import Materials from '../features/Materials';
import Cart from '../features/Cart'
import Notifications from '../features/Notifications';
import Emails from '../features/Emails';
import Orders from '../features/Orders';
import Comments from '../features/Comments';
import DressesUser from '../features/DressesUser';
import BlogsUser from '../features/BlogsUser';
import DressmakersUser from '../features/DressmakersUser';
import Statistics from '../features/Statistics';
import DayStatistics from '../features/DayStatistics';

export const store = configureStore({
  reducer: {
    dropdowns,
    banners,
    blogs,
    Cart,
    Notifications,
    DressesUser,
    BlogsUser,
    DressmakersUser,

    // Seller
    Dresses,
    Colors,
    Sizes,
    Categories,
    Materials,
    Emails,
    Orders,
    Comments,
    Statistics,
    DayStatistics
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})