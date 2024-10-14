import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to FarmtexHub</Text>
      <Link href="/auth" style={styles.button}>
        Go to Authentication
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
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

