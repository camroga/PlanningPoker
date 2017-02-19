import { Injectable } from '@angular/core';
import { CardDb } from './../db/db.service';

const BASE_URL = '';

@Injectable()
export class CardService {

	constructor(private dataBase : CardDb) {}

	getCards(packageCards: string) {
		return this.dataBase.createTable().then(res => {
			if(res){
				return this.dataBase.fetch(packageCards).then(cards => {
					return cards;
				});
			}
		});
	}
}