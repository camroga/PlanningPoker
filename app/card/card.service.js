"use strict";
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
var fs = require("file-system");
var BASE_URL = '';
var CardService = (function () {
    function CardService(http) {
        this.http = http;
    }
    CardService.prototype.getCards = function (nameFile, packageCard) {
        var documents = fs.knownFolders.documents();
        var file = documents.getFile(nameFile);
        var cards = file.readText().then(function (content) {
            var res = JSON.parse(content);
            for (var i = res.length - 1; i >= 0; i--) {
                if (res[i].id == "default") {
                    return res[i].cards;
                }
            }
        }, function (error) {
            return this.handleErrors(error);
        });
        return cards;
    };
    CardService.prototype.getItems = function (nameFile) {
        var _this = this;
        var documents = fs.knownFolders.documents();
        return this.http.get(documents.path + nameFile)
            .map(function (response) { return console.log(response); })
            .catch(function (error) { return _this.handleError(error); });
    };
    CardService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw("Server error (" + error.status + "): " + error.text());
    };
    CardService.prototype.isEmpty = function (val) {
        return (val === undefined || val == null || val.length <= 0) ? true : false;
    };
    CardService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CardService);
    return CardService;
}());
exports.CardService = CardService;
//# sourceMappingURL=card.service.js.map