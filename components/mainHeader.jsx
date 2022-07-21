"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainHeader = void 0;
const image_1 = __importDefault(require("next/image"));
const react_1 = __importDefault(require("react"));
const logo_svg_1 = __importDefault(require("./logo.svg"));
const MainHeader = () => {
    return (<>
      <image_1.default src={logo_svg_1.default} alt="logo" width="150px" height="100px"/>
    </>);
};
exports.MainHeader = MainHeader;
