"use strict";
var core_1 = require('@angular/core');
var db_service_1 = require('./../db/db.service');
var BASE_URL = '';
var CardService = (function () {
    function CardService(dataBase) {
        this.dataBase = dataBase;
    }
    CardService.prototype.getCards = function (packageCards) {
        this.dataBase.fetch(packageCards);
        return this.dataBase.getCards();
    };
    CardService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [db_service_1.CardDb])
    ], CardService);
    return CardService;
}());
exports.CardService = CardService;
//# sourceMappingURL=card.service.js.map