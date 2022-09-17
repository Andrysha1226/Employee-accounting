import { Component } from 'react';

import '../app/style.css';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Сергей С.', salary: 900, increase: true, star: false, id: 1},
                {name: 'Александр Т.', salary: 1500, increase: false, star: true, id: 2},
                {name: 'Иван Д.', salary: 1700, increase: false, star: true, id: 3},
                {name: 'Андрей Ю.', salary: 2200, increase: false, star: false, id: 4},
                {name: 'Артём А.', salary: 600, increase: true, star: false, id: 5}
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 6
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItemEmployees = (name, salary) => {
        if (name && salary) {
        const newItem = {
            name,
            salary,
            star: false,
            increase: false,
            id: this.maxId++
        }
        
        this.setState(({data}) => {
            const newArr = [...data, newItem]
                return {
                    data: newArr
                }
        })
      }
    }

    onToggleIncrease = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item;
            })
        }))
    }

    onToggleStar = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, star: !item.star}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch (filter) {
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



    render() {
        const {data, term, filter} = this.state;
        const getEmployees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                 <AppInfo getEmployees={getEmployees} increased={increased}/>
                     <div className="search-panel">
                         <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                         <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                     </div>
                 <EmployeesList 
                  data={visibleData}
                  onDelete={this.deleteItem}
                  onToggleIncrease={this.onToggleIncrease}
                  onToggleStar={this.onToggleStar}/>
                 <EmployeesAddForm onAdd={this.addItemEmployees}/>
            </div> 
         );
    }
}

export default App;