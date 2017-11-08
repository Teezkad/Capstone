"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import { Location, enableLocationRequest, watchLocation, clearWatch } from "nativescript-geolocation";
var patientPage = (function () {
    function patientPage() {
    }
    patientPage = __decorate([
        core_1.Component({
            selector: "patient-page",
            templateUrl: "./pages/patient/patient.component.html"
        })
    ], patientPage);
    return patientPage;
}());
exports.patientPage = patientPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYXRpZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUUxQyx5R0FBeUc7QUFPekc7SUFBQTtJQStCQSxDQUFDO0lBL0JZLFdBQVc7UUFMdkIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSx3Q0FBd0M7U0FDeEQsQ0FBQztPQUVXLFdBQVcsQ0ErQnZCO0lBQUQsa0JBQUM7Q0FBQSxBQS9CRCxJQStCQztBQS9CWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuLy8gaW1wb3J0IHsgTG9jYXRpb24sIGVuYWJsZUxvY2F0aW9uUmVxdWVzdCwgd2F0Y2hMb2NhdGlvbiwgY2xlYXJXYXRjaCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwicGF0aWVudC1wYWdlXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL3BhdGllbnQvcGF0aWVudC5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgcGF0aWVudFBhZ2V7XHJcbiAgICAvLyBwdWJsaWMgbW9uaXRvckRpcmVjdGlvbjogc3RyaW5nID0gXCIwXCI7XHJcbiAgICAvLyBwdWJsaWMgaXNNb25pdG9yaW5nID0gZmFsc2U7XHJcbiAgICAvLyBwdWJsaWMgb3B0aW9ucztcclxuICAgIC8vIHB1YmxpYyBsaXN0ZW5lcjtcclxuICAgIC8vIHB1YmxpYyBidXR0b25UZXh0ID0gXCJTdGFydCBsb2NhdGlvbiBtb25pdG9yaW5nXCI7XHJcblxyXG4gICAgLy8gY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyAgICAgLy8gZW5hYmxlTG9jYXRpb25SZXF1ZXN0KHRydWUpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHB1YmxpYyBtb25pdG9yKGFyZ3MpIHtcclxuICAgIC8vICAgICAvLyA+PiBsb2NhdGlvbi1tb25pdG9yaW5nXHJcbiAgICAvLyAgICAgaWYgKHRoaXMuaXNNb25pdG9yaW5nKSB7XHJcbiAgICAvLyAgICAgICAgIC8vIGNsZWFyV2F0Y2godGhpcy5saXN0ZW5lcik7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuaXNNb25pdG9yaW5nID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiU3RhcnQgbG9jYXRpb24gbW9uaXRvcmluZ1wiO1xyXG4gICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMubGlzdGVuZXIgPSB3YXRjaExvY2F0aW9uKChsb2M6IExvY2F0aW9uKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAobG9jKSB7IFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMubW9uaXRvckRpcmVjdGlvbiA9IChsb2MuZGlyZWN0aW9uKS50b0ZpeGVkKDIpOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH0sIChlKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGUubWVzc2FnZSk7XHJcbiAgICAvLyAgICAgICAgIH0sIHRoaXMub3B0aW9ucyk7XHJcblxyXG4gICAgLy8gICAgICAgICB0aGlzLmlzTW9uaXRvcmluZyA9IHRydWU7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiU3RvcCBsb2NhdGlvbiBtb25pdG9yaW5nXCI7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxufSJdfQ==