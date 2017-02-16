import { Component } from '@angular/core';
import { CardService } from './card.service';
import view = require("ui/core/view");
import label = require("ui/label");

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
    this.cards = this.cardService.getCards("default");
  }
}

