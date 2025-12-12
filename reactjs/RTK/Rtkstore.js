import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import RtkReducer from './RtkReducer'

const Rtkstore = configureStore({
   reducer:{
     "User":RtkReducer
   }
})
export default Rtkstore
