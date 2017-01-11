"use strict";
var core_1 = require('@angular/core');
var FooterComponent = (function () {
    function FooterComponent() {
        this.title = 'Scrum Poker';
    }
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'app-footer',
            template: " <GridLayout class=\"footer\" columns=\"auto,100\" rows=\"auto,auto\">\n                <Image class=\"image\" col=\"0\" row=\"0\" src=\"~/images/card.png\"></Image>\n                <Image class=\"image\" col=\"1\" row=\"0\" src=\"~/images/info.png\"></Image>\n              </GridLayout>",
            styleUrls: ["footer/footer.component.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map