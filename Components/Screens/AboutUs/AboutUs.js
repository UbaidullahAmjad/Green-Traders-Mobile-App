import React, {Component} from 'react'
import {Text, StyleSheet, View, ScrollView, SafeAreaView} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default class AboutUs extends Component {
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
              About Us
            </Text>
          </View>
        </View>

        <ScrollView>
          <View style={{padding: 20}}>
            <Text style={{color: 'grey', textAlign: 'justify', fontSize: 14}}>
              Here are some adjectives for workshop: grimy and smoky, auxiliary
              and special, unique book-lined, well-equipped and orderly little,
              radiophonic, twice-weekly intensive, cooperative or
              self-governing, historical last, sensible spotless, vast
              countrywide, second international, mere dingy, ongoing global,
              vast curious.
            </Text>
            <Text style={{color: 'grey', textAlign: 'justify', fontSize: 14}}>
              Here are some adjectives for workshop: grimy and smoky, auxiliary
              and special, unique book-lined, well-equipped and orderly little,
              radiophonic, twice-weekly intensive, cooperative or
              self-governing, historical last, sensible spotless, vast
              countrywide, second international, mere dingy, ongoing global,
              vast curious.
            </Text>
            <Text style={{color: 'grey', textAlign: 'justify', fontSize: 14}}>
              Here are some adjectives for workshop: grimy and smoky, auxiliary
              and special, unique book-lined, well-equipped and orderly little,
              radiophonic, twice-weekly intensive, cooperative or
              self-governing, historical last, sensible spotless, vast
              countrywide, second international, mere dingy, ongoing global,
              vast curious.
            </Text>
            <Text style={{color: 'grey', textAlign: 'justify', fontSize: 14}}>
              Here are some adjectives for workshop: grimy and smoky, auxiliary
              and special, unique book-lined, well-equipped and orderly little,
              radiophonic, twice-weekly intensive, cooperative or
              self-governing, historical last, sensible spotless, vast
              countrywide, second international, mere dingy, ongoing global,
              vast curious.
            </Text>
            <Text style={{color: 'grey', textAlign: 'justify', fontSize: 14}}>
              Here are some adjectives for workshop: grimy and smoky, auxiliary
              and special, unique book-lined, well-equipped and orderly little,
              radiophonic, twice-weekly intensive, cooperative or
              self-governing, historical last, sensible spotless, vast
              countrywide, second international, mere dingy, ongoing global,
              vast curious.
            </Text>
            <Text style={{color: 'grey', textAlign: 'justify', fontSize: 14}}>
              Here are some adjectives for workshop: grimy and smoky, auxiliary
              and special, unique book-lined, well-equipped and orderly little,
              radiophonic, twice-weekly intensive, cooperative or
              self-governing, historical last, sensible spotless, vast
              countrywide, second international, mere dingy, ongoing global,
              vast curious.
            </Text>
            <Text style={{color: 'grey', textAlign: 'justify', fontSize: 14}}>
              Here are some adjectives for workshop: grimy and smoky, auxiliary
              and special, unique book-lined, well-equipped and orderly little,
              radiophonic, twice-weekly intensive, cooperative or
              self-governing, historical last, sensible spotless, vast
              countrywide, second international, mere dingy, ongoing global,
              vast curious.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({})
