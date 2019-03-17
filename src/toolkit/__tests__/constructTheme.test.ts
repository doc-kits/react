import defaultTheme from '../theme';
import constructTheme from '../constructTheme';

describe('constructTheme', () => {
  let theme: object = {};

  beforeEach(() => {
    theme = constructTheme(defaultTheme);
  });

  it('should produce the default object given defaultTheme', () => {
    expect(theme).toHaveProperty('palette');
    expect(theme).toHaveProperty('mq');
  });

  it('should ensure withStyles wins without styles', () => {
    const withStyles = {
      palette: { primary: { link: 'red' } },
      mq: () => 'mq',
      title: { color: 'purple' },
    };

    theme = constructTheme(defaultTheme, withStyles);

    expect(theme).toMatchObject(withStyles);
  });

  it('should ensure styles always wins', () => {
    const withStyles = {
      palette: { primary: { link: 'red' } },
      mq: () => 'mq',
      title: { color: 'purple' },
    };
    const styles = {
      palette: { primary: { link: 'green' } },
      mq: () => 'bp',
      title: { color: 'blue' },
    };

    theme = constructTheme(defaultTheme, withStyles, styles);

    expect(theme).toMatchObject(styles);
  });
});
