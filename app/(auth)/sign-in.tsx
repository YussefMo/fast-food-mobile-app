import { router } from 'expo-router'
import { Button, Text, View } from 'react-native'

function Signin() {
  return (
    <View>
      <Text>
        Signin
      </Text>
      <Button title='Sign Up' onPress={() => router.push('/sign-up')} />
    </View>
  )
}

export default Signin
