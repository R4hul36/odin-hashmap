class Bucket {
  constructor(name, value) {
    this.name = name
    this.value = value
  }
}

export class HashMap {
  constructor() {
    this.loadFactor = 0.75
    this.capacity = 16
    this.size = 0
    this.buckets = Array.from({ length: this.capacity }, () => [])
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
      // if bucket in the particular index is missing create a new bucket and assign it to the index
      this.buckets[hashIndex] = [new Bucket(key, value)]
      if (!isRehashing) {
        this.size++
        if (this.size > currLoad) {
          this.resize()
        }
      }
      return
    }

    // update the value if the key already exists
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].name === key) {
        bucket[i].value = value
        return
      }
    }

    // push a new entry into an existing bucket when collision occurs
    bucket.push(new Bucket(key, value))
    if (!isRehashing) {
      this.size++
      if (this.size > currLoad) {
        this.resize()
      }
    }
  }

  // resize method runs when size is greater than 75% in this case
  resize() {
    this.capacity *= 2
    let oldArray = this.buckets
    this.buckets = Array.from({ length: this.capacity }, () => [])

    // get all the entries from the old bucket and rehash the buckets to their new index.
    oldArray.forEach((bucket) => {
      bucket.forEach((entry) => this.set(entry.name, entry.value, true))
    })
  }

  get(key) {
    const hashIndex = this.hash(key) % this.capacity
    const bucket = this.buckets[hashIndex]

    let isKey = bucket.find((entry) => entry.name === key)
    return !isKey ? null : isKey.value
  }

  length() {
    return this.size
  }

  has(key) {
    let hashIndex = this.hash(key) % this.capacity
    let bucket = this.buckets[hashIndex]

    return bucket.some((entry) => entry.name === key)
  }

  remove(key) {
    const hashIndex = this.hash(key) % this.capacity
    const bucket = this.buckets[hashIndex]

    let keyFound = false
    let entryIndex = null

    // if the key exists, set the varibles to true and assign the index
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].name === key) {
        keyFound = true
        entryIndex = i
      }
    }

    // if keyFound and entryIndex values are present, remove that particular entry from the index
    if (keyFound && entryIndex !== null) {
      bucket.splice(entryIndex, 1)
      this.size -= 1
    }
    return keyFound
  }

  clear() {
    // resets the buckets array to default
    this.capacity = 16
    this.size = 0
    this.buckets = Array.from({ length: this.capacity }, () => [])
  }

  keys() {
    let keyArr = []
    this.buckets.forEach((bucket) => {
      for (const entry of bucket) {
        keyArr.push(entry.name)
      }
    })
    return keyArr
  }

  values() {
    let valueArr = []
    this.buckets.forEach((bucket) => {
      for (const entry of bucket) {
        valueArr.push(entry.value)
      }
    })
    return valueArr
  }

  entries() {
    let entriesArr = []
    this.buckets.forEach((bucket) => {
      for (const entry of bucket) {
        entriesArr.push([entry.name, entry.value])
      }
    })
    return entriesArr
  }
}
