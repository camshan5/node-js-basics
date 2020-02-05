# treehouse-node-js-basics
* [Node js Basics Home](*https://teamtreehouse.com/library/nodejs-basics-2*)
* [Node js Docs](*https://nodejs.org/dist/latest-v13.x/docs/api/*) 
---
## Hello World: S1V2
In this video we’ll create our first simple application to be run on the Node.js platform.

**Commands:**
Running a node application:
```
node <filename>
```
Running the node REPL (Read-Eval-Print-Loop)
```
node
```
To exit the REPL use CTRL+D once or CTRL+C twice.

---

## Finding Help as a Node.js Developer: S1V4

**Arrow Functions**
*  [Workshop: Introducing Arrow Function Syntax](https://teamtreehouse.com/library/introducing-arrow-function-syntax) 

If you’re new to ECMAScript 6 syntax you might also want to check out  
[Introducing ES2015](https://teamtreehouse.com/library/introducing-es2015).

If you’re unfamiliar about HTTP and want to learn more about it in general check out  
[HTTP Basics](https://teamtreehouse.com/library/http-basics).

**Further Reading**
*  [Node Documentation Site](http://nodejs.org/api/) 
*  [Stability Index](http://nodejs.org/api/documentation.html#documentation_stability_index) 
*  [https.get](https://nodejs.org/api/https.html#https_https_get_options_callback) 

---
## Making a GET Request with https: S2V3
We’ll use one of Node.js’ built in modules `https` to go out and make a GET request.

**Template Literals**

Are you unfamiliar with the following string syntax?
```javascript
const greeting = `hello ${name}`;
```

Notice the use of backtick or grave accent characters surrounding the string literal hello `${name}` and the `${name}` 
placeholder within the string literal. This is an ES2015 feature known as Template Literals.

Template literals are used twice in this video: once when initializing the message variable within the printMessage 
function and again when passing in the URL to the http.get method. Surrounding either of these template literals 
with single quotes (or apostrophes) instead of with backtick characters will prevent the code from working correctly.

For more information on template literals, check out the documentation on  
[MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)  
or watch the  [Introducing Template Literals](https://teamtreehouse.com/library/introducing-template-literals) workshop.

**Documentation**
*  [http.get](http://nodejs.org/api/http.html#http_http_get_options_callback) 
*  [https.get](http://nodejs.org/api/https.html#https_https_get_options_callback) 
*  [require](http://nodejs.org/api/modules.html#modules_module_require_id) 
*  [http.STATUS_CODES](https://nodejs.org/api/http.html#http_http_status_codes) 

**Getting Error 301?**
On October 20th 2015, we upgraded our website to only use HTTPS rather than just HTTP. 
This means more security for anyone using our site.

This update does include some breaking changes to our code. But it’s simple to fix.

Replace any references to http to https. For example:

```javascript
var https = require(“https”); 
```

Modify any links from “http://teamtreehouse.com/“ to “https://teamtreehouse.com/“.

The only exception to this is using `http.STATUS_CODES`. While the APIs for http and https are closely 
mirrored **https** don’t have the `STATUS_CODES` object. You still need to use https for all the 
API calls but you’ll also need http for access to `STATUS_CODES`

```javascript
var http = require(“http”);
http.STATUS_CODES;
```

---

