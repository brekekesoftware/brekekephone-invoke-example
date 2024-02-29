This is the BrekekePhone Invoke Example app [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Requirement
 - Can allow this app invoked by the BrekekePhone app and vice versa. Target to handle flow calls between both.


# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ app:

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

Because we need a setup to invoke between two apps. So you need to run dev on the device with another port (The default is 8081):

```bash
# using npm
RCT_METRO_PORT=PORT npm run android --port PORT

# OR using Yarn
RCT_METRO_PORT=PORT yarn android --port PORT
```

## 3: Apply UI to handle invoke

- The UI have a button. After press it, will show `Modal` have 2 options:
   - `Make call to nam05`: This option will invoke to the BrekekePhone app and call to `nam05` contact.
   - `Open keypad`: This option will link to the BrekekePhone app and open the keypad to type the number to call.
- Install package `react-native-svg` and write a component common to use icons SVG.

# Setup invoke app for Android

## 1. First, this app needs to enable deep links and add an intent filter for incoming links

### Android

In `AndroidManifest.xml` file, add `<intent-filter>` tag contains these elements and attribute values:
- `<action>`: This tag is used to point out which action will trigger an Intent. We will use `android.intent.action.VIEW` to define an action to view app.
- `<category>`: A string containing additional information about the kind of component that should handle the intent. We will use `android.intent.category.DEFAULT` to receive implicit intents.
- `<data>`: This tag provide attributes to define type of data of a URI. We will use `android:scheme` and `android:host` to define. The final URI will have the format: `<scheme>://<host>`, it is used with `Linking`.

You can see more about intents filters at:
- https://developer.android.com/guide/components/intents-filters
- https://developer.android.com/training/app-links/deep-linking

## 2. Invoke this app from BrekekePhone app and vice versa

- Use `Linking.canOpenURL(url)` to check URL can be handled. If it return `true`, you can invoke app with the `url`.
- Use ```Linking.openUrl(`brekeke_invoke_dev:open?${params}`)``` to invoke this app, in which:
   - The `brekeke_invoke_dev` is the attribute `android:scheme` in tag `<data>` in `Androidmanifest.xml` file.
   - The `open` is the attribute `android:host` in tag `<data>` in `Androidmanifest.xml` file.
   - The variable `params` is data stringtify by `qs.stringify()` to send to this app you need.

## 3. Handling Deep Links to receive data from BrekekePhone app

 - Use `Linking.addEventListener('url', callback)` when the app is foregrounded, the app is already open to get data from `callback`.
 - Use `Linking.getInitialURL()` when app is not already open.
 - Install `qs` package usage query string parsing and stringifying.
 - Use `qs.parse()` to parse params from the `url`.


You can see all about `Linking` at https://reactnative.dev/docs/linking
