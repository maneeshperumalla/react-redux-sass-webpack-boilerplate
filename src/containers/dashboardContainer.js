import { connect } from "react-redux";
import Dashboard from "../components/dashboard/dashboard";
import { withRouter } from "react-router";

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => {};

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

export default withRouter(DashboardContainer);
