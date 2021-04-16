import React, {ChangeEvent} from "react";

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    onEditMode() {
        this.setState({
            editMode: true
        })
    }

    onOffEditMode() {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.onEditMode.bind(this)}>{this.props.status || "----"}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus onBlur={this.onOffEditMode.bind(this)}
                           value={this.state.status}/>
                </div>
                }
            </div>
        )
    }


}


export default ProfileStatus