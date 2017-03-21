import React, { Component } from 'react';
import { AppRegistry, ScrollView, StyleSheet, View, TextInput, TouchableOpacity, NavigatorIOS, ListView, Alert, AsyncStorage, Image } from 'react-native';
import { Container, Content, Left, Body, Right, Text, ListItem, Thumbnail, Card, CardItem, Button, Icon } from 'native-base';
import Swiper from 'react-native-swiper'
import styles from './styles'
import Carousel from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './styles';
import MapView from 'react-native-maps';
import randomcolor from 'randomcolor';


class TitleText extends Component {
  render() {
    return (
      <Text style={{ fontSize: 48, color: 'white' }}>
        {this.props.label}
      </Text>
    )
  }
}

class Swipe extends Component{
  constructor(props){
    super(props)

  }
  viewStyle() {
    return {
      flex: 2,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    }
  }
  render(){
    console.log("THIS ONE", this.props)

    return (

      <Swiper
        loop={false}
        showsPagination={false}
        index={1}>
        <View style={this.viewStyle()}>

          <Container>

            <Content>
              <View style={styles.profileBox}>
                <Thumbnail style={{marginTop: 50, height: 80, width: 80, borderRadius: 40}} source={require("../../assets/images/cyclist.jpg")} />
                <Text style={{textAlign: 'center', fontWeight: '300', fontSize: 25, marginTop: 10}}>Junjie Jiang</Text>
                <Text style={{textAlign: 'center', fontWeight: '300', fontSize: 10, marginBottom: 10}}>Jupiter, Florida</Text>
                <Text note style={{textAlign: 'center', fontWeight: '100', fontSize: 12, marginBottom: 10}}>You either end other career, or end your career</Text>

                <View style={styles.socialStatus}>
                  <View style={[styles.innerbox,  {alignItems: "flex-end"}]}>
                    <View style={[styles.circle, {backgroundColor: '#54A78B'}]}>
                      <Text style={styles.textInCicle, {color: 'white'}}>600</Text>
                    </View>
                    <Text style={{textAlign: 'center', color: "#FDFCFA", fontWeight: '300', fontSize: 10, paddingRight: 10 }}>Followers</Text>
                  </View>
                  <View style={[styles.innerbox,  {alignItems: "center"}]}>
                    <View style={[styles.circle, {backgroundColor: '#5B6AAB'}]}>
                      <Text style={styles.textInCicle, {color: 'white'}}>27</Text>
                    </View>
                    <Text style={{textAlign: 'center', color: "#FDFCFA", fontWeight: '300', fontSize: 10}}>Activities</Text>
                  </View>
                  <View style={[styles.innerbox,  {alignItems: "flex-start"}]}>
                    <View style={[styles.circle, {backgroundColor: '#579BAB'}]}>
                      <Text style={styles.textInCicle, {color: 'white'}}>8.7 K</Text>
                    </View>
                      <Text style={{textAlign: 'center', color: "#FDFCFA", fontWeight: '300', fontSize: 10, paddingLeft: 2 }}>savage level</Text>
                  </View>
                </View>
              </View>

                <Carousel
                  ref={'carousel'}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  containerCustomStyle={{position: "relative", top: -70, paddingBottom: 270}}>
                  <View style={styles.bottomProfileContainer}>
                        <View style={styles.slide1top}>
                          <View style={styles.slidepicture}></View>
                          <View style={styles.slidepicture}></View>
                        </View>

                        <View style={styles.slide1bottom}>
                          <View style={styles.slidepicture}></View>
                          <View style={styles.slidepicture}></View>
                        </View>
                  </View>
                  <View style={styles.bottomProfileContainer, {paddingLeft: 100}}>
                    <View style={styles.slide2top}>
                      <Text style={{fontSize: 18, fontWeight: '500', color: '#4E4E4E', marginTop: 10}}>Event Name</Text>
                    </View>
                    <View style={styles.slide2bottom}>
                      <Text style={{fontSize: 18, fontWeight: '500', color: '#4E4E4E', marginTop: 10}}>Event Name</Text>
                    </View>
                  </View>
                </Carousel>

            </Content>
          </Container>
        </View>

        <Swiper
          horizontal={false}
          loop={false}
          showsPagination={false}
          index={1}>
          <View style={{flex: 1, backgroundColor: 'transparent'}}>
            <View style={{flex: 2}}>
              <View style={{flex: 1, flexDirection: 'row'}}>
              <Image source={require("../../assets/images/climb.jpg")}
                resizeMode = "stretch"
                style={{flex:1, alignItems:'center', width:null, height:null, justifyContent:'center'}}>
              </Image>
              </View>
            </View>

            <View style={{flex: 1, padding: 20, margin: 0}}>
            <ScrollView style={{flex: 1}}>
              <View style={{flex: 1}}>
                <Text style={{fontSize: 25, fontWeight: '700', color: '#323232'}}>Cycling San Francisco {this.props.homes}</Text>
              </View>
              <View style={{flex: 1, marginTop: 10}}>
              <Text numberOfLines={3} style={{fontSize: 15, fontWeight: '300', color: '#4E4E4E' }}>Narwhal occupy banh mi, skateboard locavore semiotics vape vexillologist XOXO.
               Pop-up seitan selvage unicorn fanny pack, art party fam celiac fixie flannel vegan vinyl trust fund intelligentsia. Squid skateboard cardigan,
               lyft occupy portland fap fashion axe hoodie kinfolk blog four dollar toast yuccie. </Text>
              </View>
              <View style={{flex: 1, marginTop: 10}}>
                <Button full success>
                    <Text style={{color: 'white', fontSize: 20, fontWeight: '500'}}>Join Activity</Text>
                </Button>
              </View>
            </ScrollView>
            </View>
          </View>
        </Swiper>
        <View style={{flex: 1}}>
          <ScrollView style={{flex:1}}>
            <View style={{flex: 1, padding: 10}}>
              <View style={{flex:1}}>
                <Text style={{fontSize: 25, fontWeight: '700', color: '#323232', marginTop: 20}}>Activity Description</Text>
                <Text numberOfLines={3} style={{fontSize: 15, fontWeight: '300', color: '#4E4E4E' , marginTop: 20, textAlign: 'justify'}}>Take a run to the beautiful twin peaks of San Francisco.
                The run is 5 miles in distance and will usually take around 1 hour to complete.</Text>
              </View>
              <View style={{flex:1, flexDirection: 'row', borderStyle: 'solid', borderColor:'grey', padding: 20,
               borderBottomWidth: 1, borderTopWidth: 1, marginTop: 20}}>
                <View style={{flex: 1}}>
                  <Text style={{fontSize: 15, fontWeight: '400', color: '#323232', textAlign: 'center'}}>Start: 5:00 PM EST</Text>
                </View>
                <View style={{flex: 1}}>
                  <Text style={{fontSize: 15, fontWeight: '400', color: '#323232',  textAlign: 'center'}}>End: 7:00 PM EST</Text>
                </View>
              </View>
              <View style={{flex:1, borderStyle: 'solid', borderColor:'grey',
               borderBottomWidth: 1}}>
                <Text style={{fontSize: 20, fontWeight: '500', color: '#323232', marginTop: 20, textAlign: 'justify'}}>Location</Text>
                <Text numberOfLines={3} style={{fontSize: 15, fontWeight: '300', color: '#4E4E4E' , marginTop: 20}}>We will meet the top of Twin Peaks.
                 The address is 501 Twin Peaks Blvd, San Francisco, CA 94114</Text>
                <MapView
                  style={{height: 200, width: 350, marginTop: 20, marginBottom: 20}}
                  initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                />
              </View>
              <Text style={{fontSize: 20, fontWeight: '500', color: '#323232', marginTop: 20, textAlign: 'justify'}}>General Information</Text>
              <View style={{flex:1, flexDirection: 'row', marginTop: 20}}>
                <View style={{flex:1, backgroundColor: '#00A699', height: 50, justifyContent: 'center', alignItems: 'center',
                borderColor: 'transparent', borderStyle: 'solid', borderWidth: 1, borderRadius: 3, marginRight: 5}}>
                <Text style={{fontSize: 15, fontWeight: '500', color: 'white'}}>Group Size</Text>
                <Text style={{fontSize: 15, fontWeight: '500', color: 'white'}}>5</Text>
                </View>
                <View style={{flex:1, backgroundColor: '#00A699', height: 50, justifyContent: 'center', alignItems: 'center',
              borderColor: 'transparent', borderStyle: 'solid', borderWidth: 1, borderRadius: 3}}>
                <Text style={{fontSize: 15, fontWeight: '500', color: 'white'}}>Ages</Text>
                <Text style={{fontSize: 15, fontWeight: '500', color: 'white'}}>20-25</Text>
                </View>
              </View>
              <View style={{flex:1, marginTop: 20}}>
                <View style={{flex:1, backgroundColor: 'white', height: 100, justifyContent: 'center'}}>
                <Text style={{fontSize: 20, fontWeight: '500', color: '#323232', marginTop: 20}}>Notes</Text>
                <Text numberOfLines={3} style={{fontSize: 15, fontWeight: '300', color: '#323232' , marginTop: 20,textAlign: 'justify'}}>We invite only athletes with experience
                 running 3 miles of more averaging an 8 minute mile pace.</Text>
                </View>
            </View>
            </View>
          </ScrollView>
        </View>
      </Swiper>
    )
  }

}


module.exports = Swipe;
