import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "5%",
    backgroundColor: "#f0f4f8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#003f5c",
    marginBottom: "5%",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginBottom: "2%",
    marginLeft: "1%",
    color: "#2f4f4f",
  },
  input: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: "5%",
    marginBottom: "5%",
    color: "#4682b4",
    borderColor: "#ccc",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: "5%",
    marginBottom: "2%",
    borderColor: "#ccc",
  },
  passwordInput: {
    flex: 1,
    color: "#4682b4",
  },
  passwordIconContainer: {
    height: "100%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  forgotPassword: {
    alignSelf: "flex-start",
    alignItems: "flex-start",
    marginBottom: "5%",
    marginLeft: "1%",
  },
  forgotPasswordText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#4682b4",
  },
  signupButtonText: {
    fontSize: 16,
    color: "#003f5c",
  },
  loginButton: {
    height: 50,
    width: "100%",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5%",
    backgroundColor: "#003f5c",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
