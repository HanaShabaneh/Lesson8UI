
import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native';

export default function ListScreen() {

  // Ordinary JavaScript array
  const coffees = [
    { id: '1', name: 'Espresso', price: 3 },
    { id: '2', name: 'Latte', price: 4 },
    { id: '3', name: 'Cappuccino', price: 4 },
    { id: '4', name: 'Mocha', price: 5 },
    { id: '5', name: 'Americano', price: 3 },
    { id: '6', name: 'Macchiato', price: 4 },
    { id: '7', name: 'Flat White', price: 5 }
  ];

  return (
    <View style={styles.screen}>

      <Text style={styles.title}>
        Coffee FlatList
      </Text>

      <Text style={styles.subtitle}>
        Our Coffee Menu
      </Text>


      <FlatList

        // Data array
        data={coffees}

        // Unique identifier
        keyExtractor={(item) => item.id}

        // How each item is displayed
        renderItem={({ item }) => (

          <View style={styles.card}>

            <Text style={styles.coffeeName}>
              {item.name}
            </Text>

            <Text style={styles.price}>
              ${item.price}
            </Text>

          </View>

        )}

        // Spacing between items
        ItemSeparatorComponent={() => (
          <View style={{ height: 10 }} />
        )}

        // Displayed when the array is empty
        ListEmptyComponent={
          <Text>No coffee available.</Text>
        }

      />

    </View>
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
    color: '#6F4E37'
  },

  subtitle: {
    fontSize: 16,
    marginBottom: 20
  },

  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10
  },

  coffeeName: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  price: {
    fontSize: 18,
    color: '#6F4E37'
  }

});
