
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native';

export default function ScrollScreen() {

  return (
    <ScrollView style={styles.screen}>

      <Text style={styles.title}>
        Coffee ScrollView
      </Text>


      {/* 1. Horizontal ScrollView */}

      <Text style={styles.heading}>
        Horizontal ScrollView
      </Text>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={true}
      >
        <Text style={styles.category}>Espresso</Text>
        <Text style={styles.category}>Latte</Text>
        <Text style={styles.category}>Cappuccino</Text>
        <Text style={styles.category}>Mocha</Text>
        <Text style={styles.category}>Americano</Text>
      </ScrollView>


      {/* 2. Vertical ScrollView */}

      <Text style={styles.heading}>
        Vertical ScrollView
      </Text>

      <Text>
        Scroll down to see all coffee drinks.
      </Text>

      <View style={styles.card}>
        <Text style={styles.coffeeName}>Espresso</Text>
        <Text>Strong black coffee</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.coffeeName}>Latte</Text>
        <Text>Coffee with steamed milk</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.coffeeName}>Cappuccino</Text>
        <Text>Coffee with milk foam</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.coffeeName}>Mocha</Text>
        <Text>Coffee with chocolate</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.coffeeName}>Americano</Text>
        <Text>Espresso with hot water</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.coffeeName}>Macchiato</Text>
        <Text>Espresso with a little milk</Text>
      </View>

    </ScrollView>
  );
}


const styles = StyleSheet.create({

  screen: {
    flex: 1,
    backgroundColor: '#FFF8F0',
    padding: 15
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6F4E37',
    marginBottom: 20
  },

  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 15
  },

  category: {
    backgroundColor: '#E6C7A8',
    padding: 20,
    marginRight: 10,
    borderRadius: 10
  },

  card: {
    backgroundColor: 'white',
    padding: 25,
    marginTop: 12,
    borderRadius: 10,
    minHeight: 100
  },

  coffeeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6F4E37',
    marginBottom: 5
  }

});
