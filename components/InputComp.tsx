import { CustomInputProps } from '@/types';
import cn from 'clsx';
import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

function InputComp({
  placeholder = 'enter text',
  value,
  onChangeText,
  label,
  secureTextEntry = false,
  keyboardType = 'default'
}: CustomInputProps) {
  const [focus, setFocus] = useState(false)

  return (
    <View className='w-full'>
      <Text className='label'>
        {label}
      </Text>
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder={placeholder}
        placeholderTextColor='#888'
        className={cn('input', focus ? 'border-primary' : 'border-gray-300')}
      />
    </View>
  )
}

export default InputComp
