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

class ResetPassword extends Component {
  state = {
    username: '',
    password: '',
    isReady: true,
    ViewReady: false,
    modalVisible: false,
    buttonReady: false,
    check: false,
    showpass1: true,
    showpass2:true
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

          <Text
            style={{
              color: 'white',
              fontSize: 14,
              textAlign: 'center',
              marginRight: 40,
              marginLeft: 40,
            }}>
            Please Make your New Password.
          </Text>

          <View style={styles.TextContainer}>
            <View
              style={{marginTop: 10, width: '100%', justifyContent: 'center'}}>
              <TextInput
                secureTextEntry={this.state.showpass1}
                style={[
                  styles.Input,
                  {paddingLeft: 10, color: '#0F9D58', fontSize: 16},
                ]}
                selectionColor='#0F9D58'
                placeholderTextColor='silver'
                placeholder='Enter New Password'
                onChangeText={password => this.setState({password})}
              />

              <FontAwesome
                name={this.state.showpass1 ? 'eye-slash' : 'eye'}
                color='grey'
                color={!this.state.showpass1 ? 'grey' : 'silver'}
                size={20}
                style={{position: 'absolute', right: 10, alignSelf: 'baseline'}}
                onPress={() => this.setState({showpass1: !this.state.showpass1})}
              />
            </View>

            <View
              style={{marginTop: 10, width: '100%', justifyContent: 'center'}}>
              <TextInput
                secureTextEntry={this.state.showpass2}
                style={[
                  styles.Input,
                  {paddingLeft: 10, color: '#0F9D58', fontSize: 16},
                ]}
                selectionColor='#0F9D58'
                placeholderTextColor='silver'
                placeholder='Confrim New Password'
                onChangeText={password => this.setState({password})}
              />

              <FontAwesome
                name={this.state.showpass2 ? 'eye-slash' : 'eye'}
                color='grey'
                color={!this.state.showpass2 ? 'grey' : 'silver'}
                size={20}
                style={{position: 'absolute', right: 10, alignSelf: 'baseline'}}
                onPress={() => this.setState({showpass2: !this.state.showpass2})}
              />
            </View>
          </View>

          <View style={{alignItems: 'center'}}>
            {this.state.isReady ? (
              <TouchableOpacity
                onPress={() => alert('Reset')}
                activeOpacity={0.8}
                style={[styles.button]}>
                <Text
                  style={{
                    color: '#0F9D58',
                    fontSize: 18,
                  }}>
                  Reset
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

export default ResetPassword
