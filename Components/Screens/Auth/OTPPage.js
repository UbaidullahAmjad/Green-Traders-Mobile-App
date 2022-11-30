import React, {Component} from 'react'
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'
// import {CodeField, Cursor} from 'react-native-confirmation-code-field'
import CodeInput from 'react-native-confirmation-code-input'

export default class EmailPage extends Component {
  state = {
    code: '',
  }

  render () {
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
            onPress={() => this.props.navigation.goBack()}
            name='arrowleft'
            size={20}
            color='white'
          />
        </View>

        <ScrollView>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 26,
              color: 'black',
              marginLeft: 20,
            }}>
            Verify your mobile number
          </Text>
          <Text
            style={{fontSize: 16, color: 'black', margin: 20, marginRight: 30}}>
            Enter the pin code you have received via SMS on your mobile number.
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => this.props.navigation.goBack()}>
              <Text style={{color: '#0F9D58'}}>Edit Number</Text>
            </TouchableOpacity>
          </Text>

          <View style={{marginBottom: 20}}>
            <CodeInput
              keyboardType='numeric'
              ref={codeInput => (this.codeInput = codeInput)}
              codeLength={4}
              compareWithCode={'1234'}
              caretHidden={true}
              ignoreCase
              autoFocus={false}
              inputPosition='center'
              size={50}
              space={35}
              className={'border-b'}
              onFulfill={() => alert('Number Verified Successfully')}
              onCodeChange={code => this.setState({code})}
              // onFulfill={(isValid) => this._onFinishCheckingCode1(isValid)}
              containerStyle={{margin: 20}}
              codeInputStyle={{
                borderBottomWidth: 4,
                borderBottomColor: '#BFC1C3',
                fontSize: 30,
                fontWeight: 'bold',
                color: '#BFC1C3',
              }}
            />
            {/* <CodeField
              autoFocus
              ref={codeInput => (this.codeInput = codeInput)}
              value={this.state.code}
              onChangeText={code => this.setState({code})}
              cellCount={4}
              rootStyle={styles.codeFieldRoot}
              keyboardType='number-pad'
              textContentType='oneTimeCode'
              renderCell={({index, symbol, isFocused}) => (
                <Text style={{fontSize: 24, borderBottomWidth: 2}} key={index}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )}
            /> */}
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{backgroundColor: '#0F9D58', borderRadius: 5}}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontSize: 16,
                  padding: 10,
                }}>
                Resend code
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <TouchableOpacity activeOpacity={0.8} style={styles.btnContainer}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>
              Continue
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  codeFieldRoot: {
    marginTop: 50,
    marginBottom: 0,
    marginLeft: 40,
    marginRight: 40,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  btnContainer: {
    backgroundColor: '#0F9D58',
    margin: 20,
    elevation: 5,
    borderRadius: 10,
    padding: 20,
  },
})
