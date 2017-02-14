import chalk from "chalk";

console.log(chalk.yellow("Getting feeds..."));

var http = require('https');

var options = {
  host: 'news.ycombinator.com',
  port: 443,
  path: '/rss',
  method: "GET"
};

var callback = function(response) {
  var str = '';

  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  response.on('end', function () {
    console.log(str);
  });
}

http.request(options, callback).end();
