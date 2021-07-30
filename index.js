const myFeatureFlagThatIAlwaysNeedButHaveNoIdeaWhatItDoes = require('./feature_flag/json/resources/myFeatureFlagThatIAlwaysNeedButHaveNoIdeaWhatItDoes.json')

// index.js
const Mustache = require('mustache');
const fs = require('fs');
const MUSTACHE_MAIN_DIR = './main.mustache';/**
 * DATA is the object that contains all
 * the data to be provided to Mustache
 * Notice the "name" and "date" property.
 */

const parseMyData = (array) => array.map(item => +item).join(', ');
const bulletHints = (array) => array.map(hint => `\n* ${hint}`);
console.log(bulletHints(myFeatureFlagThatIAlwaysNeedButHaveNoIdeaWhatItDoes.helpfulHints))

let DATA = {
        name: myFeatureFlagThatIAlwaysNeedButHaveNoIdeaWhatItDoes.name,
        type: myFeatureFlagThatIAlwaysNeedButHaveNoIdeaWhatItDoes.type,
        description: myFeatureFlagThatIAlwaysNeedButHaveNoIdeaWhatItDoes.description,
        knownIssues: parseMyData(myFeatureFlagThatIAlwaysNeedButHaveNoIdeaWhatItDoes.issues),
        helpfulHints: bulletHints(myFeatureFlagThatIAlwaysNeedButHaveNoIdeaWhatItDoes.helpfulHints),
        createDate: myFeatureFlagThatIAlwaysNeedButHaveNoIdeaWhatItDoes.createDate,
        endDate: myFeatureFlagThatIAlwaysNeedButHaveNoIdeaWhatItDoes.endDate
    };/**
 * A - We open 'main.mustache'
 * B - We ask Mustache to render our file with the data
 * C - We create a README.md file with the generated output
 */
function generateReadMe() {
    fs.readFile(MUSTACHE_MAIN_DIR, (err, data) =>  {
        if (err) throw err;
        const output = Mustache.render(data.toString(), DATA);
        fs.writeFileSync('README.md', output);
    });
}

generateReadMe();