import React from 'react';
import rendered from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Footer } from '../../components/Footer/Footer';

configure({adapter: new Adapter()});


describe('Footer component', () => {

    test('matches the snapshot', () => {
        const tree = rendered.create(<Router><Footer/></Router>).toJSON();
        expect(tree).toMatchSnapshot();
    });

});
