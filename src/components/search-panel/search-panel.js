import { Component } from 'react';
import './search-panel.scss'

class SearchPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
    }

    onUppdataSearch = (e) => {
        const term = e.target.value;
        this.setState({term})
        this.props.onUppdataSearch(term)
    } 

    render(){
        return (
            <input type="text" 
                    className="form-control 
                                search-input"
                    placeholder="Найти сотрудника"
                    onChange={this.onUppdataSearch}/>
                    
        )
    }
};

export default SearchPanel;