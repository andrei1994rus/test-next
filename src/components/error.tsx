import IError from "@/interfaces/IError";
import {PureComponent} from "react";

export default class extends PureComponent<IError>
{
    constructor(props: IError | Readonly<IError>)
    {
        super(props);
    }

    render()
    {
        return (
        <>
            <span>{this.props.errorMessage} <span>({this.props.errorCode})</span></span>
        </>
        );
    }
}