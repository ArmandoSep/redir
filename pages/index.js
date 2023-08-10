export default function Home() {
    // Empty return or loading indicator
    return null;
  }
  
  export async function getServerSideProps({ req }) {
    // Get the current path from the request object
    const currentPath = req.url;
  
    // Extract the page slug from the path
    const pageSlug = currentPath.substring(1); // Remove the leading slash
  
    // If a page slug exists, make a GET request
    if (pageSlug) {
      try {
        const response = await fetch(`https://gnetia18l1.execute-api.us-east-1.amazonaws.com/default/GOF_redir?r=${pageSlug}`);
        const responseData = await response.json();
  
        const redirectUrl = responseData.redirectUrl || 'https://www.getownerfinanced.com';
  
        return {
          redirect: {
            destination: redirectUrl,
            permanent: false,
          },
        };
      } catch (error) {
        console.error('Error:', error);
      }
    }
  
    // If no page slug or an error occurred, redirect to the default URL
    return {
      redirect: {
        destination: 'https://www.getownerfinanced.com',
        permanent: false,
      },
    };
  }
  