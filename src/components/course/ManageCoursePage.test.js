import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageCoursePage} from './ManageCoursePage';

describe ('Manage Course Page', () => {
  it('sets error message upon blur of empty title field:Title must be at least 5 characters.', () => {
    const props = {
      authors: [],
      actions: { saveCourse: () => { return Promise.resolve(); }},
      course: {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''}
    };
    const wrapper = mount(<ManageCoursePage {...props}/>);
    const saveButton = wrapper.find('input').last();

    saveButton.simulate('clsick');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
  });
});
