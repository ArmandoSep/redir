import { NowRequest, NowResponse } from '@vercel/node';
import axios from 'axios';

export default async (req: NowRequest, res: NowResponse) => {
  try {
    // Extract the page name from the URL path
    const pageName = req.url.replace(/^\//, '');

    // Make a POST API request (replace with your actual API endpoint)
    const apiResponse = await axios.post(`https://gnetia18l1.execute-api.us-east-1.amazonaws.com/default/GOF_redir`, {
      pageName: pageName,
    });

    // Redirect to the response page with the API data
    res.setHeader('Location', `/response/${pageName}?data=${encodeURIComponent(apiResponse.data)}`);
    res.status(302).send('');
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
};
