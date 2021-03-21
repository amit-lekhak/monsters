import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('class component check', () => {
  const wrapper = shallow(<App />);

  expect(wrapper).toMatchSnapshot();
});

it('class component test', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.state('searchField')).toEqual('');

  wrapper.find('SearchBox').simulate('change', {
    target: { value: 'world' },
  });

  // expect(wrapper.state('searchField')).toEqual('world');
  expect(wrapper.find('h1').text()).toEqual('Monsters Rolodex');
});
