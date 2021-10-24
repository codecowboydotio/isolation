var express = require('express');
var app = express();
var PORT = 4000;
const exec = require('child_process').exec;


// View engine setup
app.set('view engine', 'ejs');

// Without middleware
app.get('/', function(req, res){
  goober = exec("ps -o uid -o pid -o ppid -o cmd --forest", (error, stdout, stderr) => {
   if (error) {
     console.error(`${error}`);
     return;
   }
   fooble = (`${stdout}`);
   newarray = fooble.split("\n");
//   console.log(newarray[0]);
  
  // Rendering home.ejs page
  res.render('home');
  });
});

app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});

