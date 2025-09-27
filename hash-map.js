export class HashMap {
    constructor() {
        this.loadFactor = 0.8;
        this.capacity = 16;
        this.size = 0;
        this.buckets = new Array(this.capacity);
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
    // handle resizing
    resize() {
        const oldBuckets = this.buckets;
        this.capacity *= 2;
        this.buckets = new Array(this.capacity);
        this.size = 0;

        for (const bucket of oldBuckets) {
            if (bucket) {
                for (const [key, value] of bucket) {
                    this.set(key, value);
                }
            }
        }
    }
    // takes two arguments: the first is a key, and the second is a value that is assigned to this key. If a key already exists, then the old value is overwritten
    set(key, value) {
        // expand if loadFactor exceeded
        if ((this.size + 1) / this.capacity > this.loadFactor) {
            this.resize();
        }

        const index = this.hash(key);
        // create bucket if empty
        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }

        // Check if key already exists inside this bucket
        for (let pair of this.buckets[index]) {
            if (pair[0] === key) {
                pair[1] = value;
                return;
            }
        }

        // Key not found then insert new pair
        this.buckets[index].push([key, value]);
        this.size++;
    }
    // takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null
    get(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        if (!bucket) return null;

        for (let [k, v] of bucket) {
            if (k === key) return v;
        }
        return null;
    }
    // takes a key as an argument and returns true or false based on whether or not the key is in the hash map
    has(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        if (!bucket) return false;

        return bucket.some(([k]) => k === key);
    }
    // takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false
    remove(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        if (!bucket) return false;

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                this.size--;
                if (bucket.length === 0) this.buckets[index] = undefined;
                return true;
            }
        }
        return false;
    }
    // returns the number of stored keys in the hash map
    length() {
        return this.size;
    }
    // removes all entries in the hash map
    clear() {
        this.capacity = 16;
        this.size = 0;
        this.buckets = new Array(this.capacity);
    }
    // returns an array containing all the keys inside the hash map.
    keys() {
        const keys = [];
        for (const bucket of this.buckets) {
            if (bucket) {
                for (const [k] of bucket) keys.push(k);
            }
        }
        return keys;
    }
    // returns an array containing all the values.
    values() {
        const values = [];
        for (const bucket of this.buckets) {
            if (bucket) {
                for (const [, v] of bucket) values.push(v);
            }
        }
        return values;
    }
    // returns an array that contains each key, value pair.Example: [[firstKey, firstValue], [secondKey, secondValue]]
    entries() {
        const all = [];
        for (const bucket of this.buckets) {
            if (bucket) {
                for (const pair of bucket) all.push([...pair]);
            }
        }
        return all;
    }
}