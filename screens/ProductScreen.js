import React, { Component } from 'react';
import { ScrollView, Image, FlatList, Text, Button, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux'
import { fetchProducts } from "../src/actions/index";
import { List, ListItem, Tile, Avatar} from "react-native-elements";

class ProductScreen extends React.Component {
  static navigationOptions = {
      title: 'Product',
      headerStyle: {
      backgroundColor: '#d46363',
      borderBottomWidth: 0,
    },
      headerTintColor: 'white',
  };

  render() {
    return (
       <ScrollView style={styles.main}>
           {this.props.products.filter(product => {
            return product.id === this.props.navigation.getParam('produ', 'NO-ID')}).map((product, i) => (
              <View style={styles.container} key={i}>
                  <TextInput style={{color: 'black', fontSize: 30, fontWeight: 'bold', marginBottom: 10, borderBottomWidth:1}}>{product.name} </TextInput>
                  <Text style={{marginBottom: 15}}>{product.kind} </Text>
                  <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold', marginBottom: 15}}>{product.tagline} </Text>
                  <Text>{product.description}</Text>
                  <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold', marginTop: 15, marginBottom:5}}>Ingredients</Text>
                  <Text style={{marginBottom: 20}}>{product.ingredients}</Text>
                  <Tile
                  imageSrc={{uri:product.image_url}}
                  containerStyle={{alignSelf: 'center', marginTop: 12, paddingLeft: 20, paddingRight: 20}} >
                  </Tile>
              </View>))}
       </ScrollView>
     );
  }
}

const mapStateToProps = state => ({
    products: state.items
  });

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white'
  },
  container: {
    marginTop: 40,
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: "600",
    color: '#FFF',
  },
  loader: {
      color: '#d46363',
      alignSelf: 'center',
      marginTop: 20,
      fontSize: 22
  }
});

export default connect(mapStateToProps)(ProductScreen);
