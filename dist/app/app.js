"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
app.use(express_1.default.text());
app.get('/', (req, res) => {
    console.log(req.query);
    res.send('Hello World!');
});
app.post('/', (req, res) => {
    console.log(req.body);
    res.json({
        message: "Received Data Successfully"
    });
});
exports.default = app;
