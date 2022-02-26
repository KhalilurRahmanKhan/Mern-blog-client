import ProfileSettings from '../../components/ProfileSettings/ProfileSettings';
import Sidebar from '../../components/Sidebar/Sidebar';
import './settings.css';

const Settings = () => {
    return (
        <div className="settings">
            <ProfileSettings/>
            <Sidebar/>
        </div>
    );
};

export default Settings;