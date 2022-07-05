import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {
  Button,
  TextInput,
  IconButton,
  Dialog,
  DialogHeader,
  DialogContent,
  Text,
  DialogActions,
  Provider,
} from "@react-native-material/core";

const Welcome = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [dialogVisible, setdialogVisible] = useState(false);

  const validateInput = (email, password) => {
    let valid = false;
    if (email.length > 4 && email.includes("@") && email.includes(".")) {
      //check if the password is longer than four characters
      if (password.length > 4) {
        valid = true;
      } else {
        valid = false;
      }
    } else {
      valid = false;
    }
    if (valid == true) {
      //TODO: Get to the feed screen
    } else {
      setdialogVisible(true);
    }
  };
  return (
    <Provider>
      <View style={styles.container}>
        <Image
          style={styles.imagelogo}
          source={require("../assets/loginlogo.png")}
        />

        <TextInput
          variant="standard"
          label="Email"
          style={styles.loginInput}
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          variant="standard"
          label="Password"
          secureTextEntry={!showPass}
          onChangeText={(password) => setPassword(password)}
          style={styles.loginInput}
          trailing={(props) => (
            <IconButton
              onPress={() => setShowPass(!showPass)}
              icon={(props) => (
                <Icon name={showPass ? "eye" : "eye-off"} {...props} />
              )}
              {...props}
            />
          )}
        />
        <Button
          title="Login"
          onPress={() => {
            validateInput(email, password);
            setdialogVisible(false); //remove this later
            navigation.navigate("Home");
          }}
        />
        <StatusBar style="auto" />
      </View>
      {/*Dialog in case email or password are incorrect*/}
      <Dialog visible={dialogVisible} onDismiss={() => setdialogVisible(false)}>
        <DialogHeader title="Password or email invalid" />
        <DialogContent>
          <Text>
            Make sure your password is at least 69 characters in length and your
            email is correct.
          </Text>
        </DialogContent>
        <DialogActions>
          <Button
            title="OK"
            compact
            variant="text"
            onPress={() => setdialogVisible(false)}
          />
        </DialogActions>
      </Dialog>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imagelogo: {
    marginBottom: 60,
    height: 100,
    width: 150,
  },
  loginInput: {
    marginTop: 25,
    width: "80%",
    alignItems: "center",
    marginBottom: 8,
  },
});

export default Welcome;
