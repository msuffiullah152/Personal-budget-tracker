import { Link } from "react-router-dom";
import './Navbar.css';
import Home from "./Home";
const Navbar = ()=>{
    return(
        <nav>
            <ul>
                <li>
                <Link to = "/" className="Transactions">
                        Home
                </Link>
                <Link to = "TransactionList" className="Transactions">
                        Transactions
                </Link>

                </li>
            </ul>
        </nav>


    );
}
export default Navbar;