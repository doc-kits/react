import * as classnames from 'classnames';
import { css } from 'emotion';
import { arrayOf, bool, shape, string } from 'prop-types';
import * as React from 'react';

interface Definition {
  default: any;
  description: any;
  key: any;
  required: boolean;
  type: any;
  values: any;
}

interface Props {
  tableTitle?: string;
  definitions: Definition[];
}

const propsList = css`
  color: #4a6271;
  margin: 1.5em 0;
`;

const title = css`
  border-bottom: 1px solid #cbd8de;
  color: #708da0;
  font-size: 14px;
  text-transform: uppercase;
`;

const table = css`
  border-bottom: 1px solid #edf3f3;
  display: flex;
  justify-content: space-between;
  padding: 1em 0;
`;

const column = css`
  flex: 1;
`;

const key = css`
  color: #334049;
`;

const PropsList = ({ tableTitle, definitions }: Props) => {
  const sortedDefinitions = definitions.sort(
    (a: any, b: any) => b.required - a.required
  );

  return (
    <div className={propsList}>
      <div className={title}>{tableTitle}</div>

      {sortedDefinitions.map(argument => {
        const isRequired = argument.required ? 'required' : 'optional';
        const requiredClass = classnames('props-list__required', {
          'props-list__required--true': argument.required,
        });

        return (
          <div key={argument.key} className={table}>
            <div className={column}>
              <div className="props-list__key">{argument.key}</div>
              <div className={requiredClass}>{isRequired}</div>
              <div className="props-list__type">{argument.type}</div>
            </div>
            <div className={column}>
              <code>{argument.default}</code>
            </div>
            <div className={column}>
              <div className="props-list__description">
                {argument.description}
              </div>
              <div className="props-list__values">
                {argument.values && <div>Possible values:</div>}
                {argument.values &&
                  argument.values.map((value: any, index: any, array: any) => {
                    if (index === array.length - 1) {
                      return (
                        <span>
                          or <code>{value}</code>
                        </span>
                      );
                    }

                    return (
                      <span key={argument.key}>
                        <code>{value}</code>
                        ,&nbsp;
                      </span>
                    );
                  })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

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
