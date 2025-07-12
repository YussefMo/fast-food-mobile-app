import { router } from "expo-router"
import { Button, Text, View } from "react-native"

function SignUp() {
  return (
    <View>
      <Text>
        sign up
      </Text>
      <Button title='Sign in' onPress={() => router.push('/sign-in')} />
    </View>
  )
}

export default SignUp
