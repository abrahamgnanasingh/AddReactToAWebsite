var Utils = {
    storeCache: function(el, key, value) {
        if(typeof window.cacheStorage == 'undefined') { window.cacheStorage = {} };
        if(!cacheStorage[el]) { cacheStorage[el] = {}; }
        if(cacheStorage[el][key]) {
            var index = Object.keys(cacheStorage[el]).length;
            key += index;
        }
        cacheStorage[el][key] = value;
        return key;
    },
    
    renderDomReact: function(el, component, props, children) {
        // debugger;
        ReactDOM.render(React.createElement(component, props, children), document.getElementById(el));
    }
};