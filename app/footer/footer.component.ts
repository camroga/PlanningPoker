import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: ` <GridLayout class="" columns="*,*" rows="*">
                <Image class="images" col="0" row="0" src="~/images/card.png"></Image>
                <Image class="images" col="1" row="0" src="~/images/info.png"></Image>
              </GridLayout>`,
  styleUrls: ["footer/footer.component.css"]
})
export class FooterComponent {
  title: string = 'Scrum Poker';
}