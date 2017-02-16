import { Component } from '@angular/core';
import { CardService } from './card.service';
import view = require("ui/core/view");
import label = require("ui/label");
import { EventData } from "data/observable";
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'card-app',
  templateUrl: './card/card.component.html',
  styleUrls: ["/card.component.css"]
})
export class CardComponent {

  private cards: string[];
  private name: string = "camilo";

  constructor(private cardService: CardService) {}
  
  loadCards(eventData) {
    this.name = "Planning Poker";

    var cards;
    this.cardService.getCards("card.json", "default")
      .then(function(result:string[]){
        cards = result;
    });
    console.log(cards);
  }
}

