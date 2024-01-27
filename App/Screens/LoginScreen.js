import React from 'react';
import { StyleSheet, Text, View
} from 'react-native'
function LoginScreen() {
    return (     
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#30265b",
      justifyContent: "center",
      alignItems: "center",
    }
})
export default LoginScreen;
