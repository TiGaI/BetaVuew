import React, { Component } from 'react';
import { AppRegistry, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, NavigatorIOS, ListView, Alert, AsyncStorage, Image } from 'react-native';
import { Container, Content, Left, Body, Right, ListItem, Thumbnail, Button, Icon } from 'native-base';
import Swiper from 'react-native-swiper';
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
      flex: 1,
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
          <Text style={{fontWeight: '300', fontSize: 30, marginTop: 20, color: 'black'}}>Profile</Text>
          <ListItem avatar>
                        <Left>
                            <Thumbnail source={require("../../assets/images/cyclist.jpg")} />
                        </Left>
                        <Body>
                            <Text style={{fontWeight: '300', fontSize: 18}}>Junjie Jiang</Text>
                            <Text note style={{fontWeight: '100', fontSize: 15}}>Doing what you like will always keep you happy . .</Text>
                        </Body>
                        <Right>
                        </Right>
                    </ListItem>
          <View style={{flex: 1, borderBottomColor: 'grey', borderBottomWidth: 1, borderStyle: 'solid'}}>

            <Text style={{fontSize: 18, fontWeight: '500', color: '#4E4E4E', marginTop: 10}}>Event Name {this.props.name}</Text>
            <Text style={{fontSize: 13, fontWeight: '200', marginTop: 20}}>Retro venmo seitan, la croix before they sold out cronut hell of paleo lomo
            post-ironic organic readymade chillwave salvia try-hard. Mlkshk meditation chambray,
             celiac pop-up letterpress art party sartorial put a bird on it meh prism crucifix disrupt kickstarter. </Text>
          </View>


        </View>
        <Swiper
          horizontal={false}
          loop={false}
          showsPagination={false}
          index={1}>
          <View style={{flex: 1, backgroundColor: 'transparent'}}>
            <View style={{flex: 2}}>
              <View style={{flex: 1, flexDirection: 'row'}}>
              <Image source={require("../../assets/images/cyclist.jpg")}
                resizeMode = "stretch"
                style={{flex:1, alignItems:'center', width:null, height:null, justifyContent:'center', marginRight: 5}}>
              </Image>
              <Image source={require("../../assets/images/climb.jpg")}
                resizeMode = "stretch"
                style={{flex:1, alignItems:'center', width:null, height:null, justifyContent:'center'}}>
              </Image>
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
              <Image source={require("../../assets/images/runner.jpg")}
                resizeMode = "stretch"
                style={{flex:1, alignItems:'center', width:null, height:null, justifyContent:'center', marginRight: 5, marginTop: 5}}>
              </Image>
              <Image source={require("../../assets/images/cyclist.jpg")}
                resizeMode = "stretch"
                style={{flex:1, alignItems:'center', width:null, height:null, justifyContent:'center', marginTop: 5}}>
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
