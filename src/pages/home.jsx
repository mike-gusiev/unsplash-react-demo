import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Col, Row, Grid } from 'react-bootstrap';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

import * as usersDuck from '../ducks/users';
import { UserImages } from '../components/UserImages/UserImages';
import { Footer } from '../components/Footer/Footer';

import './home.scss';

class HomePage extends Component {

  handleUserSelected = ({ target: { innerText } }) => {
    const {userList} = this.props.data;
    const selectedUser = userList.find(({ name }) => name === innerText);
    this.props.loadImages(selectedUser.username);
  };

  fetchNewUsers = (value) => {
    this.props.loadUsers(value)
  };

  renderNotFound = () => (
    <div className="not-found-message">We have no photos for you now. Please, search for a new user.</div>
  );

  render() {
    const {userList, imageList} = this.props.data;
    const imagesUrls = imageList ? imageList.map(({urls}) => urls.regular) : [];
    const options = userList ? userList.map(({name}) => name) : [];
    return (
      <Grid>
        <Row className="content">
          <Col md={3}>
            <AsyncTypeahead
              isLoading={false}
              className="async-typeahead"
              options={options}
              onSearch={(value) => this.fetchNewUsers(value)}
              placeholder="Search for a Github user..."
              renderMenuItemChildren={(option) => (
                <div onClick={(e) => this.handleUserSelected(e)}>
                  {option}
                </div>
              )}
            />
          </Col>
          <Col md={9}>
            { imagesUrls.length ? (
                <UserImages images={imagesUrls}/>
              ) : (
                this.renderNotFound()
            )}
          </Col>
        </Row>
        <Footer/>
      </Grid>
    )
  }
}

export default connect(
  state => state.users,
  dispatch => ({
    loadUsers: (value) => dispatch(usersDuck.onUsersFetch(value)),
    loadImages: (value) => dispatch(usersDuck.onImagesFetch(value))
  })
)(HomePage);

HomePage.propTypes = {
  data: PropTypes.shape({
    userList: PropTypes.array,
    imageList: PropTypes.array,
    loadUsers: PropTypes.func,
    loadImages: PropTypes.func,
  })
};
