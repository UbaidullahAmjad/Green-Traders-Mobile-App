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
import {IMAGE} from '../../Images/Images'

class ForgetPassword extends Component {
  state = {
    username: '',
    isReady: true,
  }

  render () {
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#0F9D58'}}>
        <StatusBar backgroundColor='#0F9D58' />

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

          <Text
            style={{
              color: 'white',
              fontSize: 14,
              textAlign: 'justify',
              marginTop: 20,
              marginRight: 40,
              marginLeft: 40,
            }}>
            Please enter your Email or Phone Number to receive password reset
            instructions.
          </Text>

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
              require={true}
              selectionColor='#0F9D58'
              onChangeText={username =>
                this.setState({username: username.trim()})
              }
            />
          </View>

          <View style={{alignItems: 'center'}}>
            {this.state.isReady ? (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ResetPassword')}
                activeOpacity={0.8}
                style={[styles.button]}>
                <Text
                  style={{
                    color: '#0F9D58',
                    fontSize: 18,
                  }}>
                  Next
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

export default ForgetPassword
