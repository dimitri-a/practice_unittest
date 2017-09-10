import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(saving) {
  const props = {
    allAuthors: [],
    course: {},
    saving: saving,
    errors: {},
    onSave: () => {
    },
    onChange: () => {
    }
  };

  return shallow(<CourseForm {...props} />);
}

describe('CourseForm via Enzyme', () => {
  it('renders form and h1', () => {
    const wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1);
  });

  it('save button is labeled "Save" when not saving', () => {
    const wrapper = setup(false);
    console.log(wrapper.find('input').props().value);

    expect(wrapper.find('input').props().value).toBe('Save')

  });

  it('save button is labeled "Saving..." when saving', () => {

  });
});
