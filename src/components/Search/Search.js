import React from "react";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import axios from "axios";
import ImageResults from "../ImageResults/Imageresults";

class Search extends React.Component {
  state = {
    searchText: "",
    amount: 15,
    apiUrl: "https://pixabay.com/api",
    apiKey: "12229910-f242d279c47a4d45d1de9b391",
    images: []
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value
      },
      () => {
        if (value === "") {
          this.setState({
            images: []
          });
        } else {
          axios
            .get(
              `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
                this.state.searchText
              }&image_type=photo&per_page=${this.state.amount}&safesearch=true`
            )
            .then(res =>
              this.setState({
                images: res.data.hits
              })
            )
            .catch(err => console.log(err));
        }
      }
    );
  };

  onAmountChange = (e, index, value) => {
    this.setState({
      amount: value
    });
  };

  render() {
    return (
      <div className="search">
        <TextField
          name="searchText"
          value={this.state.searchText}
          onChange={this.handleChange}
          hintText="Enter a Keyword..."
          floatingLabelText="Search for Images"
          fullWidth={true}
        />
        <br />
        <SelectField
          name="amount"
          floatingLabelText="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        >
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={20} primaryText="20" />
          <MenuItem value={25} primaryText="25" />
        </SelectField>
        <br />
        {this.state.images.length > 0 ? (
          <ImageResults images={this.state.images} />
        ) : null}
      </div>
    );
  }
}

export default Search;
