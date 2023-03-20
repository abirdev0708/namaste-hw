import React from 'react';
import ReactDOM from 'react-dom/client';
const Title =()=> <h1>Abir Fruit Shop</h1>;
const SubTitle = <h1>List Here</h1>
const MainData = () => {
    return <div>
        <h2>Fruit</h2>
        <ul>
            <li>Banana</li>
            <li>Pinapple</li>
            <li>Mango</li>
        </ul>
    </div>
}
const Content =()=> {
    return <div>
        <Title/>
        {SubTitle}
        <MainData/>
    </div>};
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Content/>); 