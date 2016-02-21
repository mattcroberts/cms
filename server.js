import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Index from './components/Index';

const app = express();

app.use('/public', express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    const index = React.createFactory(Index)();
    const componentAsString = ReactDOMServer.renderToString(index);
    res.render("main", {
        component: componentAsString
    });

});

app.listen(3000, () => console.log("Server started"));
export default app;
