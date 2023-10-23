import React from "react";
import Logo from "../../images/2.png";
// import '../auth/Login.css';
import "./profile.css";

const Profile = () => {
  const handleInputChange = () => {};

  return (
    <>
      <div className="profile">
        <form className="profile-form" id="Profile">
          <div className="profile-image">
            <img src={Logo} size={23} alt="profile images" className="image" />
          </div>
          <p>Role: User</p>
          <h1 className="form__title">Profile</h1>

          <div className="form__input">
            <label>Change photo</label>
            <input
              type="file"
              // value={email}
              name="file"
              onChange={handleInputChange}
            />
          </div>
          <div className="group-all-input">
            <div className="form__input-group">
              <label>Change Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                // value={email}
                name="email"
                onChange={handleInputChange}
              />
            </div>
            <div className="form__input-group">
              <label>Change Name</label>
              <input
                type="email"
                placeholder="Type in your email"
                // value={email}
                name="email"
                onChange={handleInputChange}
              />
            </div>{" "}
            <div className="form__input-group">
              <label>Change Name</label>
              <input
                type="email"
                placeholder="Type in your email"
                // value={email}
                name="email"
                onChange={handleInputChange}
              />
            </div>{" "}
            <div className="form__input-group">
              <label>Change Name</label>
              <input
                type="email"
                placeholder="Type in your email"
                // value={email}
                name="email"
                onChange={handleInputChange}
              />
            </div>{" "}
            <div className="form__input-group">
              <label>Change Name</label>
              <input
                type="email"
                placeholder="Type in your email"
                // value={email}
                name="email"
                onChange={handleInputChange}
              />
            </div>
            <div className="form__input-group">
              <label>Change Name</label>
              <input
                type="email"
                placeholder="Type in your email"
                // value={email}
                name="email"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="profile-btn">
            <button className="profile__button" type="submit">
              Continue
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
