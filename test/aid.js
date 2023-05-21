// 8位（8bit）对象ID生成器
// 5位时间戳 + 3位递增数字

class Aid {
  private static _ = 0;
  static bin(): string {
    if (this._ >= 10000000) { this._ = 0; }
    this._++;
    return (Math.round(Date.now() / 1000) + 62167219200).toString(2).padStart(40, '0') + this._.toString(2).padStart(24, '0');
  }
  static big(): bigint {
    return BigInt('0b' + this.bin());
  }
}

console.log(Aid.big());
console.log(Aid.big());
console.log(Aid.big());

console.log(Aid.big());
console.log(Aid.big());
console.log(Aid.big());
