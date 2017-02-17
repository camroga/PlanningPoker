import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<ActionBar title="Scrum Poker">
             <StackLayout orientation="horizontal" ios:horizontalAlignment="center" android:horizontalAlignment="left">
             </StackLayout>
             </ActionBar>`,
  styleUrls: ["header/header.component.css"]
})
export class HeaderComponent {}
