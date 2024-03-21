import React, { useState } from 'react'
import { Call } from './Call'
import { Settings } from './Settings'

type Screens = 'call' | 'settings'

export const Control = () => {
  const [screen, setScreen] = useState<Screens>('call')

  if (screen === 'call') {
    return <Call />
  }

  return <Settings backToCall={() => setScreen('settings')} />
}
