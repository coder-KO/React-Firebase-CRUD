import React, { useState, useEffect } from "react";

const ContactForm = (props) => {
  const initailFieldValues = {
    fullName: "",
    mobile: "",
    email: "",
    address: "",
  };

  var [values, setValues] = useState(initailFieldValues);

  useEffect(() => {
    if (props.currentID == "")
      setValues({
        ...initailFieldValues,
      });
    else
      setValues({
        ...props.currentObject[props.currentID],
      });
  }, [props.currentID, props.currentObject]);

  //>>>>>>>>>>>>>>>>>>>>> Function - inputEventHandler
  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  //>>>>>>>>>>>>>>>>>>>>> Function - handleFormSubmit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.addOrEdit(values);
  };

  return (
    <form autoComplete="off" onSubmit={handleFormSubmit}>
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

      {/*========== Address ==========*/}
      <div className="form-group">
        <textarea
          className="form-control"
          placeholder="Address"
          name="address"
          value={values.address}
          onChange={handleInputChange}
        />
      </div>

      {/*========== Submit Button ==========*/}
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
