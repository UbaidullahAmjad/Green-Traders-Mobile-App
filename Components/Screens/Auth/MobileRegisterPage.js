import React, {useState, useRef} from 'react'
import {
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import PhoneInput from 'react-native-phone-number-input'

export default function MobilePage (props) {
  const [password, setPassword] = useState('')
  const [showpass, setShowPass] = useState(true)
  const [value, setValue] = useState('')
  const [formattedValue, setFormattedValue] = useState('')
  // const [valid, setValid] = useState(false)
  // const [showMessage, setShowMessage] = useState(false)
  const phoneInput = useRef()

  return (
    <LinearGradient
      colors={['white', 'white']}
      style={{flex: 1}}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 20,
          height: 70,
          marginTop: 30,
        }}>
        <AntDesign
          style={{
            backgroundColor: '#0F9D58',
            borderRadius: 30,
            paddingLeft: 3,
            paddingRight: 3,
            paddingTop: 2,
            paddingBottom: 2,
          }}
          onPress={() => props.navigation.goBack()}
          name='arrowleft'
          size={20}
          color='white'
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 26,
            color: 'black',
            marginLeft: 20,
          }}>
          Enter your mobile address
        </Text>
        <Text
          style={{fontSize: 16, color: 'black', margin: 20, marginRight: 30}}>
          Enter your mobile number, to create an account or sign in
        </Text>

        {/* {showMessage && (
            <View style={styles.message}>
              <Text>Value : {value}</Text>
              <Text>Formatted Value : {formattedValue}</Text>
              <Text>Valid : {valid ? "true" : "false"}</Text>
            </View>
          )} */}

        <PhoneInput
          ref={phoneInput}
          defaultValue={value}
          defaultCode='DM'
          layout='first'
          onChangeText={text => {
            setValue(text), console.log('OnChangeText: ', text)
          }}
          onChangeFormattedText={text => {
            setFormattedValue(text),
              console.log('onChangeFormattedText: ', text)
          }}
          containerStyle={{width: '90%', margin: 20}}
          // withDarkTheme
          withShadow
        />

        {/* <TouchableOpacity
          onPress={() => {
            const checkValid = phoneInput.current?.isValidNumber(value)
            setShowMessage(true)
            setValid(checkValid ? checkValid : false)
          }}>
          <Text>Check</Text>
        </TouchableOpacity> */}

        <View style={{marginTop: 10, width: '100%', justifyContent: 'center'}}>
          <TextInput
            secureTextEntry={showpass}
            style={styles.input}
            selectionColor='#0F9D58'
            placeholderTextColor='silver'
            placeholder='Password'
            onChangeText={password => setPassword(password)}
          />
          <FontAwesome
            name={showpass ? 'eye-slash' : 'eye'}
            color='grey'
            color={!showpass ? 'grey' : 'silver'}
            size={20}
            style={{
              position: 'absolute',
              right: 20,
              alignSelf: 'baseline',
            }}
            onPress={() => setShowPass(!showpass)}
          />
        </View>
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('OTPPage')}
          activeOpacity={0.8}
          style={styles.btnContainer}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>
            Continue
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
  },
  btnContainer: {
    backgroundColor: '#0F9D58',
    margin: 20,
    elevation: 5,
    borderRadius: 10,
    padding: 20,
  },
  input: {
    height: 40,
    margin: 20,
    marginTop: 0,
    borderWidth: 2,
    borderBottomColor: '#0F9D58',
    borderTopColor: 'white',
    borderRightColor: 'white',
    borderLeftColor: 'white',
    color: '#0F9D58',
  },
})
