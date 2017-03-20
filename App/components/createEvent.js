import React, { Component } from 'react';
import { AppRegistry, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, NavigatorIOS, ListView, Alert, AsyncStorage, Image } from 'react-native';
import { Container, Content, Left, Body, Header, Right, ListItem, Thumbnail, Card, Title, CardItem, Icon, Item, Input, Label,  Button} from 'native-base';
import { Form,
  Separator,InputField, LinkField,
  SwitchField, PickerField,DatePickerField,TimePickerField
} from 'react-native-form-generator';

import Swiper from 'react-native-swiper'
import randomcolor from 'randomcolor'

var Activity = require('../../models/models').Activity;

// var mongoose = require('mongoose');
// mongoose.connect(require('../../models/connect'))

export default class CreateEvent extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: "",
      description: "",
      startTime: new Date(),
      endTime: "",
      privacy: "Public",
      othersCanJoin: false

    }
  }

  viewStyle() {
    return {
      backgroundColor: randomcolor(),
      justifyContent: 'center'

    }
  }

  change(name, val) {
    console.log("Event Name", val)
    console.log("EVENT VAL", val)
    console.log('NAME', name)
    this.setState({
      [name]: val
    });
  }
  submit(){
    console.log('FORM STATE', this.state);
    var activity = new Activity({
      ...this.state
    });

    fetch("localhost:8080/createEvent", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        activity: activity
      })
    })
  }

  render() {
    var bannerView = this.viewStyle();
    bannerView["flex"] = 1;
    var bodyView = this.viewStyle();
    bodyView["flex"] = 2;
    return(
      <View style ={{flex: 1}}>

        <Container style = {bannerView}>
          <Container style= {{backgroundColor: 'transparent', padding: 10, flex: 1}}>

            <Thumbnail style = {{marginTop: 10, height: 80, width: 80 , borderRadius: 40}} source={require("../../assets/images/cyclist.jpg")}/>

          </Container>

        </Container>
        <Container style = {{backgroundColor: "white", padding: 10, flex: 2}}>
          <Title>What are you doing today...</Title>
          <Container style = {{backgroundColor: "white", margin: 10, flex: 1}}>
          <ScrollView>
            <Form ref='registrationForm'
            onFocus={console.log(this)}
            onChange={console.log(this)}
            label="Personal Information">
                <InputField
                ref='title'
                placeholder='Title'
                value = {this.state.title} onValueChange={this.change.bind(this, "title")} />
                <InputField
                multiline={true}
                ref='description'
                placeholder='Description...'
                helpText='What are you gonna do?'
                defaultValue = {this.state.description} onValueChange={this.change.bind(this, "description")} />
                <DatePickerField ref='startTime'
                minimumDate={new Date()}
                maximumDate={new Date('12/31/2017')}
                placeholder='Date of Activity'
                onValueChange={this.change.bind(this, "startTime")} />
                <DatePickerField ref='end_time'
                placeholder='End Time'
                defaultValue = {this.state.startTime} onValueChange={this.change.bind(this, "endTime")}/>
                <PickerField ref='privacy'
                label='Privacy'
                options={{
                  Public: 'Public',
                  Private: 'Private'
                }}
                defaultValue = {this.state.privacy} onValueChange={this.change.bind(this, "privacy")}/>
                <SwitchField label='Allow others to join'
                ref="othersCanJoin"
                helpText='Do you want your activity to be open to the public?'
                defaultValue = {this.state.othersCanJoin} onValueChange={this.change.bind(this, "othersCanJoin")}/>
                <Container style = {{alignItems: 'center'}}>
                <TouchableOpacity>
                <Button bordered onPress={this.submit.bind(this)}>
                    <Text style = {{color: 'red'}}>Create Event</Text>
                </Button>
                </TouchableOpacity>
                </Container>
            </Form>
            </ScrollView>
          </Container>
        </Container>
      </View>
    )
  }

}

module.exports = CreateEvent;
