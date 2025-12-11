import React from 'react'
import { createStore } from 'redux'
import UserReducer from './UserReducer'

const UserStore = createStore(UserReducer)
export default UserStore
