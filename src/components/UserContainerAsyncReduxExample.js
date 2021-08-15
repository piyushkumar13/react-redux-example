import React, {useEffect} from 'react';
import {fetchUsers} from "../redux";
import {connect} from "react-redux";

const UserContainerAsyncReduxExample = (props) => {

    const {userState, fetchUsers} = props;

    useEffect(() => {
        fetchUsers();
    }, []);

    let message;
    if (userState.loading) {
        message = <h3> Loading</h3>;

    } else if (!userState.loading && userState.error === "") {

        message = userState.users.map((user) => {
            return (
                <div key={user.id}>
                    <ul>
                        <li>{user.title}</li>
                    </ul>
                </div>
            );
        });
    } else {

        message = <h3>Error while loading data</h3>
    }

    return (
        <div>
            <h2>Async Redux Example</h2>

            <p>Users List is : </p>
            {message}
        </div>
    );
};

const mapStateToProps = (state) => {

    return {
        userState: state.user
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainerAsyncReduxExample);