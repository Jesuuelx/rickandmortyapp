import { configureStore } from '@reduxjs/toolkit'
import { rickandmorthySlice } from './slices/rickandmorthySlices'

export const store = configureStore({
  reducer: {
    rickandmorthy:rickandmorthySlice.reducer
  },
})