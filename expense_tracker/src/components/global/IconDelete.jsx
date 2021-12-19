import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function IconDelete() {
    return <FontAwesomeIcon icon={faTrashAlt} className='hover:text-primary-teal transition-all cursor-pointer' />;
}

export default IconDelete;