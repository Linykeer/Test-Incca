import { StyleSheet } from "react-native";

export default StyleSheet.create({
  logo: {
    height: 100,
    width: "80%",
    marginTop: 100,
    resizeMode: "contain",
  },
  forgetPassword: {
    color: "#fff",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    marginVertical: 10,
  },
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputBox: {
    width: 300,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: "#FF4500",
    backgroundColor: "#eeeeee",
    paddingHorizontal: 16,
    marginVertical: 10,
  },
  access: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20,
  },
  button: {
    borderRadius: 4,
    backgroundColor: "#FF4500",
  },
  button2: {
    borderRadius: 4,
    backgroundColor: "#FF4500",
    opacity: 0.9,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    width: 300,
    marginTop: 10,
  },
  fielContainer: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
  },
  footerContainer: {
    width: "100%",
    padding: 18,
    alignItems: "center",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
});
