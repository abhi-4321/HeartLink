"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserRoutes_1 = __importDefault(require("./routes/UserRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const route = (0, express_1.Router)();
route.use('/user', UserRoutes_1.default); // User Routes
// Test Route
route.get('/', (_req, res) => {
    res.send('Server is working !!');
});
exports.default = route;
