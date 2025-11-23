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

    if (!bucket) {
      this.buckets[hashIndex] = [new Bucket(key, value)]
      if (!isRehashing) {
        this.size++
        if (this.size > currLoad) {
          this.resize()
        }
      }
      return
    }

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].name === key) {
        bucket[i].value = value
        return
      }
    }

    bucket.push(new Bucket(key, value))
    if (!isRehashing) {
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

  get(key) {
    const hashIndex = this.hash(key) % this.capacity
    const bucket = this.buckets[hashIndex]

    if (!bucket) {
      return null
    }
    let isKey = bucket.find((entry) => entry.name === key)
    return !isKey ? null : isKey.value
  }

  length() {
    return this.size
  }

  remove(key) {
    const hashIndex = this.hash(key) % this.capacity
    const bucket = this.buckets[hashIndex]

    if (!bucket) {
      return false
    }

    let keyFound = false
    let entryIndex = null

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].name === key) {
        keyFound = true
        entryIndex = i
      }
    }
    if (keyFound && entryIndex !== null) {
      bucket.splice(entryIndex, 1)
      this.size -= 1
    }
    return keyFound
  }

  keys() {
    let keyArr = []
    this.buckets.forEach((bucket) => {
      if (!bucket) return
      for (const entry of bucket) {
        keyArr.push(entry.name)
      }
    })
    return keyArr
  }

  values() {
    let valueArr = []
    this.buckets.forEach((bucket) => {
      if (!bucket) return
      for (const entry of bucket) {
        valueArr.push(entry.value)
      }
    })
    return valueArr
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
// console.log(hashMap.set('moon', 'silver'))

console.log(hashMap.set('carrot', 'blablabla'))
console.log(hashMap.remove('apple'))

// hashMap.buckets.forEach((bucket) => console.log(bucket))
console.log(hashMap.capacity)
console.log(hashMap.values())
