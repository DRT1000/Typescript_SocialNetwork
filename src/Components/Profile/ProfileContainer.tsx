import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, ProfileType, updateUserStatus} from "../../Redux/ProfileReducer";
import {AppStateType} from "../../Redux/redux-store";
import {withRouter} from "react-router-dom"
import {RouteComponentProps} from "react-router"
import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

type MapStateToPropsType = {
    profile: null | ProfileType
    status: string
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
}
type PathParamType = {
    userId: string
}


export type ConnectProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
type OwnPropsType = RouteComponentProps<PathParamType> & ConnectProfilePropsType

class ProfileContainer extends React.Component<OwnPropsType> {

    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfile(+userId)
        this.props.getUserStatus(+userId)
    }

    render() {

        return <Profile
            profile={this.props.profile}
            status={this.props.status}
            updateUserStatus={this.props.updateUserStatus}
        />
    }
}


let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile,     getUserStatus,
        updateUserStatus}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)