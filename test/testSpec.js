import React from 'react';
import { expect } from 'chai';
import { mount, configure } from 'enzyme';
import { spy } from 'sinon';
import Game from './src/Game';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

spy(Game.prototype, 'componentDidMount');

describe('<Game />', () => {
  it('calls componentDidMount', () => {
    const wrapper = mount(<Game />);
    expect(Foo.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});
