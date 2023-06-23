const initialState = 5;
const multNumber = (state = initialState, action) =>{
    switch(action.type){
        case "DEVISION" : return state/action.payload;
        case "MULTIPLY" : return state*action.payload;
        case "DCLEAN" : return state=action.payload;
        default: return state;
    }
}

export default multNumber 