// referenching: https://stackoverflow.com/questions/37770620/how-to-include-markdown-md-files-inside-html-files

var marked = require('marked');
var fs = require('fs');

var readMe = fs.readFileSync('README.md', 'utf-8');
var markdownReadMe = marked(readMe);

fs.writeFileSync('README.html', markdownReadMe);