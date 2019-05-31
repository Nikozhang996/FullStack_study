class Person {
  constructor(firstname, lastname, ssn) {
    this._firstname = firstname;
    this._lastname = lastname;
    this._ssn = ssn;
    this._address = null;
    this._birthYear = null;
  }

  // getter
  get ssn() {
    return this._ssn;
  }
  get firstname() {
    return this._firstname;
  }
  get lastname() {
    return this._lastname;
  }
  get address() {
    return this._address;
  }
  get birthYear() {
    return this._birthYear;
  }

  peopleInSameCountry(friends) {
    var result = [];
    for (const idx in friends) {
      if (friends.hasOwnProperty(idx)) {
        const friend = friends[idx];
        if (this.address.country === friend.address.country) {
          result.push(friend);
        }
      }
    }
    return result;
  }
  // setter
  set birthYear(year) {
    this._birthYear = year;
  }
  set address(addr) {
    this._address = addr;
  }
  toString() {
    return `Person(${this._firstname},${this._firstname})`
  }
}

class Student extends Person {
  constructor(firstname, lastname, ssn, school) {
    super(firstname, lastname, ssn);
    this._school = school;
  }
  get school() {
    return this._school;
  }
  studentsInSameCountryAndSchool(friends) {
    var closeFriends = super.peopleInSameCountry(friends); // 调用父类数据
    var result = [];
    for (const idx in friends) {
      if (friends.hasOwnProperty(idx)) {
        const friend = friends[idx];
        if (this.address.country === friend.address.country) {
          result.push(friend);
        }
      }
    }
    return result;
  }
}

var curry = new Student(
  'Haskell',
  'Curry',
  '111-11-1111',
  'Pen State',
  curry.address = new Address('US')
);

console.log(Address)