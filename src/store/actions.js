export default {
    setClassify ({commit},classifyArr) {
        commit('SET_CLASSIFY',classifyArr)
    },
    setProducts({commit},productsArr){
        commit('SET_PRODUCTS',productsArr)
    },
    setflowersWord ({commit},flowerwords){
        commit('SET_FLOWERSWORD',flowerwords)
    }
}