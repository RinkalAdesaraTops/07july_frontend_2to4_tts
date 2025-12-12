import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    data:[]
}
const RtkReducer = createSlice({
    name:"User",
    initialState,
    reducers:{
        ins:(state,action)=>{
            state.data = [...state.data, action.payload]
        },
        del:(state,action)=>{
            state.data = state.data.filter((i,index)=>index!=action.payload)
        },
        upd:(state,action)=>{
            state.data = state.data.map((i,index)=>{    
                if(index == action.payload.id){
                    i = action.payload.data
                }
                return i
            })
        }

    }
})
export const {ins,del,upd} = RtkReducer.actions
export default RtkReducer.reducer
