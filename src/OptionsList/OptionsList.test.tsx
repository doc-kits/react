import { shallow } from 'enzyme';
import * as React from 'react';
import OptionsList from './OptionsList';

describe('<OptionsList />', () => {
  it('ensure <OptionsList /> exists', () => {
    const wrapper = shallow(<OptionsList />);
    expect(wrapper.find(OptionsList).exists());
  });
});
