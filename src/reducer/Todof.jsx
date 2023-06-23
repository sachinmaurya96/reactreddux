const initialState = {
    list:[]
};
const todolist = (state = initialState, action) =>{
    switch(action.type){
        case "ADD" : 
        const {id , input} = action.payload
        return {
            list: [
                ...state.list,
                {
                    id:id,
                    data :input
                }
            ]
        }
        case "REMOVE" : 
        
        return{
           
            list:state.list.filter((elem)=>elem.id !== action.payload)
        } ;
        case "REMOVEALL" : 
        return {
            list: initialState.list
        }
        
        ;
        default: return state;
    }
}
console.log(initialState)

export default todolist