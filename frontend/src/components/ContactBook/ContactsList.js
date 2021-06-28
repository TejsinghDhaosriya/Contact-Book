import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import Button from "@material-ui/core/Button";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import { useDispatch, useSelector } from "react-redux";
import {
  selectContactsLoading,
  selectContacts,
  setDrawer,
} from "./contactsSlice";
import { deleteContact, getContact, getContacts } from "./actions";

const useStyles = makeStyles({
  table: {
    overflow: "hidden",
  },
});

export default function ContactsList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  return !(Array.isArray(contacts) && contacts.length > 0) === true ? (
    <div style={{ textAlign: "center" }}>
      <CircularProgress />
    </div>
  ) : (
    <TableContainer component={Paper} style={{ width: "91vw" }}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email Id</TableCell>
            <TableCell align="right">Phone No</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {((Array.isArray(contacts) && contacts.length > 0) === true
            ? contacts
            : []
          ).map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phonenum}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">
                <Button
                  onClick={() => {
                    dispatch(getContact(row.id));
                    dispatch(setDrawer(true));
                  }}
                >
                  <CreateIcon />
                </Button>
                <Button onClick={() => dispatch(deleteContact(row.id))}>
                  <DeleteIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
