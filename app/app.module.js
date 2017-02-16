"use strict";
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var card_component_1 = require("./card/card.component");
var footer_component_1 = require("./footer/footer.component");
var header_component_1 = require("./header/header.component");
var app_component_1 = require("./app.component");
var card_service_1 = require('./card/card.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                card_component_1.CardComponent,
                footer_component_1.FooterComponent],
            bootstrap: [app_component_1.AppComponent],
            imports: [nativescript_module_1.NativeScriptModule, http_1.HttpModule, http_1.JsonpModule],
            providers: [card_service_1.CardService],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map