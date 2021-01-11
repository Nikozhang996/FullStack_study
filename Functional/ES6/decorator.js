/* 
https://segmentfault.com/p/1210000009968000/read
 */
function decorateArmour(target, key, descriptor) {
  console.log(target);
  console.log(key);
  console.log(descriptor);
}

class Man {
  constructor(def = 2, atk = 3, hp = 3) {
    this.init(def, atk, hp);
  }

  def = 0;
  atk = 0;
  hp = 0;

  @decorateArmour
  init(def, atk, hp) {
    this.def = def;
    this.atk = atk;
    this.hp = hp;
  }

  getValue() {
    return `防御力:${this.def},攻击力:${this.atk},血量:${this.hp}`;
  }
}

const tom = new Man(8, 10, 18);

console.log(tom.getValue());
