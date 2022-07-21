"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
const react_1 = __importDefault(require("react"));
const layout_module_scss_1 = __importDefault(require(".//layout.module.scss"));
const Layout = ({ children }) => {
    return <div className={layout_module_scss_1.default.container}>{children}</div>;
};
exports.Layout = Layout;
