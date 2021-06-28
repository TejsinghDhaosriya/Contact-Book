import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";

import { authSignIn } from "./actions";
import AuthLayout from "./AuthLayout";

function AuthSignIn() {
  const dispatch = useDispatch();

  return (
    <AuthLayout
      title="Login "
      body={
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validate={(values) => {
            const errors = {};

            // username
            if (!values.username) {
              errors.username = "Required";
            }

            // password
            if (!values.password) {
              errors.password = "Required";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(authSignIn({ values, setSubmitting }));
          }}
        >
          {({ submitForm, isSubmitting }) => (
            <Form>
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
                label="Password"
                name="password"
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
                Sign In
              </Button>
            </Form>
          )}
        </Formik>
      }
      footer={
        <>
          <p>
           <Link to="/auth/sign-up">Create New Account</Link>
          </p>
        </>
      }
    />
  );
}

export default AuthSignIn;
