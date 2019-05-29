import React, { Component } from "react";
import { StyleSheet, Text, View, Image, AppRegistry } from "react-native";

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };
    setInterval(
      () =>
        this.setState(previousState => ({
          isShowingText: !previousState.isShowingText
        })),
      2000
    );
  }

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <View style={{ alignItems: "center" }}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

export default class App extends Component {
  render() {
    let pic = {
      uri:
        "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=809&q=80"
    };

    return (
      <View style={styles.container}>
        <Image source={pic} style={styles.image} />
        <Text style={styles.item}> Hello World!</Text>
        <Greeting name="Voke" />
        <Greeting name="Keme" />
        <Greeting name="Jeff" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  item: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  image: {
    width: 193,
    height: 110
  }
});
