import React from "react";

import { useDispatch, useSelector } from "react-redux";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import { Formik, Form, Field } from "formik";
import { LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import CloseIcon from "@material-ui/icons/Close";

import {
  selectDrawer,
  selectContact,
  setDrawer,
  setContact,
} from "./contactsSlice";
import { postContact, putContact } from "./actions";
const useStyles = makeStyles({
  list: {
    width: 400,
  },
  fullList: {
    width: "auto",
  },
});

const ContactDetail = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const contact = useSelector(selectContact);
  const drawer = useSelector(selectDrawer);
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
    >
      <Formik
        initialValues={{
          name: contact?.name || "",
          email: contact?.email || "",
          phonenum: contact?.phonenum || "",
          address: contact?.address || "",
        }}
        enableReinitialize="true"
        validate={(values) => {
          const errors = {};

          // name
          if (!values.name) {
            errors.name = "Required";
          }
           
          // phone number
           if (!values.phonenum) {
            errors.phonenum = "Required";
          }
          // emailId
          if (!values.email) {
            errors.email= "Required";
          }

          // address
          if (!values.address) {
            errors.address= "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          if (contact?.id) {
            dispatch(putContact({ values, id: contact?.id, setSubmitting }));
          } else {
            dispatch(postContact({ values, setSubmitting }));
          }
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
            <Grid container alignItems="center" direction="column" spacing={1}>
              <Grid item container direction="column" spacing={1}>
                <Button
                  onClick={() => dispatch(setDrawer(false))}
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    margin: "1rem",
                  }}
                >
                  <CloseIcon />
                </Button>
              </Grid>
              <Grid item>
                {!!contact?.id === false ? "Create" : "Update"} Contact
              </Grid>
              <Grid item>
                <Field
                  component={TextField}
                  name="name"
                  type="text"
                  label=" Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <Field
                  component={TextField}
                  name="phonenum"
                  type="number"
                  label="Phone Number"
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <Field
                  component={TextField}
                  name="email"
                  type="text"
                  label=" Email Id"
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <Field
                  component={TextField}
                  name="address"
                  type="text"
                  label="Address"
                  variant="outlined"
                />
              </Grid>
              {isSubmitting && <LinearProgress />}
              <Button
                variant="contained"
                color="primary"
                onClick={submitForm}
                size="large"
              >
                {!!contact?.id === false ? "Create " : "Update "}
                Contact
              </Button>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );

  return (
    <Box>
      <Grid container direction="column">
        <Grid item>
          <Button
            onClick={() => {
              dispatch(setDrawer(!drawer));
              dispatch(setContact());
            }}
            color="primary"
            variant="contained"
          >
            Add Contact
          </Button>
          <Drawer
            anchor={"right"}
            open={drawer}
            onClose={() => dispatch(setDrawer(false))}
          >
            {list("right")}
          </Drawer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactDetail;
