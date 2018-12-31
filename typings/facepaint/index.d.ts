declare module 'facepaint' {
  interface Styles {
    [key: string]: string | number | Styles;
  }

  interface MqStyles {
    [key: string]: string | string[] | number | number[] | Styles;
  }

  export type Mq = (styles: object) => Styles;

  interface FacepaintSettings {
    literal?: boolean;
    overlap?: boolean;
  }

  type Facepaint = (mediaQueries: string[], settings?: FacepaintSettings) => Mq;

  const facepaint: Facepaint;

  export = facepaint;
}
