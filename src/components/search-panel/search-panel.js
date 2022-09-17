import { Component } from 'react';

import '../search-panel/style.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }



   render() {
    return (
        <input 
            type="text"
            className="form-control search-input"
            placeholder="Найти сотрудника"
            value={this.state.term}
            onChange={this.onUpdateSearch}
        />
    );
   }
}

export default SearchPanel;