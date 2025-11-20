
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
            })
            
        }

        if(valueToChange) {
            console.log("Yes value to change");
            console.log(bucketPresent[indexToChange].value);
            console.log(valueToChange);
            bucketPresent[indexToChange].value = valueToChange
            
            bucketPresent[indexToChange]
            // console.log(this.buckets)
            
        }

       else if(!bucketPresent && !valueToChange) {
            const bucket = new Bucket(key, value)
            this.buckets[hashIndex] = [bucket]
        }

        
        // console.log(hashIndex);
        this.buckets.map((bucket) => console.log(bucket))
        
    }
}


const hashMap = new HashMap()

console.log(hashMap.set("Rahul", "98851567"))
console.log(hashMap.set("Rahul", "98"))
console.log(hashMap.set("chinnu", "98851567"))
console.log(hashMap.set("malu", "98851567"))
console.log(hashMap.set("Rahulxx2", "9995887"))