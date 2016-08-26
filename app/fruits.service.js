System.register(["angular2/core", "./fruits.lists"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, fruits_lists_1;
    var FruitService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (fruits_lists_1_1) {
                fruits_lists_1 = fruits_lists_1_1;
            }],
        execute: function() {
            //It is used for meta data generation and specifies that class is available to an injector for instantiation
            FruitService = (function () {
                function FruitService() {
                }
                FruitService.prototype.getContacts = function () {
                    return Promise.resolve(fruits_lists_1.COUNTRIES); // takes values from fruits.lists.ts file
                };
                FruitService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], FruitService);
                return FruitService;
            }());
            exports_1("FruitService", FruitService);
        }
    }
});
//# sourceMappingURL=fruits.service.js.map