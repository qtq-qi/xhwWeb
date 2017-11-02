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
    }
}