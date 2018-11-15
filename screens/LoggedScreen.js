import React, { Component } from 'react';
import { ScrollView, Image, Text, Button, View, ImageBackground,  StyleSheet, TouchableOpacity, TextInput } from 'react-native';


export default class LoggedScreen extends React.Component {

  static navigationOptions = {
     title: 'BeFresh.',
     headerStyle: {
     backgroundColor: '#d46363',
     borderBottomWidth: 0,
    },
     headerTintColor: 'white',
    };

    state = {
    clicked: true,
    }

    handleOpen = () => {
     this.setState({ clicked: !this.state.clicked });
    };

  render() {
    const { navigation } = this.props;
    const subscriber = navigation.getParam('subscriber', 'NO-ID');
    if (this.props.navigation.getParam('subscriber').length === 0) {
      return  <Text style={{alignSelf: 'center', paddingTop: 80,}}>Enter a valid username/password </Text>
       }
    return (

      <ScrollView style={styles.main}>

        <Text style={styles.hello}>Hi, {subscriber[0].name}</Text>

          <ImageBackground source={require('../assets/images/b.jpg')} style={{width: 335, height: 441, alignSelf: 'center', marginTop:15}}>
            <Text style={styles.box}> Your next box  </Text>
            <Text style={styles.boxes}> Arriving November 29th  </Text>
          </ImageBackground>

          <ImageBackground source={require('../assets/images/s.jpg')} style={{width: 335, height: 441, alignSelf: 'center', marginTop:15, marginBottom:30}}>
            <Text style={styles.box}>Ready to try </Text>
            <Text style={styles.boxed}>something new? </Text>
              <TouchableOpacity
             style={styles.getStartedProducts}
             onPress={() => this.props.navigation.navigate('Products')}
             >
             <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold', paddingTop: 280, paddingLeft: 14}}> See All Products </Text>
               </TouchableOpacity>
          </ImageBackground>

          <ImageBackground source={require('../assets/images/p.jpg')} style={{width: 335, height: 441, alignSelf: 'center', marginTop:15, marginBottom:30}}>
            <Text style={styles.weekly}>{subscriber[0].subscription} weekly </Text>
            <Text style={styles.week}>Your plan is now {this.state.clicked? 'active': 'paused'}</Text>
            <TouchableOpacity
             style={styles.buttons}
             onPress={this.handleOpen}
           >
             <Text style={{color: 'white', fontSize: 14, alignSelf: 'center'}}> {  this.state.clicked ?'Pause your plan':'Activate Plan'} </Text>
           </TouchableOpacity>
          </ImageBackground>

          <View style={styles.itemContainer}>
                <Text style={styles.item}>Account Details</Text>
                <Text style={styles.details}>Name: {subscriber[0].name}</Text>
                <Text style={styles.details}>Email: {subscriber[0].email}</Text>

                <Text style={styles.item}>Order History</Text>
                <Text style={styles.details}>Order #1 | Date Purchased: {subscriber[0].created_at.slice(0, 10)} | Total: ${subscriber[0].orders[0].total}</Text>
          </View>
          <TouchableOpacity

         style={styles.button}
         onPress={() => this.props.navigation.navigate('Home')}
       >
         <Text style={{color: 'white', fontSize: 18, alignSelf: 'center'}}> Log out</Text>
       </TouchableOpacity>
           <Text style={styles.item}></Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white'
  },
  container: {
    backgroundColor: '#d46363',
    alignItems: 'center',
    height: 45,
    marginBottom: 50,
  },
  header: {
    fontSize: 26,
    fontWeight: "600",
    color: '#FFF',
  },
  imageRasp:{
    alignSelf: 'center',
    height: 438,
    marginTop: 32,
    resizeMode: 'contain',
  },
  photoHeader:{
    paddingTop: 10,
  },
  itemContainer:{
      alignItems: 'center',
      marginBottom: 20
  },
  item: {
    marginBottom: 10,
    marginTop: 25,
    fontSize: 26,
      fontWeight: "600"
  },
  box: {
    paddingTop: 40,
    paddingLeft: 14,
    fontSize: 27,
    fontWeight: "600",
  },
  boxes: {
    paddingLeft: 14,
    fontSize: 18,
    fontWeight: "300",
  },
  boxed: {
    paddingLeft: 14,
    fontSize: 27,
    fontWeight: "600",
  },
  weekly:{
    alignSelf: 'center',
    paddingTop: 120,
    fontSize: 38,
    fontWeight: "700",
  },
  week:{
    alignSelf: 'center',
    fontSize: 20,
  },
  getStartedProducts: {
      paddingTop: 10,
  },
  hello: {
    paddingLeft: 20,
    paddingBottom: 10,
    marginTop: 25,
    fontSize: 24,
    fontWeight: "600",
  },
  buttons: {
    marginLeft: 60,
    marginRight: 60,
    marginTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 15,
    backgroundColor:'#eb7171'
  },
  button: {
    margin: 30,
    paddingLeft: 110,
    paddingRight: 110,
    paddingTop: 14,
    paddingBottom: 14,
    borderRadius: 15,
    backgroundColor:'#eb7171'
  },
});
