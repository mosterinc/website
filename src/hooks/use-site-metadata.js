import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
          siteUrl
          twitterUsername
        }
      }
    }
  `);

  return site.siteMetadata;
};

export default useSiteMetadata;
