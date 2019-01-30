import React from 'react';
import rendered from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { UserImages } from '../../components/UserImages/UserImages';

configure({adapter: new Adapter()});
const defaultProps = {
    images: [
      'url',
      'secondUrl'
    ]
};

describe('UserImages component', () => {

    test('matches the snapshot', () => {
        const tree = rendered.create(<Router><UserImages {...defaultProps}/></Router>).toJSON();
        expect(tree).toMatchSnapshot();
    });

});
