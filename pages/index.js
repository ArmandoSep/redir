
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Check if there are any page params
    const params = new URLSearchParams(window.location.search);
    const pageParam = params.get('page');

    // If pageParam exists, make a POST request
    if (pageParam) {
      const data = { page: pageParam };

      fetch('https://gnetia18l1.execute-api.us-east-1.amazonaws.com/default/GOF_redir', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(responseData => {
          const redirectUrl = responseData.redirectUrl;
          if (redirectUrl) {
            window.location.href = redirectUrl;
          } else {
            window.location.href = 'https://www.getownerfinanced.com';
          }
        })
        .catch(error => {
          console.error('Error:', error);
          window.location.href = 'https://www.getownerfinanced.com';
        });
    } else {
      // If no page params, redirect to the default URL
      window.location.href = 'https://www.getownerfinanced.com';
    }
  }, []);

  return <div>Redirecting...</div>;
}
