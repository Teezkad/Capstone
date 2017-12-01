"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var news = (function () {
    function news(id, Topic, author, pic, prev, body) {
        this.id = id;
        this.Topic = Topic;
        this.author = author;
        this.pic = pic;
        this.prev = prev;
        this.body = body;
    }
    return news;
}());
exports.news = news;
var tabsComponent = (function () {
    function tabsComponent() {
        this.info = [
            { id: 0,
                Topic: 'Random News about Nothing',
                author: 'James Lock',
                pic: "~/LilBill.png",
                prev: "This is the preview to nothing ...",
                body: "This si the preview to nothing and i have nothing else to say" },
            { id: 1,
                Topic: 'Random News about Sopmething',
                author: 'Yank Mike Rotch',
                pic: "~/LilBill.png",
                prev: "This is the preview to Something ...",
                body: "This si the preview to nothing and i have nothing else to say" },
            { id: 2,
                Topic: 'Random News about Everything',
                author: 'Yank Mike Rotch',
                pic: "~/LilBill.png",
                prev: "This is the preview to everything ...",
                body: "This si the preview to nothing and i have nothing else to say" },
        ];
    }
    tabsComponent.prototype.ngOnInit = function () {
    };
    tabsComponent.prototype.onSelect = function (item) {
        this.selectedInfo = item;
    };
    tabsComponent = __decorate([
        core_1.Component({
            selector: "tabs",
            templateUrl: "./tabs/tabs.component.html",
            styleUrls: ['./tabs/tabs.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], tabsComponent);
    return tabsComponent;
}());
exports.tabsComponent = tabsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQVN6RTtJQUNFLGNBQ1MsRUFBVSxFQUNWLEtBQWMsRUFDZCxNQUFjLEVBQ2QsR0FBVyxFQUNYLElBQVksRUFDWixJQUFZO1FBTFosT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUNWLFVBQUssR0FBTCxLQUFLLENBQVM7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsUUFBRyxHQUFILEdBQUcsQ0FBUTtRQUNYLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixTQUFJLEdBQUosSUFBSSxDQUFRO0lBQUcsQ0FBQztJQUMzQixXQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFSWSxvQkFBSTtBQWdCakI7SUFFRTtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUU7WUFDVCxFQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNOLEtBQUssRUFBRSwyQkFBMkI7Z0JBQ2xDLE1BQU0sRUFBRSxZQUFZO2dCQUNwQixHQUFHLEVBQUUsZUFBZTtnQkFDcEIsSUFBSSxFQUFFLG9DQUFvQztnQkFDMUMsSUFBSSxFQUFFLCtEQUErRCxFQUFFO1lBQ3ZFLEVBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ04sS0FBSyxFQUFFLDhCQUE4QjtnQkFDckMsTUFBTSxFQUFFLGlCQUFpQjtnQkFDekIsR0FBRyxFQUFFLGVBQWU7Z0JBQ3BCLElBQUksRUFBRSxzQ0FBc0M7Z0JBQzVDLElBQUksRUFBRSwrREFBK0QsRUFBRTtZQUN2RSxFQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNOLEtBQUssRUFBRSw4QkFBOEI7Z0JBQ3JDLE1BQU0sRUFBRSxpQkFBaUI7Z0JBQ3pCLEdBQUcsRUFBRSxlQUFlO2dCQUNwQixJQUFJLEVBQUUsdUNBQXVDO2dCQUM3QyxJQUFJLEVBQUUsK0RBQStELEVBQUU7U0FDeEUsQ0FBQTtJQUNILENBQUM7SUFFQyxnQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELGdDQUFRLEdBQVIsVUFBUyxJQUFVO1FBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUE5QlEsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFDaEIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUN6QyxDQUFDOztPQUNXLGFBQWEsQ0ErQnZCO0lBQUQsb0JBQUM7Q0FBQSxBQS9CSCxJQStCRztBQS9CVSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjsgLy8gdG8gaGlkZSBhY3Rpb24gYmFyXHJcbmltcG9ydCAqIGFzIGxpc3RWaWV3TW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiO1xyXG5pbXBvcnQgKiBhcyBJbWFnZU1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9pbWFnZVwiO1xyXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ltYWdlXCI7XHJcbmltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgbmV3c3tcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBpZDogbnVtYmVyLFxyXG4gICAgcHVibGljIFRvcGljIDogU3RyaW5nLCBcclxuICAgIHB1YmxpYyBhdXRob3I6IHN0cmluZywgXHJcbiAgICBwdWJsaWMgcGljOiBzdHJpbmcsIFxyXG4gICAgcHVibGljIHByZXY6IFN0cmluZyxcclxuICAgIHB1YmxpYyBib2R5OiBTdHJpbmcgKXt9XHJcbn1cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ0YWJzXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi90YWJzL3RhYnMuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFsnLi90YWJzL3RhYnMuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyB0YWJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gIGluZm86IG5ld3NbXTtcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgdGhpcy5pbmZvPSBbXHJcbiAgICAgIHtpZDogMCxcclxuICAgICAgVG9waWM6ICdSYW5kb20gTmV3cyBhYm91dCBOb3RoaW5nJyxcclxuICAgICAgYXV0aG9yOiAnSmFtZXMgTG9jaycsIFxyXG4gICAgICBwaWM6IFwifi9MaWxCaWxsLnBuZ1wiLCBcclxuICAgICAgcHJldjogXCJUaGlzIGlzIHRoZSBwcmV2aWV3IHRvIG5vdGhpbmcgLi4uXCIsXHJcbiAgICAgIGJvZHk6IFwiVGhpcyBzaSB0aGUgcHJldmlldyB0byBub3RoaW5nIGFuZCBpIGhhdmUgbm90aGluZyBlbHNlIHRvIHNheVwiIH0sXHJcbiAgICAgIHtpZDogMSxcclxuICAgICAgVG9waWM6ICdSYW5kb20gTmV3cyBhYm91dCBTb3BtZXRoaW5nJyxcclxuICAgICAgYXV0aG9yOiAnWWFuayBNaWtlIFJvdGNoJywgXHJcbiAgICAgIHBpYzogXCJ+L0xpbEJpbGwucG5nXCIsIFxyXG4gICAgICBwcmV2OiBcIlRoaXMgaXMgdGhlIHByZXZpZXcgdG8gU29tZXRoaW5nIC4uLlwiLFxyXG4gICAgICBib2R5OiBcIlRoaXMgc2kgdGhlIHByZXZpZXcgdG8gbm90aGluZyBhbmQgaSBoYXZlIG5vdGhpbmcgZWxzZSB0byBzYXlcIiB9LFxyXG4gICAgICB7aWQ6IDIsXHJcbiAgICAgIFRvcGljOiAnUmFuZG9tIE5ld3MgYWJvdXQgRXZlcnl0aGluZycsXHJcbiAgICAgIGF1dGhvcjogJ1lhbmsgTWlrZSBSb3RjaCcsIFxyXG4gICAgICBwaWM6IFwifi9MaWxCaWxsLnBuZ1wiLCBcclxuICAgICAgcHJldjogXCJUaGlzIGlzIHRoZSBwcmV2aWV3IHRvIGV2ZXJ5dGhpbmcgLi4uXCIsXHJcbiAgICAgIGJvZHk6IFwiVGhpcyBzaSB0aGUgcHJldmlldyB0byBub3RoaW5nIGFuZCBpIGhhdmUgbm90aGluZyBlbHNlIHRvIHNheVwiIH0sXHJcbiAgICBdXHJcbiAgfVxyXG4gIHNlbGVjdGVkSW5mbzogbmV3cztcclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG4gIFxyXG4gICAgb25TZWxlY3QoaXRlbTogbmV3cyk6IHZvaWQge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkSW5mbyA9IGl0ZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuIl19