import css from './FriendList.module.css';

export default function FriendListItem({ id, avatar, name, isOnline }) {
  return (
    <li className={css['friends-list-item']} id={id}>
      <img
        src={avatar}
        alt={`${name} avatar`}
        className={css['friends-list-item-img']}
      />
      <p className={css['friends-list-item-name']}>{name}</p>
      <p className={css['friends-list-item-status']}>{isOnline}</p>
    </li>
  );
}
