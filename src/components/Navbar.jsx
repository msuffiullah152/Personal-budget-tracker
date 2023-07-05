import { Link } from "react-router-dom";
const Navbar = ()=>{
    return(
        <nav>
            <ul>
                <li className="Transactions">
                    <Link to = "TransactionList">
                        Transactions
                    </Link>
                </li>
            </ul>
        </nav>


    );
}
export default Navbar;