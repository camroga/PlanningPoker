import { Injectable } from '@angular/core';

var Sqlite = require("nativescript-sqlite");
 
@Injectable()
export class CardDb {
 
    private database: any;
    private cards: Array<any>;

    public constructor() {
        if (!Sqlite.exists("PLANING_POKER.db")) {
            Sqlite.copyDatabase("PLANING_POKER.db");
        }
        (new Sqlite("PLANING_POKER.db")).then(db => {
            db.execSQL("CREATE TABLE IF NOT EXISTS CARD (ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE, CARD TEXT NOT NULL UNIQUE, "+
                "PACKAGE INTEGER NOT NULL, X INTEGER NOT NULL, Y INTEGER NOT NULL)").then(id => {
                this.database = db;
            }, error => {
                console.log("CREATE TABLE ERROR", error);
            });
        }, error => {
            console.log("OPEN DB ERROR", error);
        });
    }

    public fetch(packageCards) {
        var sql: string = "SELECT CARD.CARD, CARD.X, CARD.Y, PACKAGE.PACKAGE FROM CARD INNER JOIN PACKAGE ON PACKAGE.ID = CARD.PACKAGE ORDER BY CARD.X;";
        
        console.log(sql);
        this.database.all(sql).then(rows => {
            this.cards = [];
            for(var row in rows) {
                this.cards.push({
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
        }, error => {
            console.log("SELECT ERROR", error);
        });
    }
 
     public getCards() {
         return this.cards;
     }
}