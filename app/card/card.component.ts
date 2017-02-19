import { Component, OnInit } from '@angular/core';
import { CardService } from './card.service';
import view = require("ui/core/view");
import label = require("ui/label");

@Component({
  selector: 'card-app',
  templateUrl: './card/card.component.html',
  styleUrls: ["/card.component.css"]
})
export class CardComponent implements OnInit{

  private cards: string[];

  constructor(private cardService: CardService) { }

  public ngOnInit() {
  	this.cardService.getCards("default").then(cards => {
      this.cards = cards;
    });
  }
}
