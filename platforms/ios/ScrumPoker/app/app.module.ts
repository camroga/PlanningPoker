import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { ScrumCardComponent } from "./scrum-card/scrum-card.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { AppComponent } from "./app.component";


@NgModule({
    declarations: [
      AppComponent,
      HeaderComponent,
      ScrumCardComponent,
      FooterComponent ],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
