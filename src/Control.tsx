import {
  Alert,
  Button,
  Linking,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import qs from 'qs'
import { Icon } from './Icon'

export const Control = () => {
  const [visible, setVisible] = useState(false)

  const linkToBrekeke = async () => {
    const params = qs.stringify({
      host: 'dev01.brekeke.com',
      port: 8443,
      tenant: 'nam',
      user: 'nam01',
      password: 123,
      action: 'invoke-example'
    })
    try {
      setVisible(false)
      await Linking.openURL(`brekekeapp_phonedev://open?${params}`)
    } catch (e) {
      console.log('#Duy Phan console', e)
    }
  }

  const createButtonAlert = () => {
    setVisible(true)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Brekeke Invoke Example</Text>
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
              <TouchableOpacity style={styles.optionBox}>
                <View style={styles.optionIcon}>
                  <Icon
                    size={30}
                    path='M9,11.75A1.25,1.25 0 0,0 7.75,13A1.25,1.25 0 0,0 9,14.25A1.25,1.25 0 0,0 10.25,13A1.25,1.25 0 0,0 9,11.75M15,11.75A1.25,1.25 0 0,0 13.75,13A1.25,1.25 0 0,0 15,14.25A1.25,1.25 0 0,0 16.25,13A1.25,1.25 0 0,0 15,11.75M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,11.71 4,11.42 4.05,11.14C6.41,10.09 8.28,8.16 9.26,5.77C11.07,8.33 14.05,10 17.42,10C18.2,10 18.95,9.91 19.67,9.74C19.88,10.45 20,11.21 20,12C20,16.41 16.41,20 12,20Z'
                  />
                </View>
                <Text>Make call to nam05</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionBox}
                onPress={linkToBrekeke}
              >
                <View style={styles.optionIcon}>
                  <Icon
                    size={30}
                    path='M12,19A2,2 0 0,0 10,21A2,2 0 0,0 12,23A2,2 0 0,0 14,21A2,2 0 0,0 12,19M6,1A2,2 0 0,0 4,3A2,2 0 0,0 6,5A2,2 0 0,0 8,3A2,2 0 0,0 6,1M6,7A2,2 0 0,0 4,9A2,2 0 0,0 6,11A2,2 0 0,0 8,9A2,2 0 0,0 6,7M6,13A2,2 0 0,0 4,15A2,2 0 0,0 6,17A2,2 0 0,0 8,15A2,2 0 0,0 6,13M18,5A2,2 0 0,0 20,3A2,2 0 0,0 18,1A2,2 0 0,0 16,3A2,2 0 0,0 18,5M12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17A2,2 0 0,0 14,15A2,2 0 0,0 12,13M18,13A2,2 0 0,0 16,15A2,2 0 0,0 18,17A2,2 0 0,0 20,15A2,2 0 0,0 18,13M18,7A2,2 0 0,0 16,9A2,2 0 0,0 18,11A2,2 0 0,0 20,9A2,2 0 0,0 18,7M12,7A2,2 0 0,0 10,9A2,2 0 0,0 12,11A2,2 0 0,0 14,9A2,2 0 0,0 12,7M12,1A2,2 0 0,0 10,3A2,2 0 0,0 12,5A2,2 0 0,0 14,3A2,2 0 0,0 12,1Z'
                  />
                </View>
                <Text>Open keypad</Text>
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
    height: 100,
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
    width: 420,
    height: 240,
    backgroundColor: 'rgb(55,55,55)',
    position: 'relative',
  },
  modalTitle: {
    textAlign: 'center',
    color: 'rgb(237, 228, 181)',
    marginTop: 20,
    fontSize: 18,
  },
  optionView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    gap: 20,
  },
  optionBox: {
    width: 110,
    height: 110,
    borderRadius: 12,
    justifyContent: 'center',
    gap: 5,
    alignItems: 'center',
    backgroundColor: 'rgb(237, 228, 181)',
  },
  buttonClose: {
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 1,
  },
  optionIcon: { width: 32, height: 32 },
})
