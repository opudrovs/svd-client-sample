/* REACT */

import React from 'react';

/* LIBRARIES */

import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

/* COMPONENTS */

import Tag from './Tag.js';

const text = 'Test text';


/* TESTS */

describe('With Enzyme', () => {
    it(`Component shows '${text}'`, () => {
        const component = shallow(<Tag text={text} />);

        expect(component.find('div')
            .text())
            .toEqual(text);
    });
});

/* SNAPSHOT TESTS */

describe('With Snapshot Testing', () => {
    it(`Component shows '${text}'`, () => {
        const component = renderer.create(<Tag text={text} />);
        const tree = component.toJSON();

        expect(tree)
            .toMatchSnapshot();
    });
});