import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpModule, JsonpModule } from '@angular/http';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { CardComponent } from "./card/card.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { AppComponent } from "./app.component";

import { CardService } from './card/card.service';

@NgModule({
    declarations: [
      AppComponent,
      HeaderComponent,
      CardComponent,
      FooterComponent ],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule, HttpModule, JsonpModule],
    providers: [CardService],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
