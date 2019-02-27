import React, { Fragment } from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import OptionList from '../../OptionList';
import Playground from '../Playground';

describe('<Playground />', () => {
  it('should render with minimum requirements', () => {
    const tree = renderer
      .create(
        <Playground>
          <div>Playground</div>
        </Playground>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render with all available passed in props', () => {
    const tree = renderer
      .create(
        <Playground
          components={{ OptionList }}
          mode="handleOnly"
          actions={{ copy: false }}
          editor={{ lineNumbers: true }}
          source="https://jestjs.io"
          styles={{ error: { color: 'green' } }}
        >
          <div>Playground</div>
        </Playground>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should set state.code to a string received from children jsx', () => {
    const wrapper = shallow(
      <Playground>
        <Fragment>
          <div>Playground</div>
        </Fragment>
      </Playground>
    );

    expect(typeof wrapper.state('code')).toEqual('string');
  });

  it('should update state.code when handleChange called', () => {
    const wrapper = shallow(
      <Playground>
        <div>Playground</div>
      </Playground>
    );

    (wrapper.instance() as any).handleChange('<div>Different</div>');
    expect(wrapper.state('code')).toEqual('<div>Different</div>');
  });

  it('should set state.toggles.showing when toggleCode called', () => {
    const wrapper = shallow(
      <Playground>
        <div>Playground</div>
      </Playground>
    );

    (wrapper.instance() as any).toggleCode();
    expect((wrapper.state() as any).toggles.showing).toBeTruthy();
  });

  it('should setState for specified UI toggle when toggle method called', () => {
    const wrapper = shallow(
      <Playground>
        <div>Playground</div>
      </Playground>
    );

    (wrapper.instance() as any).toggle('refreshing');
    expect((wrapper.state() as any).toggles.refreshing).toBeTruthy();
    expect((wrapper.state() as any).toggles.showing).toBeFalsy();
    expect((wrapper.state() as any).toggles.copying).toBeFalsy();
  });

  it('should not render specific actions if turned off', () => {
    const wrapper = shallow(
      <Playground actions={{ copy: false, refresh: false }}>
        <div>Playground</div>
      </Playground>
    );

    expect(wrapper.find('Copy')).toHaveLength(0);
    expect(wrapper.find('Refresh')).toHaveLength(0);
    expect(wrapper.find('Code')).toHaveLength(1);
  });

  it('should render a source action if source passed', () => {
    const wrapper = shallow(
      <Playground source="source">
        <div>Playground</div>
      </Playground>
    );

    expect(wrapper.find('Source')).toHaveLength(1);
  });

  it('should not render a source action if source passed but action turned off', () => {
    const wrapper = shallow(
      <Playground source="source" actions={{ source: false }}>
        <div>Playground</div>
      </Playground>
    );

    expect(wrapper.find('Source')).toHaveLength(0);
  });

  it('should not render any actions if mode does not equal "full"', () => {
    const wrapper = shallow(
      <Playground mode="handleOnly">
        <div>Playground</div>
      </Playground>
    );

    expect(wrapper.find('Copy')).toHaveLength(0);
    expect(wrapper.find('Code')).toHaveLength(0);
    expect(wrapper.find('Refresh')).toHaveLength(0);
    expect(wrapper.find('Source')).toHaveLength(0);
  });

  it('should not render a Handle if mode is containerOnly', () => {
    const wrapper = shallow(
      <Playground mode="containerOnly">
        <div>Playground</div>
      </Playground>
    );

    expect(
      (wrapper.find('Resizable') as any).props().handleComponent.right()
    ).toBeFalsy();
  });
});
