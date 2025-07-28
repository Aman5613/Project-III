import { useDispatch, useSelector } from 'react-redux';
import { asyncLogout } from '../Store/userAction';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Profile = () => {

    const loggedInUser = useSelector(state => state.user.user);

    const user = JSON.parse(localStorage.getItem("user"));

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        dispatch(asyncLogout());
        navigate("/login");
    }

    return (
        <div>
            {user ?
                <div>
                    <h1>Welcome, {user.name}</h1>
                    <button onClick={logoutHandler} className='px-4 py-1 bg-blue-600 rounded cursor-pointer'>Logout</button>
                </div>
                :
                <div>
                    <h1>Please log in</h1>
                    <button onClick={() => navigate("/login")} className='px-4 py-1 bg-blue-600 rounded cursor-pointer'>Login</button>
                </div>
            }
        </div>
    )
}

export default Profile
