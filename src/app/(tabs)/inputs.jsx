
import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet
} from 'react-native';

export default function InputScreen() {

  // Ordinary constant
  const shopName = 'Coffee House';

  // State variables
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cups, setCups] = useState('');
  const [password, setPassword] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <ScrollView style={styles.screen}>

      <Text style={styles.title}>
        {shopName}
      </Text>

      <Text style={styles.subtitle}>
        Customer Information
      </Text>


      {/* 1. Full Name */}

      <Text style={styles.label}>Full Name</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        autoCapitalize="words"
        value={name}
        onChangeText={setName}
      />


      {/* 2. Email */}

      <Text style={styles.label}>Email</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />


      {/* 3. Phone Number */}

      <Text style={styles.label}>Phone Number</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter phone number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />


      {/* 4. Numeric Input */}

      <Text style={styles.label}>Number of Cups</Text>

      <TextInput
        style={styles.input}
        placeholder="How many cups?"
        keyboardType="numeric"
        value={cups}
        onChangeText={setCups}
      />


      {/* 5. Password */}

      <Text style={styles.label}>Password</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />


      {/* 6. Multiline */}

      <Text style={styles.label}>Order Notes</Text>

      <TextInput
        style={[styles.input, styles.notes]}
        placeholder="Any special requests?"
        multiline={true}
        numberOfLines={4}
        textAlignVertical="top"
        value={notes}
        onChangeText={setNotes}
      />


      {/* State values displayed in the UI */}

      <View style={styles.summary}>

        <Text style={styles.summaryTitle}>
          Live Input Summary
        </Text>

        <Text>Name: {name}</Text>

        <Text>Email: {email}</Text>

        <Text>Phone: {phone}</Text>

        <Text>Cups: {cups}</Text>

        <Text>Notes: {notes}</Text>

        <Text>
          Password: {password ? 'Entered' : 'Empty'}
        </Text>

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
    color: '#6F4E37'
  },

  subtitle: {
    fontSize: 16,
    marginBottom: 20
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },

  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#D8B08C',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15
  },

  notes: {
    height: 100
  },

  summary: {
    backgroundColor: '#E6C7A8',
    padding: 15,
    borderRadius: 10,
    marginBottom: 40,
    gap: 6
  },

  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  }

});
