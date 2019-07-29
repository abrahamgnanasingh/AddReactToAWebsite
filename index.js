
// ReactDOM.render(
//     React.createElement(App, {}, null),
//     document.getElementById('root')
// );

function renderDomReact(el, component, props, children) {
    // debugger;
    ReactDOM.render(React.createElement(component, props, children), document.getElementById(el));
}

// var script = document.createElement('script');
// script[(script.innerText===undefined?"textContent":"innerText")] = 'window.renderDomReact("root", App, {}, null);';
// document.getElementById('renderScript').appendChild(script);
var model = { name: 'My Record', list: [{id: 1, label: 'Apple'}] };
var el = 'root', key = 'props';
var cacheStorage = {};
if(!cacheStorage[el]) { cacheStorage[el] = {}; }
cacheStorage[el][key] = model;
var html = "<script>window.renderDomReact('" + el + "', App, cacheStorage['" + el + "']['" + key + "'], null);</script>";
$('#renderDomReactScript').html(html);