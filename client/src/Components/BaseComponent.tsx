import React from "react";

interface IBaseComponentProps  {
}

interface IBaseComponentState {
	dark: boolean;
}

export class BaseComponent extends React.Component<IBaseComponentProps, IBaseComponentState> {
	constructor(props: Readonly<IBaseComponentProps>) {
		super(props);

		this.state = {
			dark: false
		};

		this.changeTheme = this.changeTheme.bind(this);
	}

	changeTheme() {
		this.setState({ dark: !this.state.dark });
	}

	render() {
		return (
			<div className={'theme ' + (this.state.dark ? 'theme--dark' : 'theme--default')}>


			</div>
		);
	}
}