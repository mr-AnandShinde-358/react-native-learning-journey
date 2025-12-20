import { Image, StyleSheet, Text, View ,TextInput, Button, TouchableOpacity} from 'react-native'
import React from 'react'


export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.headingBox}>
        <Image
        />
        <Text style={styles.headingBoxTitle}>Kopaper</Text>
      </View>
      {/* login form */}
      <View style={[styles.LoginCard,styles.LoginCardEvalution]}>
      <View style={styles.loginFormHeading}>
        <Text style={[styles.loginFormHeadingText,styles.loginFormHeadingTextOne]}>Sign in</Text>
        <Text style={[styles.loginFormHeadingText,styles.loginFormHeadingTextTwo]}>Register</Text>
      </View>
      <View style={styles.inputText}>
      <TextInput
      style={styles.input}
      placeholder='email'
      />
 <TextInput
      style={styles.input}
      placeholder='password'
      />
      <Text style={styles.forgotPasswordText}>Forgot Password</Text>
      </View>

     {/* Custom Login Button */}
<TouchableOpacity style={styles.loginButton} onPress={() => console.log('Login Pressed')}>
  <Text style={styles.loginButtonText}>Login</Text>
</TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginHorizontal:24,
    marginVertical:30,
    width:340,
    backgroundColor:'#f3f5f7'
  },
  headingBox:{
    margin:'auto',
    marginTop:60,
    marginBottom:50
  },
  headingBoxTitle:{
    fontSize:26,
    fontWeight:'bold'
  },
  LoginCard:{
    backgroundColor:'#fff',
    padding:12,
    borderRadius:12
  },
  LoginCardEvalution:{
   elevation:5,
  
  },
  loginFormHeading:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    marginBottom:40,
    marginTop:20
  },
  loginFormHeadingText:{
    fontSize:20
  },
  loginFormHeadingTextOne:{
    fontWeight:'bold',
    borderBottomWidth:4,
    borderBottomColor:'#f48318'
  
  },
  loginFormHeadingTextTwo:{
    color:'#5d5d5d'
  },
  inputText:{
    
  
  },
  input:{
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom:12
  },
  // 2. Agar 'Forgot Password' ko underline karna hai
  forgotPasswordText: {
    textAlign: 'right',
    marginTop: 5,
    marginBottom:40,
    color: '#666',
    textDecorationLine: 'underline', // <--- Ye line add karein
  },
  // Button ka dabba (Container)
  loginButton: {
    backgroundColor: '#c222de',
    paddingVertical: 14,       
    borderRadius: 15,          
    marginTop: 20,             
    elevation: 5,            
  },
  
  // Button ke andar ka Text
  loginButtonText: {
    color: '#fff',              // White text
    textAlign: 'center',        // Text ko beech mein lane ke liye
    fontSize: 18,
    fontWeight: 'bold',
  }
})