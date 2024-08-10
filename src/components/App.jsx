import Profile from './Profile';
import FriendList from '../components/FriendList';
import userData from '../userData.json';
import friends from '../components/friends.json';
import TransactionHistory from './TransactionHistory';
import transactions from '../components/transactions.json';


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
     <TransactionHistory items={transactions} />
    </div>
  );
};
export default App;