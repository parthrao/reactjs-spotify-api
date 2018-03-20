import React, {Component} from "react";

class SearchForm extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          searchQuery: "",
          orderById: false
        };
      }
    
      onSubmit = e => {
        e.preventDefault();
    
        if (this.state.searchQuery) {
          this.props.onSearch(this.state.searchQuery, this.state.orderById);
        }
      };
    
      toggleNameOrdering = e => {
        this.setState({
          orderById: e.target.checked
        });
      };
    
      onSearchQueryChange = e => {
        this.setState({
          searchQuery: e.target.value
        });
      };
    render(){
        return (
        
            <form  onSubmit={this.onSubmit}>
                <div className="form-row">
                <div className="form-group col-md-3">
                    <label htmlFor="trackName">
                        What Song is on your mind?
                    </label>
                </div>
                <div className="form-group  col-md-6">
                    <input
                    type="text"
                    value={this.state.searchQuery}
                    onChange={this.onSearchQueryChange}
                    className="form-control"
                    id="trackName"
                    aria-describedby="trackHelp"
                    placeholder="Songs..."
                    />
                    <small id="trackHelp" className="form-text text-muted">
                    Everyone has a favorite track; which do you want to search for?
                    </small>
                </div>
                <div className="form-group col-md-3">
                    
    
                    <button type="submit" className="btn btn-primary">
                    Search for Track
                    </button>
                
                 </div>
                 </div>
            </form>

        );
    }
}
export default SearchForm;