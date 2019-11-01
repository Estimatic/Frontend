import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ViewWrapper } from "../ViewWrapper";
import { getAllCompanyEmployees } from "../../../../actions/employees";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

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
    background: "#0D076F",
    color: "white"
  }
});

function EmployeesTab(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([]);

  const { side_bar_color, secondary_color } = props.ui.colors;

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
      <h3>Metrics</h3>
      <hr />
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
                      color: secondary_color || "#0D076F"
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
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end"
        }}
      >
        <Button
          style={{
            backgroundColor: secondary_color || "#0D076F",
            color: side_bar_color || "white"
          }}
          variant="contained"
          size="medium"
          className={classes.margin}
          onClick={() => {
            props.history.push("/app/employees/invite");
          }}
        >
          Add Employee
        </Button>
      </div>
    </ViewWrapper>
  );
}

const mapStateToProps = state => {
  return {
    employees: state.employees,
    companyId: state.auth.user["company_id"],
    ui: { ...state.ui }
  };
};

export default connect(
  mapStateToProps,
  { getAllCompanyEmployees }
)(EmployeesTab);
