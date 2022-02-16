import {Link} from "react-router-dom"

const Toolbar = ({getCart}) => {

    return (
        <div className="toolbar">
            <Link to="/create">Create Product</Link>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart ({getCart.length})</Link>
        </div>
    );
};

export default Toolbar;