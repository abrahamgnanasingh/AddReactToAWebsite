
// ReactDOM.render(
//     //<App />,
//     React.createElement(App, {}, null),
//     document.getElementById('root')
// );

function getReactCreateElement(component) {
    debugger;
    return React.createElement(component, {}, null);
}

var html = "<script>ReactDOM.render(getReactCreateElement(App), document.getElementById('root'));</script>";
document.getElementById('renderScript').innerHTML = html;