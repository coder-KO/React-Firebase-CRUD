import React, { useState, useEffect } from "react";

const ContactForm = () => {

const initailFieldValues = {
    fullName = '',
    mobile = '',
    email = '',
    address = ''
}

var [values, setValues] = useState(initailFieldValues)

  return <div>Display Form</div>;
};

export default ContactForm;
