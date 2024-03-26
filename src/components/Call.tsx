import {
  Linking,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useRef, useState } from 'react'
import qs from 'qs'
import { Icon } from './Icon'
import { Input } from './Input'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../store/configStore'
import { updateDestination } from '../store/reducers'
import {
  ArrowBackIcon,
  CloseIcon,
  FaceIcon,
  KeyPadIcon,
  SaveIcon,
  SettingsIcon,
} from '../icons'
import { colors } from '../colors'

export const Call = () => {
  const refDestination = useRef<any>()
  const [visible, setVisible] = useState(false)
  const [open, setOpen] = useState(false)

  const { destination } = useSelector((state: RootState) => state.settings)

  const dispatch = useAppDispatch()

  const linkToBrekeke = async (isCallTo = false) => {
    const finalParams = { action: 'invoke-example' } as any
    if (isCallTo) {
      finalParams.callTo = destination
    }
    try {
      setVisible(false)
      await Linking.openURL(
        `brekekeexphonedev://open?${qs.stringify(finalParams)}`,
      )
    } catch (e) {
      console.log('Invoke to BrekekePhone app error', e)
    }
  }

  const save = () => {
    const { value } = refDestination.current.getValue() ?? {}
    dispatch(updateDestination(value))
    setOpen(false)
  }

  const createButtonAlert = () => {
    setVisible(true)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>BrekekePhone Invoke Example</Text>
      </View>
      <View style={styles.main}>
        <TouchableOpacity style={styles.button} onPress={createButtonAlert}>
          <Text>Call</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={visible} transparent>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            {!open && (
              <TouchableOpacity
                style={styles.buttonClose}
                onPress={() => {
                  setVisible(false)
                  setOpen(false)
                }}
              >
                <Icon path={CloseIcon} color={colors.main} />
              </TouchableOpacity>
            )}
            {open && (
              <TouchableOpacity style={styles.buttonClose} onPress={save}>
                <Icon path={SaveIcon} color={colors.main} />
              </TouchableOpacity>
            )}
            {open && (
              <TouchableOpacity
                style={styles.buttonBack}
                onPress={() => {
                  setOpen(false)
                }}
              >
                <Icon path={ArrowBackIcon} color={colors.main} />
              </TouchableOpacity>
            )}
            {!open ? (
              <Text style={styles.modalTitle}>Please choose a option</Text>
            ) : (
              <Text style={styles.modalTitle}>Settings</Text>
            )}
            {!open && (
              <View style={styles.optionView}>
                <TouchableOpacity
                  style={[
                    styles.optionBox,
                    destination ? undefined : styles.disabled,
                  ]}
                  onPress={() => linkToBrekeke(true)}
                  disabled={!destination}
                >
                  <View style={styles.optionIcon}>
                    <Icon size={30} path={FaceIcon} />
                  </View>
                  <Text style={styles.optionText}>
                    {destination ? `Make call to ${destination}` : 'Make call'}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.optionBox}
                  onPress={() => linkToBrekeke()}
                >
                  <View style={styles.optionIcon}>
                    <Icon size={30} path={KeyPadIcon} />
                  </View>
                  <Text style={styles.optionText}>Open keypad</Text>
                </TouchableOpacity>
              </View>
            )}
            {!open && (
              <View style={styles.settings}>
                <TouchableOpacity onPress={() => setOpen(!open)}>
                  <View>
                    <Icon size={25} path={SettingsIcon} color={colors.main} />
                  </View>
                </TouchableOpacity>
                <Text style={{ color: colors.main }}>Settings</Text>
              </View>
            )}
            {open && (
              <View style={styles.settingsView}>
                <View style={styles.formDes}>
                  <Input
                    ref={refDestination}
                    k={'Destination'}
                    items={[]}
                    style={styles.inputDes}
                    value={destination}
                    placeholder={'Destination'}
                    placeholderTextColor={colors.main}
                  />
                </View>
              </View>
            )}
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
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 120,
    backgroundColor: colors.main,
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
    minHeight: 255,
    maxHeight: 400,
    height: 'auto',
    backgroundColor: 'rgb(55,55,55)',
    borderRadius: 10,
  },
  modalTitle: {
    textAlign: 'center',
    color: colors.main,
    marginTop: 12,
    fontSize: 15,
  },
  optionView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 160,
    gap: 20,
  },
  optionBox: {
    width: 85,
    height: 85,
    borderRadius: 12,
    justifyContent: 'center',
    gap: 5,
    alignItems: 'center',
    backgroundColor: colors.main,
  },
  buttonClose: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  buttonBack: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  optionIcon: { width: 32, height: 32 },
  optionText: {
    textAlign: 'center',
    fontSize: 12,
  },
  settings: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
  },
  settingsView: {
    justifyContent: 'center',
    height: 'auto',
    flex: 1,
  },
  textDes: {
    textAlign: 'center',
    color: colors.main,
  },
  formDes: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  inputDes: {
    height: 38,
    borderColor: colors.main,
    color: colors.main,
    paddingLeft: 8,
  },
  disabled: {
    opacity: 0.7,
  },
})
