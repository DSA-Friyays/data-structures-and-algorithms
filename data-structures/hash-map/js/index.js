class HashMap {
  constructor() {
    this.max = 100;
    this.array = Array(this.max).fill(null);
  }

  // hash func
  hashFunc(key) {
    // get the keys
    // convert each letter to its ascii value
    // sum up all the characters value and
    // modulo by the max, the remainder would give us the location
    // or index of the array
    let keys = "";
    for (let i = 0; i < key.length; i++) {
      keys += Number(key[i].charCodeAt(0));
    }
    const indexLocation = keys % this.max;
    return indexLocation;
  }

  getItem(key) {
    const position = this.hashFunc(key);
    const value = this.array[position];
    return value;
  }

  addValue(key, value) {
    const position = this.hashFunc(key);
    this.array[position] = value;
  }

  removeValue(key) {
    const position = this.hashFunc(key);
    this.array[position] = null;
  }
}
const hash = new HashMap();

console.log(hash.hashFunc(""));
console.log(hash.addValue("color", "blue"));
console.log(hash.array);
