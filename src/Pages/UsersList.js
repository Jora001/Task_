import React, {  useEffect } from "react";
import Header from "../Components/Header";

const UersList = () => {
  const [test, setTest] = React.useState()
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("users")) || []
    setTest(data)
  }, [])
  console.log(test ? test : "");
  const profilePIcDefault =
    "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg";
  return (
    <div>
      <Header />
      <div className="container content">
        <div className="border mt-4 p-4">
          <h3 className="text-center bg-info p-2 mb-3">
            Welcome To User Management System
          </h3>
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <div className="ms-4">
                <h4>
                  Name :{" "}           
                  {test && test[0].name}
                </h4>
                <h4>
                  Email :{" "}              
                  {test && test[0].email}
                </h4>
                <p>
                  Accepted Terms And Conditions :{" "}
                  {localStorage.getItem("terms") ? "YES" : "No"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default UersList;
