import React from 'react';
import ReactDOM from 'react-dom';
const heading1 = React.createElement("h1",{
    id: "heading1",
    key: "heading1",
},'Heading 3');
const heading2 = React.createElement("h1",{
    id: "heading2",
    key: "heading2",
},'Heading 2');
const content = React.createElement("div",{
    id: "content",
    key: "content",
},[heading1,heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(content); 