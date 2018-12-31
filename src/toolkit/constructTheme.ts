import * as merge from 'deepmerge';
import defaultTheme from '../toolkit/theme';
import { AppTheme } from '../../typings/theme';

const constructTheme = (
  appTheme: AppTheme = {},
  defaultStyles: object,
  withStyles: object = {},
  localStyles: object = {}
): object => {
  appTheme.docUi = appTheme.docUi || {};
  const { colors = {}, mq = () => undefined, optionList = {} } = appTheme.docUi;

  return merge.all([
    { ...defaultTheme },
    { ...defaultStyles },
    { colors },
    mq,
    { ...optionList },
    { ...withStyles },
    { ...localStyles },
  ]);
};

export default constructTheme;
