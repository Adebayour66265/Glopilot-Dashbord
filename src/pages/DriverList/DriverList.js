import React from "react";
import Search from "../../components/search/Search";
import ReactPaginate from "react-paginate";
import './DriverList.css'
import { FaTrashAlt } from "react-icons/fa";
import "../../styles/dashboard.css";
import SingleCard from "../../components/reuseable/SingleCard";
import Sidebar from "../../components/Sidebar/Sidebar";
import TopNav from "../../components/TopNav/TopNav";
import ChangeRole from "../../components/changeRole/ChangeRole";

const DriverList = () => {
  const carObj = {
    title: "Unverified Drivers",
    totalNumber: "1k",
    icon: "ri-user-line",
  };

  const tripObj = {
    title: "Total Drivers",
    totalNumber: "20k",
    icon: "ri-user-line",
  };

  const clientObj = {
    title: "Verified Drivers",
    totalNumber: "10k",
    icon: "ri-user-line",
  };

  const distanceObj = {
    title: "Suspended Drivers",
    totalNumber: 9367,
    icon: "ri-user-line",
  };

  return (
    <section>
       <Sidebar />
          <TopNav />
      <div className="dashboard">
        <div className="dashboard__wrapper">
          <div className="dashboard__cards">
            <SingleCard item={carObj} />
            <SingleCard item={tripObj} />
            <SingleCard item={clientObj} />
            <SingleCard item={distanceObj} />
          </div>
        </div>

      <div className="container">
        <div className="user-list">
          <div className="table">
            <div className="--flex-between">
              <span>
                <h3>All Users</h3>
              </span>
              <span>
                <Search />
              </span>
            </div>
        
            <table>
            <thead>
              <tr>
                <th>s/n</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Change Role</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>name of the driver</td>
                <td>email@gmail.com</td>
                <td>driver</td>
                <td>
                <ChangeRole/>
                </td>
                <td className="icons">
                  <span>
                    <FaTrashAlt size={20} color={"red"} />
                  </span>
                </td>
              </tr>
             
            </tbody>  <tbody>
              <tr>
                <td>2</td>
                <td>name of the driver</td>
                <td>email@gmail.com</td>
                <td>driver</td>
                <td>
                <ChangeRole/>
                </td>
                <td className="icons">
                  <span>
                    <FaTrashAlt size={20} color={"red"} />
                  </span>
                </td>
              </tr>
             
            </tbody>  <tbody>
              <tr>
                <td>3</td>
                <td>name of the driver</td>
                <td>email@gmail.com</td>
                <td>user</td>
                <td>
                <ChangeRole/>
                </td>
                <td className="icons">
                  <span>
                    <FaTrashAlt size={20} color={"red"} />
                  </span>
                </td>
              </tr>
             
            </tbody>  <tbody>
              <tr>
                <td>4</td>
                <td>name of the driver</td>
                <td>email@gmail.com</td>
                <td>Suspended</td>
                <td>
                  <ChangeRole/>
                </td>
                <td className="icons">
                  <span>
                    <FaTrashAlt size={20} color={"red"} />
                  </span>
                </td>
              </tr>
             
            </tbody>
          </table>
          </div>
         
          <hr />
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          // onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          // pageCount={pageCount}
          previousLabel="Prev"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="activePage"
        />
      </div>
      </div>

    </section>
  );
};

export default DriverList;
