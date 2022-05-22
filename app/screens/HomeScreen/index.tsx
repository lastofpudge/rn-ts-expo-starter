import { View, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { FC } from "react"

const HomeScreen: FC = () => {
  const navigation = useNavigation()

  return (
    <View>
      <Text>index</Text>
    </View>
  )
}

export default HomeScreen
