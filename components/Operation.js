import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function Operation({ handleOperation }) {
    return (
        <View style={styles.column}>

            <TouchableOpacity onPress={() => handleOperation("AC")}>
                <Text style={styles.operationText}>AC</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleOperation("+")}>
                <Text style={styles.operationText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleOperation("-")}>
                <Text style={styles.operationText}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleOperation("*")}>
                <Text style={styles.operationText}>*</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleOperation("/")}>
                <Text style={styles.operationText}>/</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Operation


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    operations: {
        flex: 1,
        backgroundColor: "#C46210"
    },
    topText: {
        color: "white",
        fontSize: 45,
        paddingRight: 20,
        paddingBottom: 20

    },
    calText: {
        color: "white",
        fontSize: 25,
        paddingRight: 20,
        paddingBottom: 10,

    },

    column: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center"
    },
    operationText: {
        color: "white",
        fontSize: 27,

    }
});