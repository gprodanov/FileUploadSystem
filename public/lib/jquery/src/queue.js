{"_id":"base64-url","_rev":"2-d88ab2300bf99befb927ce08e386a95a","name":"base64-url","description":"Base64 encode, decode, escape and unescape for URL applications","dist-tags":{"latest":"1.0.0"},"versions":{"1.0.0":{"name":"base64-url","version":"1.0.0","description":"Base64 encode, decode, escape and unescape for URL applications","main":"index.js","directories":{"test":"test"},"scripts":{"test":"node test"},"repository":{"type":"git","url":"git://github.com/joaquimserafim/base64-url.git"},"keywords":["base64","base64url"],"author":{"name":"@joaquimserafim"},"license":"ISC","bugs":{"url":"https://github.com/joaquimserafim/base64-url/issues"},"homepage":"https://github.com/joaquimserafim/base64-url","devDependencies":{"tape":"^2.12.3"},"_id":"base64-url@1.0.0","_shasum":"ab694376f2801af6c9260899ffef02f86b40ee2c","_from":".","_npmVersion":"1.4.9","_npmUser":{"name":"quim","email":"joaquim.serafim@gmail.com"},"maintainers":[{"name":"quim","email":"joaquim.serafim@gmail.com"}],"dist":{"shasum":"ab694376f2801af6c9260899ffef02f86b40ee2c","tarball":"http://registry.npmjs.org/base64-url/-/base64-url-1.0.0.tgz"}}},"readme":"# base64-url\n\nBase64 encode, decode, escape and unescape for URL applications.\n\n<a href=\"https://nodei.co/npm/base64-url/\"><img src=\"https://nodei.co/npm/base64-url.png?downloads=true\"></a>\n\n[![Build Status](https://travis-ci.org/joaquimserafim/base64-url.png?branch=master)](https://travis-ci.org/joaquimserafim/base64-url)\n\n\n\n**V1**\n\n\n####API\n    \n  \t> base64url.encode('Node.js is awesome.');\n  \tTm9kZS5qcyBpcyBhd2Vzb21lLg\n\n  \t> base64url.decode('Tm9kZS5qcyBpcyBhd2Vzb21lLg');\n  \tNode.js is awesome.\n  \n \t> base64url.escape(This+is/goingto+escape==);\n  \tThis-is_goingto-escape\n  \t\n    > base64url.unescape('This-is_goingto-escape');\n    This+is/goingto+escape==\n  \t","maintainers":[{"name":"quim","email":"joaquim.serafim@gmail.com"}],"time":{"modified":"2014-05-12T22:01:24.552Z","created":"2014-05-12T22:01:24.552Z","1.0.0":"2014-05-12T22:01:24.552Z"},"homepage":"https://github.com/joaquimserafim/base64-url","keywords":["base64","base64url"],"repository":{"type":"git","url":"git://github.com/joaquimserafim/base64-url.git"},"author":{"name":"@joaquimserafim"},"bugs":{"url":"https://github.com/joaquimserafim/base64-url/issues"},"license":"ISC","readmeFilename":"README.md","_attachments":{},"_etag":"\"5EWLYHG6AXJ2BAXEIG978MH6P\""}                                                                                                                                                    		count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = data_priv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
});

return jQuery;
});
