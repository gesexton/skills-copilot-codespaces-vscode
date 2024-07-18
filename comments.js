// Create web server
var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');

// Define the port to listen to
var port = 8080;

// Create the HTTP server
http.createServer(function(req, res) {
    // Parse the request containing the