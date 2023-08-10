export default async function handler(req, res) {
    const { slug } = req.query;
  
    if (slug) {
      try {
        const response = await fetch(`https://gnetia18l1.execute-api.us-east-1.amazonaws.com/default/GOF_redir?r=${slug}`);
        const responseData = await response.json();
  
        const redirectUrl = responseData.redirectUrl || 'https://www.getownerfinanced.com';
  
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
  