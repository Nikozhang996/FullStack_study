@addSay
class Person {
  say: Function;
}

function addSay(target: Function) {
  target.prototype.say = function (value: string) {
    console.log(value);
  };

  console.log(target);
}

const per = new Person();

per.say;
