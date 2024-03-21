import { forwardRef, useImperativeHandle, useState } from 'react'
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native'
import { Dropdown } from './Dropdown'
import { ItemType } from 'react-native-dropdown-picker'

type InputProps = {
  title: string
  k: string
  type?: 'input' | 'dropdown'
  items: ItemType<any>[]
} & TextInputProps

export const Input = forwardRef(
  ({ title, k, type = 'input', items = [], ...rest }: InputProps, ref) => {
    const [value, setValue] = useState('')

    useImperativeHandle(ref, () => ({
      getValue: () => ({
        key: k,
        value,
      }),
    }))

    return (
      <View style={styles.container}>
        <Text>{title}</Text>
        {type === 'input' ? (
          <TextInput
            value={value}
            style={[styles.input, rest.style]}
            onChangeText={t => setValue(t)}
            {...rest}
          />
        ) : (
          <Dropdown
            value={value}
            setValue={(v: any) => setValue(v)}
            items={items}
          />
        )}
      </View>
    )
  },
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 6,
    paddingVertical: 8,
  },
  input: {
    borderColor: '#b6b6b6',
    borderWidth: 1,
    borderRadius: 10,
  },
})
