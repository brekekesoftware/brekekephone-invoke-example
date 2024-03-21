import { useState } from 'react'
import DropDownPicker, {
  DropDownPickerProps,
} from 'react-native-dropdown-picker'

type DropdownProps = Omit<DropDownPickerProps<any>, 'setOpen' | 'open'>

export const Dropdown = (props: DropdownProps) => {
  const [open, setOpen] = useState(false)

  return (
    <DropDownPicker
      open={open}
      setOpen={setOpen}
      {...props}
      listMode='SCROLLVIEW'
    />
  )
}
