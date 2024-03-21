/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import { AppState, Linking, SafeAreaView, StyleSheet } from 'react-native'
import { Control } from './Control'
import { parse } from 'qs'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import configureStore from '../store/configStore'

AppState.addEventListener('change', async () => {
  if (AppState.currentState !== 'active') {
    return
  }
  let urlParams: any

  Linking.addEventListener('url', e => {
    urlParams = parse(e.url)
  })
  if (!urlParams) {
    urlParams = parse((await Linking.getInitialURL()) ?? '')
  }
  console.log('#Duy Phan console', urlParams)
})

function App(): React.JSX.Element {
  return (
    <Provider store={configureStore.store}>
      <PersistGate loading={null} persistor={configureStore.persistor}>
        <SafeAreaView style={styles.main}>
          <Control />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
})
export default App
