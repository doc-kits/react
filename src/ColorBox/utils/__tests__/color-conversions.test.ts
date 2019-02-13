import { getRgb, hexToRgb, rgbToHsl } from '../color-conversions';

const mock = {
  hex: '#F00000',
  shortHex: '#F00',
  rgb: {
    1: [240, 0, 0],
    2: [14, 15, 17],
    3: [207, 238, 201],
  },
};

describe('Color Conversions', () => {
  describe('getRgb', () => {
    it('should return an array of [red, green, blue] number values', () => {
      const rgbForHex = getRgb(mock.hex);
      const rgbForShortHex = getRgb(mock.shortHex);

      expect(rgbForHex).toEqual([240, 0, 0]);
      expect(rgbForShortHex).toEqual([255, 0, 0]);
    });
  });

  describe('hexToRgb', () => {
    it('should return an formatted string of an RGB color value', () => {
      const rgbValue = hexToRgb(mock.hex);

      expect(rgbValue).toEqual('rgb(240, 0, 0)');
    });
  });

  describe('rgbToHsl', () => {
    it('should return an formatted string of an HSL color value', () => {
      const [r1, g1, b1] = mock.rgb[1];
      const [r2, g2, b2] = mock.rgb[2];
      const [r3, g3, b3] = mock.rgb[3];

      expect(rgbToHsl(r1, g1, b1)).toEqual('hsl(0, 100%, 47%)');
      expect(rgbToHsl(r2, g2, b2)).toEqual('hsl(220, 10%, 6%)');
      expect(rgbToHsl(r3, g3, b3)).toEqual('hsl(110, 52%, 86%)');
    });
  });
});
