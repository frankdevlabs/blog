import React from "react"; // eslint-disable-line no-unused-vars

const SocialLink = (props) => {
  return (
    <a
      css={{
        marginLeft: "0.3rem",
      }}
      target="_blank"
      className="anchor"
      href={props.href}
      rel="noopener noreferrer external"
    >
      {props.children}
    </a>
  );
};

const Share = (props) => {
  return (
    <>
      {props.children}
      <SocialLink href={`https://facebook.com/sharer/sharer.php?u=${props.href}`}>
        Facebook
      </SocialLink>
      ,
      <SocialLink href={`https://www.linkedin.com/sharing/share-offsite/?url=${props.href}`}>
        LinkedIn
      </SocialLink>
      ,
      <SocialLink
        href={`https://twitter.com/intent/tweet?via=francq85&url=${props.href}&text=${props.title}`}
      >
        Twitter
      </SocialLink>
      ,
      <SocialLink href={`https://api.whatsapp.com/send?&text=${props.title}%20${props.href}`}>
        WhatsApp
      </SocialLink>
    </>
  );
};

export default Share;
