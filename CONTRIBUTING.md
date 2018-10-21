# Contributing

We welcome feature requests, questions, bug reports, and of course, pull requests. Before contributing please read our guidelines below.

## Commit Messages

We follow very strict rules when formatting our commit messages. This leads to more readable messages that make following the project history easier. This is **especially important** because we use the commit messages to automatically generate our `CHANGELOG.md`.

### Message Format

Each commit message consists of a header, body, and footer. The header has a specific format containing a type, scope, and subject.

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Notes**:

- The first line of the message is known as the `<header>`.
- The header character length is capped at 72.
- All characters in the header must be lower-case.
- The **type** and **subject** are _required_.
- The **scope** is _optional_.
- The newlines in between the first, second, and third lines are **required**.
- We use a linter to enforce this structure.

### Type

The `<type>` must be one of the following values:

- **feat**: a new feature.
- **fix**: a bug fix.
- **refactor**: a code change that neither fixes a bug nor adds a feature.
- **style**: changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.).
- **test**: adding missing tests or correcting existing tests.
- **perf**: a code change that improves performance.
- **docs**: changes to documentation.
- **build**: changes that affect the build system or external dependencies.
- **ci**: changes to our CI configuration files and scripts.

### Scope

The `<scope>` is the name of the component or area of the codebase that was affected by the change. Notice, it is enclosed in parentheses. It must be one of the following:

- **core**
- **options-list**

### Subject

The `<subject>` is a succinct description of the change. The entire `<header>` must be written in lower-case and is limited to 72 characters including the `<subject>`.

- Use the imperative, present tense: "change" not "changed" nor "changes".
- Do not include a period `.` at the end of the description.

### Body

The `<body>` is a longer, more detailed description of the change. It should include the motivation for the change.

- Use the imperative, present tense: "change" not "changed" nor "changes".
- It may include bullet points.
- It is _optional_ if no further details are necessary.

### Footer

The `<footer>` is the place for **references** and should contain any information about **breaking changes**. Breaking changes should be the last item in the footer.

**References**

- Must start with one of the following action words: `closes`, or `fixes`.
- `fixes`: referencing a bug issue.
- `closes`: referencing a feature issue.
- Referencing multiple issues should be separated with a comma.

**Breaking Changes**

- Must start with the exact words: `BREAKING CHANGE:` followed immediately by a blank newline and then a description of the change.
- Should be the last item in the `<footer>`.
- Should include `before` and `after` blocks for migration.
- Should only have a **single breaking change per commit**.

### Examples

**Minimal**

```
feat: add changelog automation
```

**With scope, body, and references**

```
fix(options-list): removal of props

The props are no longer necessary on the OptionsList component.

- Remove prop A
- Remove prop B

fixes #15, #16
```

**With breaking changes**

```
refactor(core): change storybook webpack config

The storybook webpack config must exclude node_modules.

closes #278

BREAKING CHANGE:

node_modules will no longer be part of compilation when running storybook.

Before:

config.module.rules.push({
  test: /\.(ts|tsx)$/,
  loader: require.resolve('awesome-typescript-loader'),
});

After:

config.module.rules.push({
  test: /\.(ts|tsx)$/,
  exclude: /node_modules/,
  loader: require.resolve('awesome-typescript-loader'),
});
```
