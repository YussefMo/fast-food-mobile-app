import ButtonComp from '@/components/ButtonComp'
import InputComp from '@/components/InputComp'
import { signIn } from '@/lib/appwrite'

import { Link, router } from 'expo-router'
import { useState } from 'react'
import { Alert, Text, View } from 'react-native'

function Signin() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [form, setForm] = useState({ email: '', password: '' })
  const { email, password } = form

  async function onSubmit() {
    if (!email || !password) {
      Alert.alert('Error', 'please enter valid email address & password.')
      return
    }

    setIsSubmitting(true)
    try {
      await signIn({ email, password })

      router.replace('/')
    } catch (error: any) {
      Alert.alert('Error', error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <View className='gap-10 bg-white rounded-lg p-5 mt-5 h-full'>
      <InputComp
        placeholder="enter your email"
        value={form.email}
        onChangeText={(text) => setForm((prev: any) => ({ ...prev, email: text }))}
        label="email"
        keyboardType="email-address"
      />
      <InputComp
        placeholder="enter your password"
        value={form.password}
        onChangeText={(text) => setForm((prev: any) => ({ ...prev, password: text }))}
        label="password"
        secureTextEntry={true}
      />
      <ButtonComp
        title='Sign In'
        isLoading={isSubmitting}
        onPress={async () => await onSubmit()}
      />
      <View className='flex justify-center mt-5 flex-row gap-2'>
        <Text className='base-regular text-gray-100'>
          Don&lsquo;t Have An Account{' '}
          <Link href={'/sign-up'} className='base-bold text-primary'>
            Sign Up
          </Link>
        </Text>
      </View>
    </View>
  )
}

export default Signin
