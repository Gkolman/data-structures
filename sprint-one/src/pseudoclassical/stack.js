var Stack = function() {

  this.length = 0;
  this.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Stack.prototype.push = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

Stack.prototype.pop = function() {
  if (this.length === 0 ) {return; }
  var copy = this.storage[this.length - 1];
  this.length--;
  return copy;
};

Stack.prototype.size = function() {
  return this.length;
};

var newStack = new Stack();


