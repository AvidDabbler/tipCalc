import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Hello extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.hello}>IT WORKS!!!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    hello: {
        backgroundColor: '#00ff00',
        fontSize: 42
    }
})