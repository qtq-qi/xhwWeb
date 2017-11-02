var Mock = require('mockjs')
var fs = require('fs')
var data = Mock.mock({
    "classifys": [
        {
            "classify_id": 1,
            "classify_name": "@cword(2,3)",
            "imgs": "@image(355x355,@color,@ctitle)",
            "productsList": [{
                "title": "大家都在找",
                "productsClassify|9": [{
                    "smClassify_id|+1": 1,
                    "imgs": "@image(355x355,@color,@ctitle)",
                    "smallClassify_name": "@ctitle(2,4)"
                }]
            }]

        },
        {
            "classify_id": 2,
            "classify_name": "@cword(4)",
            "imgs": "@image(355x355,@color,@ctitle)",
            "productsList": [
                {
                    "title": "用途",
                    "productsClassify|18": [{
                        "useing_id|+1": 1,
                        "imgs": "@image(355x355,@color,@ctitle)",
                        "smallClassify_name": "@ctitle(2,4)"
                    }],
                },
                {
                    "title": "花材", 
                    "productsClassify|14": [{
                        "floweruse_id|+1": 1,
                        "imgs": "@image(355x355,@color,@ctitle)",
                        "smallClassify_name": "@ctitle(2,3)"
                    }],
                },
                {
                    "title": "类别",
                    "productsClassify|6": [{
                        "smClassify_id|+1": 10,
                        "imgs": "@image(355x355,@color,@ctitle)",
                        "smallClassify_name": "@ctitle(4)"
                    }],
                },
                {
                    "title": "颜色",
                    "productsClassify|7": [{
                        "colors": "@color",
                        "color_id|+1": 1000,
                        "smallClassify_name": "@ctitle(2,3)"
                    }],
                },
                {
                    "title": "价格",
                    "productsClassify|7": [{
                        "smallClassify_name|+100":50,
                        "price|+100": 50
                    }],
                },
                {
                    "title": "枝数",
                    "productsClassify|15": [{
                        "smallClassify_name|+5": 9,
                        "flowersnumber|+5": 9
                    }]
                }
            ]

        },
        {
            "classify_id": 3,
            "classify_name": "@cword(4)",
            "imgs": "@image(355x355,@color,@ctitle)",
            "productsList": [{
                "title": "永生花",
                "productsClassify|5": [{
                    "smClassify_id|+1": 17,
                    "imgs": "@image(355x355,@color,@ctitle)",
                    "smallClassify_name": "@ctitle(3,4)"
                }]
            }]

        },
        {
            "classify_id": 4,
            "classify_name": "@cword(4)",
            "imgs": "@image(355x355,@color,@ctitle)",
            "productsList": [
                {
                    "title": "精选品牌蛋糕",
                    "productsClassify|14": [{
                        "cake_id|+1": 1,
                        "imgs": "@image(355x355,@color,@ctitle)",
                        "smallClassify_name": "@ctitle(2,5)"
                    }]
                },
                {
                    "title": "按城市选购",
                    "productsClassify|10": [{
                        "smallClassify_name":"@city(false)",
                    }]
                },
                {
                    "title": "全国配送蛋糕",
                    "productsClassify|12": [{
                        "cake_id2|+1": 1,
                        "imgs": "@image(355x355,@color,@ctitle)",
                        "smallClassify_name": "@ctitle(4,5)"
                    }]
                }
            ]

        },
        {
            "classify_id": 5,
            "classify_name": "@cword(4)",
            "imgs": "@image(355x355,@color,@ctitle)",
            "productsList": [{
                "title": "巧克力分类",
                "productsClassify|4": [{
                    "smClassify_id|+1": 22,
                    "imgs": "@image(355x355,@color,@ctitle)",
                    "smallClassify_name": "@ctitle(5,6)"
                }]
            }]

        },
        {
            "classify_id": 6,
            "classify_name": "@cword(4)",
            "imgs": "@image(355x355,@color,@ctitle)",
            "productsList": [
                {
                    "title": "礼品类别",
                    "productsClassify|16": [{
                        "smClassify_id|+1": 26,
                        "imgs": "@image(355x355,@color,@ctitle)",
                        "smallClassify_name": "@ctitle(3,5)"
                    }]
                }
                // {
                //     "title": "礼品用途",
                //     "productsClassify|8": [{
                //         "giftuseing_id|+1": 1,
                //         "price|5": [{
                //             "price_id|+1": 2000,
                //             "smallClassify_name|+100": 50
                //         }]
                //     }]
                // }
            ]

        },
        {
            "classify_id": 7,
            "classify_name": "@cword(4)",
            "imgs": "@image(355x355),@color,@ctitle",
            "productsList": [{
                "title": "品牌公仔分类",
                "productsClassify|4": [{
                    "smClassify_id|+1": 42,
                    "imgs": "@image(355x355,@color,@ctitle)",
                    "smallClassify_name": "@ctitle(3,5)"
                }]
            }]

        },
        {
            "classify_id": 8,
            "classify_name": "@cword(4)",
            "imgs": "@image(355x355),@color,@ctitle",
            "productsList": [{
                "title": "礼篮",
                "productsClassify|1": [{
                    "smClassify_id|+1": 45,
                    "imgs": "@image(355x355,@color,@ctitle)",
                    "smallClassify_name": "@ctitle(2)"
                }]
            }]

        },
        {
            "classify_id": 9,
            "classify_name": "@cword(4)",
            "imgs": "@image(355x355),@color,@ctitle",
            "productsList": [{
                "title": "绿植花卉",
                "productsClassify|2": [{
                    "smClassify_id|+1": 47,
                    "imgs": "@image(355x355,@color,@ctitle)",
                    "smallClassify_name": "@ctitle(4)"
                }]
            }]
            
        }
    ],
    "products|1000-1500": [{
        "classify_id|1-9": 50,
        "smclassify_id|0-48": 100,
        "useing_id|1-18": 100,
        "floweruse_id|1-14":100,
        "color_id|1000-1007":100,
        "flowersnumber|9-23":100,
        "cake_id|1-14":100,
        "cake_id2|1-12":100,
        "productsClassify|0-16":100,
        "imgs": "@image(355x355,@color,@ctitle)",
        "name": "@cword(4,6)",
        "introduce": "@ctitle(10,13)",
        "price|50-300": 100
    }],
    "flowersWord": [{
        "title": "@ctitle(4)",
        "classify|30": [{
            "classify_id|+1": 4000,
            "ckassufy_name": "@cword(4,5)",
            "title": "@ctitle(12,20)"
        }],
        "flowersword|100": [{
            "classify_id|4000-4029": 100,
            "imgs": "@image(355x355,@color,@ctitle)",
            "mains": "@ctitle(35,45)"
        }],

    }],
    "user": []
    // "hotList": [{
    //     "classify_name": "@ctitle(5)",
    //     "classify_id": 1,
    //     "smallClassify|9": [{
    //         "imgs": "@image(355x355),@color,@ctitle",
    //         "smClassify_name": "@ctitle(2,4)"
    //     }]
    // }],
    // "flowers": [{
    //     "classify_name": "@ctitle(5)",
    //     "classify_id": 2,
    //     "smallClassify|6": [{
    //         "smClassify_name": "@ctitle(2,4)",
    //         "productsClassify": [{

    //         }]
    //     }]
    // }]
})
fs.writeFile('db.json', JSON.stringify(data, null, 4), function (err) {
    if (err) {
        return console.log(err)
    }
    console.log('数据写入成功！');
})