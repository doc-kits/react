# Styleguidist Integration

This examples shows how you might integrate a [Doc Kits: React](https://github.com/doc-kits/react) component with [Styleguidist](https://react-styleguidist.js.org/).

## Usage

Inside of this directory, you may run the following to see the live example:

Install dependencies:

`yarn install`

Fire up the Styleguidist engine:

`yarn dev`

You will be able to see the component rendered locally by visiting `http://localhost:3000/`.

## Notes

These examples show two specific variations of importing a Doc Kits: React component into Styleguidist.

1. Importing the component directly from `@doc-kits/react` without any modifications.

2. Importing a local wrapper component which injects your own styles via the Doc Kits: React `withStyles` higher-order component. The wrapper component extends and overrides the default styles from the Doc Kits: React component.
