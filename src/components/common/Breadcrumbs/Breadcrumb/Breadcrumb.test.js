/* REACT */

import React from 'react';

/* LIBRARIES */

import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

/* COMPONENTS */

import Breadcrumb from './Breadcrumb.js';

const text = 'Test text';

const url = 'https://www.smartvectordesign.com';


/* TESTS */

describe('With Enzyme', () => {
    it(`Component shows '${text}'`, () => {
        const component = shallow(<Breadcrumb text={text} />);

        expect(component.find('span')
            .text())
            .toEqual(text);
    });
});

describe('With Enzyme', () => {
    it(`Component shows '${text}' and has '${url}' for href`, () => {
        const component = shallow(<Breadcrumb url={url} text={text} />);

        expect(component.find('a')
            .text())
            .toEqual(text);

        expect(component.find('a').prop('href'))
            .toEqual(url);
    });
});

/* SNAPSHOT TESTS */

describe('With Snapshot Testing', () => {
    it(`Component shows '${text}'`, () => {
        const component = renderer.create(<Breadcrumb text={text} />);
        const tree = component.toJSON();
        expect(tree)
            .toMatchSnapshot();
    });
});

describe('With Snapshot Testing', () => {
    it(`Component shows '${text}' and has '${url}' for href`, () => {
        const component = renderer.create(<Breadcrumb url={url} text={text} />);
        const tree = component.toJSON();

        expect(tree)
            .toMatchSnapshot();
    });
});