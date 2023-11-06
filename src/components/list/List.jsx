// import "./list.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import TopNav from "../../components/TopNav/TopNav";
import Datatable from "../../components/datatable/Datatable";
import SingleCard from "../../components/reuseable/SingleCard";

const carObj = {
  title: "Unverified Users",
  totalNumber: "10k",
  icon: "ri-user-line",
};

const tripObj = {
  title: "Total Users",
  totalNumber: "120k",
  icon: "ri-user-line",
};

const clientObj = {
  title: "Verified Users",
  totalNumber: "85k",
  icon: "ri-user-line",
};

const distanceObj = {
  title: "Suspended Users",
  totalNumber: 2167,
  icon: "ri-user-line",
};

const List = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <TopNav />
        <div className="list">
          <div className="listContainer">
            <div className="dashboard__cards">
              <SingleCard item={carObj} />
              <SingleCard item={tripObj} />
              <SingleCard item={clientObj} />
              <SingleCard item={distanceObj} />
            </div>
            <Datatable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
