import React from "react";
import UserStats from "../../components/UserStars/UserStars";
import Search from "../../components/search/Search";
import ReactPaginate from "react-paginate";
// import './UserList.css'
import { FaTrashAlt } from "react-icons/fa";
import "../../styles/dashboard.css";
import SingleCard from "../../components/reuseable/SingleCard";


const UserList = () => {
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
 
  return (
    <section>
    <div className="dashboard">

       <div className="dashboard__wrapper">

       <div className="dashboard__cards">
          <SingleCard item={carObj} />
          <SingleCard item={tripObj} />
          <SingleCard item={clientObj} />
          <SingleCard item={distanceObj} />
        </div>
       </div>
       </div>

      <div className="container">
        {/* <UserStats /> */}

        <div className="user-list">
        

          <div className="table">
            <div className="--flex-between">
              <span>
                <h3>All Users</h3>
              </span>
              <span>
                <Search
                  // value={search}
                  // onChange={(e) => setSearch(e.target.value)}
                />
              </span>
            </div>
            {/* {!isLoading && users.length === 0 ? (
              <p>No user found</p>
            ) : ( */}
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
                  {/* {currentItems.map((user, index) => {
                    const { _id, name, email, role } = user;

                    return (
                      <tr key={_id}>
                        <td>{index + 1}</td>
                        <td>{shortenText(name, 16)}</td>
                        <td>{email}</td>
                        <td>{role}</td>
                       */}
                        <tr>
                        <td>1</td>
                        <td>name of the user</td>
                        <td>email@gmail.com</td>
                        <td>role</td>
                        <td className="icons">
                          <span>
                            <FaTrashAlt
                              size={20}
                              color={"red"}
                             
                            />
                          </span>
                        </td>
                      </tr>
                    {/* );
                  })}  */}
                </tbody>
              </table>
            {/* )} */}
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

export default UserList;