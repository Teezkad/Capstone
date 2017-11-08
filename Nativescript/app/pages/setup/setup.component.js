"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var setupPage = (function () {
    function setupPage(page) {
        this.page = page;
        this.page.actionBarHidden = true;
    }
    setupPage.prototype.submit = function () {
    };
    setupPage = __decorate([
        core_1.Component({
            selector: "setup-page",
            templateUrl: "./pages/setup/setup.component.html",
            styleUrls: ["pages/setup/setup-common.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], setupPage);
    return setupPage;
}());
exports.setupPage = setupPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2V0dXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBRTFDLGdDQUE4QjtBQVE5QjtJQUNJLG1CQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFFckMsQ0FBQztJQUlELDBCQUFNLEdBQU47SUFFQSxDQUFDO0lBVlEsU0FBUztRQU5yQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLG9DQUFvQztZQUNqRCxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztTQUM5QyxDQUFDO3lDQUc0QixXQUFJO09BRHJCLFNBQVMsQ0FZckI7SUFBRCxnQkFBQztDQUFBLEFBWkQsSUFZQztBQVpZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICB7Q29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiXHJcbmltcG9ydCB7IFBhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInNldHVwLXBhZ2VcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvc2V0dXAvc2V0dXAuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvc2V0dXAvc2V0dXAtY29tbW9uLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIHNldHVwUGFnZXtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSl7XHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIHN1Ym1pdCgpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICBcclxufSJdfQ==