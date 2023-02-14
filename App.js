const heading = React.createElement("h1",{id:"title"},"Namste everyone");
const heading1= React.createElement("h2",{},'heading1');

const container = React.createElement('div',{id:"container"},[heading,heading1]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);