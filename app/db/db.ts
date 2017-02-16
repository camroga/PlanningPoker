import { Injectable } from '@angular/core';

var Sqlite = require("nativescript-sqlite");
 
@Injectable()
export class CardDb {
 
    private database: any;
 
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
 
}