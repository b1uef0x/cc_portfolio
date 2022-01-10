var request = require('request');

export default async function handler(req, resp) {
    try {   
        request.get({url: 'http://www.dropbox.com/sh/1bugq00jms3wrh4/AAC15IB1g4Xe71AXNEymzMt8a?dl=1', encoding: null}, (err, res, body) => {
            resp.statusCode = 200
            resp.setHeader('Content-Type', 'application/zip')
            resp.end(body);
          });
    }
    catch(error) {
        console.error(error);
        resp.status(500).end(error);
    }
}