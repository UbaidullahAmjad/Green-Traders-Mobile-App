import React, {Component} from 'react'
import {LogBox, StyleSheet} from 'react-native'
import Nav from './Components/Navigation/Nav'
import SplashScreen from 'react-native-splash-screen'
import OneSignal from 'react-native-onesignal'

LogBox.ignoreAllLogs()

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide()

    // *********** Integrating React-Native One-Signal **************
    //OneSignal Init Code
    OneSignal.setLogLevel(6, 0)
    OneSignal.setAppId('1c8c2006-e7e3-4999-99fe-c288e7cac520')
    //END OneSignal Init Code

    //Prompt for push on iOS
    OneSignal.promptForPushNotificationsWithUserResponse(response => {
      console.log('Prompt response:', response)
    })

    //Method for handling notifications received while app in foreground
    OneSignal.setNotificationWillShowInForegroundHandler(
      notificationReceivedEvent => {
        console.log(
          'OneSignal: notification will show in foreground:',
          notificationReceivedEvent,
        )
        let notification = notificationReceivedEvent.getNotification()
        console.log('notification: ', notification)
        const data = notification.additionalData
        console.log('additionalData: ', data)
        // Complete with null means don't show a notification.
        notificationReceivedEvent.complete(notification)
      },
    )

    //Method for handling notifications opened
    OneSignal.setNotificationOpenedHandler(notification => {
      console.log('OneSignal: notification opened:', notification)
    })
  }

  render () {
    return <Nav />
  }
}

const styles = StyleSheet.create({})
