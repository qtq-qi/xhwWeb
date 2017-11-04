export default {
    SET_CLASSIFY (state,data) {
        state.classify = data
    },
    SET_PRODUCTS (state,data) {
        state.product = data
    },
    SET_FLOWERSWORD (state,data) {
        state.flowerwords = data
    },
    SET_USERINFO (state,data) {
        state.userInfo = data
    },
    SET_ACTIVE (state,data) {
        state.isActive = data+1
    },
    SET_SMCLASSIFY (state,data) {
        state.productsList = data
    },
    SET_CHILDPRODUCT (state,data) {
        state.childProduct = data
    },
    SET_WORDS (state,data) {
        state.nowFlowersword = data
    },
    SET_CART (state,data) {
        if(state.carts.length===0){
            state.carts.push(data)
        } else {
            var isdone = false
            for(var i=0;i<state.carts.length;i++){
                if(state.carts[i].products_id===data.products_id){
                    data.num++
                    var obj = data
                    isdone = true
                    state.carts[i] = obj
                    break
                }
            }
            if (!isdone) {
                state.carts.push(data)
            }
        }
    }
}