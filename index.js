class Bucket {
  constructor(name, value) {
    this.name = name
    this.value = value
  }
}

class HashMap {
  constructor() {
    this.loadFactor = 0.75
    this.capacity = 16
    this.size = 0
    this.buckets = []
  }
  hash(key) {
    let hashCode = 0

    const primeNumber = 31
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i)
    }

    return hashCode
  }

  set(key, value, isRehashing = false) {
   
    let hashIndex = this.hash(key) % this.capacity
    let bucket = this.buckets[hashIndex]
    let currLoad = this.capacity * this.loadFactor
    

    if(!bucket) {
      this.buckets[hashIndex] = [new Bucket(key, value)]
      if(!isRehashing) {
        this.size++
        if (this.size > currLoad) {
          this.resize()
        }     
      }
      return
    }
    
    for(let i =0; i<bucket.length; i++) {
      if(bucket[i].name === key) {
        bucket[i].value = value
        return
      }
    }

    bucket.push(new Bucket(key, value))
    if(!isRehashing) {
        this.size++
        if (this.size > currLoad) {
          this.resize()
        }  
      }
    
  }

  resize() {
    this.capacity *= 2
    let oldArray = this.buckets
    this.buckets = new Array(this.capacity)

    oldArray.forEach((bucket) => {
      if (!bucket) {
        return
      }
      bucket.forEach((innerBucket) =>
        this.set(innerBucket.name, innerBucket.value, true)
      )
    })
  }

}

const hashMap = new HashMap()

// console.log(hashMap.set("tom", "98851567"))
// console.log(hashMap.set("maotdzz", "988516567"))

// console.log(hashMap.set("Rahul", "98851567"))
// console.log(hashMap.set("Rahul", "98"))
// console.log(hashMap.set("chinnu", "98851567"))
// console.log(hashMap.set("malu", "98851567"))
// console.log(hashMap.set("ssd", "9995887"))

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
console.log(hashMap.set('moon', 'silver'))

console.log(hashMap.set('carrot', 'blablabla'))

hashMap.buckets.forEach((bucket) => console.log(bucket))
console.log(hashMap.capacity)


