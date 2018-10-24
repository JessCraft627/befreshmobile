import React, { Component } from 'react';
import { ScrollView, Image, Text, Button, View, ImageBackground,  StyleSheet, TouchableOpacity, TextInput } from 'react-native';


export default class LoggedScreen extends React.Component {

  static navigationOptions = {
  headerStyle: {
    backgroundColor: '#d46363',
    borderBottomWidth: 0,
  },
   headerTintColor: 'white',
};


  render() {
    console.log(this.props.navigation.getParam('subscriber'))
    const { navigation } = this.props;
    const subscriber = navigation.getParam('subscriber', 'NO-ID');

    return (
      <ScrollView style={styles.main}>
        <View  style={styles.container}>
          <Text style={styles.header}>BeFresh.</Text>
        </View>
        <Text style={styles.hello}>Hi, {subscriber[0].name}</Text>

          <ImageBackground source={require('../assets/images/b.jpg')} style={{width: 335, height: 441, alignSelf: 'center', marginTop:15}}>
            <Text style={styles.box}> Your next box  </Text>
            <Text style={styles.boxes}> Arriving November 1st  </Text>
          </ImageBackground>

          <ImageBackground source={require('../assets/images/s.jpg')} style={{width: 335, height: 441, alignSelf: 'center', marginTop:15, marginBottom:30}}>
            <Text style={styles.box}>Ready to try </Text>
            <Text style={styles.boxed}>something new? </Text>
              <TouchableOpacity
             style={styles.getStartedProducts}
             onPress={() => this.props.navigation.navigate('Products')}
             >
             <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold', paddingTop: 280, paddingLeft: 14}}> See all Products </Text>
               </TouchableOpacity>
          </ImageBackground>
          <View style={styles.itemContainer}>
            <View style={styles.itemContainers}>
                <Text style={styles.item}>Your weekly plan</Text>
            </View>
            <View style={styles.itemContainers}>
                <Text style={styles.item}>Account Details</Text>
                <Text style={styles.details}>Name: {subscriber[0].name}</Text>
                <Text style={styles.details}>Email: {subscriber[0].email}</Text>
            </View>
            <View style={styles.itemContainers}>
                <Text style={styles.item}>Order History</Text>
            </View>
          </View>
          <TouchableOpacity

         style={styles.button}
         onPress={() => this.props.navigation.navigate('Logged', {
            subscriber: this.dataToDisplay()
         })}
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
  itemContainers:{
      paddingLeft:10,
      paddingRight: 10,
  },
  item: {
    marginBottom: 10,
    marginTop: 25,
    fontSize: 20,
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
  getStartedProducts: {
      paddingTop: 10,
  },
  hello: {
    paddingLeft: 20,
    paddingBottom: 10,
    fontSize: 24,
    fontWeight: "600",
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
