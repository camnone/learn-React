import './app.css'
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';
import { Component } from 'react';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[
                {name: 'John M.', salary: 900,increase: false, star: false, id: 1},
                {name: 'Alex M.', salary: 1500,increase: false, star: false, id: 2},
                {name: 'Masha R.', salary: 3000,increase: false, star: false, id: 3}
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 4
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return{
                data: data.filter( item => item.id !== id)
            }
        })
    }

    addItem = (name,salary) => {
        const newItem = {
            name,
            salary,
            star: false,
            increase: false,
            id: this.maxId++
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return{
                data: newArr

            }
        });
    }

    onToggleProp = (id,prop) => {
        this.setState(({data}) => ({
            data:data.map(item => {
                if(item.id === id){
                    return {
                        ...item,[prop]:!item[prop]
                    }
                }
                return item;
            })
        }))
    }

    searchEmp = (items,term) =>{
        if(term.length === 0){
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUppdataSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) =>{
        switch(filter){
            case 'star':
                return items.filter(item => item.star);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }


    onFilterSelect = (filter) => {
        this.setState({filter});
    }
    
    render(){
        const {data,term,filter} = this.state 
        const visiabilityData = this.filterPost(this.searchEmp(data,term),filter);
        const employees = this.state.data.length;
        const increased  = this.state.data.filter(item => item.increase).length

        return (
            <div className="app">
                <AppInfo
               employees = {employees}
               increased = {increased}/>
    
                <div className="search-panel">
                    <SearchPanel onUppdataSearch = {this.onUppdataSearch}/>
                    <AppFilter onFilterSelect = {this.onFilterSelect} filter = {filter}/>
                </div>
    
    
            <EmployersList
            data = {visiabilityData}
            onDelete = {this.deleteItem}
            onToggleProp = {this.onToggleProp}/>

            <EmployersAddForm
            odAdd = {this.addItem}/></div>
        );
    }
}

export default App;