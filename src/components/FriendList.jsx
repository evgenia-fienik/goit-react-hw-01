
import FriendListItem from '../components/FriendListItem';
import css from '../components/FriendList.module.css';


const FriendList = ({friends}) => {
    return (
        <ul className={css.item}>
            {friends.map(friend => (
                <li key={friend.id}>
                    <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                </li>
            ))}
        </ul>
    );
};
export default FriendList;