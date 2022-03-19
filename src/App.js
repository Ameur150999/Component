import './App.css';
import ProfilePhoto from "./Component/Profile/ProfilePhoto.js";
import FullName from "./Component/Profile/FullName.js";
import Address from "./Component/Profile/Address.js";

const App = () => (
  <div class='App'>
    <h1>Welcome to my Profile</h1>
    <ProfilePhoto />
    <FullName/>
    <Address/>
  </div>
 );
 export default App;

