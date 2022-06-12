import React from 'react'
import { useState } from "react";
import "./table.css";
const Table = () => {

    //   localStorage.setItem("users", JSON.stringify([
    //   {
    //     name: 'Piyush',
    //     balance: 100,
    //   },
    //   {
    //     name: 'Sourav',
    //     balance: 60,
    //   },
    // ]))

let users = JSON.parse(localStorage.getItem("users"));
let totalAmount = 0;
for (const item of users) {
  totalAmount += Number(item.balance);
}

  const [total, setTotal] = useState(0);
  const [click, setClick] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("users")));
  const [newUser, updateUser] = useState({ name: "", balance: 0 });

  return (
    <div className="table">

      <button
        onClick={() => {
          setClick((click) => !click);
          if (click) {
            setUser((user) => (user = [...user, newUser]));
            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));
          }
        }}
      >
        +
      </button>
      <table>
        <thead>
          <th>Name</th>
          <th>Balance</th>
        </thead>
        <tbody>
          {user.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.balance}</td>
              </tr>
            );
          })}
          {click && (
            <tr>
              <td>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => {
                    updateUser(
                      (newUsers) =>
                        (newUsers = { ...newUser, name: e.target.value })
                    );
                    console.log(newUser);
                  }}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="balance"
                  onChange={(e) => {
                    setTotal((total) => Number(e.target.value));
                    updateUser(
                      (newUser) =>
                        (newUser = { ...newUser, balance: e.target.value })
                    );
                  }}
                />
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="d-flex">
        <h1>Balance :- {total + totalAmount}</h1>
      </div>

    </div>
  )
}
export default Table;