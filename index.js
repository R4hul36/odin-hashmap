
class Bucket {
    constructor(name, value){
        this.name = name
        this.value = value
    }
}


class HashMap {
    constructor(){
        this.loadFactor = 0.75
        this.capacity = 16
        this.size = 0
        this.buckets = []
    }
    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }

    set(key, value) {
        let currLoad = this.capacity * this.loadFactor
        if(this.size >= currLoad) {
            this.capacity*=2
        }

        let hashIndex = this.hash(key)%this.capacity
        
        
        // let isBucketPresent = false;
        let valueToChange = null
        let indexToChange = null
        

       
        let bucketPresent = this.buckets[hashIndex]
        if (bucketPresent){
            console.log("yes");
            bucketPresent.forEach((bucket, index)=> {
                if(bucket.name === key){
                    console.log("sdfsdfasd")
                    valueToChange = value
                    indexToChange = index
                }
                // else {
                
                // }
            })
            
        }
        if(bucketPresent && !valueToChange) {
            
            const bucket = new Bucket(key, value)
            this.buckets[hashIndex].push(bucket)
            this.size++
        //     this.buckets.map((bucket) => console.log(bucket))
        // console.log(this.size);
            return
        }

        if(valueToChange) {
            console.log("Yes value to change");
            console.log(bucketPresent[indexToChange].value);
            console.log(valueToChange);
            bucketPresent[indexToChange].value = valueToChange
            
            bucketPresent[indexToChange]
            // console.log(this.buckets)
            
        }else if(!bucketPresent && !valueToChange) {
            const bucket = new Bucket(key, value)
            this.buckets[hashIndex] = [bucket]
            this.size++
        }

        
        // console.log(hashIndex);
        this.buckets.map((bucket) => console.log(bucket))
        // console.log(this.size);
        
        
    }
}


const hashMap = new HashMap()

// console.log(hashMap.set("tom", "98851567"))
// console.log(hashMap.set("mot", "988516567"))


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