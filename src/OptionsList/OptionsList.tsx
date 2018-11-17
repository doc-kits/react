import { arrayOf, bool, shape, string } from 'prop-types';
import * as React from 'react';

const PropsList = () => <div>Options List</div>;

PropsList.propTypes = {
  definitions: arrayOf(
    shape({
      default: string.isRequired,
      description: string,
      key: string.isRequired,
      required: bool.isRequired,
      type: string.isRequired,
      values: arrayOf(string),
    })
  ).isRequired,
  tableTitle: string,
};

PropsList.defaultProps = {
  tableTitle: 'Options',
};

export default PropsList;
