var React = require('react');
var chai = require('chai');
var enzyme = require('enzyme');
var chaiEnzyme = require('chai-enzyme');
var assert = chai.assert;
var expect = chai.expect;
var shallow = enzyme.shallow;

chai.use(chaiEnzyme()) // Note the invocation at the end

describe('<Square />', () => {

  it('should render a button', () => {
    const wrapper = shallow(ReactDOM.render(<Square value=""/>));
	 expect(wrapper.contains(<button className="square">)).to.be.true;
  });
});

describe('<Row />', () => {

  it('should render at least one square', () => {
    const wrapper = shallow(<Row value=""/>);
	 expect(wrapper.contains(<Square />)).to.be.true;
  });
});
