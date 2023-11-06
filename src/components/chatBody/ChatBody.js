import React, { Component } from "react";
import "./chatBody.css";
import ChatList from "../chatList/ChatList";
import ChatContent from "../chatContent/ChatContent";
import UserProfile from "../userProfile/UserProfile";
import Sidebar from "../Sidebar/Sidebar";
import TopNav from "../TopNav/TopNav";

export default class ChatBody extends Component {
  render() {
    return (
      <>
        <Sidebar />
        <TopNav />
        <div className="main__chatbody">
          <ChatList />
          <ChatContent />
          <UserProfile />
        </div>
      </>
    );
  }
}
