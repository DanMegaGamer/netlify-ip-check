const https = require('https');

exports.handler = async (event, context, callback) => {
  const url = "https://api.ipify.org/?format=json"

  const httpsGet = () => {
    return new Promise((resolve, reject) => {
      https
        .get(url, res => {
          let body = '';
          res.on('data', chunk => (body += chunk));
          res.on('end', () => resolve(body));
        })
        .on('error', reject);
    });
  };

  const response = await httpsGet();

  callback(null, {
    statusCode: 200,
    body: response,
  });
};
