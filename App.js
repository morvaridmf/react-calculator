import { StatusBar } from 'expo-status-bar';
import { useState } from "react"
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

  const [calculationText, setCalculationText] = useState("")
  const [resultText, setResultText] = useState("")

  const handleButtons = (text) => {
    console.log(text)
    if (text == "=") {
      return finalCal();
    }
    setCalculationText(calculationText + text)
  }

  const handleOperation = (text) => {
    const operations = ["DEL", "AC", "-", "+", "/", "*"]
    console.log(text)
    if (text == "AC") {
      setCalculationText("")
      setResultText("")
      return;
    }
    if (text == "DEL") {
      return setCalculationText(calculationText.toString().substring(0, calculationText.length - 1))
    }
    if (operations.includes(calculationText.toString().split("").pop())) return;
    setCalculationText(calculationText + text)
  }

  const finalCal = () => {
    setResultText(eval(calculationText))
  }

  return (
    <View style={styles.container}>

      <View style={styles.top}>
        <Text style={styles.topText}>{resultText}</Text>
      </View>
      <View style={styles.calculation}>
        <Text style={styles.calText}>{calculationText}</Text>

      </View>
      <View style={styles.buttons}>
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
        <View style={styles.operations}>

          <View style={styles.column}>
            <TouchableOpacity onPress={() => handleOperation("DEL")}>
              <Text style={styles.operationText}>DEL</Text>
            </TouchableOpacity>
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

        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

  top: {
    flex: 2,
    backgroundColor: "#9b9b9b",
    justifyContent: "flex-end",
    alignItems: "flex-end"

  },
  calculation: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "flex-end",
    alignItems: "flex-end"

  },
  buttons: {
    flex: 6,
    flexDirection: "row"
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
    // paddingVertical: 35,
    // paddingHorizontal: 45,

    // backgroundColor: "#414141"

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
