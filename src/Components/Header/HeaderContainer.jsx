import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { сonnect } from "react-redux";
import {setAuthUserData} from "../../Redux/auth-reduser";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })

            .then(response => {
                if (response.data.resultCode === 0) {
                    let { userId, email, login } = response.data.data;
                    this.props.setAuthUserData(userId, email, login);
                }
            });
    }
    render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state) => ({});
export default сonnect(mapStateToProps, { setAuthUserData })(HeaderContainer);

