import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

// This is the main entry point of the application.
// It renders a simple welcome message centered on the screen.
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>FarmtexHub Home</Text>
      <Link href="/about" style={styles.button}>
        Get Started
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
    justifyContent: 'space-around',//Distributes items evenly with space between them
    flexDirection: 'column',//Ensures the container has 2 rows
  },
  // Text style with white color
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  button: {
    color: 'black',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'semibold',
  },
});
