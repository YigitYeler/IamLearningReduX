export const increment = (num) => {
    return{
        type: "INCREMENT",
        payload: num
    }
}
export const decrement = (num) => {
    return{
        type: "DECREMENT",
        payload: num
    }
}
export const diziGoster = (obj) => {
    return{
        type: "DİZİ_GÖSTER",
        payload: obj
    }
}