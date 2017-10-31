var Mock = require('mockjs')
var fs = require('fs')
var data = Mock.mock({
    "classifys": [
        {
            "classify_id": 1,
            "classify_name": "@cword(2,3)",
            "imgs": "@image(355x355,@color,@ctitle)",
            "productsClassify|9": [{
                "imgs": "@image(355x355,@color,@ctitle)",
                "smallClassify_name": "@ctitle(2,4)"
            }]
        },
        {
            "classify_id": 2,
            "classify_name": "@cword(4)",
            "imgs": "@image(355x355,@color,@ctitle)",
            "useing|18": [{
                "imgs": "@image(355x355,@color,@ctitle)",
                "smallClassify_name": "@ctitle(2,4)"
            }],
            "material|14": [{
                "imgs": "@image(355x355,@color,@ctitle)",
                "smallClassify_name": "@ctitle(2,3)"
            }],
            "category|6": [{
                "imgs": "@image(355x355,@color,@ctitle)",
                "smallClassify_name": "@ctitle(4)"
            }],
            "color|7": [{
                "colors": "@color",
                "color_id|+1": 1000,
                "colors_name": "@ctitle(2,3)"
            }],
            "prices|7": [{
                "prices_id": 2000,
                "prices|+100": 50
            }],
            "nums|15": [{
                "num|+5":9
            }]
        },
        {
            "classify_id": 3,
            "classify_name": "@cword(4)",
            "imgs": "@image(355x355,@color,@ctitle)",
            "productsClassify|5": [{
                "imgs": "@image(355x355,@color,@ctitle)",
                "smallClassify_name": "@ctitle(3,4)"
            }]
        },
        {
            "classify_id": 4,
            "classify_name": "@cword(4)",
            "imgs": "@image(355x355,@color,@ctitle)",
            "productsClassify|14": [{
                "imgs": "@image(355x355,@color,@ctitle)",
                "smallClassify_name": "@ctitle(2,5)"
            }],
            "city":["北京","上海","深圳","广州","重庆","成都","沈阳","青岛","大连","杭州","南京","苏州","济南","天津","长沙","武汉","南昌"],
            "cake|12": [{
                "imgs": "@image(355x355,@color,@ctitle)",
                "smallClassify_name": "@ctitle(4,5)"
            }]
        },
        {
            "classify_id": 5,
            "classify_name": "@cword(4)",
            "imgs": "@image(355x355,@color,@ctitle)",
            "productsClassify|4": [{
                "imgs": "@image(355x355,@color,@ctitle)",
                "smallClassify_name": "@ctitle(5,6)"
            }]
        },
        {
            "classify_id": 6,
            "classify_name": "@cword(4)",
            "imgs": "@image(355x355,@color,@ctitle)",
            "productsClassify|16": [{
                "imgs": "@image(355x355,@color,@ctitle)",
                "smallClassify_name": "@ctitle(3,5)"
            }],
            "useing|8": [{
                "useing_id|+1":3000,
                "price|5":[{
                    "price_id|+1": 2000,
                    "price|+100": 50
                }]
            }]
        },
        {
            "classify_id": 7,
            "classify_name": "@cword(4)",
            "imgs": "@image(355x355),@color,@ctitle",
            "productsClassify|4": [{
                "imgs": "@image(355x355,@color,@ctitle)",
                "smallClassify_name": "@ctitle(3,5)"
            }]
        },
        {
            "classify_id": 8,
            "classify_name": "@cword(4)",
            "imgs": "@image(355x355),@color,@ctitle",
            "productsClassify|1": [{
                "imgs": "@image(355x355,@color,@ctitle)",
                "smallClassify_name": "@ctitle(2)"
            }]
        },
        {
            "classify_id": 9,
            "classify_name": "@cword(4)",
            "imgs": "@image(355x355),@color,@ctitle",
            "productsClassify|2": [{
                "imgs": "@image(355x355,@color,@ctitle)",
                "smallClassify_name": "@ctitle(4)"
            }]
        }
    ],
    "products|100-150": [{
        "classify_id|1-9":50,
        "imgs": "@image(355x355,@color,@ctitle)",
        "name": "@cword(4,6)",
        "introduce": "@ctitle(10,13)",
        "price|50-300":100 
    }]
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
fs.writeFile('db.json',JSON.stringify(data,null,4), function(err){
    if(err){
        return console.log(err)
    }
    console.log('数据写入成功！');
})