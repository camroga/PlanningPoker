import { Injectable } from '@angular/core';
import { CardDb } from './../db/db.service';

const BASE_URL = '';

@Injectable()
export class CardService {

	constructor(private dataBase : CardDb) {}

	getCards(packageCards: string) {
		this.dataBase.fetch(packageCards);
		return this.dataBase.getCards();
		
	}
}