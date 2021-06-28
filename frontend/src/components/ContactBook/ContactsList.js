import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, getContact, getContacts } from "./actions";
import {
  selectContacts,
  selectContactsLoading,
  setDrawer,
} from "./contactsSlice";

const useStyles = makeStyles((theme) => ({
  table: {
    overflow: "hidden",
  },
  tableContainer: {
    width: "90vw",
    [theme.breakpoints.down("md")]: {
      width: "80vw",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90vw",
    },
  },
}));

export default function ContactsList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const contactsLoading = useSelector(selectContactsLoading);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(offset);
  const [rowsPerPage, setRowsPerPage] = useState(limit);
  const [search, setSearch] = useState("");
  useEffect(() => {
    setPage(offset / limit);
  }, [offset, limit]);

  useEffect(() => {
    setRowsPerPage(limit);
  }, [limit]);

  const handlePageChange = (pageNb, pageSize) => {
    dispatch(
      getContacts({
        offset: pageNb * pageSize,
        limit: pageSize,
      })
    );
    setOffset(pageNb * pageSize);
    setLimit(pageSize);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    handlePageChange(newPage, rowsPerPage);
  };

  const handleChangeRowsPerPage = (event) => {
    const pSize = parseInt(event.target.value, 10);
    setRowsPerPage(pSize);
    setPage(0);
    handlePageChange(0, pSize);
  };

  return contactsLoading ? (
    <div style={{ textAlign: "center" }}>
      <CircularProgress />
    </div>
  ) : (
    <>
      <form className={classes.root} noValidate style={{ float: "right" }}>
        <TextField
          onChange={(e) => setSearch(e.target.value)}
          id="standard-basic"
          label="Search"
        />
        <Button
          onClick={() => {
            dispatch(
              getContacts({
                offset: 0,
                limit: 5,
                name: search,
              })
            );
          }}
        >
          <SearchIcon />
        </Button>
        <Button
          onClick={() => {
            dispatch(
              getContacts({
                offset: 0,
                limit: 5,
                name: "",
              })
            );
          }}
        >
          <ClearIcon />
        </Button>
      </form>
      <TableContainer component={Paper} className={classes.tableContainer}>
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
            {((Array.isArray(contacts?.results) &&
              contacts?.results.length > 0) === true
              ? contacts?.results
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
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10]}
                count={contacts.count}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
}
