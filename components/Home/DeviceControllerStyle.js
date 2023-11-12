import { StyleSheet, Dimensions } from "react-native";
const {  height } = Dimensions.get("window");
import { Colors } from "../../constants/colors";


export const styles = StyleSheet.create({
  deviceContainer: {
    backgroundColor: "white",
    width: "48%",
    borderRadius: 12,
    padding: 8,
    elevation: 4, // add shadow - android only
    shadowColor: "black", // add shadow - ios only
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    marginBottom: height * 0.01,
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  deviceNameText: {
    fontFamily: "be-vietnam",
    color: "rgba(30, 41, 51, 1)",
    fontSize: 18,
  },
  toggleText: {
    color: "#798794",
  },
  sensorValueContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  sensorValueText: {
    color: "#798794",
  },
  sensorValueUpdateButton: {
    color: Colors.bluePrimary,
  },
});
