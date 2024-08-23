import './App.css';

import Profile from './Profile/Profile.jsx';
import FriendList from './FriendList/FriendList.jsx';

import userData from './userData.json';
import friendsList from './friends.json';

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList list={friendsList} />
    </>
  );
}
