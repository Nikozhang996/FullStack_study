/* oberseve */
function oberseve(object) {
    if (typeof object !== 'object') {
        return;
    }

    for (const key in object) {
        defineReactive(object, key, object[key]);
        oberseve(object[key]);
    }
}

/* defineReactive */
function defineReactive(target, property, value) {
    Object.defineProperty(target, property, {
        get() {
            return value;
        },
        set(newValue) {
            value = newValue;
            console.log(`数据更新了:${value}`)
        }
    })
}

oberseve(obj);

obj.name = 'BIO';
obj.name = '卡洛斯';
obj.name = 'hello';
obj.name = 'word';

/* 
  
*/


/* proxy */

// Reflect?