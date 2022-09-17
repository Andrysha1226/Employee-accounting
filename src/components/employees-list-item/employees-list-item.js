import '../employees-list-item/style.css';

const EmployeesListItem = (props) => {

    const {name, salary, onDelete, onToggleIncrease, onToggleStar, increase, star} = props;
    let IncreaseClass = 'list-group-item d-flex justify-content-between';

            if (increase) {
                IncreaseClass += ' increase'
            }

            if (star) {
                IncreaseClass += ' like'
            }

            return (
                <li className={IncreaseClass}>
                    <span onClick={onToggleStar} className="list-group-item-label">{name}</span>
                    <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button type="button"
                            className="btn-cookie btn-sm "
                            onClick={onToggleIncrease}>
                            <i className="fas fa-cookie"></i>
                        </button>

                        <button type="button"
                                className="btn-trash btn-sm "
                                onClick={onDelete}>
                            <i className="fas fa-trash"></i>
                        </button>
                        <i className="fas fa-star"></i>
                    </div>
                </li>
            )
        }


export default EmployeesListItem;