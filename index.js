const translate = require('google-translate-api');
const gemoji = require('gemoji');


/*----------  Transform to emoji  ----------*/

const transform = (text) => new Promise((resolve,reject) => {
 	translate(text, {to: 'en'})
 		.then(res => {
 			const icon = gemoji.name[res.text.toLowerCase()];
 			if(icon) resolve(icon.emoji);
 			resolve(icon);
	}).catch(err => {
		reject(err)	
	});
});

module.exports = {
  transform
}