/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import * as merge from 'deepmerge';
import { ThemeProvider } from 'emotion-theming';
import { mq } from '../toolkit/responsive';
import settings from '../toolkit/settings';
import styles from './styles';

interface Definition {
  key: string;
  required?: boolean;
  type: string;
  description?: string | Array<string | any>;
  default?: string;
  values?: string[];
}

interface Props {
  tableTitle?: string;
  definitions: Definition[];
  localStyles?: any;
}

interface RequiredProps {
  required?: boolean;
}

const Wrapper = styled.div`
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;

  ${p => p.theme.mq(p.theme.wrapper)};

  a {
    color: ${p => p.theme.colors.link};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &:active,
    &:visited {
      color: ${p => p.theme.colors.link};
    }
  }
`;

const Title = styled.div`
  ${p => p.theme.mq(p.theme.title)};
`;

const Option = styled.div`
  ${p => p.theme.mq(p.theme.option)};

  &:first-of-type {
    border-top: none;
  }
`;

const Info = styled.div`
  align-items: baseline;
  display: flex;

  div {
    margin-right: 0.357em;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const Key = styled.div`
  ${p => p.theme.mq(p.theme.key)};
`;

const Required = styled.div<RequiredProps>`
  border: ${p => (p.required ? p.theme.required.border : 'none')};
  border-radius: ${p => p.theme.required.borderRadius};
  color: ${p => (p.required ? p.theme.required.color : p.theme.optional.color)};
  font-size: ${p =>
    p.required ? p.theme.required.fontSize : p.theme.optional.fontSize};
  padding: ${p => (p.required ? p.theme.required.padding : '0')};
  text-transform: ${p =>
    p.required ? p.theme.required.textTransform : 'none'};
`;

const Type = styled.div`
  ${p => p.theme.mq(p.theme.type)};
`;

const Description = styled.p`
  ${p => p.theme.mq(p.theme.description)};
`;

const Values = styled.span`
  ${p => p.theme.mq(p.theme.values)};

  span:not(:first-of-type)::before {
    content: ', ';
  }

  span:nth-last-of-type(2):not(:first-of-type)::after {
    content: ',';
  }

  span:last-child:not(:only-of-type)::before {
    content: ' or ';
  }

  div:nth-of-type(1) {
    margin-bottom: 0.25em;
  }
`;

const Code = styled('code')`
  ${p => p.theme.mq(p.theme.code)};
`;

const OptionList = ({ tableTitle, definitions, localStyles }: Props) => {
  const sortedDefinitions = definitions.sort(
    (a: any, b: any) => b.required - a.required
  );
  const componentStyles = (appTheme: object = {}) =>
    merge.all([settings, styles, { mq }, appTheme, localStyles]);

  return (
    <ThemeProvider theme={componentStyles}>
      <Wrapper>
        <Title>{tableTitle}</Title>

        {sortedDefinitions.map(argument => {
          const requiredText = argument.required ? 'required' : 'optional';

          return (
            <Option key={argument.key}>
              <Info>
                <Key>{argument.key}</Key>
                <Required required={argument.required}>{requiredText}</Required>
                <Type>{argument.type}</Type>
              </Info>
              <Description>
                <span>{argument.description} </span>
                {argument.default && (
                  <span>
                    The default value is <Code>{argument.default}</Code>.
                  </span>
                )}
                {argument.values && <span> Possible values are </span>}
                {argument.values && (
                  <Values>
                    {argument.values.map((value: string, index: number) => (
                      <span key={index.toString()}>
                        <Code>{value}</Code>
                      </span>
                    ))}
                    .
                  </Values>
                )}
              </Description>
            </Option>
          );
        })}
      </Wrapper>
    </ThemeProvider>
  );
};

OptionList.defaultProps = {
  tableTitle: 'Options',
  localStyles: {},
  definitions: {
    required: false,
  },
};

export default OptionList;
