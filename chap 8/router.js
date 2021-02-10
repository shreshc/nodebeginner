function route(pathname) {
    console.log("About to route a request for " + pathname);
}


function route1(path) {
    console.log("In route 1: " + path);
}
exports.route = route;
exports.route1 = route1;