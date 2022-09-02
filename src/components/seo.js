import React from 'react';
import useSiteMetadata from '../hooks/use-site-metadata';

const SEO = ({ title, description, pathname, children }) => {
  const { title: siteTitle, description: siteDescription, image, siteUrl, twitterUsername } = useSiteMetadata();
  const seo = {
    title: title ? `${title} | ${siteTitle}` : siteTitle,
    description: description || siteDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  };
  return (
    <React.Fragment>
      <title>{seo.title}</title>
      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={seo.title} />
      <meta name='twitter:url' content={seo.url} />
      <meta name='twitter:description' content={seo.description} />
      <meta name='twitter:image' content={seo.image} />
      <meta name='twitter:creator' content={twitterUsername} />
      <link rel='icon' href='/icon.png' />
      {children}
    </React.Fragment>
  );
};

export default SEO;
