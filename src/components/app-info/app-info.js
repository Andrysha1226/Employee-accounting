import '../app-info/style.css';

const AppInfo = ({getEmployees, increased}) => {
    return (
        <div className="app-info">
            <h1>Учёт сотрудников в компании "Люди в чёрном"</h1>
            <h2>Общее число сотрудников: {getEmployees} </h2>
            <h2>Премию получат: {increased} </h2>
        </div>
    );
}

export default AppInfo;