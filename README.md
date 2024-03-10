# BrekekePhone Invoke Example Documentation

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Development](#Development)
  - [Start the Metro Server](#start-the-metro-server)
  - [Running the App](#running-the-app)
- [Setup invoke app](#setup-invoke-app)
- [Resources](#resources)
- [Flow call about app](#flow-call-about-app)

## Introduction

- This app is [**React Native**](https://reactnative.dev) project.
- Can allow this app invoked by the BrekekePhone app and vice versa (with `Linking`).
- Can allow sending data to the BrekekePhone app to auto-login and make calls.

## Getting Started

### Prerequisites

- Node.js 20, with nvm recommendation
- JDK 17, with jenv recommendation
- yarn
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)
- [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/brekekesoftware/brekekephone-invoke-example.git
```

2. Navigate to the project directory:

```bash
cd brekekephone-invoke-example
```

3. Install dependencies:

```bash
yarn install
```

## Project Structure

- `/src`: Contains the source code of the React Native app.
  - `/components`: Reusable React components.
  - `/config.ts`: Contains const account to make auto login to the BrekekePhone app.
- `/android` and `/ios`: Platform-specific files for Android and iOS.

## Development

### Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
yarn start

# OR with port
yarn start --port PORT
```

### Running the App

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your app:

1. Android

```bash
yarn android

# OR with port
yarn android --port PORT
```

2. iOS

```bash
yarn ios

# OR with port
yarn ios --port PORT
```

_Note_: If you run the Metro server command with a port, please also run the app command with that port.

## Setup invoke app

## 1. Enable deep links

### Android

In `/android/app/main/AndroidManifest.xml` file, add `<intent-filter>` tag contains these elements and attribute values:

- `<action>`: This tag is used to point out which action will trigger an Intent. We will use `android.intent.action.VIEW` to define an action to view app.
- `<category>`: A string containing additional information about the kind of component that should handle the intent. We will use `android.intent.category.DEFAULT` to receive implicit intents.
- `<data>`: This tag provide attributes to define type of data of a URI. We will use `android:scheme` and `android:host` to define. The final URI will have the format: `<scheme>://<host>`, it is used with `Linking`.

## 2. Invoke to BrekekePhone app

- Use ``Linking.openUrl(`brekekephonedev://open?${params}`)`` to invoke this app, in which:
  - The `brekeke_invoke_dev` is the attribute `android:scheme` in tag `<data>` in `Androidmanifest.xml` file.
  - The `open` is the attribute `android:host` in tag `<data>` in `Androidmanifest.xml` file.
  - The variable `params` is data stringified by `qs.stringify()` to send to the BrekekePhone app and contains the account info to make auto-login.

## 3. Handling Deep Links to receive data from BrekekePhone app

- Use `Linking.addEventListener('url', callback)` when the app is foregrounded, the app is already open to get data from `callback`.
- Use `Linking.getInitialURL()` when app is not already open.
- Install `qs` package usage query string parsing and stringifying.
- Use `qs.parse()` to parse params from the `url`.

## 4. About Linking in Android

`Linking` is only used with React Native. If you want to handle it with an Android code, you can follow the link below:

- [Interact with other apps](https://developer.android.com/training/basics/intents)

## Resources

- [Linking React Native](https://reactnative.dev/docs/linking)
- [Setup deep links in Android](https://developer.android.com/training/app-links/deep-linking)
- [Interact with other apps in Android](https://developer.android.com/training/basics/intents)

## Flow call about app

- The main UI has a button `Call`. After pressing it, will show a pop-up that has 2 options:
  - `Make call to nam05`:
    - This option will invoke the BrekekePhone app and call to `nam05` contact.
    - Need to run app BrekekePhone app with another device and login account `nam05` to receive calls.
    - After the end call, will back to this app.
  - `Open keypad`:
    - This option will link to the BrekekePhone app and open the keypad to type the number to call.
    - After pressing a number phone and pressing the button `Call`.
    - Need login account `nam01` with option `PHONE` is Phone 2 -> 4 to receive call.
- Default, 2 both options will send params to make auto-login with account `dev01.brekeke.com:8443 nam01`.
