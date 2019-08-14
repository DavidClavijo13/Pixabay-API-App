import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";

import ImageTiles from "../imagetiles/ImageTiles";

class Search extends Component {
  state = {
    searchText: "",
    amount: 15,
    apiUrl: "https://pixabay.com/api",
    ApiKey: "13304504-b05d2b31e11fb9848ac6b7064",
    searchResults: []
  };

  onAmountChange = (e, index, value) => {
    this.setState({ amount: e.target.value });
    console.log(this.state.amount);
  };

  onTextChange = event => {
    this.setState({ [event.target.name]: event.target.value }, () => {
      axios
        .get(
          `${this.state.apiUrl}/?key=${this.state.ApiKey}&q=${
            this.state.searchText
          }&image_type=photo&per_page=${this.state.amount}`
        )
        .then(res => this.setState({ searchResults: res.data.hits }))
        .catch(err => console.log(err));
    });
  };

  render() {
    console.log(this.state.searchResults);
    return (
      <div>
        <TextField
          name="searchText"
          value={this.state.searchText}
          label="Search For Images"
          fullWidth={true}
          onChange={this.onTextChange}
        />
        <br />
        <Select
          name="amount"
          label="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
        <br />
        {this.state.searchResults > 0 ? (
          <ImageTiles images={this.state.searchResults} />
        ) : null}
      </div>
    );
  }
}

export default Search;
