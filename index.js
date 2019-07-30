
var data = { name: 'My Record', list: [{id: 1, label: 'Apple'}] };
// ReactDOM.render(
//     React.createElement(App, model, null),
//     document.getElementById('root')
// );

// var script = document.createElement('script');
// script[(script.innerText===undefined?"textContent":"innerText")] = 'window.renderDomReact("root", App, {}, null);';
// document.getElementById('renderScript').appendChild(script);
var el = 'root', storeKey = 'props';
var storedKey = Utils.storeCache(el, storeKey, data);
var html = "<script>Utils.renderDomReact('" + el + "', App, cacheStorage['" + el + "']['" + storedKey + "'], null);</script>";
$('#renderDomReactScript').html(html);