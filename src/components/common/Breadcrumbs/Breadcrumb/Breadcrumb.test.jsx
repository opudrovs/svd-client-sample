import React from 'react';

import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Breadcrumb from './Breadcrumb.js';

const text = 'Test text';

const href = 'https://www.test.com';

describe('With Enzyme', () => {
  it(`Component shows '${text}'`, () => {
    const component = shallow(<Breadcrumb text={text} />);

    expect(component.find('span').text()).toEqual(text);
  });
});

describe('With Enzyme', () => {
  it(`Component shows '${text}' and has '${href}' for href`, () => {
    const component = shallow(<Breadcrumb href={href} text={text} />);

    expect(component.find('a').text()).toEqual(text);

    expect(component.find('Link').prop('href')).toEqual(href);
  });
});

describe('With Snapshot Testing', () => {
  it(`Component shows '${text}'`, () => {
    const component = renderer.create(<Breadcrumb text={text} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('With Snapshot Testing', () => {
  it(`Component shows '${text}' and has '${href}' for href`, () => {
    const component = renderer.create(<Breadcrumb href={href} text={text} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
