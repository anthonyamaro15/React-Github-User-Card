import React from "react";
import { Formik, Form, Field } from "formik";

const MainForm = ({ handleChange }) => {
  return (
    <div className="form">
      <Formik
        initialValues={{ name: "" }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          handleChange(values.name);
          resetForm();
        }}
      >
        {() => (
          <Form>
            <Field type="text" name="name" placeholder="enter github name" />
            <button type="submit">Search</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MainForm;
