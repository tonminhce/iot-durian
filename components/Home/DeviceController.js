import React, { useState } from "react";
import { Text, View, Switch } from "react-native";
import { styles } from "./DeviceControllerStyle";
import { Colors } from "../../constants/colors";

function DeviceController({ deviceName }) {
  const [isOn, setIsOn] = useState(false);
  const sensorValue = 0; // Set sensor value to 0
  const isSensor = ["Moisture", "Temperature", "EC"].includes(deviceName);

  const toggleSwitch = () => {
    setIsOn((prevState) => !prevState);
    // TODO: Send POST request to server
  };

  return (
    <View style={styles.deviceContainer}>
      <Text style={styles.deviceNameText}>{deviceName}</Text>
      {isSensor ? (
        <View style={styles.sensorValueContainer}>
          <Text style={styles.sensorValueText}>{sensorValue}</Text>
        </View>
      ) : (
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleText}>{isOn ? "On" : "Off"}</Text>
          <Switch
            onValueChange={toggleSwitch}
            value={isOn}
            trackColor={{ true: Colors.bluePrimary }}
            thumbColor={isOn ? Colors.blueTemp : "#f4f3f4"}
          />
        </View>
      )}
    </View>
  );
}
export default DeviceController;
