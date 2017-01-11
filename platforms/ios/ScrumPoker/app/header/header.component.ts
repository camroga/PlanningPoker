import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<ActionBar title="Scrum Poker">
             <StackLayout orientation="horizontal" ios:horizontalAlignment="center" android:horizontalAlignment="left">
             <TextField class="header" text="{{title}}"></TextField>
             </StackLayout>
             </ActionBar>`,
  styleUrls: ["header/header.component.css"]
})
export class HeaderComponent {
  title: string = 'Scrum Poker';
}
