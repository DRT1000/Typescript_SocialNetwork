import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, ProfileType} from "../../Redux/ProfileReducer";
import {AppStateType} from "../../Redux/redux-store";
import {withRouter} from "react-router-dom"
import {RouteComponentProps} from "react-router"

type MapStateToPropsType = {
    profile: null | ProfileType
}
type MapDispatchToPropsType = {
    getUserProfile: (userId:string) => void
}
type PathParamType = {
    userId: string
}


export type ConnectProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
type OwnPropsType = RouteComponentProps <PathParamType> & ConnectProfilePropsType

class ProfileContainer extends React.Component<OwnPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId){
            userId="2"
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

let withRouterProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(withRouterProfileContainer)