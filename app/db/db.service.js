"use strict";
var core_1 = require('@angular/core');
var Sqlite = require("nativescript-sqlite");
var CardDb = (function () {
    function CardDb() {
    }
    CardDb.prototype.createTable = function () {
        var _this = this;
        if (!Sqlite.exists("PLANING_POKER.db")) {
            Sqlite.copyDatabase("PLANING_POKER.db");
        }
        return (new Sqlite("PLANING_POKER.db")).then(function (db) {
            return db.execSQL("CREATE TABLE IF NOT EXISTS CARD (ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE, CARD TEXT NOT NULL UNIQUE, " +
                "PACKAGE INTEGER NOT NULL, X INTEGER NOT NULL, Y INTEGER NOT NULL)").then(function (id) {
                _this.database = db;
                return true;
            }, function (error) {
                console.log("CREATE TABLE ERROR", error);
            });
        }, function (error) {
            console.log("OPEN DB ERROR", error);
        });
    };
    CardDb.prototype.fetch = function (packageCards) {
        var _this = this;
        var sql = "SELECT CARD.CARD, CARD.X, CARD.Y, PACKAGE.PACKAGE FROM CARD INNER JOIN PACKAGE ON PACKAGE.ID = CARD.PACKAGE ORDER BY CARD.X;";
        return this.database.all(sql).then(function (rows) {
            _this.cards = [];
            for (var row in rows) {
                _this.cards.push({
                    "card": rows[row][0],
                    "x": rows[row][1],
                    "y": rows[row][2],
                    "package": rows[row][3]
                });
            }
            return _this.cards;
        }, function (error) {
            console.log("SELECT ERROR", error);
        });
    };
    CardDb = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CardDb);
    return CardDb;
}());
exports.CardDb = CardDb;
//# sourceMappingURL=db.service.js.map