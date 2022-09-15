// Check Sql file for standards compliance.
import * as fs from 'fs';


// Open the file (passed in as param)
let filename = 'something.Sql';
let data = fs.readFileSync(filename,'utf8');

// split the data into an array of lines

// parse the lines
let line = '';
while (line != null) {

let inComment = false;
// if line is a comment, ignore it


}


