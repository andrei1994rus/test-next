import IError from '@/interfaces/IError';
import {errorData} from '@/types/types';
import {PureComponent} from 'react';

export default class Error extends PureComponent<IError> {
	constructor(props: IError | Readonly<IError>) {
		super(props);
	}

	outputError = (error: errorData) => {
		const [message, code] = error;

		return (
			<span>
				{message} ({code})
			</span>
		);
	};

	render() {
		const {errorMessage, errorCode} = this.props;

		return <>{this.outputError([errorMessage, errorCode])}</>;
	}
}
