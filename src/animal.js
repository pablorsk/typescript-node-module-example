"use strict";
var Animal = (function () {
    function Animal(theName) {
        this.name = 'a';
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
exports.Animal = Animal;
var Things;
(function (Things) {
    var Box = (function () {
        function Box() {
            this.size = 5;
        }
        return Box;
    }());
    Things.Box = Box;
})(Things = exports.Things || (exports.Things = {}));
