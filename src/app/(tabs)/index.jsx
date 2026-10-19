
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native';

export default function FlexScreen() {

  return (
    <ScrollView style={styles.screen}>

      <Text style={styles.title}>
        Coffee Flexbox
      </Text>

      {/* 1. Horizontal Direction */}

      <Text style={styles.heading}>
        1. flexDirection: row
      </Text>

      <View style={styles.row}>
        <Text style={styles.box}>Espresso</Text>
        <Text style={styles.box}>Latte</Text>
        <Text style={styles.box}>Mocha</Text>
      </View>


      {/* 2. Vertical Direction */}

      <Text style={styles.heading}>
        2. flexDirection: column
      </Text>

      <View style={styles.column}>
        <Text style={styles.box}>Espresso</Text>
        <Text style={styles.box}>Latte</Text>
        <Text style={styles.box}>Mocha</Text>
      </View>


      {/* 3. justifyContent */}

      <Text style={styles.heading}>
        3. justifyContent: space-between
      </Text>

      <View style={styles.space}>
        <Text style={styles.box}>A</Text>
        <Text style={styles.box}>B</Text>
        <Text style={styles.box}>C</Text>
      </View>


      {/* 4. alignItems */}

      <Text style={styles.heading}>
        4. alignItems: center
      </Text>

      <View style={styles.align}>
        <Text style={styles.box}>A</Text>
        <Text style={styles.box}>B</Text>
        <Text style={styles.box}>C</Text>
      </View>


      {/* 5. Flex Proportions */}

      <Text style={styles.heading}>
        5. flex: 1 - 2 - 1
      </Text>

      <View style={styles.flexRow}>

        <View style={[styles.flexBox, { flex: 1 }]}>
          <Text>1</Text>
        </View>

        <View style={[styles.flexBox, { flex: 2 }]}>
          <Text>2</Text>
        </View>

        <View style={[styles.flexBox, { flex: 1 }]}>
          <Text>1</Text>
        </View>

      </View>


      {/* 6. Flex Wrap */}

      <Text style={styles.heading}>
        6. flexWrap: wrap
      </Text>

      <View style={styles.wrap}>
        <Text style={styles.box}>Hot Coffee</Text>
        <Text style={styles.box}>Cold Coffee</Text>
        <Text style={styles.box}>Tea</Text>
        <Text style={styles.box}>Desserts</Text>
        <Text style={styles.box}>Special Drinks</Text>
      </View>

    </ScrollView>
  );
}


// Styles
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
    marginBottom: 15
  },

  heading: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 18,
    marginBottom: 8
  },

  box: {
    backgroundColor: '#E6C7A8',
    padding: 12,
    borderRadius: 6
  },

  // Horizontal layout
  row: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    gap: 8
  },

  // Vertical layout
  column: {
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 10,
    gap: 8
  },

  // Main axis distribution
  space: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 10
  },

  // Cross axis alignment
  align: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    backgroundColor: 'white',
    padding: 10,
    gap: 10
  },

  // Relative space allocation
  flexRow: {
    flexDirection: 'row',
    height: 60,
    gap: 5
  },

  flexBox: {
    backgroundColor: '#CBA47B',
    justifyContent: 'center',
    alignItems: 'center'
  },

  // Responsive wrapping
  wrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    padding: 10,
    gap: 8,
    marginBottom: 40
  }

});
