import styles from "./App.module.scss";
import { Component } from "react";
import NavigationBar from "./components/navigation/NavigationBar";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <NavigationBar />
      </div>
    );
  }
}

export default App;
