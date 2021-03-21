import { shallow } from 'enzyme';
import { Card } from './card.component';
import React from 'react';

it('snapshot test', () => {
  const mockMonster = {
    id: 1,
    name: 'abc',
    email: 'abc',
  };

  const wrapper = shallow(<Card monster={mockMonster} />);

  expect(wrapper).toMatchSnapshot();
});

it('enzyme test', () => {
  const mockMonster = {
    id: 1,
    name: 'abc',
    email: 'abc',
  };

  const wrapper = shallow(<Card monster={mockMonster} />);
  expect(wrapper.find('h2').length).toEqual(1);

  expect(wrapper.find('h2').text().trim()).toEqual('abc');
});
