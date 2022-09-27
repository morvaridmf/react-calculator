import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


function Numbers({ handleButtons }) {
    return (
        <View style={styles.numbers}>
            <View style={styles.row}>
                <TouchableOpacity onPress={() => handleButtons("1")}>
                    <Text style={styles.numText}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleButtons("2")}>
                    <Text style={styles.numText}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleButtons("3")}>
                    <Text style={styles.numText}>3</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity onPress={() => handleButtons("4")}>
                    <Text style={styles.numText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleButtons("5")}>
                    <Text style={styles.numText}>5</Text>
                </TouchableOpacity >
                <TouchableOpacity onPress={() => handleButtons("6")}>
                    <Text style={styles.numText}>6</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity onPress={() => handleButtons("7")}>
                    <Text style={styles.numText}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleButtons("8")}>
                    <Text style={styles.numText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleButtons("9")}>
                    <Text style={styles.numText}>9</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity onPress={() => handleButtons(".")}>
                    <Text style={styles.numText}>.</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleButtons("0")}>
                    <Text style={styles.numText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleButtons("=")}>
                    <Text style={styles.numText}>=</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Numbers

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    numbers: {
        flex: 3,
        backgroundColor: "#1B1B1B",
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
    row: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",

    },
    numText: {
        fontSize: 35,
        color: "white",


    }

});