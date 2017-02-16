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
            db.execSQL("CREATE TABLE IF NOT EXISTS CARD (id INTEGER PRIMARY KEY AUTOINCREMENT, CARD TEXT, PACKAGE TEXT)").then(function (id) {
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
        var sql = "SELECT CARD.CARD, PACKAGE.PACKAGE FROM CARD ";
        if (packageCards != null) {
            sql += "INNER JOIN PACKAGE ON PACKAGE.ID = CARD.PACKAGE";
        }
        this.database.all("SELECT * FROM CARD").then(function (rows) {
            _this.cards = [];
            for (var row in rows) {
                _this.cards.push({
                    "card": rows[row][0],
                    "package": rows[row][1]
                });
                console.log(rows[row][0]);
                console.log(rows[row][1]);
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