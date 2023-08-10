import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Get the current path from the URL
    const currentPath = window.location.pathname;

    // Extract the page slug from the path
    const pageSlug = currentPath.substring(1); // Remove the leading slash

    // If a page slug exists, make a POST request
    if (pageSlug) {
      const data = { pageSlug };

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
      // If no page slug, redirect to the default URL
      window.location.href = 'https://www.getownerfinanced.com';
    }
  }, []);

  return <div>Redirecting...</div>;
}
