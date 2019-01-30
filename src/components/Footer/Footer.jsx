import React from 'react';
import { Row } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons';

import './Footer.scss';

export const Footer = () => {
  return (
    <>
      <Row className="social-icon-list">
        <SocialIcon url="http://twitter.com" />
        <SocialIcon url="http://facebook.com" />
        <SocialIcon url="http://youtube.com" />
      </Row>
      <Row className="unsplash-copyright">
        © 2019 Unsplash, Inc.
      </Row>
    </>
  )
};
