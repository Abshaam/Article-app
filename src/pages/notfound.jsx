import {Link} from 'react-router-dom'
import '../css/notfound.css'

export default function notfound () {
    return(
        <div className="notfound">
            <h1>Oooops, page not found</h1>
            <div className='notfouund-home'><Link>Home</Link></div>
        </div>
    )
}