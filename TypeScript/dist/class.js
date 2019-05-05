"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, id) {
        var _this = _super.call(this, name, age) || this;
        _this.id = id;
        return _this;
    }
    Student.prototype.getId = function () {
        return this.id;
    };
    return Student;
}(Person));
/* ********************************************************************** */
var Father = /** @class */ (function () {
    function Father(name, age, money) {
        this.name = name;
        this.age = age;
        this.money = money;
    }
    Father.getClassname = function () {
        return this.className;
    };
    Father.prototype.getName = function () {
        return this.name;
    };
    Father.prototype.setName = function (name) {
        this.name = name;
    };
    Father.className = 'Father';
    return Father;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(name, age, money) {
        return _super.call(this, name, age, money) || this;
    }
    Child.prototype.desc = function () {
        console.log(this.name + " " + this.age + " " + this.money);
    };
    return Child;
}(Father));
/* ********************************************************************** */
