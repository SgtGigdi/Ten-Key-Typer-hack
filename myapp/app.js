var express = require('express');
/*
App.js - This script creates a static server, hosts files from the "public" directory and
finds and empty port to listen on
Copyright (C) 2021  Immanuel Garcia, Luke Harris, Sydney
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
(at your option) any later version.
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with this program.  If not, see http://www.gnu.org/licenses/old-licenses/gpl-2.0.html.
*/

// Imports

/* 
VERSION LOG:
1.0.0 - INITIAL RELEASE
1.25.6 - ADD FEATURES AND BASE
1.30.6 - NEONITE PATCH
1.31.6 - DESTROY PARTS OF NEONITE CODE WITH ORIGINAL CODE 
1.31.7 - EDIT ERRORS.JS PATH
1.31.8 - REROUTE PATHS TO LIBS IN A MINIFIED WAY
*/


// Definitions

const REQ_LOGGING = true; // Request Logging is set to false by default
const version = "1.31.8";
const https = require('https')
const cyear = 2021;
const authors = "Immanuel Garcia, Luke Harris, Sydney";
const windowTitle = "Blaze Server";
var app = express();
app.use("/", express.static("public")); // Set serverdir to rootdir and create an HTTP server that serves static files
app.listen(3000, function () {
  console.log('SgtGigdi Software app Hacks starting listening on port 3000!');
});