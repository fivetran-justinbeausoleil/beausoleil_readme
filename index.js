const myFeatureFlagThatIAlwaysNeedButHaveNoIdeaWhatItDoes = require('./feature_flag/json/resources/myFeatureFlagThatIAlwaysNeedButHaveNoIdeaWhatItDoes.json')

// index.js
const Mustache = require('mustache');
const fs = require('fs');
const MUSTACHE_MAIN_DIR = './main.mustache';/**
 * DATA is the object that contains all
 * the data to be provided to Mustache
 * Notice the "name" and "date" property.
 */
const parseHeightIssues = (array) => array.map(item => `\n[${item}](https://fivetran.height.app/T-${item})`).join(', ');
const bulletPointMarkup = (array) => array.map(hint => `\n* ${hint}`).join(' ');

let DATA = {
        service: myFeatureFlagThatIAlwaysNeedButHaveNoIdeaWhatItDoes.service,
        name: myFeatureFlagThatIAlwaysNeedButHaveNoIdeaWhatItDoes.name,
        type: myFeatureFlagThatIAlwaysNeedButHaveNoIdeaWhatItDoes.type,
        description: myFeatureFlagThatIAlwaysNeedButHaveNoIdeaWhatItDoes.description,
        knownIssues: parseHeightIssues(myFeatureFlagThatIAlwaysNeedButHaveNoIdeaWhatItDoes.issues),
        helpfulHints: bulletPointMarkup(myFeatureFlagThatIAlwaysNeedButHaveNoIdeaWhatItDoes.helpfulHints),
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