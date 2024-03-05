/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import { AppState, Linking, SafeAreaView } from 'react-native'
import { Control } from './src/Control'
import { parse } from 'qs'

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
    <SafeAreaView style={{ flex: 1 }}>
      <Control />
    </SafeAreaView>
  )
}

export default App
