import React, { Component } from 'react';
import { ScrollView, Image, Text, Button, View,  StyleSheet, TouchableOpacity, TextInput } from 'react-native';


export default class HomeScreen extends Component {

  state = {
    username: '',
    password: '',
    user: []
  }

  handleChange = (e) => {
      this.setState({
        username: e.nativeEvent.text
      });
    }

    handlePassword = (text) => {
        this.setState({ password: text }, () => console.log(this.state.password))
     }

    dataToDisplay = () => {
      return this.state.user ? this.filterResults() : null
  }
    displayUser = () => {
      if(this.state.username  === '' && this.state.password === '') {
        this.props.navigation.navigate('Home')
      } else {
          this.props.navigation.navigate('Logged', {
             subscriber: this.dataToDisplay()
          })
      }
  }

    static navigationOptions = {
    headerStyle: {
      backgroundColor: '#d8f2ee',
      borderBottomWidth: 0,
    }
  };


  filterResults = () => {
  return this.state.user.filter(users => users.email.toLowerCase().includes(this.state.username.toLowerCase()))}

  componentDidMount = () => {
    fetch('http://192.168.1.4:3000/api/v1/users')
    .then(r=>r.json())
    .then(json => this.setState({
      user: json
    })).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
    <ScrollView style={styles.main}>
      <View style={styles.container}>
        <View >
          <Image style={styles.image} source={require('../assets/images/l.png')} />
        </View>

        <Text style={styles.getStartedText}>Email: </Text>

          <TextInput
            clearButtonMode="always"
            keyboardType='email-address'
           style={{width: 250, height: 50, marginBottom:15, borderBottomWidth: 0.5, borderBottomColor: "red"}}
           placeholder="Email goes here"
           onChange={this.handleChange}

         />

        <Text style={styles.getStartedText}>Password: </Text>

         <TextInput
             clearButtonMode="always"
             textContentType='password'
             secureTextEntry={true}
          style={{width: 250, height: 50, marginBottom:15, borderBottomWidth: 0.5, borderBottomColor: "red"}}
          placeholder="Password goes here"
          onChangeText = {this.handlePassword}
        />

          <TouchableOpacity
           style={styles.button}
           onPress={() => this.displayUser()}
         >
           <Text style={{color: 'white', fontSize: 18}}> Login </Text>
         </TouchableOpacity>


        <Text style={styles.getStartedAccount}>Don't have an account yet? </Text>


          <TouchableOpacity
         style={styles.getStartedProducts}
         onPress={() => this.props.navigation.navigate('Products')}
         >
         <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}> Explore Products </Text>
           </TouchableOpacity>

        <Text style={styles.getStartedText}> </Text>

        <Image style={styles.imageRasp} source={require('../assets/images/r.png')} />
      </View>
    </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  main: {
    backgroundColor: '#d8f2ee'
  },
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center'
  },
  image: {
    width: 153,
    height: 28,
    marginBottom: 85,
    marginTop: 50,
    alignSelf: 'center'
  },
  button: {
    margin: 20,
    paddingLeft: 110,
    paddingRight: 110,
    paddingTop: 14,
    paddingBottom: 14,
    borderRadius: 15,
    backgroundColor:'#eb7171'
  },
  getStartedText: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 60,
    alignSelf: 'flex-start'
  },
  getStartedAccount: {
    fontWeight: "200",
    fontSize: 16,
    paddingBottom: 5,
  },
  getStartedProducts: {
    // borderRadius: 15,
    // paddingTop: 6,
    // paddingBottom: 6,
    // paddingLeft: 10,
    // paddingRight: 10,
    // backgroundColor:'#eb7171'
  },
  imageRasp:{
    width: 443,
    height: 178,
    bottom: 0,
    marginTop: 92,
    resizeMode: 'contain',
  }
});
