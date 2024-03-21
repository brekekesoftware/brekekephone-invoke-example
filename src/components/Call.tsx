import {
  Linking,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState } from 'react'
import qs from 'qs'
import { Icon } from './Icon'
import { accountParams } from '../config'

export const Call = () => {
  const [visible, setVisible] = useState(false)

  const linkToBrekeke = async (isCallTo = false) => {
    const finalParams = { ...accountParams } as any
    if (isCallTo) {
      finalParams.callTo = 'nam05'
    }
    try {
      setVisible(false)
      await Linking.openURL(
        `brekekephonedev://open?${qs.stringify(finalParams)}`,
      )
    } catch (e) {
      console.log('Invoke to BrekekePhone app error', e)
    }
  }

  const createButtonAlert = () => {
    setVisible(true)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>BrekekePhone Invoke Example</Text>
        <Icon
          size={30}
          path='M15.9,18.45C17.25,18.45 18.35,17.35 18.35,16C18.35,14.65 17.25,13.55 15.9,13.55C14.54,13.55 13.45,14.65 13.45,16C13.45,17.35 14.54,18.45 15.9,18.45M21.1,16.68L22.58,17.84C22.71,17.95 22.75,18.13 22.66,18.29L21.26,20.71C21.17,20.86 21,20.92 20.83,20.86L19.09,20.16C18.73,20.44 18.33,20.67 17.91,20.85L17.64,22.7C17.62,22.87 17.47,23 17.3,23H14.5C14.32,23 14.18,22.87 14.15,22.7L13.89,20.85C13.46,20.67 13.07,20.44 12.71,20.16L10.96,20.86C10.81,20.92 10.62,20.86 10.54,20.71L9.14,18.29C9.05,18.13 9.09,17.95 9.22,17.84L10.7,16.68L10.65,16L10.7,15.31L9.22,14.16C9.09,14.05 9.05,13.86 9.14,13.71L10.54,11.29C10.62,11.13 10.81,11.07 10.96,11.13L12.71,11.84C13.07,11.56 13.46,11.32 13.89,11.15L14.15,9.29C14.18,9.13 14.32,9 14.5,9H17.3C17.47,9 17.62,9.13 17.64,9.29L17.91,11.15C18.33,11.32 18.73,11.56 19.09,11.84L20.83,11.13C21,11.07 21.17,11.13 21.26,11.29L22.66,13.71C22.75,13.86 22.71,14.05 22.58,14.16L21.1,15.31L21.15,16L21.1,16.68M6.69,8.07C7.56,8.07 8.26,7.37 8.26,6.5C8.26,5.63 7.56,4.92 6.69,4.92A1.58,1.58 0 0,0 5.11,6.5C5.11,7.37 5.82,8.07 6.69,8.07M10.03,6.94L11,7.68C11.07,7.75 11.09,7.87 11.03,7.97L10.13,9.53C10.08,9.63 9.96,9.67 9.86,9.63L8.74,9.18L8,9.62L7.81,10.81C7.79,10.92 7.7,11 7.59,11H5.79C5.67,11 5.58,10.92 5.56,10.81L5.4,9.62L4.64,9.18L3.5,9.63C3.41,9.67 3.3,9.63 3.24,9.53L2.34,7.97C2.28,7.87 2.31,7.75 2.39,7.68L3.34,6.94L3.31,6.5L3.34,6.06L2.39,5.32C2.31,5.25 2.28,5.13 2.34,5.03L3.24,3.47C3.3,3.37 3.41,3.33 3.5,3.37L4.63,3.82L5.4,3.38L5.56,2.19C5.58,2.08 5.67,2 5.79,2H7.59C7.7,2 7.79,2.08 7.81,2.19L8,3.38L8.74,3.82L9.86,3.37C9.96,3.33 10.08,3.37 10.13,3.47L11.03,5.03C11.09,5.13 11.07,5.25 11,5.32L10.03,6.06L10.06,6.5L10.03,6.94Z'
        />
      </View>
      <View style={styles.main}>
        <TouchableOpacity style={styles.button} onPress={createButtonAlert}>
          <Text>Call</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={visible} transparent>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.buttonClose}
              onPress={() => setVisible(false)}
            >
              <Icon
                path='M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z'
                color='rgb(237, 228, 181)'
              />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Please choose a option</Text>
            <View style={styles.optionView}>
              <TouchableOpacity
                style={styles.optionBox}
                onPress={() => linkToBrekeke(true)}
              >
                <View style={styles.optionIcon}>
                  <Icon
                    size={30}
                    path='M9,11.75A1.25,1.25 0 0,0 7.75,13A1.25,1.25 0 0,0 9,14.25A1.25,1.25 0 0,0 10.25,13A1.25,1.25 0 0,0 9,11.75M15,11.75A1.25,1.25 0 0,0 13.75,13A1.25,1.25 0 0,0 15,14.25A1.25,1.25 0 0,0 16.25,13A1.25,1.25 0 0,0 15,11.75M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,11.71 4,11.42 4.05,11.14C6.41,10.09 8.28,8.16 9.26,5.77C11.07,8.33 14.05,10 17.42,10C18.2,10 18.95,9.91 19.67,9.74C19.88,10.45 20,11.21 20,12C20,16.41 16.41,20 12,20Z'
                  />
                </View>
                <Text style={styles.optionText}>Make call to nam05</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionBox}
                onPress={() => linkToBrekeke()}
              >
                <View style={styles.optionIcon}>
                  <Icon
                    size={30}
                    path='M12,19A2,2 0 0,0 10,21A2,2 0 0,0 12,23A2,2 0 0,0 14,21A2,2 0 0,0 12,19M6,1A2,2 0 0,0 4,3A2,2 0 0,0 6,5A2,2 0 0,0 8,3A2,2 0 0,0 6,1M6,7A2,2 0 0,0 4,9A2,2 0 0,0 6,11A2,2 0 0,0 8,9A2,2 0 0,0 6,7M6,13A2,2 0 0,0 4,15A2,2 0 0,0 6,17A2,2 0 0,0 8,15A2,2 0 0,0 6,13M18,5A2,2 0 0,0 20,3A2,2 0 0,0 18,1A2,2 0 0,0 16,3A2,2 0 0,0 18,5M12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17A2,2 0 0,0 14,15A2,2 0 0,0 12,13M18,13A2,2 0 0,0 16,15A2,2 0 0,0 18,17A2,2 0 0,0 20,15A2,2 0 0,0 18,13M18,7A2,2 0 0,0 16,9A2,2 0 0,0 18,11A2,2 0 0,0 20,9A2,2 0 0,0 18,7M12,7A2,2 0 0,0 10,9A2,2 0 0,0 12,11A2,2 0 0,0 14,9A2,2 0 0,0 12,7M12,1A2,2 0 0,0 10,3A2,2 0 0,0 12,5A2,2 0 0,0 14,3A2,2 0 0,0 12,1Z'
                  />
                </View>
                <Text style={styles.optionText}>Open keypad</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    height: '100%',
  },
  header: {
    width: '100%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 120,
    backgroundColor: 'rgb(237, 228, 181)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 50,
  },
  main: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  modalContent: {
    width: 280,
    height: 240,
    backgroundColor: 'rgb(55,55,55)',
    position: 'relative',
    borderRadius: 10,
  },
  modalTitle: {
    textAlign: 'center',
    color: 'rgb(237, 228, 181)',
    marginTop: 10,
    fontSize: 15,
  },
  optionView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    gap: 20,
  },
  optionBox: {
    width: 85,
    height: 85,
    borderRadius: 12,
    justifyContent: 'center',
    gap: 5,
    alignItems: 'center',
    backgroundColor: 'rgb(237, 228, 181)',
  },
  buttonClose: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  optionIcon: { width: 32, height: 32 },
  optionText: {
    textAlign: 'center',
    fontSize: 12,
  },
})
