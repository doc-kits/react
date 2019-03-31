### Direct Integration

```jsx noeditor
import { ColorBox } from '@doc-kits/react';

<div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <ColorBox name="Red Barn" hex="#F00000" />
  <ColorBox name="Cream Popsicle" hex="#F09320" />
  <ColorBox name="Sky Blue" hex="#00AAE5" />
  <ColorBox name="Lavender" hex="#977BB6" />
</div>;
```

### Higher-Order Component

```jsx noeditor
import ColorBoxHoc from '../../../example-components/ColorBoxHoc';

<ColorBoxHoc name="Red Barn" hex="#F00000" />;
```

### HOC With Props

```jsx noeditor
import ColorBoxHocProps from '../../../example-components/ColorBoxHocProps';

<ColorBoxHocProps name="Sky Blue" hex="#00AAE5" mode="dark" />;
```

### HOC Shorthand

```jsx noeditor
import ColorBoxShorthand from '../../../example-components/ColorBoxShorthand';

<ColorBoxShorthand name="Cream Popsicle" hex="#F09320" />;
```

## Using the `styles` Prop

```jsx noeditor
import { ColorBox } from '@doc-kits/react';

<ColorBox
  name="Lavender"
  hex="#977BB6"
  styles={{ colorValue: { color: 'gray' } }}
/>;
```

## Composing Component

```jsx noeditor
import Showcase from '../../../example-components/Showcase';

<Showcase />;
```
