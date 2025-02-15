# @rhds/tokens

## 1.0.0-beta.4

### Minor Changes

- 6f11643: - Adds textmate snippets in editor/textmate

  - Adds a VSCode VSIX extension bundle to github releases
  - Fixes the hexokinase regexp

  BREAKING CHANGES:

  - moves editor files to their own dir: vscode to editor/vscode, etc

## 1.0.0-beta.3

### Patch Changes

- a2ae38a: Corrected package exports

## 1.0.0-beta.2

### Minor Changes

- ae98335: Adds a new Stylelint plugin, which validates and fixes token values in css files.

  ```
  npx stylelint elements/**/*.css --fix
  ```

  Also adds a new `tokens` map from the main export. The previous main have moved to './values.js';

  ```js
  import { tokens } from "@rhds/tokens";

  tokens.get("--rh-color-brand-red-on-light"); // '#ee0000';
  ```

### Patch Changes

- 594e64d: Support a limited set of languages in font-family
- a1659d8: Converted length tokens from rem to px

## 1.0.0-beta.1

### Minor Changes

- 487b9b2: Update packaged files to include css, scss, and editor files.

## 1.0.0-beta.0

### Major Changes

- b40b80a: Initial release 🎉

  ```sh
  npm i @rhds/tokens@beta
  ```
