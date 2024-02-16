import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "./index.css";

import React, { Component } from "react";
import { AutoComplete } from "primereact/autocomplete";

export class AutoCompleteEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNames: props.value,

      names: ["Bam", "Anna", "Bob", "Sally", "Jenny", "John"],
      suggestions: [],
      stopEditing: false
    };

    this.searchNames = this.searchNames.bind(this);
    this.autoCompleteRef = React.createRef();
  }

  afterGuiAttached = () => {
    this.autoCompleteRef.current.inputEl.focus();
    this.autoCompleteRef.current.inputEl.select();
  };

  componentDidUpdate() {
    if (this.state.stopEditing) {
      this.props.eGridCell.focus();
      this.props.api.stopEditing();
    }
  }

  isPopup = () => true; // using PrimeReact appendTo instead

  getValue = () => {
    console.log(this.state.selectedNames);

    return this.state.selectedName;
  };

  searchNames = event => {
    let suggestions = this.state.names.filter(name =>
      name.toLocaleLowerCase().includes(event.query.toLocaleLowerCase())
    );
    // this.setState({ suggestions });
  };

  render() {
    return (
      <AutoComplete
        // see index.html
        multiple
        value={this.state.selectedNames}
        suggestions={this.state.suggestions}
        completeMethod={this.searchNames}
        appendTo={document.querySelector("#outside-container")}
        ref={this.autoCompleteRef}
        // onChange={e => {

        //   this.setState({ selectedNames: e.value });
        // }}
        onSelect={() => {
          // this.setState({ stopEditing: true });
        }}
        onKeyPress={e => {
          // if (e.key === "Enter") this.setState({ stopEditing: true });
        }}
      />
    );
  }
}
