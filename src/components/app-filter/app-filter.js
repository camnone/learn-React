import './app-filter.css'
const AppFilter = (props) => {

    const buttonData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'star', label: 'На повышение'},
        {name: 'moreThen1000', label: 'З/П больше 1000$'}
    ];

    const buttons = buttonData.map(({name,label}) => {
        const active = props.filter === name;
        console.log(props.filter);  
        const clazz = active ? 'btn-light' : 'btn-outline-light'
        return(
            <button 
                className= {`btn ${clazz}`}
                key={name}
                onClick = {() => props.onFilterSelect(name)}
                type='button'>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
        {buttons}
        </div>
    )
};


export default AppFilter;