export default function Home() {
    // Empty return or loading indicator
    return null;
  }

export async function getServerSideProps({ req }) {
    return {
      redirect: {
        destination: 'https://www.getownerfinanced.com',
        permanent: false,
      },
    };
  }  