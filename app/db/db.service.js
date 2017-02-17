"use strict";
var core_1 = require('@angular/core');
var Sqlite = require("nativescript-sqlite");
var CardDb = (function () {
    function CardDb() {
        var _this = this;
        if (!Sqlite.exists("PLANING_POKER.db")) {
            Sqlite.copyDatabase("PLANING_POKER.db");
        }
        (new Sqlite("PLANING_POKER.db")).then(function (db) {
            db.execSQL("CREATE TABLE IF NOT EXISTS CARD (ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE, CARD TEXT NOT NULL UNIQUE, " +
                "PACKAGE INTEGER NOT NULL, X INTEGER NOT NULL, Y INTEGER NOT NULL)").then(function (id) {
                _this.database = db;
            }, function (error) {
                console.log("CREATE TABLE ERROR", error);
            });
        }, function (error) {
            console.log("OPEN DB ERROR", error);
        });
    }
    CardDb.prototype.fetch = function (packageCards) {
        var _this = this;
        var sql = "SELECT CARD.CARD, CARD.X, CARD.Y, PACKAGE.PACKAGE FROM CARD INNER JOIN PACKAGE ON PACKAGE.ID = CARD.PACKAGE ORDER BY CARD.X;";
        console.log(sql);
        this.database.all(sql).then(function (rows) {
            _this.cards = [];
            for (var row in rows) {
                _this.cards.push({
                    "card": rows[row][0],
                    "x": rows[row][1],
                    "y": rows[row][2],
                    "package": rows[row][3]
                });
                console.log(rows[row][0]);
                console.log("------------->");
                console.log(rows[row][1]);
                console.log("------------->");
                console.log(rows[row][2]);
                console.log("------------->");
                console.log(rows[row][3]);
            }
        }, function (error) {
            console.log("SELECT ERROR", error);
        });
    };
    CardDb.prototype.getCards = function () {
        return this.cards;
    };
    CardDb = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CardDb);
    return CardDb;
}());
exports.CardDb = CardDb;
//# sourceMappingURL=db.service.js.map