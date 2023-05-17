import IModalContentProps from "@/interfaces/IModalContentProps";
import {dataModal, errorModal } from "@/types/types";
import Typography from "@mui/material/Typography";
import Error from "./error";

const getErrorContent=(error:errorModal)=>
{
    const {message,code}=error;
    return (
        <Typography id="modal-modal-description" sx={{mt: 2}}>
            <Error errorMessage={message} errorCode={code}/>
        </Typography>
    );
};

const getContent=(data:dataModal,index:string)=>
{
    const {name}=data;
    return (
        <>
            <Typography id="modal-modal-description" sx={{mt: 2}}>
                Index {index} is {name}.
            </Typography>
        </>
    );
}

export default function modalContent({error,data,index}:IModalContentProps)
{
    console.log(error);
    return (
        <>
            {error && (
                <>
                    <Typography id="modal-modal-title" variant="h4">
                        Error!
                    </Typography>
                    {getErrorContent(error)}
                </>
            )}
            {data && (
                <>
                    <Typography id="modal-modal-title" variant="h4">
                        Info
                    </Typography>
                    {getContent(data,index)}
                </>
            )}
        </>
    );
}