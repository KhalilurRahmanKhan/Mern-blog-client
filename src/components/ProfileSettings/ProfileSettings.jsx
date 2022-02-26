import './profilesettings.css';

const ProfileSettings = () => {
    return (
        <div className="profileSettings">
            <div className="profileSettingsTitle">
                <h3>Update your profile</h3>
                <span>Delete</span>
            </div>
            <div className="profileSettingsForm">
                <div className="profileSettingsFormGroup">
                    <img src="https://picsum.photos/200" alt="" />
                    <div className="profileSettingsFormGroupTitle">
                        <label htmlFor="ppSettings">
                            <i class="fas fa-user-circle" ></i>
                        </label>
                    </div>
                   
                    <input type="file" id="ppSettings" style={{display:"none"}} />
                </div>
                <div className="profileSettingsFormGroup">
                    <div className="profileSettingsFormGroupTitle">
                    <label htmlFor="pnSettings">Username</label>
                    </div>
                    <input type="text" id="pnSettings" />
                </div>
                <div className="profileSettingsFormGroup">
                    <div className="profileSettingsFormGroupTitle">
                    <label htmlFor="peSettings">Email</label>
                    </div>
                    <input type="text" id="peSettings" />
                </div>
                <div className="profileSettingsFormGroup">
                    <div className="profileSettingsFormGroupTitle">
                    <label htmlFor="passSettings">Password</label>
                    </div>
                    <input type="text" id="passSettings" />
                </div>
                <button>Update</button>
            </div>
        </div>
    );
};

export default ProfileSettings;