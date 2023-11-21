import React from 'react';
import "./profile.css";
export default function ProfilePage() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="profile">
                        <div className="profile-image">
                            <img src="https://media.licdn.com/dms/image/D5603AQEZgveibmW9rg/profile-displayphoto-shrink_800_800/0/1694439401084?e=1706140800&v=beta&t=P1Go4olcno67XBN-0ECJVUO3j7B488k054eNTlvEoPU" alt="" />
                        </div>
                        <div className="profile-user-settings">
                            <h1 className="profile-user-name">Nurrahmat Hanif</h1>
                            <button className="btn profile-edit-btn">hanifnrh</button>
                            <button className="btn profile-settings-btn" aria-label="profile settings">
                                <i className="fas fa-cog" aria-hidden="true"></i>
                            </button>
                        </div>
                        <div className="profile-stats">
                            <ul>
                                <li>
                                    <span className="profile-stat-count">164</span> Videos
                                </li>
                                <li>
                                    <span className="profile-stat-count">188</span> Subscribers
                                </li>
                                <li>
                                    <span className="profile-stat-count">1</span> Channels
                                </li>
                            </ul>
                        </div>
                        <div className="profile-bio">
                            <p>
                                <span className="profile-real-name">Nurrahmat Hanif</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit
                            </p>
                        </div>
                    </div>
                    {/* End of profile section */}
                </div>
                {/* End of container */}
            </header>
        </>
    );
}
