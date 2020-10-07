"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var length = this.length;
        for (var counter = 0; counter < length; counter++) {
            for (var jCounter = 0; jCounter < length - counter - 1; jCounter++) {
                if (this.compare(jCounter, jCounter + 1)) {
                    this.swap(jCounter, jCounter + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
