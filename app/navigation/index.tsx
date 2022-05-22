import HomeScreen from "@/screens/HomeScreen"
import { DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { FC } from "react"

import { IStackParams } from "./IStackParams"

const CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
}

const Stack = createNativeStackNavigator<IStackParams>()

const Navigation: FC = () => {
  return (
    <NavigationContainer theme={CustomTheme}>
      {/* @ts-ignore */}
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
