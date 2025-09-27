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

    }
    // takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null
    get(key) {

    }
    // takes a key as an argument and returns true or false based on whether or not the key is in the hash map
    has(key) {

    }
    // takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false
    remove(key) {

    }
    // returns the number of stored keys in the hash map
    length() {

    }
    // removes all entries in the hash map
    clear() {

    }
    // returns an array containing all the keys inside the hash map.
    keys() {

    }
    // returns an array containing all the values.
    values() {

    }
    // returns an array that contains each key, value pair.Example: [[firstKey, firstValue], [secondKey, secondValue]]
    entries() {

    }
}