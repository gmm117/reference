"use strict";

Function.prototype.curry = function(one: number) {
    let origFunc = this;
    let target = origFunc.length;
    let args: number[] = [];
    function next(nextOne: number) {
        args = args.concat(nextOne);
        if (args.length === target) {
            return origFunc.apply(null, args);
        } else {
            return function(nextOne: number) { return next(nextOne) };
        }
    }
    return next(one);
}


export default function start(): void {
    function multiplyFour(w: number, x: number, y: number, z: number) {
        return w * x * y * z;
      }
    console.log(multiplyFour.curry(2)(3)(4)(5));
}