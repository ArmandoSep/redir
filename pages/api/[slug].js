import fetch from 'node-fetch';

export default async function handler(req, res) {
    const { slug } = req.query;

    if (slug) {
      try {
        // Get user's IP address from the request headers
        const IP = req.headers['x-real-ip'] || req.connection.remoteAddress;

        // Make a request to your endpoint to get the redirect link based on the slug
        const response = await fetch(`https://gnetia18l1.execute-api.us-east-1.amazonaws.com/default/GOF_redir?r=${slug}&i=${IP}`);
        const responseData = await response.json();

        // Get the redirect URL from the response data
        const redirectUrl = responseData.redirectUrl || 'https://www.getownerfinanced.com';

        // Redirect immediately on the server side
        res.writeHead(302, { Location: redirectUrl });
        res.end();
      } catch (error) {
        console.error('Error:', error);
        res.writeHead(302, { Location: 'https://www.getownerfinanced.com' });
        res.end();
      }
    } else {
      res.writeHead(302, { Location: 'https://www.getownerfinanced.com' });
      res.end();
    }
} 





  