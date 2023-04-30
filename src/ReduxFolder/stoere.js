

import { configureStore } from '@reduxjs/toolkit'

import PostSlice from './Slicess/PostSlice'

export const store = configureStore({
  reducer: {
    posts:PostSlice,
  },
})
  