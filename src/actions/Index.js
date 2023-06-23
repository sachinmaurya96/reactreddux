export const incNumber = (num) =>{
    return{
       type: "INCREMENT",
       payload: num
    }
}
export const decNumber = (num) =>{
    return{
       type: "DECREMENT",
       payload: num
    }
}

export const div = (num) =>{
    return{
       type: "DEVISION",
       payload: num
    }
}

export const mult = (num) =>{
    return{
       type: "MULTIPLY",
       payload: num
    }
}
export const mclear = (num) =>{
    return{
       type: "MCLEAN",
       payload: num
    }
}

export const dclear = (num) =>{
    return{
       type: "DCLEAN",
       payload: num
    }
}

export const add = (input) =>{
    return{
       type: "ADD",
       payload:{
        id: new Date().getTime().toString(),
        input : input
       }
    }
}
export const remove = (id) =>{
    return{
       type: "REMOVE",
       payload: id
    }
}
export const removeall = (num) =>{
    return{
       type: "REMOVEALL",
    }
}