
import EmployeesListItem from "../employees-list-item/employees-list-item";

import '../employees-list/style.css';


const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleStar}) => {

    const elements = data.map(item => {
            const {id, ...itemList} = item;
        return (
        <EmployeesListItem 
         key={id} 
         {...itemList} 
         onDelete={() => onDelete(id)}
         onToggleIncrease={() => onToggleIncrease(id)}
         onToggleStar={() => onToggleStar(id)}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;