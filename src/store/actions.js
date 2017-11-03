import http from 'axios'
export default {
    setClassify ({commit},classifyArr) {
        commit('SET_CLASSIFY',classifyArr)
    },
    setProducts({commit},productsArr){
        commit('SET_PRODUCTS',productsArr)
    },
    setflowersWord ({commit},flowerwords){
        commit('SET_FLOWERSWORD',flowerwords)
    },
    setUserInfo ({commit},userInfo){
        commit('SET_USERINFO',userInfo)
    },
    setActive ({commit},index) {
        commit('SET_ACTIVE',index)
    },
    setsmClassify (state,its) {
        var arr = []
        http.get('http://localhost:8081/products')
        .then(res =>{
            console.log(state)
            console.log(its.useing_id)
            if(its.smClassify_id!==undefined){
                console.log(state.state.isActive)
                for(var i=0;i<res.data.length;i++){
                    if(res.data[i].classify_id===state.state.isActive && its.smClassify_id===res.data[i].smclassify_id){
                        arr.push(res.data[i])
                    }
                }
                state.commit('SET_SMCLASSIFY',arr)
            } else if(its.useing_id!==undefined){
                for(var i=0;i<res.data.length;i++){
                    if(res.data[i].classify_id===state.state.isActive && res.data[i].useing_id===its.useing_id){
                        arr.push(res.data[i])
                    }
                }
            }
        })
    }
}