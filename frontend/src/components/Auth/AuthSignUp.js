import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";

import { authSignUp } from "./actions";
import AuthLayout from "./AuthLayout";

function AuthSignUp() {
  const dispatch = useDispatch();

  return (
    <AuthLayout
      title="Sign Up"
      body={
        <Formik
          initialValues={{
            email: "",
            username: "",
            password1: "",
            password2: "",
          }}
          validate={(values) => {
            const errors = {};

            // email
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }

            // username
            if (!values.username) {
              errors.username = "Required";
            }

            // password1
            if (!values.password1) {
              errors.password1 = "Required";
            }

            // password2
            if (!values.password2) {
              errors.password2 = "Required";
            } else if (values.password2 !== values.password1) {
              errors.password2 = "Password do not match";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(authSignUp({ values, setSubmitting }));
          }}
        >
          {({ submitForm, isSubmitting }) => (
            <Form>
              <Field
                component={TextField}
                name="email"
                type="email"
                label="Email"
                variant="outlined"
              />
              <Field
                component={TextField}
                name="username"
                type="text"
                label="Username"
                variant="outlined"
              />
              <Field
                component={TextField}
                type="password"
                label="Password Minimum 8 char"
                name="password1"
                variant="outlined"
              />
              <Field
                component={TextField}
                type="password"
                label="Password (Again) Minimum 8 char"
                name="password2"
                variant="outlined"
              />
              {isSubmitting && <LinearProgress />}
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
                size="large"
              >
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>
      }
      footer={
        <>
          <p>
            Already have an account? Then please{" "}
            <Link to="/auth/sign-in">sign in</Link>.
          </p>
        </>
      }
    />
  );
}

export default AuthSignUp;
