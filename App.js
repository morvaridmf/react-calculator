import { StatusBar } from 'expo-status-bar';
import { useState } from "react"
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Numbers from './components/Numbers';
import Operation from './components/Operation';

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
    const operations = ["AC", "-", "+", "/", "*"]
    console.log(text)
    if (text == "AC") {
      setCalculationText("")
      setResultText("")
      return;
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
        <Numbers handleButtons={handleButtons} />
        <View style={styles.operations}>
          <Operation handleOperation={handleOperation} />
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    width: 400,
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
