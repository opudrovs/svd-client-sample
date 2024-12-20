import React from 'react';

import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Tag from './Tag.js';

const text = 'Test text';

describe('With Enzyme', () => {
    it(`Component shows '${text}'`, () => {
        const component = shallow(<Tag text={text} />);

        expect(component.find('div')
            .text())
            .toEqual(text);
    });
});

describe('With Snapshot Testing', () => {
    it(`Component shows '${text}'`, () => {
        const component = renderer.create(<Tag text={text} />);
        const tree = component.toJSON();

        expect(tree)
            .toMatchSnapshot();
    });
});