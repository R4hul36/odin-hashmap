import { HashMap } from './index.js'

const hashMap = new HashMap()

console.log(hashMap.set('apple', 'red'))
console.log(hashMap.set('carrot', 'orange'))
console.log(hashMap.set('banana', 'yellow'))
console.log(hashMap.set('dog', 'brown'))
console.log(hashMap.set('elephant', 'gray'))
console.log(hashMap.set('frog', 'green'))
console.log(hashMap.set('grape', 'purple'))
console.log(hashMap.set('hat', 'black'))
console.log(hashMap.set('ice cream', 'white'))
console.log(hashMap.set('jacket', 'blue'))
console.log(hashMap.set('kite', 'pink'))
console.log(hashMap.set('lion', 'golden'))
// console.log(hashMap.set('moon', 'silver'))

console.log(hashMap.set('carrot', 'blablabla'))
// console.log(hashMap.remove('grape'))

console.log(hashMap.buckets.filter((bucket) => bucket.length))
// console.log(hashMap.clear())
console.log(hashMap.capacity)
console.log(hashMap.get('lion'))
