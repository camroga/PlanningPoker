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
            db.execSQL("CREATE TABLE IF NOT EXISTS CARD (id INTEGER PRIMARY KEY AUTOINCREMENT, CARD TEXT, PACKAGE TEXT)").then(id => {
                this.database = db;
            }, error => {
                console.log("CREATE TABLE ERROR", error);
            });
        }, error => {
            console.log("OPEN DB ERROR", error);
        });
    }

    public fetch(packageCards) {
        var sql: string = "SELECT CARD.CARD, PACKAGE.PACKAGE FROM CARD ";
        if(packageCards != null) {
            sql += "INNER JOIN PACKAGE ON PACKAGE.ID = CARD.PACKAGE";
        }
        this.database.all("SELECT * FROM CARD").then(rows => {
            this.cards = [];
            for(var row in rows) {
                this.cards.push({
                    "card": rows[row][0],
                    "package": rows[row][1]
                });
                console.log(rows[row][0]);
                console.log(rows[row][1]);
            }
        }, error => {
            console.log("SELECT ERROR", error);
        });
    }
 
     public getCards() {
         return this.cards;
     }
}