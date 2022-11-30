import * as React from 'react'
import {
  SafeAreaView,
  Image,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import {IMAGE} from '../Images/Images'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'

import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

// Import Login Screens
import LoginScreen from '../Screens/Auth/LoginScreen'

// Import SignUp Screens
import EmailRegisterPage from '../Screens/Auth/EmailRegisterPage'
import MobileRegisterPage from '../Screens/Auth/MobileRegisterPage'
import OTPPage from '../Screens/Auth/OTPPage'

// Import ForgetPassword Screens
import ForgetPassword from '../Screens/Auth/ForgetPassword'
import ResetPassword from '../Screens/Auth/ResetPassword'

// Import Home Screens
import Home from '../Screens/Home'
import BookingCarDetails from '../Screens/HomeScreens/BookingCarDetails'
import ScheduleScreen from '../Screens/HomeScreens/ScheduleScreen'
import ServicePrice from '../Screens/HomeScreens/ServicePrice'

// Import OrderHistory Screens
import OrderHistory from '../Screens/OrderHistoryScreens/OrderHistory'

// Import CarDetails Screens
import CarDetails from '../Screens/CarDetailScreens/CarDetail'
import AddVehicle from '../Screens/CarDetailScreens/AddVehicle'

//Import UrgentBookingCall Scrreens
import UrgentBookingCall from '../Screens/UrgentBookingCall/UrgentBookingCall'

//Import User's Profile Screens
import Profile from '../Screens/ProfileScreen/Profile'

//Import Notifications Scrreens
import Notifications from '../Screens/NotificationsScreens/Notifications'

//Import Feeedback Screens
import Feeedback from '../Screens/FeedbackScreens/Feedback'

//Import Help Screens
import Help from '../Screens/HelpScreen/Help'

//Import AboutUs Screens
import AboutUs from '../Screens/AboutUs/AboutUs'

//Import Terms Screens
import Terms from '../Screens/TermsAndConditionScreens/Terms'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

export function CustomDrawerContent ({navigation}) {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            backgroundColor: '#0F9D58',
            height: 200,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            // source={IMAGE.ICON_USER}
            source={require('../Images/man_picture.jpg')}
            style={{marginTop: 60, height: 100, width: 100, borderRadius: 60}}
          />
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              textAlign: 'center',
              margin: 10,
              fontWeight: 'bold',
            }}>
            Aqdas Ilyas
          </Text>
        </View>
        <ScrollView>
          <View style={{margin: 20, marginTop: 30}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Profile'), navigation.closeDrawer()
              }}
              activeOpacity={0.6}
              style={{flexDirection: 'row', marginBottom: 10}}>
              <AntDesign name='user' size={24} color='#BABBBD' />
              <View style={{marginLeft: 20}}>
                <Text> Profile</Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#BABBBD',
                marginBottom: 20,
              }}></View>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('OrderHistory'), navigation.closeDrawer()
              }}
              activeOpacity={0.6}
              style={{flexDirection: 'row', marginBottom: 10}}>
              <MaterialCommunityIcons
                name='history'
                size={24}
                color='#BABBBD'
              />
              <View style={{marginLeft: 20}}>
                <Text> Order History</Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#BABBBD',
                marginBottom: 20,
              }}></View>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('CarDetails'), navigation.closeDrawer()
              }}
              activeOpacity={0.6}
              style={{flexDirection: 'row', marginBottom: 10}}>
              <AntDesign name='car' size={24} color='#BABBBD' />
              <View style={{marginLeft: 20}}>
                <Text> Vehicle Details</Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#BABBBD',
                marginBottom: 20,
              }}></View>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('UrgentBookingCall'),
                  navigation.closeDrawer()
              }}
              activeOpacity={0.6}
              style={{flexDirection: 'row', marginBottom: 10}}>
              <Feather name='phone-call' size={24} color='#BABBBD' />
              <View style={{marginLeft: 20}}>
                <Text> Urgent Booking Call</Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#BABBBD',
                marginBottom: 20,
              }}></View>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Notifications'), navigation.closeDrawer()
              }}
              activeOpacity={0.6}
              style={{flexDirection: 'row', marginBottom: 10}}>
              <MaterialIcons
                name='notifications-none'
                size={24}
                color='#BABBBD'
              />
              <View style={{marginLeft: 20}}>
                <Text> Notifications</Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#BABBBD',
                marginBottom: 20,
              }}></View>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Feedback'), navigation.closeDrawer()
              }}
              activeOpacity={0.6}
              style={{flexDirection: 'row', marginBottom: 10}}>
              <MaterialIcons name='feedback' size={24} color='#BABBBD' />
              <View style={{marginLeft: 20}}>
                <Text> Feedback</Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#BABBBD',
                marginBottom: 20,
              }}></View>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Help'), navigation.closeDrawer()
              }}
              activeOpacity={0.6}
              style={{flexDirection: 'row', marginBottom: 10}}>
              <MaterialCommunityIcons
                name='alert-circle-check-outline'
                size={24}
                color='#BABBBD'
              />
              <View style={{marginLeft: 20}}>
                <Text> Help</Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#BABBBD',
                marginBottom: 20,
              }}></View>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('AboutUs'), navigation.closeDrawer()
              }}
              activeOpacity={0.6}
              style={{flexDirection: 'row', marginBottom: 10}}>
              <Entypo name='info' size={24} color='#BABBBD' />
              <View style={{marginLeft: 20}}>
                <Text> About Us</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            backgroundColor: '#0F9D58',
          }}>
          <Text style={{fontWeight: 'bold', color: 'white', fontSize: 16}}>
            Green Traders WorkShop
          </Text>
        </View>
      </SafeAreaView>
    </>
  )
}

export function Draweral () {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name='Dashboard' component={Home} />
    </Drawer.Navigator>
  )
}

function Stackss () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name='EmailRegisterPage'
          component={EmailRegisterPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='MobileRegisterPage'
          component={MobileRegisterPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='OTPPage'
          component={OTPPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='ForgetPassword'
          component={ForgetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='ResetPassword'
          component={ResetPassword}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name='DraweralScreen'
          component={Draweral}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='BookingCarDetails'
          component={BookingCarDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='ScheduleScreen'
          component={ScheduleScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='ServicePrice'
          component={ServicePrice}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name='OrderHistory'
          component={OrderHistory}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name='CarDetails'
          component={CarDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='AddCar'
          component={AddVehicle}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name='UrgentBookingCall'
          component={UrgentBookingCall}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name='Profile'
          component={Profile}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name='Notifications'
          component={Notifications}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name='Feedback'
          component={Feeedback}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name='Help'
          component={Help}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name='AboutUs'
          component={AboutUs}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name='Terms'
          component={Terms}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Stackss
