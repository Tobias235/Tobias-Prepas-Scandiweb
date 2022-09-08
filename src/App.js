import styles from "./App.module.scss";
import { Component } from "react";
import NavigationBar from "./components/navigation/NavigationBar";
import CategoryContainer from "./container/CategoryContainer/CategoryContainer";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <NavigationBar />
        <CategoryContainer />
      </div>
    );
  }
}

export default App;
