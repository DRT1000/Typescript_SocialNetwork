import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/redux-store";

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

function WithAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStatePropsType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={"/login"}/>
        return <Component {...restProps as T}/>
    }

    let connectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return connectedRedirectComponent
}


export default WithAuthRedirect