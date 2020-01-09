import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllCompanyEmployees } from "../actions/employees";
import { getAllCompanyCustomers } from "../actions/customers";
import { withRouter } from "react-router-dom";

export default function withData(WrappedComponent) {
  const WithData = props => {
    const {
      companyId,
      getAllCompanyEmployees,
      shouldFetchEmployees,
      shouldFetchCustomers,
      getAllCompanyCustomers
    } = props;

    const { pathname } = props.location;

    // handel fetching employees
    useEffect(() => {
      // add pathnames to array you wish to fetch this data from
      const viewsToFetchEmployees = [
        "/app/projects/create",
        "/app/employees",
        "/app",
        "/app/projects"
      ];
      //   console.log(pathname);
      if (
        viewsToFetchEmployees.includes(pathname) &&
        companyId &&
        shouldFetchEmployees
      ) {
        console.log("fetching employees");
        getAllCompanyEmployees(companyId);
      }
    }, [companyId, getAllCompanyEmployees, shouldFetchEmployees, pathname]);

    // handel fetching customers
    useEffect(() => {
      const viewsToFetchCustomers = [
        "/app/projects/create",
        "/app",
        "/app/customers",
        "/app/projects"
      ];
      if (
        viewsToFetchCustomers.includes(pathname) &&
        companyId &&
        shouldFetchCustomers
      ) {
        console.log("fetched customers");
        getAllCompanyCustomers(companyId);
      }
    }, [companyId, getAllCompanyCustomers, shouldFetchCustomers, pathname]);
    return <WrappedComponent />;
  };

  const mapStateToProps = state => {
    return {
      shouldFetchEmployees: state.employees.shouldFetchEmployees,
      shouldFetchCustomers: state.customers.shouldFetchCustomers,
      companyId: state.auth.user["company_id"]
    };
  };

  return connect(
    mapStateToProps,
    { getAllCompanyCustomers, getAllCompanyEmployees }
  )(withRouter(WithData));
}
