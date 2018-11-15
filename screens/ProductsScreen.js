import React, { Component } from 'react';
import { ScrollView, Image,FlatList, Text, Button, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux'
import { fetchProducts } from "../src/actions/index";
import { List, ListItem, Tile, Avatar} from "react-native-elements";

class ProductsScreen extends React.Component {

  state = {
    selectedProduct: []
  }

  componentDidMount() {
   this.props.dispatch(fetchProducts())
  }

 static navigationOptions = {
      title: 'Products',
      headerStyle: {
      backgroundColor: '#d46363',
      borderBottomWidth: 0,
    },
      headerTintColor: 'white',
  };

  render() {
    if (this.props.loading) {
      return <View> <Text style={styles.loader}>Prepping... Juicing... Pouring...</Text> </View>
    }
    return (
      <ScrollView style={styles.main}>
        {
          this.props.products.map((image, i) => (
            <View key={i}>
            <Tile
              imageSrc={{uri:image.image_url}}
              title={image.name}
              contentContainerStyle={{ height: 80,  alignSelf:'center', marginBottom:10 }}
              containerStyle={{height:350, width:360, alignSelf: 'center', marginTop: 12}}
              >
              <View
              style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}
              >
              <TouchableOpacity
                onPress={() =>  this.props.navigation.navigate('Product', {
                  produ: image.id
                })}>
                <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}> Details </Text>
              </TouchableOpacity>
              </View>
              </Tile>
            </View>
          ))
        }
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
    products: state.items,
    loading: state.loading
  });

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
  loader: {
      color: '#d46363',
      alignSelf: 'center',
      marginTop: 20,
      fontSize: 22
  }
});

export default connect(mapStateToProps)(ProductsScreen);
