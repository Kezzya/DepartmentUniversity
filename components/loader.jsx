"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loader = void 0;
const react_1 = __importDefault(require("react"));
const loader_module_scss_1 = __importDefault(require("./loader.module.scss"));
const Loader = () => {
    return (<>
      <div className={loader_module_scss_1.default.ldsDefault}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>);
};
exports.Loader = Loader;
