import React, { Component } from 'react';
import { AppRegistry, ScrollView, StyleSheet, View, TextInput, TouchableOpacity, NavigatorIOS, ListView, Alert, AsyncStorage, Image } from 'react-native';
import { Container, Content, Left, Body, Right, Text, ListItem, Thumbnail, Card, CardItem, Button } from 'native-base';
import Swiper from 'react-native-swiper'
import randomcolor from 'randomcolor'
import styles from './styles'


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
                    <Text style={{textAlign: 'center', color: "#FDFCFA", fontWeight: '300', fontSize: 10, marginBottom: 10, paddingRight: 10 }}>Followers</Text>
                  </View>
                  <View style={[styles.innerbox,  {alignItems: "center"}]}>
                    <View style={[styles.circle, {backgroundColor: '#5B6AAB'}]}>
                      <Text style={styles.textInCicle, {color: 'white'}}>27</Text>
                    </View>
                    <Text style={{textAlign: 'center', color: "#FDFCFA", fontWeight: '300', fontSize: 10, marginBottom: 10}}>Activities</Text>
                  </View>
                  <View style={[styles.innerbox,  {alignItems: "flex-start"}]}>
                    <View style={[styles.circle, {backgroundColor: '#579BAB'}]}>
                      <Text style={styles.textInCicle, {color: 'white'}}>8.7 K</Text>
                    </View>
                      <Text style={{textAlign: 'center', color: "#FDFCFA", fontWeight: '300', fontSize: 10, marginBottom: 10, paddingLeft: 2 }}>savage level</Text>
                  </View>
                </View>
              </View>

              <View style={styles.profilecontainer}>
                </View>



                <View style={{flex: 1, backgroundColor: "red", borderStyle: 'solid'}}>
                  <Text style={{fontSize: 18, fontWeight: '500', color: '#4E4E4E', marginTop: 10}}>Event Name {this.props.name}</Text>
                  <Text style={{fontSize: 13, fontWeight: '200', marginTop: 20}}>Retro venmo seitan, la croix before they sold out cronut hell of paleo lomo
                  post-ironic organic readymade chillwave salvia try-hard. Mlkshk meditation chambray,
                   celiac pop-up letterpress art party sartorial put a bird on it meh prism crucifix disrupt kickstarter. </Text>


                </View>


            </Content>
          </Container>
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
