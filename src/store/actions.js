import http from 'axios'
export default {
    setClassify({ commit }, classifyArr) {
        commit('SET_CLASSIFY', classifyArr)
    },
    setProducts({ commit }, productsArr) {
        commit('SET_PRODUCTS', productsArr)
    },
    setflowersWord({ commit }, flowerwords) {
        commit('SET_FLOWERSWORD', flowerwords)
    },
    setUserInfo({ commit }, userInfo) {
        commit('SET_USERINFO', userInfo)
    },
    setActive({ commit }, index) {
        commit('SET_ACTIVE', index)
    },
    setsmClassify(state, its) {
        var arr = []
        http.get('http://localhost:8081/products')
            .then(res => {
                console.log(state)
                console.log(its.useing_id)
                if (its.smClassify_id !== undefined) {
                    console.log(state.state.isActive)
                    for (var i = 0; i < res.data.length; i++) {
                        if (res.data[i].classify_id === state.state.isActive && its.smClassify_id === res.data[i].smclassify_id) {
                            arr.push(res.data[i])
                        }
                    }
                    state.commit('SET_SMCLASSIFY', arr)
                } else if (its.useing_id !== undefined) {
                    for (var i = 0; i < res.data.length; i++) {
                        if (res.data[i].classify_id === state.state.isActive && res.data[i].useing_id === its.useing_id) {
                            arr.push(res.data[i])
                        }
                    }
                }
            })
    },
    setChildProduct(store, productObj) {
        productObj.user_id = store.state.userInfo.id
        store.commit('SET_CHILDPRODUCT', productObj)
    },
    setwords({ commit }, flowers) {
        commit('SET_WORDS', flowers)
    },
    setCart(state) {
        console.log(state.state.childProduct)
        var data = state.state.childProduct
        http.get('http://localhost:8081/carts')
            .then(res => {
                state.state.carts = res.data
                if (res.data.length === 0) {
                    data.user_id = state.state.userInfo.id
                    state.commit('SET_CART', data)
                    http.post('http://localhost:8081/carts', data)
                } else {
                    var isfind = false
                    console.log(state.state.userInfo.id, data.user_id)
                    for (var i = 0; i < res.data.length; i++) {
                        if (state.state.carts[i].products_id === data.products_id && state.state.userInfo.id === state.state.carts[i].user_id) {
                            var dataobj = state.state.carts[i]
                            dataobj.num++
                            console.log(dataobj)
                            console.log(`http://localhost:8081/carts/${i + 1}`)
                            http.put(`http://localhost:8081/carts/${i + 1}`, dataobj)
                                .then(res => {
                                    isfind = true
                                    state.dispatch('getcarts')
                                })
                            break
                        } else {
                            //判断是否已经执行完for循环
                            if (!isfind && res.data.length - 1 === i) {
                                data.user_id = state.state.userInfo.id
                                http.post('http://localhost:8081/carts', data)
                                    .then(res => {
                                        state.dispatch('getcarts')
                                    })
                            }
                        }
                    }
                }
            })
    },
    getcarts(store) {
        http.get('http://localhost:8081/carts')
            .then(res => {
                console.log(res.data)
                console.log(store.state)
                store.commit('SET_CARTS', res.data)
            })
    },
    cutNum(store, cutProduce) {
        if (cutProduce.num !== 1) {
            cutProduce.num--
            http.put(`http://localhost:8081/carts/${cutProduce.id}`, cutProduce)
                .then(res => {
                    store.dispatch('getcarts')
                })
        }
    },
    addNum (store,addProduce) {
        addProduce.num++
        http.put(`http://localhost:8081/carts/${addProduce.id}`, addProduce)
            .then(res => {
                store.dispatch('getcarts')
            })
    },
    delProduce (store,delproduce){
        http.delete(`http://localhost:8081/carts/${delproduce.id}`)
        .then(res =>{
            store.dispatch('getcarts')
        })
    },
    setHistory (store,historyProduce){
        http.post('http://localhost:8081/historyList',historyProduce)
        http.get('http://localhost:8081/historyList')
        .then(res => {
            store.commit('SET_HISTORY',res.data)
        })
        
    },
    setComments (store,commentMains){
        let day = new Date().toLocaleDateString()
        console.log(day)
        var obj = {
            commentMain: commentMains,
            user_id: store.state.userInfo.id,
            products_id: store.state.childProduct.products_id,
            img:"http://dummyimage.com/355x355/8ff279&text=鲜花",
            phone: store.state.userInfo.phone,
            address: "",
            star: ""
        }
        http.post("http://localhost:8081/comments",obj)
        .then(res => {
            store.commit("SET_COMMENTS",obj)
        })
    }
}