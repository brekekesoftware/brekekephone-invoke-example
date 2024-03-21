import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Input } from './Input'
import { useRef } from 'react'
import { ItemType } from 'react-native-dropdown-picker'

const formArr = [
  { id: 0, name: 'User Name', key: 'user' },
  { id: 1, name: 'Password', key: 'password' },
  { id: 2, name: 'Tenant', key: 'tenant' },
  {
    id: 3,
    name: 'Host Name',
    key: 'host',
  },
  { id: 4, name: 'Port', key: 'port' },
  { id: 5, name: 'Phone', key: 'phone_idx' },
]

const dropdownItems: ItemType<any>[] = [
  { label: 'Phone 1', value: '1' },
  { label: 'Phone 2', value: '2' },
  { label: 'Phone 3', value: '3' },
  { label: 'Phone 4', value: '4' },
]
export const Settings = ({ backToCall }: { backToCall(): void }) => {
  const refs = useRef<any[]>([])

  const save = () => {
    const data: any = {}
    refs.current.forEach(item => {
      const d = item.getValue()
      data[d.key] = d.value
    })
    console.log('#Duy Phan console', data)
    backToCall()
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Settings</Text>
        <View style={styles.main}>
          {formArr.map(item => (
            <Input
              title={item.name}
              ref={el => (refs.current[item.id] = el)}
              key={item.id.toString()}
              k={item.key}
              type={item.key === 'phone_idx' ? 'dropdown' : undefined}
              items={dropdownItems}
            />
          ))}
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.button} onPress={save}>
            <Text>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
  },
  button: {
    width: 120,
    backgroundColor: 'rgb(237, 228, 181)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 50,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
})
