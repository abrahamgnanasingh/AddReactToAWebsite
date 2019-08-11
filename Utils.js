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
        var cProps = {};
        if(props) { cProps = JSON.parse(JSON.stringify(props)); };
        if(children) {
            children = React.createElement(children);
        }
        ReactDOM.render(React.createElement(component, cProps, children), document.querySelector(el));
    },

    getOffsetHeight(el) {
        var elStyle = el.style;
        elStyle.display = 'block';
        elStyle.opacity = 0;
        elStyle.position = 'absolute';
        // debugger;
        var offsetHeight = el.offsetHeight; //clientHeight: Height including padding, offsetHeight: Height including padding and border
        elStyle.display = '';
        elStyle.opacity = '';
        elStyle.position = '';
        return offsetHeight;
    }
};