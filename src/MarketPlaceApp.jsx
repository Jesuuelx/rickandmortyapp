import React from 'react'
import { store } from './components/redux/store/store'
import { AppRouter } from './components/routes/AppRouter'
import { Provider } from 'react-redux'

export const MarketPlaceApp = () => {
  return (
   <>
   <Provider store={ store }>

    <AppRouter />

   </Provider>
   
   </>
  )
}
