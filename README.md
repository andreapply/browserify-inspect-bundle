# browserify-inspect-bundle

This is a trivial script that lists the contents of a browserify bundle. It uses the `esprima` parser to actually parse the bundle and extract the list of included modules.

You may need this when trying to either optimize your bundles or simply learn more about how browserify works.

## Usage

    npm install -g browserify-inspect-bundle
    browserify-inspect-bundle /path/to/your/bundle.js
    
    
