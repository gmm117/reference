"use strict";

let Person = function(name: string) {
    this.name = name;
};

Person.prototype.say = function() {

};


export default function start(): void {
    let ps1 = new Person('1');
    ps1.say();
    let ps2 = new Person('2');
    ps2.say();
    Person.prototype.share = 'test';

    // 객체를 생성한다고 해도 prototype은 공유한다....^^
    console.log(ps1.__proto__.share);
    console.log(ps2.__proto__.share);
};