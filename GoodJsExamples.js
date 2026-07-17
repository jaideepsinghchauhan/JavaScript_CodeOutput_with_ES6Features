// AnotherExample implement code where obj.add(10).multiply(5).subtract(30).add(10)

const obj = {
  total: 0,
  add(num) {
    this.total = this.total + num;
    return this;
  },
  subtract(num) {
    this.total = this.total - num;
    return this;
  },
  multiply(num) {
    this.total = this.total * num;
    return this;
  }
};
console.log(obj.add(10).multiply(5).subtract(30).add(10).total)