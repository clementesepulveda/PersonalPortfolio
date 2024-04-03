import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h1>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
    )
}