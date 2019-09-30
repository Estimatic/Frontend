import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ViewWrapper } from "./ViewWrapper";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

import { getAllCompanyCustomers } from "../../../actions/customers";

const columns = [
  { id: "name", label: "Name", minWidth: 120 },
  { id: "email", label: "Email", minWidth: 120 },
  {
    id: "address",
    label: "Address",
    minWidth: 170
  }
];

function createData(name, email, address) {
  return { name, email, address };
}

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  tableWrapper: {
    maxHeight: 407,
    overflow: "auto"
  },
  margin: {
    margin: "16px",
    marginRight: "0",
    background: "#3B49B8",
    color: "white"
  }
});

function CustomersTab(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([]);

  const { side_bar_color, secondary_color } = props.ui.colors;

  //turns employees into correct format
  const { customers } = props;
  useEffect(() => {
    const newRows = customers.map(customer => {
      return createData(
        customer["full_name"],
        customer.email,
        customer.address
      );
    });
    setRows(newRows);
  }, [customers]);

  const { companyId, getAllCompanyCustomers } = props;

  useEffect(() => {
    if (companyId) {
      getAllCompanyCustomers(companyId);
    }
  }, [companyId, getAllCompanyCustomers]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <ViewWrapper>
      <h3>Your Customers</h3>

      {/* table element */}
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell
                    key={column.id}
                    style={{
                      minWidth: column.minWidth,
                      color: secondary_color || "#3B49B8"
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={Math.random()}
                    >
                      {columns.map(column => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            "aria-label": "previous page"
          }}
          nextIconButtonProps={{
            "aria-label": "next page"
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      {/* endtable element */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end"
        }}
      >
        <Button
          style={{
            backgroundColor: secondary_color || "#3B49B8",
            color: side_bar_color || "white"
          }}
          variant="contained"
          size="medium"
          className={classes.margin}
          onClick={() => {
            props.history.push("/app/customers/create");
          }}
        >
          Add Customer
        </Button>
      </div>
    </ViewWrapper>
  );
}

const mapStateToProps = state => {
  return {
    companyId: state.auth.user["company_id"],
    ui: { ...state.ui },
    customers: state.customers.customers
  };
};

export default connect(
  mapStateToProps,
  { getAllCompanyCustomers }
)(CustomersTab);
