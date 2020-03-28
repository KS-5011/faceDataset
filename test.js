const o = {
    a:'a',
    b:'b',
    obj:{
        key:'key',
    },
}

const o2=o

o2.obj.key='new ks'

console.log(o.obj.key)  //result new ks

o.a='new value'

console.log(o2.a)   //result 'newvalue'

console.log(o.a)    //result 'newvalue'

/********************************/

const o2_1=Object.assign({},o) //cloning an object
//give me a new object and then set all of
//the keys and values of o to be in there

o2_1.obj.key='new ks'

console.log(o.obj.key)  //result new ks

o.a='new value'

console.log(o2_1.a)   //result 'newvalue'

console.log(o.a)    //result 'newvalue'

/********************************/

// How would we deep copy?

function deepCopy(obj) {
    const keys=Object.keys(obj)
    const newObject={}

    for (let i=0; i<keys.length; i++) {
        const key=keys[i]
        if(typeof obj[keys[i]]==='object') {
            newObject[key]=deepCopy(obj[key])
        }else{
            newObject[key]=obj[key]
        }
    }
    return Object.assign({},obj)
}
const o3=deepCopy(o)
o.obj.key='new ks'
console.log(o3.obj.key) //result new ks
