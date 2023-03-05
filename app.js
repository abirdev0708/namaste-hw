import React from 'react';
import ReactDOM from 'react-dom';
const heading1 = React.createElement("h1",{},'Heading 1');
const heading2 = React.createElement("h1",{},'Heading 2');
const content = React.createElement("div",{},[heading1,heading2])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(content); 