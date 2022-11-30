import React, {Component} from 'react'
import {
  Text,
  Dimensions,
  StyleSheet,
  Linking,
  View,
  StatusBar,
  TouchableOpacity,
  PermissionsAndroid,
  ScrollView,
} from 'react-native'
import RNAndroidLocationEnabler from 'react-native-android-location-enabler'
import MapView, {Circle, PROVIDER_GOOGLE} from 'react-native-maps'

// import Geolocation from '@react-native-community/geolocation'
import Geolocation from 'react-native-geolocation-service'

import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const windowWidth = Dimensions.get('window').width
// const windowHeight = Dimensions.get('window').height
export default class UrgentBookingCall extends Component {
  constructor (props) {
    super(props)
    this.state = {
      longitude: 37.78825,
      latitude: -122.4324,
    }
  }

  componentDidMount () {
    this.watchPosition()
  }

  openWhatsapp = () => {
    let url = 'whatsapp://send? text=' + 'Hello' + '&phone=92' + '3028758241'
    Linking.openURL(url).then(data => {
      console.log('WhatsApp Opened successfully ' + data) //<---Success.
    })
  }

  async watchPosition () {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'YourProject App Location Permission',
          message: 'YourProject App needs access to location.',
        },
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
          interval: 10000,
          fastInterval: 5000,
        }).then(data => {
          if (data === 'already-enabled') {
            try {
              return (
                Geolocation.getCurrentPosition(info => {
                  this.setState({
                    latitude: info.coords.latitude,
                    longitude: info.coords.longitude,
                  })
                }),
                console.log('already-enabled')
              )
            } catch (error) {
              alert(error.message)
            }
          } else {
            setInterval(() => {
              return Geolocation.getCurrentPosition(info => {
                this.setState({
                  latitude: info.coords.latitude,
                  longitude: info.coords.longitude,
                })
              })
            }, 1000),
              console.log('already-not-enabled')
          }
        })
      } else {
        alert('Permission Denied')
      }
    } catch (err) {
      alert(err)
    }
  }

  render () {
    const {longitude, latitude} = this.state
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='transparent' translucent={true} />
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          showsTraffic={true}>
          <MapView.Marker
            coordinate={{
              latitude,
              longitude,
            }}
            title={'Your Location'}
            draggable
          />
          <Circle
            center={{latitude, longitude}}
            radius={200}
            fillColor={'rgba(200, 300, 200, 0.5)'}
          />
        </MapView>

        <View
          activeOpacity={0.7}
          style={{
            elevation: 5,
            position: 'absolute',
            backgroundColor: 'white',
            top: 50,
            right: 0,
            left: 10,
            width: 40,
            borderRadius: 30,
          }}>
          <AntDesign
            style={{padding: 10}}
            onPress={() => this.props.navigation.goBack()}
            name='arrowleft'
            size={20}
            color='#0F9D58'
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => Linking.openURL(`tel:03340545040`)}
          style={{
            elevation: 5,
            position: 'absolute',
            backgroundColor: 'white',
            bottom: 110,
            right: 30,
            borderRadius: 30,
            width: '15%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Feather
            style={{padding: 15}}
            name='phone-call'
            size={25}
            color='#0F9D58'
          />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            this.openWhatsapp()
          }}
          style={{
            elevation: 5,
            position: 'absolute',
            backgroundColor: 'white',
            bottom: 30,
            right: 30,
            borderRadius: 30,
            width: '15%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FontAwesome
            style={{padding: 15}}
            name='whatsapp'
            color='#0F9D58'
            size={26}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: windowWidth,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})
