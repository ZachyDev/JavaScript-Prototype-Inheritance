const users = ['moseti','doroh','finna'];

Object.defineProperty(users,'last', {get: function(){
    return this[this.length-1];
}})
console.log(users.last)