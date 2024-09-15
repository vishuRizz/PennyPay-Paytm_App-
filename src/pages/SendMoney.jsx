import axios from "axios";
import React, { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { useNavigate, useSearchParams } from "react-router-dom";

function SendMoney() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  return (
    <main className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-300 to-white place-content-center">
      <div className="w-[48vh] h-[40vh]  border-black rounded-lg bg-white p-2">
        <center className="items-center p-2 ">
          <h1>Send Money</h1>
        </center>
        <div className="px-2 mt-4 ">
          <div className="flex">
            <span className="mt-1">
              <RxAvatar color="green" size={30} />
            </span>
            <p className="pt-1 pl-1 m-0 text-xl font-medium capitalize">
              {" "}
              {name}{" "}
            </p>
          </div>
          <p className="mt-2 mb-0 ml-1">Amount (in Rs)</p>

          <div className="mt-1 input-group flex-nowrap">
            <input
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              type="text"
              className="form-control"
              placeholder="Enter Amount"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
        </div>
        <div className="px-3 py-3">
          <button
            onClick={() => {
              console.log(id, name)
              const token = localStorage.getItem("token");
              axios.post(
                "http://localhost:3000/api/v1/account/transfer",
                {
                  to: id,
                  amount,
                },
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  }
                }
              );
              alert("Money Sent dude!");
              navigate("/dashboard");
            }}
            type="button"
            className="w-full btn btn-success"
          >
            Send Money
          </button>
          <div className="flex justify-center"></div>
        </div>
      </div>
    </main>
  );
}

export default SendMoney;
