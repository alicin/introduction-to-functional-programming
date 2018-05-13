class Adder {
  private a: number = 0;
  private b: number = 0;
  private sum: number = 0;

  setX(x: number) {
    this.a = x;
  }
  setY(y: number) {
    this.b = y;
  }
  add() {
    this.sum = this.a + this.b;
  }
  getSum(): number {
    return this.sum;
  }
  reset() {
    this.a = this.b = this.sum = 0;
  }
}
