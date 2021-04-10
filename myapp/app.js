const http = require('http');
const { parse } = require('querystring');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        collectRequestData(req, result => {
            console.log(result);
            res.end(`Parsed data belonging to ${result.fname}`);
        });
    } 
    else {
        res.end(`
            <!doctype html>
            <html>
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <head>
        <title>
            Input Form
        </title>
        <link rel="stylesheet" href="style.css" />
        <script type="text/javascript" src="index.js"></script>
    </head>
    <body> 
*note it will take a while to load into the website*
        <form action="result.html" method="POST">
            <input type="text" id="name" name="name" placeholder="Keystrokes Wanted" />
            <input type="text" id="surname" name="surname" placeholder="Adjusted Keystrokes Wanted" />
            <input type="submit" onclick="handleSubmit()"/>
	    <button type="button" onclick="alert('Ok. First figure out a number 1000-5000 any more wont be believable as well as to make sure you number is an even number for example make it 4924 thats believable. Next you are going to subtract 294 to that number for your adjusted keystrokes click submit. Once you are on the new url you are going to paste www.learn2type.com/index.cfm?action=TenKeyTest into the url so that it doesnt show a new url and call him over or just go tell him your new score and get a good grade. Your welcome thank me later')">Help!</button>
        </form>
    </body>
</html>
        `);
    }
});
server.listen(3000);