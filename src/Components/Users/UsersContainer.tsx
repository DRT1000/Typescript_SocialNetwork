import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {
    InitialStateType,
    setCurrentPage,
    toggleFollowingProgress, getUsers, follow, unfollow
} from "../../Redux/Users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";


type MapStatePropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
type MapDispatchPropsType = {
    setCurrentPage: (currentPage: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}
type UsersPropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChange={this.onPageChange}
                usersPage={this.props.usersPage}
                followingInProgress={this.props.followingInProgress}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </>
    }
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.users,
        pageSize: state.users.pageSize,
        totalUserCount: state.users.totalUserCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress
    }
}


export default WithAuthRedirect(connect(mapStateToProps, {
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
    follow,
    unfollow
})(UsersContainer))