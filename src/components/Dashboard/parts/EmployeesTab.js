import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ViewWrapper } from "./ViewWrapper";
import { getAllCompanyEmployees } from "../../../actions/employees";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  { id: "name", label: "Name", minWidth: 120 },
  { id: "email", label: "Email", minWidth: 120 },
  {
    id: "projects",
    label: "# Projects",
    minWidth: 80
  }
];

function createData(name, email, projects) {
  return { name, email, projects };
}

// const rows = [
//   createData("Thomas Hessburg", "thomas.hessburg@gmail.com", 4),
//   createData("Thomas Hessburg", "thomas.hessburg1@gmail.com", 4),
//   createData("Thomas Hessburg", "thomas.hessburg2@gmail.com", 4),
//   createData("Thomas Hessburg", "thomas.hessburg3@gmail.com", 4),
//   createData("Thomas Hessburg", "thomas.hessburg4@gmail.com", 4),
//   createData("Thomas Hessburg", "thomas.hessburg5@gmail.com", 4),
//   createData("Thomas Hessburg", "thomas.hessburg6@gmail.com", 4),
//   createData("Thomas Hessburg", "thomas.hessburg7@gmail.com", 4),
//   createData("Thomas Hessburg", "thomas.hessburg8@gmail.com", 4),
//   createData("Thomas Hessburg", "thomas.hessburg9@gmail.com", 4),
//   createData("Thomas Hessburg", "thomas.hessburg10@gmail.com", 4)
// ];

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  tableWrapper: {
    maxHeight: 407,
    overflow: "auto"
  }
});

function EmployeesTab(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [rows, setRows] = React.useState([]);

  //turns employees into correct format
  const { employees } = props.employees;
  useEffect(() => {
    const newRows = employees.map(employee => {
      return createData(employee["full_name"], employee.email, 1);
    });
    setRows(newRows);
  }, [employees]);

  const { companyId, getAllCompanyEmployees } = props;

  useEffect(() => {
    if (companyId) {
      getAllCompanyEmployees(companyId);
    }
  }, [companyId, getAllCompanyEmployees]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <ViewWrapper>
      <h3>Basic Metrics</h3>

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
                      color: "#3B49B8"
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
                      key={row.email}
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
    </ViewWrapper>
  );
}

const mapStateToProps = state => {
  return {
    employees: state.employees,
    companyId: state.auth.user["company_id"]
  };
};

export default connect(
  mapStateToProps,
  { getAllCompanyEmployees }
)(EmployeesTab);
