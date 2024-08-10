import css from '../components/FriendListItem.module.css';

const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <div className={css.item}>
            <img src={avatar} alt="Avatar" width="48" />
            <p className={css.friendName}>{name}</p>
            <p className={`${css.friendStatus} ${isOnline ? css.online : css.offline}`}>{isOnline ? 'Online' : 'Offline'}</p>
        </div>
    )
};
export default FriendListItem;