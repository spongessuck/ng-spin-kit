var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { SpinnerComponent, SpinnerTemplate } from './spinner.component';
var FadingCircleComponent = (function (_super) {
    __extends(FadingCircleComponent, _super);
    function FadingCircleComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.baseClass = 'fading-circle-spinner';
        _this.childClass = 'circle';
        _this.numItems = 12;
        return _this;
    }
    return FadingCircleComponent;
}(SpinnerComponent));
FadingCircleComponent = __decorate([
    Component({
        selector: 'sk-fading-circle',
        styles: ["\n    .fading-circle-spinner {\n      position: relative;\n      margin: 25px auto;\n      width: 40px;\n      height: 40px;\n    }\n    \n    .fading-circle-spinner div {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-color: transparent !important;\n    }\n    \n    .fading-circle-spinner div:before {\n      display: block;\n      margin: 0 auto;\n      width: 15%;\n      height: 15%;\n      border-radius: 100%;\n      background-color: #333;\n      content: '';\n      -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n      animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n    }\n    \n    .fading-circle-spinner .circle2 {\n      -webkit-transform: rotate(30deg);\n      -ms-transform: rotate(30deg);\n      transform: rotate(30deg);\n    }\n    \n    .fading-circle-spinner .circle3 {\n      -webkit-transform: rotate(60deg);\n      -ms-transform: rotate(60deg);\n      transform: rotate(60deg);\n    }\n    \n    .fading-circle-spinner .circle4 {\n      -webkit-transform: rotate(90deg);\n      -ms-transform: rotate(90deg);\n      transform: rotate(90deg);\n    }\n    \n    .fading-circle-spinner .circle5 {\n      -webkit-transform: rotate(120deg);\n      -ms-transform: rotate(120deg);\n      transform: rotate(120deg);\n    }\n    \n    .fading-circle-spinner .circle6 {\n      -webkit-transform: rotate(150deg);\n      -ms-transform: rotate(150deg);\n      transform: rotate(150deg);\n    }\n    \n    .fading-circle-spinner .circle7 {\n      -webkit-transform: rotate(180deg);\n      -ms-transform: rotate(180deg);\n      transform: rotate(180deg);\n    }\n    \n    .fading-circle-spinner .circle8 {\n      -webkit-transform: rotate(210deg);\n      -ms-transform: rotate(210deg);\n      transform: rotate(210deg);\n    }\n    \n    .fading-circle-spinner .circle9 {\n      -webkit-transform: rotate(240deg);\n      -ms-transform: rotate(240deg);\n      transform: rotate(240deg);\n    }\n    \n    .fading-circle-spinner .circle10 {\n      -webkit-transform: rotate(270deg);\n      -ms-transform: rotate(270deg);\n      transform: rotate(270deg);\n    }\n    \n    .fading-circle-spinner .circle11 {\n      -webkit-transform: rotate(300deg);\n      -ms-transform: rotate(300deg);\n      transform: rotate(300deg);\n    }\n    \n    .fading-circle-spinner .circle12 {\n      -webkit-transform: rotate(330deg);\n      -ms-transform: rotate(330deg);\n      transform: rotate(330deg);\n    }\n    \n    .fading-circle-spinner .circle2:before {\n      -webkit-animation-delay: -1.1s;\n      animation-delay: -1.1s;\n    }\n    \n    .fading-circle-spinner .circle3:before {\n      -webkit-animation-delay: -1s;\n      animation-delay: -1s;\n    }\n    \n    .fading-circle-spinner .circle4:before {\n      -webkit-animation-delay: -0.9s;\n      animation-delay: -0.9s;\n    }\n    \n    .fading-circle-spinner .circle5:before {\n      -webkit-animation-delay: -0.8s;\n      animation-delay: -0.8s;\n    }\n    \n    .fading-circle-spinner .circle6:before {\n      -webkit-animation-delay: -0.7s;\n      animation-delay: -0.7s;\n    }\n    \n    .fading-circle-spinner .circle7:before {\n      -webkit-animation-delay: -0.6s;\n      animation-delay: -0.6s;\n    }\n    \n    .fading-circle-spinner .circle8:before {\n      -webkit-animation-delay: -0.5s;\n      animation-delay: -0.5s;\n    }\n    \n    .fading-circle-spinner .circle9:before {\n      -webkit-animation-delay: -0.4s;\n      animation-delay: -0.4s;\n    }\n    \n    .fading-circle-spinner .circle10:before {\n      -webkit-animation-delay: -0.3s;\n      animation-delay: -0.3s;\n    }\n    \n    .fading-circle-spinner .circle11:before {\n      -webkit-animation-delay: -0.2s;\n      animation-delay: -0.2s;\n    }\n    \n    .fading-circle-spinner .circle12:before {\n      -webkit-animation-delay: -0.1s;\n      animation-delay: -0.1s;\n    }\n    \n    @-webkit-keyframes sk-circleFadeDelay {\n      0%, 39%, 100% {\n        opacity: 0;\n      }\n      40% {\n        opacity: 1;\n      }\n    }\n    \n    @keyframes sk-circleFadeDelay {\n      0%, 39%, 100% {\n        opacity: 0;\n      }\n      40% {\n        opacity: 1;\n      }\n    }\n  "],
        template: SpinnerTemplate
    })
], FadingCircleComponent);
export { FadingCircleComponent };
//# sourceMappingURL=fading-circle.component.js.map