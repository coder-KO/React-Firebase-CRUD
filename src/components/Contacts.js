import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import firebaseDb from "../firebase_auth";

const Contacts = () => {
  var [contactObjects, setcontactObjects] = useState({});

  useEffect(() => {
    firebaseDb.child("Contacts").on("value", (snapshot) => {
      if (snapshot.val() != null)
        setcontactObjects({
          ...snapshot.val(),
        });
    });
  });
  var userID = 200019993200;

  const addOrEdit = (obj) => {
    firebaseDb.child("Contacts").push(obj, (err) => {
      if (err) console.log(err);
    });
    userID += 1;
  };

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">Contact Register</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-md-5">
          <ContactForm addOrEdit={addOrEdit} />
        </div>
        <div className="col-md-7">
          <table className="table table-borderless table-stripped">
            <thead className="thead-light">
              <tr>
                <th>Full Name</th>
                <th>Mobile</th>
                <th>E-Mail</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(contactObjects).map((id) => {
                return (
                  <tr key={id}>
                    <td>{contactObjects[id].fullName}</td>
                    <td>{contactObjects[id].mobile}</td>
                    <td>{contactObjects[id].email}</td>
                    <td>
                      <button className="btn text-primary">
                        <i className="fas fa-pencil-alt"></i>
                      </button>
                      <button className="btn text-danger">
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Contacts;
