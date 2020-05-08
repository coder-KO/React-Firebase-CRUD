import React, { useState, useEffect } from "react";

const ContactForm = () => {
  const initailFieldValues = {
    fullName: "",
    mobile: "",
    email: "",
    address: "",
  };

  var [values, setValues] = useState(initailFieldValues);

  //>>>>>>>>>>>>>>>>>>>>> Function - inputEventHandler
  const handleInputChange = (e) => {
    var [name, value] = e.target;
    setValues([...values, ([name]: value)]);
  };

  return (
    <form autoComplete="off">
      {/*========== Full Name ==========*/}
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <input
          className="form-control"
          placeholder="Full Name"
          name="fullName"
          value={values.fullName}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-row">
        {/*========== Mobile ==========*/}
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-mobile"></i>
            </div>
          </div>
          <input
            className="form-control"
            placeholder="Mobile"
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
          />
        </div>

        {/*========== E Mail ==========*/}
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-envelope"></i>
            </div>
          </div>
          <input
            className="form-control"
            placeholder="E-Mail"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="form-group">
        <textarea
          className="form-control"
          placeholder="Address"
          name="address"
          value={values.address}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="submit"
          value="Save"
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

export default ContactForm;
