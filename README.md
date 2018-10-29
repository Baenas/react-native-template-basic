# React Native Basic App Template

A simple basic template to start a new React Native app with ESLint and custom scripts.
Now supports React Native v0.57.x

## Requirements

- react-native-cli
- yarn

## Usage

Create a new project passing a template:

```
react-native init [ProjectName] --template basic-app
```

Wait for download dependencies.

### Husky git hooks

Git hooks is not installed by default, because when start a new React Native app, you don't have a git repository started.
To fix this, first init git repo with `git init .` inside you App dir and after this run:

```
node node_modules/husky/lib/installer/bin install
```

### React Native < v0.57.0
Finish install with:

```
yarn start
```

To inject custom scripts and remove unnecessary files.

## Includes

- [x] ESlint (extends Airbnb) v4.19.1
- [x] Husky v1.1.2
- [x] Lint Staged v7.3.0
- [x] Prettier v1.14.3
- [x] Flow v0.84.0
- [x] Enzyme v3.7.0

### Custom Scripts

- [x] `android:build` - Generate Release APK
- [x] `android:install` - Run in Release mode
- [x] `android:shake` - Show DEV menu
- [x] `ios:install` - Run in Release mode
- [x] `project:clean` - Clean project
- [x] `prettier:check` - Check for unformatted files
- [x] `prettier:all` - Format files
- [x] `flow` - Run Flow
- [x] `lint` - Run lint
- [x] `start` - Start Metro Bundler
- [x] `start:clean` - Start Metro Bundler without cache
- [x] `test` - Run jest
- [x] `test:watch` - Run jest in watch mode

## Contributing

Clone this repo with `git clone https://github.com/lucianomlima/react-native-template-basic react-native-template-basic-app` cause npm needs project dir name to be equal to project name in `package.json`.

To execute the project with your changes, you can use the absolute path of cloned repo with `react-native-cli`:

```
react-native init [PROJECT_NAME] --template file:///path/to/repo
```

## License

MIT
