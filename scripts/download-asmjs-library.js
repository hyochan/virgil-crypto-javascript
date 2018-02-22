var fs = require('fs');
var path = require('path');
var del = require('del');
var request = require('request');
var https = require('https');

var cryptoVersion = '2.2.5';
var downloadUrl = 'https://cdn.virgilsecurity.com/packages/asmjs/virgil-crypto-' + cryptoVersion + '-asmjs.js';
var downloadFilePath = path.join(__dirname, '../', 'virgil_crypto_asmjs.js');
var libPath = path.resolve(path.join(__dirname, '../src/lib/virgil_crypto_asmjs.js'));

request
	.get({
		url: downloadUrl,
		agent: new https.Agent({
			keepAlive: true
		})
	})
	.on('response', function(res) {
		if (res.statusCode != 200) {
			abortWithError(res.statusMessage);
		}
	})
	.on('error', abortWithError)
	.on('end', function() {
		if (fs.existsSync(downloadFilePath)) {
			console.log('The Virgil Crypto asmjs build successfully downloaded.\n\n');
			console.log('Updating asmjs library...\n\n');

			fs.writeFileSync(libPath, fs.readFileSync(downloadFilePath));

			console.log('The asmjs library updated successfully...\n\n');

			del(downloadFilePath);
		} else {
			abortWithError();
		}
	})
	.pipe(fs.createWriteStream(downloadFilePath));

function abortWithError(error) {
	console.error('\x1b[31m', 'Failed to download asmjs build of Virgil Crypto', '\x1b[0m');

	if (error) {
		console.log(error);
	}

	process.exit(1);
}
