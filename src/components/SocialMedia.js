import React from "react";
import { Link } from "react-router-dom";

const SocialMedia = ({ link, image, alt }) => {
  return (
    <Link to={link} target="_blank" rel="noreferrer">
      <img src={image} alt={alt} />
    </Link>
  );
};

export default SocialMedia;
