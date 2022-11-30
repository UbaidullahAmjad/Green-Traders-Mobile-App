import React, {Component} from 'react'
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ImagePicker from 'react-native-image-crop-picker'

export default class AddVehicle extends Component {
  state = {
    avatar: null,
  }

  selectImage = async () => {
    await ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        var photo = image.path
        console.log('Photo Path:', photo)
        this.setState({avatar: photo})
      })
      .catch(error => {
        alert(error), console.log(error)
      })
  }

  render () {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{height: 100, backgroundColor: '#0F9D58'}}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: '15%',
              margin: 20,
            }}>
            <AntDesign
              style={{
                backgroundColor: 'white',
                borderRadius: 30,
              }}
              onPress={() => this.props.navigation.goBack()}
              name='arrowleft'
              size={24}
              color='#0F9D58'
            />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                color: 'white',
                marginLeft: 20,
              }}>
              Add Vehicles
            </Text>
          </View>
        </View>

        <ScrollView>
          <View style={{margin: 30, marginTop: 20}}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 16,
                color: '#0F9D58',
                textAlign: 'center',
              }}>
              Please Provide Some Information
            </Text>

            <View
              style={{
                alignItems: 'center',
                width: '100%',
              }}>
              <TouchableOpacity
                onPress={() => this.selectImage()}
                style={styles.avatarPlaceholder}>
                <Image
                  source={{uri: this.state.avatar}}
                  style={styles.avatar}
                />
                <Ionicons name='ios-add' size={50} color='#FFF' />
              </TouchableOpacity>
            </View>

            <View style={{marginBottom: 20, marginTop: 30}}>
              <TextInput
                style={styles.input}
                placeholder='Car Name (Hyundai)'
                placeholderTextColor='silver'
                selectionColor='#0F9D58'
              />
              <View
                style={{
                  borderBottomWidth: 2,
                  borderBottomColor: '#0F9D58',
                }}></View>
            </View>

            <View style={{marginBottom: 20, marginTop: 20}}>
              <TextInput
                style={styles.input}
                placeholder='Year (2000)'
                placeholderTextColor='silver'
                selectionColor='#0F9D58'
              />
              <View
                style={{
                  borderBottomWidth: 2,
                  borderBottomColor: '#0F9D58',
                }}></View>
            </View>

            <View style={{marginBottom: 20, marginTop: 20}}>
              <TextInput
                style={styles.input}
                placeholder='Model Name (Hyundai Creta)'
                placeholderTextColor='silver'
                selectionColor='#0F9D58'
              />
              <View
                style={{
                  borderBottomWidth: 2,
                  borderBottomColor: '#0F9D58',
                }}></View>
            </View>

            <View style={{marginBottom: 20, marginTop: 20}}>
              <TextInput
                style={styles.input}
                placeholder='Engine Name (45iv-IVT)'
                placeholderTextColor='silver'
                selectionColor='#0F9D58'
              />
              <View
                style={{
                  borderBottomWidth: 2,
                  borderBottomColor: '#0F9D58',
                }}></View>
            </View>

            <View style={{marginBottom: 20, marginTop: 20}}>
              <TextInput
                style={styles.input}
                placeholder='Car Color (Grey)'
                placeholderTextColor='silver'
                selectionColor='#0F9D58'
              />
              <View
                style={{
                  borderBottomWidth: 2,
                  borderBottomColor: '#0F9D58',
                }}></View>
            </View>

            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.submitContainer, {flexDirection: 'row'}]}
              onPress={() => alert('Submit')}>
              <AntDesign name='save' size={20} color='white' />
              <Text
                style={[
                  styles.text,
                  {
                    color: 'white',
                    marginLeft: 5,
                    fontWeight: '600',
                    fontSize: 16,
                  },
                ]}>
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  submitContainer: {
    backgroundColor: '#0F9D58',
    elevation: 5,
    fontSize: 16,
    borderRadius: 10,
    paddingVertical: 12,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(255,22,84,0.24)',
    shadowOffset: {width: 0, height: 9},
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5,
  },
  input: {
    height: 40,
    color: '#0F9D58',
  },
  avatarPlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#E1E2E6',
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    resizeMode: 'cover',
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
  },
})
