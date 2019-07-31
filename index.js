
var data = { title: 'My Recordings', list: [{id: 1, label: 'Apple'}] };
ReactDOM.render(
    React.createElement(App, data, null),
    document.querySelector('#root')
);
// Utils.renderDomReact('#root', App, data, null);

// var el = '#root', storeKey = 'props';
// var storedKey = Utils.storeCache(el, storeKey, data);
// var html = "<script>Utils.renderDomReact('" + el + "', App, cacheStorage['" + el + "']['" + storedKey + "'], null);</script>";
// $('#renderDomReactScript').html(html);

// var script = document.createElement('script');
// script[(script.innerText===undefined?"textContent":"innerText")] = 'Utils.renderDomReact("#root", App, data, null);';
// document.getElementById('renderScript').appendChild(script);