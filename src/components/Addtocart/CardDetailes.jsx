import React from "react";
import "./CardDetailes.css";
import { useEffect } from "react";
import Table from "react-bootstrap/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  addToCart,
  removeFromCart,
  removeone,
  addone,
} from "../../store/CartSlice";
const CardDetailes = () => {
  const [data, setData] = useState([]);
  // const[increment,setIncrement]=useState(0);
  // const[decrement,setDecrement]=useState(0);
  console.log(data);
  const { id } = useParams();
  console.log(id);
  const history = useNavigate();

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  console.log(cart);
  const Compare = () => {
    const comparedata = cart.filter((ele) => ele.id == id);

    setData(comparedata);
  };
  // add data
  const add = (ele) => {
    dispatch(addToCart(ele));
  };
  const incrementQuantity = (id) => {
    setData(
      data.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    );
  };

  const decrementQuantity = (id) => {
    setData(
      data.map((item) => {
        if (item.id === id && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
  };
  // delete data
  const dlt = (id) => {
    console.log("clicked");
    dispatch(removeFromCart(id));
    handleClose();
  };

  //remove one
  const remove = (ele) => {
    dispatch(removeone(ele));
  };
  // const add =(e)=>{
  //     dispatch(addone(e));

  //       }

  useEffect(() => {
    Compare();
  }, []);
  const handleClose = () => {
    // toast.success('Checkout Success')
    history("/menu/cart");
  };

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center"> Items Details pages</h2>

        <section className=" mt-3">
          <div className="iteamsdetails  ">
            {data.map((ele) => {
              return (
                <>
                  <div className="items_img ">
                    <img src={ele.imgdata}></img>
                  </div>
                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            <strong>Resturant</strong>: {ele.rmame}
                          </p>
                          <p>
                            <strong>Price</strong>: ₹ {ele.price}{" "}
                          </p>

                          <p>
                            <strong>Dishes</strong>: {ele.address}
                          </p>
                          <p>
                            <strong>Quantity</strong>: {ele.quantity}
                          </p>
                          <p>
                            <strong>Total</strong>: ₹ {ele.price * ele.quantity}
                          </p>

                          <div
                            className="mt-5 d-flex aline-items-center justify-content-between"
                            style={{
                              width: 100,
                              cursor: "pointer",
                              background: "#ddd",
                              color: "#111",
                            }}
                          >
                            <span
                              style={{ fontSize: 24 }}
                              onClick={() => decrementQuantity(ele.id)}
                            >
                              <i className="fas fa-minus"></i>
                            </span>
                            <span style={{ fontSize: 22 }}>{ele.quantity}</span>

                            <span
                              style={{ fontSize: 24 }}
                              onClick={() => incrementQuantity(ele.id)}
                            >
                              <i className="fas fa-plus"></i>
                            </span>
                          </div>
                        </td>
                        <td>
                          <p>
                            <strong>
                              {" "}
                              Rating :{" "}
                              <span
                                style={{
                                  background: "green",
                                  color: "#fff",
                                  padding: "2px 5px",
                                  borderRadius: "5px",
                                }}
                              >
                                {ele.rating} ⋆
                              </span>
                            </strong>
                          </p>
                          <p>
                            <strong>Order Review :</strong>
                            <span>{ele.somedata} </span>
                          </p>
                          <p>
                            <strong>Remove : </strong>
                            <span>
                              <i
                                className="fas fa-trash"
                                onClick={(event) => {
                                  event.preventDefault();
                                  dlt(ele.id);
                                }}
                                style={{
                                  color: "red",
                                  fontSize: 20,
                                  cursor: "pointer",
                                }}
                              ></i>
                            </span>
                          </p>
                          <p>
                            <strong>Checkout : </strong>
                            <span>
                              <i
                                className="fas fa-check"
                                onClick={handleClose}
                                style={{
                                  color: "green",
                                  fontSize: 20,
                                  cursor: "pointer",
                                }}
                              ></i>
                            </span>
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};
export default CardDetailes;
