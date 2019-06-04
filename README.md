# Target MVD

## Commands
1. **Start the app**. `yarn start`
2. **Lint the app**. `yarn lint`
3. **Test the app**. `yarn test`

## Getting started
1. Install dependencies: `yarn`
2. Create a `.env` file in the root directory of the project, based on the `.env.defaults` sample file and the extra constants that you may need.

You can also create `.env.prod` and `.env.staging` to define environment variables for production and staging.

3. Rename your new project using [react-native-rename](https://github.com/junedomingo/react-native-rename)
4. Start on android or ios: `react-native run-android` or `react-native run-ios`

## Configuring Code Climate
1. After adding the project to CC, go to `Repo Settings`
2. On the `Test Coverage` tab, copy the `Test Reporter ID`
3. Replace the current value of `CC_TEST_REPORTER_ID` on the `config.yml file (.circleci/config.yml)` with the one you copied from CC

## Build Android Release
1. Ask a developer for the release key and place it in `/android/app`
2. Add the following variables in `.env.prod`:
 ```
  RELEASE_STORE_FILE
  RELEASE_STORE_PASSWORD
  RELEASE_KEY_ALIAS
  RELEASE_KEY_PASSWORD
  ```
3. Run `cd android && ./gradlew assembleRelease`
4. The generated APK can be found under `android/app/build/outputs/apk/app-release.apk`

## Build iOS Release
1. Configure the release scheme: go to **Product** -> **Scheme** -> **Edit Scheme**, then select the Run tab in the sidebar, and set the Build Configuration dropdown to **Release**.

## Managing multiple environments

### Android

By default the app loads `.env`, `.env.staging` or `.env.prod` files depending on the mode the build was executed (`debug`, `staging` or `release` respectively)

### iOS

You can add an schema in XCode and indicate which `.env` file to load there or doing it manually from the console by running

```
  ENVFILE=.env.staging react-native run-ios
```
