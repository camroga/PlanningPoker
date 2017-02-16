import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { CardDb } from './../db/card.service';


import fs = require("file-system");

const BASE_URL = '';

@Injectable()
export class CardService {

	constructor(private http: Http) {}

	getCards(nameFile, packageCard) {
		


		//var documents = fs.knownFolders.documents();
		//var file = documents.getFile(nameFile);

		/*var cards = file.readText().then(function (content) {
			var res = JSON.parse(content);
	      	for (var i = res.length - 1; i >= 0; i--) {
	        	if( res[i].id == "default") {
	          		return res[i].cards;
	        	}
	      	}
        }, function (error) {
            return this.handleErrors(error)
        });
        return cards;*/
	}

	getItems(nameFile) {
		var documents = fs.knownFolders.documents();
		return this.http.get(documents.path+nameFile)
			.map(response => console.log(response))
			.catch(error => this.handleError(error));
	}

	private handleError(error: any) {
		console.error(error);
		return Observable.throw("Server error (" + error.status + "): " + error.text())
	}

	isEmpty(val){
    	return (val === undefined || val == null || val.length <= 0) ? true : false;
	}
}