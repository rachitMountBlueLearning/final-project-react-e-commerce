import React, {createContext} from 'react';

export const UserContext = createContext();

export class UserProvider extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			usersList: []
		};
		this.getUsersList = this.getUsersList.bind(this);
	}

    getUsersList() {
		fetch('https://fakestoreapi.com/users')
			.then((res) => res.json())
			.then((result) => {
				this.setState({
					usersList: result,
				});
			});
	}

    componentDidMount() {
		this.getUsersList();
	}

    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}