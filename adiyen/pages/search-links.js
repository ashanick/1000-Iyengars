import ConnectUsers from "../components/users/connect-users"

function SearchLinks(){
    function connectUsersHandler(user1, user2) {
        console.log('User1: ', user1, ', User2 : ', user2)
    }

    return (
        <div>
            <ConnectUsers onSearch={connectUsersHandler} />
            Helllo my babies
        </div>
    )
}

export default SearchLinks