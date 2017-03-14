import React, { Component } from 'react';
import { AppRegistry, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, NavigatorIOS, ListView, Alert, AsyncStorage, Image } from 'react-native';
import { Container, Content, Left, Body, Right, ListItem, Thumbnail } from 'native-base';
import Swiper from 'react-native-swiper'
import randomcolor from 'randomcolor'

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
            <Image source={require("../../assets/images/cyclist.jpg")}
              resizeMode = "stretch"
              style={{flex:3, alignItems:'center', width:null, height:null, justifyContent:'center'}}>
            </Image>
            <View style={{flex: 1, padding: 20}}>
              <Text style={{flex: 1, fontSize: 25, fontWeight: '600', color: '#4E4E4E'}}>Cycling Mt.Awesome {this.props.homes}</Text>
              <Text style={{flex: 1, fontSize: 18, fontWeight: '500', color: '#4E4E4E'}}>About the event</Text>
              <Text style={{fontSize: 15, fontWeight: '400', color: '#656565'}}>Retro venmo seitan, la croix before they sold out cronut hell of paleo lomo
              post-ironic organic readymade chillwave salvia try-hard. Mlkshk meditation chambray,
               celiac pop-up letterpress art party </Text>
            </View>
          </View>
        </Swiper>
        <View style={this.viewStyle()}>
          <Text style={{ fontSize: 25, fontWeight: '600', color: '#4E4E4E'}}>Event Name {this.props.image}</Text>
          <Image source={require("../../assets/images/cyclist.jpg")}
            resizeMode = "stretch"
            style={{flex:1, alignItems:'center', width:null, height:null, justifyContent:'center'}}>
          </Image>
          <View style={{flex: 1, padding: 20}}>
            <Text style={{flex: 1, fontSize: 25, fontWeight: '600', color: '#4E4E4E'}}>Cycling Mt.Awesome {this.props.homes}</Text>
          </View>
        </View>
      </Swiper>
    )
  }

}


module.exports = Swipe;
