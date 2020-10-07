"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var counter = 0; counter < length; counter++) {
            for (var jCounter = 0; jCounter < length - counter - 1; jCounter++) {
                if (this.collection[jCounter] >
                    this.collection[jCounter + 1]) {
                    var leftHand = this.collection[jCounter];
                    this.collection[jCounter] = this.collection[jCounter + 1];
                    this.collection[jCounter + 1] = leftHand;
                }
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
