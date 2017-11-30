"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var news = (function () {
    function news(id, name) {
        this.id = id;
        this.name = name;
    }
    return news;
}());
var tabsComponent = (function () {
    function tabsComponent() {
        this.info = [
            {
                id: 'Random',
                name: 'Nuts'
            }
        ];
    }
    tabsComponent = __decorate([
        core_1.Component({
            selector: "tabs",
            templateUrl: "./tabs/tabs.component.html",
        }),
        __metadata("design:paramtypes", [])
    ], tabsComponent);
    return tabsComponent;
}());
exports.tabsComponent = tabsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUd6QztJQUNFLGNBQW1CLEVBQVcsRUFBUyxJQUFZO1FBQWhDLE9BQUUsR0FBRixFQUFFLENBQVM7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFRO0lBQUUsQ0FBQztJQUN4RCxXQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFNRDtJQUVFO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRTtZQUNUO2dCQUNFLEVBQUUsRUFBRSxRQUFRO2dCQUNaLElBQUksRUFBRSxNQUFNO2FBQ2I7U0FDRixDQUFBO0lBQ0gsQ0FBQztJQVRVLGFBQWE7UUFKekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSw0QkFBNEI7U0FDMUMsQ0FBQzs7T0FDVyxhQUFhLENBVXpCO0lBQUQsb0JBQUM7Q0FBQSxBQVZELElBVUM7QUFWWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiOyAvLyB0byBoaWRlIGFjdGlvbiBiYXJcblxuY2xhc3MgbmV3c3tcbiAgY29uc3RydWN0b3IocHVibGljIGlkIDogc3RyaW5nLCBwdWJsaWMgbmFtZTogc3RyaW5nKXt9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YWJzXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vdGFicy90YWJzLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIHRhYnNDb21wb25lbnQge1xuICBpbmZvOiBuZXdzW107XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5pbmZvPSBbXG4gICAgICB7XG4gICAgICAgIGlkOiAnUmFuZG9tJyxcbiAgICAgICAgbmFtZTogJ051dHMnXG4gICAgICB9XG4gICAgXVxuICB9XG59Il19