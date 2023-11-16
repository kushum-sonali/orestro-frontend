import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux';
import { useAuth } from './Authcontext';
import { removeFromCart } from '../store/CartSlice';
import Menu from '@mui/material/Menu';
import { Table } from '@mui/material';
import { logout } from '../store/UserSlice'
import { Button } from '@mui/material';
function NavBar() {
  const [decoded, setDecoded] = useState({});
  const { state } = useAuth();
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);
  const cart = useSelector((state) => state.cart);
  const {user} = useSelector((state) => state.user);
  console.log(user)
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout(null));
    toast.success('LOGOUT SUCCESS')
    navigate('/login');
  };
  useEffect(() => {
    if (user){
      var decode = jwt_decode(user.token);
      setDecoded(decode);
      console.log(decode);
    }
  }, [user]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    // toast.success('Checkout Success') 
    setAnchorEl(null);
  };
  const dlt = (id) => {
    console.log('clicked')
    dispatch(removeFromCart(id));
  }

  const total = () => {
    let price = 0;
    cart.map((ele) => {
      price += ele.price * ele.quantity;
    })
    return price;
  }
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));


  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top  text-color-white">
          <div className="container-fluid text-white   " >
            <a className="navbar-brand text-white " href="#"><div className='color-yb circle center-txt'>OMR</div></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse nav-div" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto h5 nav-ul" >

                
                {!user ? (
                  <>
                    <li className="nav-item">
                      <Link to={'/signup'}><span className="nav-link active text-white" aria-current="page">Signup</span></Link>
                    </li>
                    <li className="nav-item">
                      <Link to={'/login'}><span className="nav-link active text-white" aria-current="page">Login</span></Link>
                    </li>
                  </>
                ) : (
                  <>
                  <li className="nav-item">
                  <Link to={'/homepage'}><span className="nav-link active text-white" aria-current="page">Home</span></Link>
                </li>
                    <li className="nav-item">
                      <Link to={'/about'}><span className="nav-link active text-white" aria-current="page">About</span></Link>
                    </li>
                    <li className="nav-item">
                      <Link to={'/contact'}><span className="nav-link active text-white" aria-current="page">Contact</span></Link>
                    </li>
                    <li className="nav-item">
                      <Link to={'/menu'}><span className="nav-link active text-white" aria-current="page">Menu</span></Link>
                    </li>

                    <li className="nav-item">
                      <Link to={'/menu/cart'} ><span className="nav-link active text-white" aria-current="page" >
                     
               

                    <IconButton aria-label="cart">
                      <Badge badgeContent={cart.length} color="secondary"
                        id="basic-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
                        >
                        <ShoppingCartIcon style={{ color: "white",fontSize:30}} onClick={handleClick} />

    </Badge>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}


                        MenuListProps={{
                          'aria-labelledby': 'basic-button',
                        }}
                      >
                        {
                          cart.length > 0 ?
                            <div className='card_details' style={{ width: "24rem", padding: 10, position: "relative" }}>
                              <Table>
                                <thead>
                                  <tr>
                                    <th>Photo</th>
                                    <th>Resturent</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {
                                    cart.map((e) => {
                                      return (
                                        <>
                                          <tr>
                                            <td>

                                              <NavLink to={`/cart/${e.id}`} onClick={handleClose}>  <img src={e.imgdata} alt="" style={{ width: "5rem", height: "5rem" }} /> </NavLink>
                                            </td>
                                            <td>
                                              <p>{e.rname}</p>
                                              <p> quatity : {e.quantity}</p>
                                              <p> price :₹{e.price * e.quantity}</p>
                                              <p > <i className="fas fa-trash smalltrash" style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={(event) => { event.preventDefault(); dlt(e.id) }}></i></p>


                                            </td>
                                            <td style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={(event) => { event.preventDefault(); dlt(e.id) }}>
                                              <i className="fas fa-trash"></i>
                                            </td>
                                          </tr>
                                        </>
                                      );
                                    })
                                  }
                                  <tr>
                                    <td colSpan="3">
                                      <div className="d-flex justify-content-between align-items-center">
                                        <p>Total Price : ₹{total()}</p>
                                        <button className="btn btn-primary" onClick={handleClose}>Checkout</button>
                                      </div>
                                    </td>
                                  </tr>

                                </tbody>
                              </Table>
                            </div> :

                            <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative" }}>
                              <i className='fas fa-close smallclose'
                                onClick={handleClose}
                                style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}></i>
                              <p style={{ fontSize: 28 }}>Your carts is empty</p>
                              <img src="https://img.freepik.com/free-vector/shopping-cart-realistic_1284-6011.jpg?size=338&ext=jpg&ga=GA1.1.2014527337.1676605018&semt=ais" alt="" className='emptycart_img' style={{ width: "5rem", padding: 10 }} />
                            </div>
                        }


                      </Menu>





                    </IconButton>
</span></Link>
                    </li>

                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {decoded?.name}
                      </a>
                      <ul className="dropdown-menu ">
                        <li><button className="btn btn-danger logout2" onClick={
                          (e) => {
                            e.preventDefault();
                            handleLogout();
                          }
                        }>Logout</button></li>
                        <li><hr className="dropdown-divider" /></li>

                      </ul>
                    </li>
                  </>
                )}

              </ul>
            </div>
          </div>
        </nav>
    </>
  )
}

export default NavBar;
