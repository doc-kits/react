<p align="center">
  <img src="https://raw.githubusercontent.com/doc-kits/react/master/images/logo.png?raw=true" width="500">
</p>

<p align="center">
  <img src="https://img.shields.io/npm/v/@doc-kits/react.svg" alt="Version">
  <img src="https://img.shields.io/npm/l/@doc-kits/react.svg" alt="License">
  <img src="https://img.shields.io/david/doc-kits/react.svg" alt="Dependencies">
  <img src="https://img.shields.io/travis/com/doc-kits/react/master.svg" alt="CI Build">
</p>

## 💅 Features

- Components can easily be integrated into documentation frameworks like [Docz](https://www.docz.site/), [Styleguidist](https://react-styleguidist.js.org/), and more.
- Components can be used in isolation. Use one, many, or all.
- Fully customizable styles via Emotion and Facepaint.
- Built using [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), [Emotion](https://emotion.sh/), and [Facepaint](https://github.com/emotion-js/facepaint).

## ⬇️ Install

Via Yarn or NPM:

`yarn add @doc-kits/react`

`npm install @doc-kits/react`

## 📚 Usage

`import { OptionList } from '@doc-kits/react';`

Each component can be imported by name like shown above. See the demo section below to view the documentation for all of the available components.

**Usage Documentation**

- [Integration with Documentation Engines](docs/integration-with-engines.md)
  - [Docz](docs/integration-with-engines.md#docz)
  - [Styleguidist](docs/integration-with-engines.md#styleguidist)
- [Overriding & Extending Styles](docs/override-extend-styles.md)
  - [withStyles](docs/override-extend-styles.md#withStyles)
  - [style](docs/override-extend-styles.md#style)
- [Utilizing Media Queries](docs/media-queries.md)
- [Fonts](docs/fonts.md)

## Available Components

- [Option List](src/OptionList/README.md)
- [Color Box](src/ColorBox/README.md)

## 🎩 Demo

[Storybook Demos & Component Documentation](https://doc-kits.github.io/react/)

## 🔑 Why?

It seems that more recently there has been an emphasis on documentation not only in the open-source community, but at corporate companies small and large.

In the past, documentation was very much a second-hand thought, but now, more than ever, it is increasingly important to document our systems for easier comprehension by our end users.

The React component ecosystem has given rise to full-fledged documentation engines like [Docz](https://www.docz.site/) and [Styleguidist](https://react-styleguidist.js.org/).

**The problem is** there has yet to be a React component library centered around documentation that can be integrated into these engines or used for custom documentation projects.

**The solution is** `@doc-kits/react` 😊

Our goal is to create documentation-related components you didn't even know you wanted!
