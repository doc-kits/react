import defaultTheme from '../../toolkit/theme';
import constructTheme from '../constructTheme';

describe('constructTheme', () => {
  let theme: object = {};

  beforeEach(() => {
    theme = constructTheme(defaultTheme);
  });

  it('should produce the default object given defaultTheme', () => {
    expect(theme).toHaveProperty('colors');
    expect(theme).toHaveProperty('mq');
  });

  it('should ensure withStyles wins without styles', () => {
    const withStyles = {
      colors: { link: 'red' },
      mq: () => 'mq',
      title: { color: 'purple' },
    };

    theme = constructTheme(defaultTheme, withStyles);

    expect(theme).toEqual(withStyles);
  });

  it('should ensure styles always wins', () => {
    const withStyles = {
      colors: { link: 'red' },
      mq: () => 'mq',
      title: { color: 'purple' },
    };
    const styles = {
      colors: { link: 'green' },
      mq: () => 'bp',
      title: { color: 'blue' },
    };

    theme = constructTheme(defaultTheme, withStyles, styles);

    expect(theme).toEqual(styles);
  });
});
