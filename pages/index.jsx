"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const head_1 = __importDefault(require("next/head"));
const link_1 = __importDefault(require("next/link"));
const react_1 = require("react");
const loader_1 = require("../components/loader");
function Home() {
    const [loading, setLoading] = (0, react_1.useState)(true);
    return (<div className="container">
      <head_1.default>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"/>
      </head_1.default>
      <loader_1.Loader />
      <h1>
        <link_1.default href="/posts/first-post">
          <a>this page!</a>
        </link_1.default>
      </h1>
    </div>);
}
exports.default = Home;
