import ActionTypes from '../constants/ActionTypes'

const initialState={
    products :[
        {
            id:1,
            name:'Kiran',
            Category : "IT Software"
        }
    ]
}

const productReducer = (state=initialState, {type,payload})=>{
    switch(type){
            case ActionTypes.SET_PRODUCTS :
                return state;

            default:
                return state    
    }

}
export default productReducer;