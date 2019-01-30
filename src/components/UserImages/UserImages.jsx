import React from 'react';
import PropTypes from 'prop-types';
import { Image, Row, Col } from 'react-bootstrap'

import './UserImages.scss';

export const UserImages = (props) => {
  const { images } = props;
  return (
    <div>
      <Row>
        {images.map((img, i) =>
          <Col xs={6} md={4} key={i}>
            <Image className="user-image" src={img} rounded/>
          </Col>)
        }
      </Row>
    </div>
  )
};

UserImages.propTypes = {
  images: PropTypes.array,
};
