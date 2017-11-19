import http from 'axios'
export default {
    SET_CLASSIFY(state, data) {
        state.classify = data
    },
    SET_PRODUCTS(state, data) {
        state.product = data
    },
    SET_FLOWERSWORD(state, data) {
        state.flowerwords = data
    },
    SET_USERINFO(state, data) {
        state.userInfo = data
    },
    SET_ACTIVE(state, data) {
        state.isActive = data + 1
    },
    SET_SMCLASSIFY(state, data) {
        state.productsList = data
    },
    SET_CHILDPRODUCT(state, data) {
        state.childProduct = data
    },
    SET_WORDS(state, data) {
        state.nowFlowersword = data
    },
    SET_CART(state, data) {
       state.carts.push(data)
    },
    XIU_CART (state,data,resdata) {
       console.log(data,resdata)
    },
    SET_CARTS (state,data) {
        state.carts = data
    },
    SET_HISTORY (state,data){
        state.history = data
    },
    SET_COMMENTS (state,data) {
        state.comments.push(data)
    }
}