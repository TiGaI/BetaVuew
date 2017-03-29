
import React, { Component, PropTypes } from 'react';
import { AppRegistry, ScrollView, StyleSheet,
  Text, View, TextInput, TouchableOpacity, NavigatorIOS,
  ListView, Alert, AsyncStorage, TouchableHighlight } from 'react-native';
import { Container, Content, Left, Body, Header, Right, ListItem, Thumbnail, Card, Title, CardItem, Icon, Item, Input, Label,  Button} from 'native-base';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';
import { bindActionCreators } from 'redux';
import randomcolor from 'randomcolor';
import * as actionCreators from '../actions/initialAction';
import * as loginAction from '../actions/loginAction';

var t = require('tcomb-form-native');
var Form = t.form.Form;

const nameofthecategory = t.enums.of([
  'Music',
  'Art',
  'Sport'
], 'nameofthecategory');

const typeofroom = t.enums.of([
  'Public',
  'Private',
  'Public - Friend Join Only'
], 'typeofroom');

var capacity = t.refinement(t.Number, function (n) { return n > 0; });

capacity.getValidationErrorMessage = function (value, path, context) {
  return 'capacity cannot be less than zero: ' + context.locale;
};

var Activity = t.struct({
  activityTitle: t.String,
  activityDescription: t.String,
  activityLocation: t.String,
  activityCategory: nameofthecategory,
  timeStart: t.Date,
  timeEnd: t.Date,
  typeofRoom: typeofroom,
  activityCapacity: capacity
});

var options = {
  auto: 'placeholders',
  fields: {
    timeStart: {
      mode: 'time'
    }
  }
};

var CreateEvent = React.createClass({
  getInitialState() {
   return {
     value: {
       activityTitle: "Template Title",
       activityDescription: "Template Description",
       actvityLocation: "Template Location",
       activityCategory: "Music",
       typeofRoom: "Public",
       actvityCapacity: 3
      }
    };
   },
   onChange(value) {
    this.setState({value});
   },
   onPress: function (){

   var value = this.refs.form.getValue();
   if (value) {
     var copy = Object.assign({}, value);
     copy["activityCreator"] = this.props.profile.userObject._id

      fetch("http://localhost:8080/createActivity", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          activity: copy
        })
      })
   }



 },

  render() {
    const { profile } = this.props;
    return(
      <View style={styles.container}>
      <Text style={{fontSize: 25, fontWeight: '700', color: '#323232', marginTop: 20}}>Create An Activity </Text>
        <ScrollView keyboardShouldPersistTaps="always" style={{paddingLeft:10,paddingRight:10, height:500}}>
          <Form
            ref="form"
            type={Activity}
            options={options}
          />
          <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableHighlight>

        </ScrollView>

      </View>

    )
  }

})

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 20,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

function mapStateToProps(state) {
    return {
        login: state.get('login'),
        profile: state.get('profile'),
        activitiesPageState: state.get('activityPageState')

    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
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
