export const getRgb = (value: string) => {
  if (value.charAt(0) === '#') {
    value = value.substr(1);
  }

  if (value.length < 2 || value.length > 6) {
    return [];
  }

  const values = value.split('');
  let r;
  let g;
  let b;

  if (value.length === 2) {
    r = parseInt(values[0].toString() + values[1].toString(), 16);
    g = r;
    b = r;
  } else if (value.length === 3) {
    r = parseInt(values[0].toString() + values[0].toString(), 16);
    g = parseInt(values[1].toString() + values[1].toString(), 16);
    b = parseInt(values[2].toString() + values[2].toString(), 16);
  } else if (value.length === 6) {
    r = parseInt(values[0].toString() + values[1].toString(), 16);
    g = parseInt(values[2].toString() + values[3].toString(), 16);
    b = parseInt(values[4].toString() + values[5].toString(), 16);
  } else {
    return [];
  }

  return [r, g, b];
};

export const hexToRgb = (value: string) => {
  const [r, g, b] = getRgb(value);

  return `rgb(${r}, ${g}, ${b})`;
};

export const rgbToHsl = (r: number, g: number, b: number) => {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  const d = max - min;

  if (max === min) {
    h = s = 0;
  } else {
    if (l > 0.5) {
      s = d / (2 - max - min);
    } else {
      s = d / (max + min);
    }
  }

  switch (max) {
    case r:
      h = (g - b) / d + (g < b ? 6 : 0);
      break;
    case g:
      h = (b - r) / d + 2;
      break;
    case b:
      h = (r - g) / d + 4;
      break;
    default:
      break;
  }

  h /= 6;
  h = h * 360;
  (s as any) = `${Math.round(s * 100)}%`;
  (l as any) = `${Math.round(l * 100)}%`;

  if (isNaN(h)) {
    h = 0;
  }

  return `hsl(${Math.round(h)}, ${s}, ${l})`;
};
