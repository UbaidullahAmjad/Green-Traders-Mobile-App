import React, {Component} from 'react'
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  View,
  SafeAreaView,
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const MessageData = [
  {
    id: 1,
    name: 'HYUNDAI',
    detail: 'Hyundai Creta',
    number: '1.6',
    year: 'Year: 2000',
    make: 'MAKE: HYUNDAI',
    model: 'Model: Hyundai Creta 1.6',
    engine: ' Engine: Petrol Dual VTVT',
  },
  {
    id: 2,
    name: 'FORD',
    detail: 'Ford EcoSport',
    number: '1.7',
    year: 'Year: 2000',
    make: 'MAKE: FORD',
    model: 'Model: Ford EcoSport',
    engine: ' Engine: 1.5L Ti-VCT (Petrol)',
  },
  {
    id: 3,
    name: 'AUDI',
    number: '1.4',
    detail: 'A3',
    year: 'Year: 1999',
    make: 'MAKE: AUDI',
    model: 'Model: A3',
    engine: ' Engine: AEH/AKL/APF',
  },
  {
    id: 4,
    name: 'LINCOLN',
    number: '1.1',
    detail: 'Lincoln MKZ',
    year: 'Year: 2003',
    make: 'MAKE: LINCOLN',
    model: 'Model: Lincoln MKZ',
    engine: ' Engine: Ford Model T',
  },
  {
    id: 5,
    name: 'HYUNDAI',
    detail: 'Hyundai Creta',
    number: '1.6',
    year: 'Year: 2000',
    make: 'MAKE: HYUNDAI',
    model: 'Model: Hyundai Creta 1.6',
    engine: ' Engine: Petrol Dual VTVT',
  },
  {
    id: 6,
    name: 'HYUNDAI',
    detail: 'Hyundai Creta',
    number: '1.6',
    year: 'Year: 2000',
    make: 'MAKE: HYUNDAI',
    model: 'Model: Hyundai Creta 1.6',
    engine: ' Engine: Petrol Dual VTVT',
  },
  {
    id: 7,
    name: 'HYUNDAI',
    detail: 'Hyundai Creta',
    number: '1.6',
    year: 'Year: 2000',
    make: 'MAKE: HYUNDAI',
    model: 'Model: Hyundai Creta 1.6',
    engine: ' Engine: Petrol Dual VTVT',
  },
]

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout))
}

export default class CarDetails extends Component {
  state = {
    refreshing: false,
  }

  renderItem = ({item}) => {
    return (
      <View
        style={{
          margin: 10,
          marginTop: 10,
          marginBottom: 10,
          elevation: 4,
          backgroundColor: 'white',
          borderRadius: 5,
        }}>
        <View style={{margin: 15}}>
          <Text style={{fontWeight: 'bold', padding: 5, fontSize: 16}}>
            {item.name}
            <Text style={{color: '#B45359', fontSize: 16}}> {item.detail}</Text>
          </Text>
          <Text style={{color: '#B45359', fontSize: 16, padding: 5}}>
            {item.number}
          </Text>
          <Text style={{color: 'silver', fontSize: 14, padding: 5}}>
            {item.year}
          </Text>
          <Text style={{color: 'silver', fontSize: 14, padding: 5}}>
            {item.make}
          </Text>
          <Text style={{color: 'silver', fontSize: 14, padding: 5}}>
            {item.model}
          </Text>
          <Text style={{color: 'silver', fontSize: 14, padding: 5}}>
            {item.engine}
          </Text>

          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              elevation: 5,
              position: 'absolute',
              backgroundColor: 'white',
              bottom: 0,
              right: 0,
              borderRadius: 30,
              width: '15%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign
              style={{padding: 13}}
              name='delete'
              color='#0F9D58'
              size={20}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  onRefresh = () => {
    this.setState({refreshing: true})
    wait(2000).then(() => this.setState({refreshing: false}))
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
              Vehicles Detail
            </Text>
          </View>
        </View>

        <FlatList
          refreshControl={
            <RefreshControl
              color='#0F9D58'
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />
          }
          data={MessageData}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('AddCar')}
          activeOpacity={0.7}
          style={{
            elevation: 5,
            position: 'absolute',
            backgroundColor: '#0F9D58',
            bottom: 30,
            right: 30,
            borderRadius: 30,
            width: '15%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AntDesign
            style={{padding: 13}}
            name='plus'
            color='white'
            size={26}
          />
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({})
