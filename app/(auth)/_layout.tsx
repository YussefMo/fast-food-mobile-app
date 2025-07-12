import { Slot } from "expo-router"
import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

function _layout() {
  // const isAuthenticated = true
  // if (isAuthenticated) return <Redirect href={'/'} />

  return (
    <SafeAreaView>
      <Text>
        auth layout
      </Text>
      <Slot />
    </SafeAreaView>
  )
}

export default _layout
