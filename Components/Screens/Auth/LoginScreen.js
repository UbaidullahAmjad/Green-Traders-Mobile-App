import React, {Component} from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  TextInput,
  ActivityIndicator,
  StatusBar,
  Image,
} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import * as CommonStyle from '../../Styles/Style'
import {IMAGE} from '../../Images/Images'

class Signin extends Component {
  state = {
    username: '',
    password: '',
    isReady: true,
    ViewReady: false,
    modalVisible: false,
    buttonReady: false,
    check: false,
    showpass: true,
  }

  render () {
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#0F9D58'}}>
        <StatusBar backgroundColor='transparent' translucent={true} />
        <View
          style={{
            marginTop: 40,
            flex: 1,
            flexDirection: 'column',
            backgroundColor: '#0F9D58',
          }}>
          <View
            style={{
              alignItems: 'center',
              height: 170,
              marginTop: 30,
            }}>
            <Image
              source={IMAGE.PROFILE_ICON}
              style={{height: 100, marginTop: 30}}
              resizeMode='contain'
            />
          </View>

          <View
            style={{
              margin: 30,
              marginTop: 10,
              borderColor: 'white',
              borderWidth: 1,
            }}></View>

          <View style={styles.TextContainer}>
            <TextInput
              style={[
                styles.Input,
                {paddingLeft: 10, color: '#0F9D58', fontSize: 16},
              ]}
              value={this.state.username}
              autoCapitalize={'none'}
              placeholderTextColor='silver'
              placeholder='Phone Number'
              keyboardType={'numeric'}
              type='email'
              selectionColor='#0F9D58'
              require={true}
              onChangeText={username =>
                this.setState({username: username.trim()})
              }
            />

            <View
              style={{marginTop: 10, width: '100%', justifyContent: 'center'}}>
              <TextInput
                secureTextEntry={this.state.showpass}
                style={[
                  styles.Input,
                  {paddingLeft: 10, color: '#0F9D58', fontSize: 16},
                ]}
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
                style={{position: 'absolute', right: 10, alignSelf: 'baseline'}}
                onPress={() => this.setState({showpass: !this.state.showpass})}
              />
            </View>
          </View>

          <View style={{alignItems: 'center'}}>
            {this.state.isReady ? (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('DraweralScreen')}
                activeOpacity={0.8}
                style={[styles.button]}>
                <Text
                  style={{
                    color: '#0F9D58',
                    fontSize: 18,
                  }}>
                  Login
                </Text>
              </TouchableOpacity>
            ) : (
              <ActivityIndicator
                size={33}
                style={{alignSelf: 'center'}}
                color={'red'}
              />
            )}
          </View>

          <View
            style={{
              height: '8%',
              alignSelf: 'center',
              marginTop: '4%',
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.props.navigation.navigate('ForgetPassword')}>
              <Text
                style={{
                  marginTop: 10,
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 16,
                }}>
                Forgotten Account?
              </Text>
            </TouchableOpacity>
          </View>

          <Text
            style={{
              marginTop: 20,
              textAlign: 'center',
              color: 'white',
              fontSize: 16,
            }}>
            Don't have an account yet?
          </Text>

          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.props.navigation.navigate('MobileRegisterPage')}
              style={styles.button}>
              <Text
                style={{
                  color: '#0F9D58',
                  fontSize: 18,
                }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              margin: 10,
            }}></View>
        </View>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  Input: {
    width: '100%',
    height: 45,
    // borderWidth: 2,
    // borderColor: '#fe6603',
    color: '#0123B4',
    backgroundColor: 'white',
    fontSize: 26,
    marginTop: 5,
    fontSize: 18,
    padding: 5,
    borderRadius: 50,
    // textAlign: 'center',
    marginTop: '2%',
  },
  TextContainer: {
    marginTop: 10,
    width: '85%',
    alignSelf: 'center',
  },
  button: {
    width: '40%',
    height: 45,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Signin
