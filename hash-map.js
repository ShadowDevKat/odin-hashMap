export class HashMap {
    constructor() {
        this.loadFactor = 0.8;
        this.capacity = 16;
        this.buckets = [];
    }
    // takes a key and produces a hash code with it
    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;
    }
    // takes two arguments: the first is a key, and the second is a value that is assigned to this key. If a key already exists, then the old value is overwritten
    set(key, value) {
        const index = this.hash(key);

        if (!this.buckets[index]) {
            this.buckets[index] = { key, value };
            return;
        }

        if (this.buckets[index].key === key) {
            this.buckets[index].value = value;
        } else {
            // handle collision
        }
    }
    // takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null
    get(key) {
        const index = this.hash(key);
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        const bucket = this.buckets[index];
        return bucket && bucket.key === key ? bucket.value : null;
    }
    // takes a key as an argument and returns true or false based on whether or not the key is in the hash map
    has(key) {
        const index = this.hash(key);
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        const bucket = this.buckets[index];
        return bucket && bucket.key === key ? true : false;
    }
    // takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false
    remove(key) {
        const index = this.hash(key);
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        const bucket = this.buckets[index];
        if (bucket && bucket.key === key) {
            this.buckets[index] = undefined;
            return true;
        }
        return false;
    }
    // returns the number of stored keys in the hash map
    length() {
        return this.buckets.reduce((count, bucket) =>
            bucket ? count + 1 : count, 0);
    }
    // removes all entries in the hash map
    clear() {
        this.buckets = new Array(this.capacity);
    }
    // returns an array containing all the keys inside the hash map.
    keys() {
        if (this.buckets) {
            return this.buckets
                .filter(bucket => bucket)
                .map(bucket => bucket.key);
        }
    }
    // returns an array containing all the values.
    values() {
        if (this.buckets) {
            return this.buckets
                .filter(bucket => bucket)
                .map(bucket => bucket.value);
        }
    }
    // returns an array that contains each key, value pair.Example: [[firstKey, firstValue], [secondKey, secondValue]]
    entries() {
        if (this.buckets) {
            return this.buckets
                .filter(bucket => bucket)
                .map(bucket => [bucket.key, bucket.value]);
        }
    }
}