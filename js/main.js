//Create a new element with method createElement
const component = React.createElement("h1",{},"HelloWorld");
//Get the div with id "container"
const container = document.getElementById("container");
//Render the component with de method render
ReactDOM.render(component,container);