import React, { useState } from 'react';
import './App.css';

function App2() {
    const [state, setState] = useState({
        fname: "",
        lname: "",
        email: "",
        mobile: ""
    });

    const inputEvent = (event) => {
        // console.log(event.target.value);
        // console.log(event.target.name);

        // const value = event.target.value;
        // const name = event.target.name;
        const { value, name } = event.target;

        setState((prevVal) => {
            // console.log(prevVal);
            if (name === "fname") {
                return {
                    fname: value,
                    lname: prevVal.lname,
                    email: prevVal.email,
                    mobile: prevVal.mobile
                }
            } else if (name === "lname") {
                return {
                    fname: prevVal.fname,
                    lname: value,
                    email: prevVal.email,
                    mobile: prevVal.mobile
                }
            } else if (name === "email") {
                return {
                    fname: prevVal.fname,
                    lname: prevVal.lname,
                    email: value,
                    mobile: prevVal.mobile
                }
            } else if (name === "mobile") {
                return {
                    fname: prevVal.fname,
                    lname: prevVal.lname,
                    email: prevVal.email,
                    mobile: value
                }
            }
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        alert("form submitted");
    }
    return (
        <>
            <div className="main">
                <form onSubmit={onSubmit}>
                    <div className="inner">
                        <h2>Hello {state.fname} {state.lname}</h2>
                        <p>{state.email}</p>
                        <p>{state.mobile}</p>
                        <input type="text" placeholder="Enter Your First Name" autoComplete="off" name="fname" onChange={inputEvent} value={state.fname} />
                        <br />
                        <input type="password" placeholder="Enter Your Last Name" autoComplete="off" name="lname" onChange={inputEvent} value={state.lname} />
                        <br />
                        <input type="email" placeholder="Enter Your Email" autoComplete="off" name="email" onChange={inputEvent} value={state.email} />
                        <br />
                        <input type="number" placeholder="Enter Your Mobile" autoComplete="off" name="mobile" onChange={inputEvent} value={state.mobile} />
                        <br />
                        <button type="submit">Click Me</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default App2;
