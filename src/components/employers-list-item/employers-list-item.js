
import './employers-list-item.scss';



const  EmployersListItem = (props) =>  {
    
        const {name,salary, onDelete, onToggleProp,increase,star} = props;

        let className = `list-group-item d-flex justify-content-between`;

        if(increase){
            className += ` increase`;
        }

        if(star){
            className += ` like`
        }


        return(
            <li className={className}>
                <span onClick ={onToggleProp} data-toggle ="star"  className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button 
                        onClick ={onToggleProp}    
                        data-toggle ="increase"               
                        type="button"
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick = {onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
        </li>
        )
    }

export default EmployersListItem;