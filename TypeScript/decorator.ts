@annotation
class MyClass {}

function annotation(target) {
  target.annotated = true;
}

const cls = new MyClass();

console.log(cls);
