import React, {Component} from 'react'
import {
  Text,
  Dimensions,
  StyleSheet,
  FlatList,
  Image,
  View,
  StatusBar,
  TouchableOpacity,
  RefreshControl,
  SafeAreaView,
} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import axios from 'axios'

let numOfColumns = 3
var list = [
  {
    id: 1,
    title: 'Carpenter',
    image: require('../imagesss/cc/Carpenter.png'),
    link: 'بڑھئی',
  },
  {
    id: 2,
    title: 'Electrician',
    image: require('../imagesss/cc/Electrician.png'),
    link: 'الیکٹریشن',
  },
  {
    id: 3,
    title: 'Painter',
    image: require('../imagesss/cc/Painter.png'),
    link: 'پینٹر',
  },
  {
    id: 4,
    title: 'Plumber',
    image: require('../imagesss/cc/Plumber.png'),
    link: 'پلمبر',
  },
  {
    id: 5,
    title: 'Welder',
    image: require('../imagesss/cc/Market.png'),
    link: 'ویلڈر',
  },
  {
    id: 6,
    title: 'Barber',

    image: require('../imagesss/cc/Mason.png'),
    link: 'حجام',
  },
  {
    id: 7,
    title: 'Saloon',
    image: require('../imagesss/cc/AutomobileMechanic.png'),
    link: 'سیلون',
  },
  {
    id: 8,
    title: 'Tailor Female',
    image: require('../imagesss/cc/ac.png'),
    link: 'درزی',
  },
  {
    id: 9,
    title: 'Car Mechanic',
    image: require('../imagesss/cc/RentaCar.png'),
    link: 'کار میکینک',
  },
  {
    id: 10,
    title: 'Car Mechanic',
    image: require('../imagesss/cc/RefrigeratorMechanic.png'),
    link: 'کار میکینک',
  },
]

// const wait = timeout => {
//   return new Promise(resolve => setTimeout(resolve, timeout))
// }

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      Categories: [],
      // loader: true,
      refreshing: false,
    }
  }

  // onRefresh = () => {
  //   this.setState({refreshing: true})
  //   this.GetDataServiceAsync()
  //   wait(2000).then(() => this.setState({refreshing: false}))
  // }

  componentDidMount () {
    this.GetDataServiceAsync()
  }

  GetDataServiceAsync = async () => {
    this.setState({refreshing: true})
    await axios
      .get('https://aashiyanaservice.com/aashiyanaservicesapp/all_category.php')
      .then(response => {
        this.setState({Categories: response.data})
        console.log('get Services:', response.data)
        // this.setState({loader: false})
        this.setState({refreshing: false})
      })
      .then(() =>
        this.setState({
          Categories: [
            ...this.state.Categories,
            {
              cat_id: '0000',
              pack_name: 'Personal Package',
              price: '1999',
              result: 'package found',
              validity: '2 months',
            },
          ],
        }),
      )
      .catch(e => {
        console.log(e)
        alert('Check your Internet Connectivity')
        this.setState({refreshing: false})
        // this.setState({loader: false})
      })
  }

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor='transparent' translucent={true} />

        <View style={styles.mainBody}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                elevation: 5,
                width: '12%',
                backgroundColor: 'white',
                borderRadius: 30,
              }}>
              <Entypo
                style={{marginTop: '5%', padding: 5}}
                onPress={() => this.props.navigation.openDrawer()}
                name='menu'
                color='#0F9D58'
                size={25}
              />
            </TouchableOpacity>
            <View style={{marginLeft: '28%'}}>
              <Text style={styles.packageHeading}>SERVICES</Text>
            </View>
          </View>
          <View style={styles.sepratorLine}></View>

          {/* {this.state.loader ? (
            <ActivityIndicator
              style={{marginTop: 50}}
              color='#0F9D58'
              size='large'
            />
          ) : null} */}

          <View style={styles.categoryParentView}>
            <FlatList
              style={{paddingVertical: 30}}
              refreshControl={
                <RefreshControl
                  color='#0F9D58'
                  refreshing={this.state.refreshing}
                  onRefresh={this.GetDataServiceAsync}
                />
              }
              data={this.state.Categories}
              listKey={(item, index) => 'enterprise-' + index.toString()}
              keyExtractor={(item, index) => index.toString()}
              initialNumToRender={5}
              ref={ref => {
                this.ListView_Ref = ref
              }}
              showsVerticalScrollIndicator={false}
              numColumns={numOfColumns}
              renderItem={({item, index}) => {
                return (
                  <>
                    {item.cat_id != '0000' ? (
                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.navigate('BookingCarDetails')
                        }
                        activeOpacity={0.8}
                        key={{index}}
                        style={styles.categoryMainView}>
                        <View style={styles.categoryImageView}>
                          <Image
                            resizeMode='cover'
                            style={[styles.categoryImage]}
                            source={
                              // !isEmpty(item.cat_image)
                              // ? {uri: item.cat_image}
                              list[index].image
                            }
                          />
                        </View>
                        <Text style={styles.categoryTitle}>
                          {item.cat_name}
                        </Text>
                        <Text style={styles.categoryTitle}>
                          {item.Urdu_name}
                        </Text>
                      </TouchableOpacity>
                    ) : (
                      <>
                        <TouchableOpacity
                          onPress={() => alert('More Service are Coming Soon')}
                          activeOpacity={0.8}
                          style={styles.categoryMainView}>
                          <View style={styles.categoryImageView}>
                            <Image
                              resizeMode='cover'
                              style={styles.categoryImage}
                              source={{
                                uri:
                                  'https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/more-512.png',
                              }}
                            />
                          </View>

                          <Text style={styles.categoryTitle}>More</Text>
                        </TouchableOpacity>
                      </>
                    )}
                  </>
                )
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainBody: {
    marginTop: 50,
    width: '90%',
    marginHorizontal: '5%',
  },
  packageHeading: {
    fontSize: 18,
    color: '#777',
    paddingTop: 7,
  },
  sepratorLine: {
    marginTop: '5%',
    borderBottomWidth: 5,
    width: '100%',
    borderBottomColor: '#0F9D58',
    height: 2,
  },

  packageView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    flexDirection: 'row',
    height: 60,
  },
  packageImageView: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  packageImage: {
    width: 70,
    height: 70,
  },
  categoryParentView: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryMainView: {
    flex: 1,
    marginHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
    // height: 100,
    height: 120,
    elevation: 4,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  categoryImageView: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginTop: 5,
    borderColor: '#777',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryImage: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 12,
    textAlign: 'center',
    color: '#0F9D58',
    fontWeight: 'bold',
  },
})
