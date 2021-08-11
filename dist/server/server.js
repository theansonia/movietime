"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
const PORT = 3000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static('build'));
app.use('/*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
// serves index.html at root endpoint
app.get('/*', (req, res) => res.status(200).sendFile(path_1.default.join(__dirname, '../client/index.html')));
app.get('/home', (req, res) => res.status(200).sendFile(path_1.default.join(__dirname, '../client/index.html')));
app.get('/movies', (req, res) => res.status(200).sendFile(path_1.default.join(__dirname, '../client/index.html')));
app.get('/shows', (req, res) => res.status(200).sendFile(path_1.default.join(__dirname, '../client/index.html')));
app.get('/moviedetails/*', (req, res) => res.status(200).sendFile(path_1.default.join(__dirname, '../client/index.html')));
app.get('/tvdetails/*', (req, res) => res.status(200).sendFile(path_1.default.join(__dirname, '../client/index.html')));
/* route handlers */
/* catch all */
app.use('*', (req, res) => res.status(404).send('Oops! Wrong page!'));
// eslint-disable-next-line @typescript-eslint/no-unused-vars
/* global error handler */
app.use((err, req, res, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
next) => {
    console.log('got and error', err);
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'Internal Server Error' },
    };
    const errorObj = Object.assign(defaultErr, err);
    console.log('Error message from global err handler: ', errorObj.log);
    return res.status(errorObj.status).send(errorObj.message);
});
app.listen(PORT, () => {
    console.log(`Getting served on port: http://localhost/${PORT}`);
});
module.exports = app;
//# sourceMappingURL=server.js.map