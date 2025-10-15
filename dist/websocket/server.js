"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupWebSocket = void 0;
const ws_1 = require("ws");
const wshandler_1 = require("./wshandler");
const url_1 = require("url");
const setupWebSocket = (server) => {
    const wss = new ws_1.WebSocketServer({ server });
    wss.on('connection', (ws, req) => {
        console.log('Client connected');
        const { query } = (0, url_1.parse)(req.url, true);
        const userId = parseInt(query.userId);
        if (userId && !isNaN(userId)) {
            (0, wshandler_1.setClientSocket)(userId, ws);
            console.log(`Client registered with userId: ${userId}`);
        }
        else {
            console.log('Client connected without valid userId');
        }
        ws.on('message', (data) => {
            try {
                const parsed = JSON.parse(data.toString());
                // Validate sender ID matches connection ID
                if (!userId || !parsed.senderId || userId !== parsed.senderId) {
                    ws.send(JSON.stringify({ error: 'Invalid or mismatched senderId in message' }));
                    return;
                }
                // Handle the message
                (0, wshandler_1.handleMessage)(ws, data.toString());
            }
            catch (err) {
                ws.send(JSON.stringify({ error: 'Invalid JSON format' }));
            }
        });
        ws.on('error', (err) => {
            console.log('WebSocket Error:', err);
        });
        ws.on('close', () => {
            console.log('Client disconnected');
            (0, wshandler_1.removeClientSocket)(ws);
        });
    });
};
exports.setupWebSocket = setupWebSocket;
