const bundle = require('./ssr-bundle');
const hypernova = require('hypernova/server');
const renderReact = require('hypernova-react').renderReact;

hypernova({
    getComponent(name) {
    	console.log(name);
        for (let componentName in bundle) {
            if (name === componentName) {
                return renderReact(componentName, bundle[componentName]);
            }
        }

        return null;
    }
});