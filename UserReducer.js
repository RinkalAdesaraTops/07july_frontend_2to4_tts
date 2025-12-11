import { del, ins, upd } from "./UserAction"

const initialState = {
    data:[]
}
const UserReducer = (state=initialState,action) => {
  switch(action.type){
    case ins:return {
        ...state,
        data:[
            ...state.data,
            action.payload
        ]
    }
    case del: return {
            ...state,
            data: state.data.filter((i,index)=>index != action.payload)
    }
    case upd:return {
            ...state,
            data:state.data.map((i,index)=>{
                    if(index == action.payload.id){
                        i = action.payload.data
                    }
                return i
            })
    }
    default:return state
  }
}

export default UserReducer
