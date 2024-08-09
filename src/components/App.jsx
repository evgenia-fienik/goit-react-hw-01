import React from 'react';
import Profile from './Profile';
import FriendList from '../components/FriendList';
import userData from '../userData.json';
import friends from '../components/friends.json';
import css from '../components/App.module.css';

const App = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </div>
  );
};
export default App;