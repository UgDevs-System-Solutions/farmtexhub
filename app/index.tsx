import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

// This is the main entry point of the application.
// It renders a simple welcome message centered on the screen.
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>FarmtexHub-Home</Text>
      <Link href="/about" style={styles.button}>
        Go to About screen
      </Link>
    </View>
  );
}

// The styles are defined below to ensure consistent design.
// Define styles for the application using StyleSheet.create
const styles = StyleSheet.create({ 
  // Container style with flex, background color, alignment, and justification
  container: {
    flex: 1,//Allows the container to take up the full height and width of the screen
    backgroundColor: '#25292e',//Background color of the container
    alignItems: 'center',//Centers items horizontally
    justifyContent: 'center',//Centers items vertically
  },
  // Text style with white color
  text: {
    color: '#ffffff',
  },
  button: {
    color: 'white',
    textDecorationLine: 'underline',
    textDecorationColor: 'red',
  },
});
