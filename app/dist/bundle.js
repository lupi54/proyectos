var appRoot = "/";
var Builder = require('systemjs-builder');

// optional constructor options
// sets the baseURL and loads the configuration file
var builder = new Builder("/", 'config.js');

function build(entry, output) {
    var message = entry + " --> " + output;
    var begin = new Date();
    console.log("---- Build started @ " + begin.toLocaleTimeString() + " # " + message);
    builder
        .bundle(entry, output, {
            minify: true,
            mangle: true
        })
        .then(function (output) {
            var index = 1;
            output.modules.forEach(function (m) {
                ////output.modules.sort().forEach(function (m) {
                console.log(" #" + index++ + " " + m);
            });

            logEnd(begin, message);
        })
        .catch(function (err) {
            console.log('!!! error');
            console.log(err);
            logEnd(begin, message);
            throw err;
        });
}

function logEnd(begin, message) {
    var end = new Date();
    console.log("---- Build completed @ " + end.toLocaleTimeString() + " (" + (end - begin) + " ms) # " + message);
}

build(appRoot + 'app.js', __dirname + '/build/app-bundle.js')
build(appRoot + 'contact/module.js', __dirname + '/build/app-bundle-contact.js')
build(appRoot + 'about/module.js', __dirname + '/build/app-bundle-about.js')