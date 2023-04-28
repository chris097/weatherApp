import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

const City = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>city</Text>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default City