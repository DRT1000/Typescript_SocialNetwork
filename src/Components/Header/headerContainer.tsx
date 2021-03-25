import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../Redux/authReducer";
import {AppStateType} from "../../Redux/redux-store";

type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchPropsType = {
    getAuthUserData: () => void
}
type MSMDType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component <MSMDType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header
            isAuth={this.props.isAuth}
            login={this.props.login}
        />
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)