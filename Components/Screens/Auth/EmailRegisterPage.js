import React, {Component} from 'react'
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class EmailPage extends Component {
  state = {
    mail: '',
    password: '',
    showpass: true,
  }

  //   nextPage = () => {
  //     const {mail} = this.state
  //     try {
  //       if (this.state.mail == '') {
  //         alert('Please Enter a Valid Email')
  //       } else {
  //         this.props.navigation.navigate('NamePage', {
  //           mail: mail,
  //         })
  //       }
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }

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

        <View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 26,
              color: 'black',
              marginLeft: 20,
            }}>
            Enter your email address
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              margin: 20,
              marginTop: 10,
              marginRight: 30,
            }}>
            Enter your email to recieve notifications and promotions in your
            inbox
          </Text>

          <TextInput
            name={this.state.mail}
            onChangeText={text => this.setState({mail: text})}
            style={styles.input}
            placeholder=' xyz@example.com'
            keyboardType='email-address'
            placeholderTextColor='silver'
            selectionColor='#0F9D58'
          />

          <View
            style={{marginTop: 10, width: '100%', justifyContent: 'center'}}>
            <TextInput
              secureTextEntry={this.state.showpass}
              style={styles.input}
              selectionColor='#0F9D58'
              placeholderTextColor='silver'
              placeholder='Password'
              onChangeText={password => this.setState({password})}
            />
            <FontAwesome
              name={this.state.showpass ? 'eye-slash' : 'eye'}
              color='grey'
              color={!this.state.showpass ? 'grey' : 'silver'}
              size={20}
              style={{
                position: 'absolute',
                right: 20,
                alignSelf: 'baseline',
              }}
              onPress={() => this.setState({showpass: !this.state.showpass})}
            />
          </View>
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('MobileRegisterPage')}
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
}

const styles = StyleSheet.create({
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
  input: {
    height: 40,
    margin: 20,
    marginTop: 10,
    borderWidth: 2,
    borderBottomColor: '#0F9D58',
    borderTopColor: 'white',
    borderRightColor: 'white',
    borderLeftColor: 'white',
    color: '#0F9D58',
  },
  mediaImageContainer: {
    width: 140,
    height: 180,
    borderRadius: 12,
    overflow: 'hidden',
    marginHorizontal: 5,
  },
})
