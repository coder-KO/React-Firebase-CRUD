import React from "react";
import ContactForm from "./ContactForm";
import firebaseDb from "../firebase_auth";

const Contacts = () => {
  var userID = 200019993200;

  const addOrEdit = (obj) => {
    firebaseDb.ref("Contacts/" + userID).set(obj, (err) => {
      if (err) console.log(err);
    });
    userID += 1;
  };

  return (
    <>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4 text-center">Contact Register</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-md-5">
          <ContactForm addOrEdit={addOrEdit} />
        </div>
        <div className="col-md-7">
          <div>List of Contacts</div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
