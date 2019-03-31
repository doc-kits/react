import React, { Fragment } from 'react';
import { withStyles, ColorBox } from '@doc-kits/react';

const MyColorBox = withStyles({
  wrapper: {
    borderRadius: 10,
  },
})(ColorBox);

const Showcase = () => (
  <Fragment>
    <h2>Showcase</h2>
    <MyColorBox name="Forest Green" hex="#228B22" />
  </Fragment>
);

export default Showcase;
