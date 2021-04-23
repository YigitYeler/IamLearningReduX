const arrayReducer = (state = [{isim:"yiğit"}],action) => {
    switch (action.type) {
        case "DİZİ_GÖSTER":
            state.push(action.payload);  
        return state;
            break;
        default:
            return state;
            break;
    }
}

export default arrayReducer;