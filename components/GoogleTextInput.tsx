import { Text, View } from "react-native";

const GoogleTextInput = ({
  icons,
  initialLocation,
  containerStyle,
  textInputBackgroundColor,
  handlePress,
}) => (
  <View
    className={`flex flex-row items-center justify-center relative z-50 rounded-xl ${containerStyle} mb-5`}
  >
    <Text>Search</Text>
  </View>
);

export default GoogleTextInput;
