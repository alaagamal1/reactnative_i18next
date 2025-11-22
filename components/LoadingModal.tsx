import React from 'react';
import { ActivityIndicator, Modal, StatusBar, StyleSheet, Text, View } from 'react-native';

interface Props {
  visible: boolean;
}

const LanguageRestartModal = ({ visible }: Props) => {
  return (
    <Modal
      visible={visible}
      transparent={false}
      animationType="fade"
      statusBarTranslucent={true}
    >
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="black" />
        
        <ActivityIndicator size="large" color="#ffffff" style={styles.spinner} />
        
        <Text style={styles.text}>
          New language is loading...
        </Text>
        
        <Text style={styles.subText}>
          جاري تغيير اللغة...
        </Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Full black background
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  text: {
    marginTop: 20,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subText: {
    marginTop: 10,
    color: '#cccccc', // Slightly gray
    fontSize: 16,
  },
  spinner: {
    transform: [{ scale: 1.5 }] // Makes the spinner bigger
  }
});

export default LanguageRestartModal;