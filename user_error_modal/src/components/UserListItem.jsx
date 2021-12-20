function UserListItem(props) {
    return <li className="border border-gray-900 bg-gray-200 rounded-md list-none py-1 px-2">{`${props.username} (${props.age} year${props.age > 1 ? 's' : ""} old)`}</li>;
}

export default UserListItem;
