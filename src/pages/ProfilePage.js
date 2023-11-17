import React from "react";
import "./profile.css";

export default function ProfilePage() {
    return (
        <main>
            <div class="container">
                <h1>Profile</h1>

                <column>
                    <div class="img-wrapper">
                        <img src="https://media.licdn.com/dms/image/D5603AQEZgveibmW9rg/profile-displayphoto-shrink_800_800/0/1694439401084?e=1704931200&v=beta&t=AzPdsIZpTKkJA7n7_ypvaKiOX84IeTd5_s7kNkq0MF0" alt="Foto Profil" />
                    </div>

                    <div class="identity">
                        <p>Nurrahmat Hanif</p>
                        <p>21120121130049</p>
                    </div>
                </column>
            </div>
        </main>
    );
}
