import React from "react";

import { useSelector } from "react-redux";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import ContactDetail from "./ContactDetail";
import ContactsList from "./ContactsList";

const ContactBook = () => {
  return (
    <Box>
      <Grid container direction="column">
        <Grid item>
          <ContactDetail />
        </Grid>
        <Grid item>
          <ContactsList />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactBook;
