import { Injectable } from '@angular/core';

var Sqlite = require("nativescript-sqlite");
 
@Injectable()
export class CardDb {
 
    private database: any;
    private cards: Array<any>;

    public constructor() {}

    public createTable() {
        if (!Sqlite.exists("PLANING_POKER.db")) {
            Sqlite.copyDatabase("PLANING_POKER.db");
        }
        return (new Sqlite("PLANING_POKER.db")).then(db => {
            return db.execSQL("CREATE TABLE IF NOT EXISTS CARD (ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE, CARD TEXT NOT NULL UNIQUE, "+
                "PACKAGE INTEGER NOT NULL, X INTEGER NOT NULL, Y INTEGER NOT NULL)").then(id => {
                this.database = db;
                return true;
            }, error => {
                console.log("CREATE TABLE ERROR", error);
            });
        }, error => {
            console.log("OPEN DB ERROR", error);
        });
    }

    public fetch(packageCards) {
        var sql: string = "SELECT CARD.CARD, CARD.X, CARD.Y, PACKAGE.PACKAGE FROM CARD INNER JOIN PACKAGE ON PACKAGE.ID = CARD.PACKAGE ORDER BY CARD.X;";
        
        return this.database.all(sql).then(rows => {
            this.cards = [];
            for(var row in rows) {
                this.cards.push({
                    "card": rows[row][0],
                    "x": rows[row][1],
                    "y": rows[row][2],
                    "package": rows[row][3]
                });
            }
            return this.cards;
        }, error => {
            console.log("SELECT ERROR", error);
        });
    }
}