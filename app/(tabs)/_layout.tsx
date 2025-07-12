import { Redirect, Slot } from "expo-router"

function _layout() {
  const isAuthenticated = true
  if (isAuthenticated) return <Redirect href={'/sign-in'} />

  return <Slot />
}

export default _layout
