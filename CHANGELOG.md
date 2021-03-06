# RobotlegsJS OpenFL Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Suggestions or improvements for further versions

- [x] Add instructions of how to install the **@robotlegsjs/openfl** package into **README.md**.

- [ ] Use [**Function Types**](https://www.typescriptlang.org/docs/handbook/functions.html) for handlers and callbacks instead of generic **Function** type.

- [ ] Evaluate if **IMediator** interface should be mandatory.

- [x] Update **Prettier** rules:

  - [x] **printWidth** should be around **140** characters per line.

- [ ] Improve Code Coverage to reach 100%.

- [ ] Migrate [original documentation](https://github.com/robotlegs/robotlegs-framework/blob/master/src/readme.md) and adapt it to TypeScript and OpenFL.

## [Unreleased]

<!--
Types of changes:

#### Added
- for new features.

#### Changed
- for changes in existing functionality.

#### Deprecated
- for soon-to-be removed features.

#### Removed
- for now removed features.

#### Fixed
- for any bug fixes.

#### Security
- in case of vulnerabilities.
-->

## Robotlegs-OpenFL 2.0.0

### [v2.0.0](https://github.com/RobotlegsJS/RobotlegsJS-OpenFL/releases/tag/2.0.0) - 2020-03-14

#### Breaking Change

- Update [`@robotlegsjs/core`](https://github.com/RobotlegsJS/RobotlegsJS) to version `^2.0.0` (see #62 and #68).

  - Migrate array notation from `Array<SomeType>` to `SomeType[]`.

  - The rest of the `Public API` remains unchanged.

#### Added

- Add **Tidelift** as funding option (see #63).

- Add **Enterprise Support** information (see #64).

- Deploy example project (see #67).

#### Changed

- Update `tslib` to version `1.11.1` (see #66).

- Update dev dependencies to latest version.

#### Security

- Migrate to [terser-webpack-plugin](https://github.com/webpack-contrib/terser-webpack-plugin) to solve security vulnerability (see #62).

## Robotlegs-OpenFL 1.0.0

### [v1.0.1](https://github.com/RobotlegsJS/RobotlegsJS-OpenFL/releases/tag/1.0.1) - 2019-10-31

#### Changed

- Update `@robotlegsjs/core` to version `1.0.3` (see #55).

- Improve `prettier` rules and `autoformat` script (see #34).

- Enable `"editor.formatOnSave"` rule for `VS Code` (see #34).

- Migrate project to `travis-ci.com`.

- Update `codebeat` Project UUID.

- Update dev dependencies to latest version.

### [v1.0.0](https://github.com/RobotlegsJS/RobotlegsJS-OpenFL/releases/tag/1.0.0) - 2018-11-26

#### Changed

- Update `openfl` to version `8.6.4` (see #22).

- Update `@robotlegsjs/core` to version `1.0.0` (see #26).

- Migrate to Headless Chrome and improve performance of `karma` (see #23).

- Prepare package for stable version (see #24).

- Update GitHub Templates (see #25).

- Update dev dependencies to latest version.

## Robotlegs-OpenFL 0.2.0

### [v0.2.0](https://github.com/RobotlegsJS/RobotlegsJS-OpenFL/releases/tag/0.2.0) - 2018-08-18

- Added integration with [openfl](https://www.npmjs.com/package/openfl) library (see #1).

- Update `openfl` to version `8.4.1` (see #6).

- Generate code coverage report only for src folder (see #4).

- Improve webpack configuration used to run example project. The `npm start` script will generate hashed files (to avoid browser cache) and open the broswer automatically (see #5).

- Enable `greenkeeper` (see #2).

- Update dev dependencies to latest version.
