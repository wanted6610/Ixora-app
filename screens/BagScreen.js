import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

const BagScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Shop Screen</Text>
            <Button 
                title="Click"
                onPress={() => alert('Clicked!')}
            />
        </View>
    )
};

export default BagScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    },
});