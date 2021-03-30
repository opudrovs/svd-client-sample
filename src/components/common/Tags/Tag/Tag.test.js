/* REACT */

import React from 'react';

/* LIBRARIES */

import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

/* COMPONENTS */

import Tag from './Tag.js';

const text = 'Test text';

describe('With Enzyme', () => {
    it(`Tag shows '${text}'`, () => {
        const component = shallow(<Tag text={text} />);

        expect(component.find('div')
            .text())
            .toEqual(text);
    });
});

describe('With Snapshot Testing', () => {
    it(`Tag shows '${text}'`, () => {
        const component = renderer.create(<Tag text={text} />);
        const tree = component.toJSON();
        expect(tree)
            .toMatchSnapshot();
    });
});