// Check Sql file for standards compliance.
import * as fs from 'fs';


// Open the file (passed in as param)
let filename = 'something.Sql';
let data = fs.readFileSync(filename,'utf8');

// split the data into an array of lines

// parse the lines
let inComment = false;
let line = '';
while (line != null) {

    if(inComment){
        if (line.contains('*/')) {
            inComment = false;

            // Strip of the comment part
            line = line.substring(line.indexOf('*/') + 2).trim();
        }
    }

    if(!inComment){

        // if line is a comment, ignore it
        if (line.trimStart().startsWith('--')) {
            // ignore line
        }
        else if (line.trimStart().startsWith('/*')) {
            inComment = true;
        }
        else {
            // check it!

            // [] around object names

            // [] around data types

            // ; at EOL

            // Keywords upper: SELECT INSERT DELETE etc


            // Table defs have PK / UCI

            


        }
    }


}


