import React from "react";
import NavBar from "./NavBar/NavBar";
import Search from "./Search/Search";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <NavBar />
          <Search />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
