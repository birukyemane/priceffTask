import React from "react";

const fetch = () => {


}

const FetchUsers = (props) => (
        <button type="button" 
            onClick= {(e) => {
                const users = fetch()
                props.dispatch(users)}}>
            Fetch users
        </button>
)

export default FetchUsers;