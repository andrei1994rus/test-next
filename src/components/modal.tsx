import IModalProps from '@/interfaces/IModalProps';
import axios from 'axios';
import useSWR from 'swr';
import Loading from './loading';
import {useMemo,useRef} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import ModalContent from './modalContent';

const fetcher=(url:string)=>axios(url).then(res=>res.data);

const style=
{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '85vw',
    bgcolor: 'background.paper',
    border: '.9vh solid #000',
    boxShadow: 24,
    p: 4,
};

export default function MyModal({url,value,reset}:IModalProps)
{
    const index=value;

    const open=useRef(true);

    const handleClose=()=>reset();

    const {data,error,isLoading}=useSWR(url+value,fetcher,
    {
        revalidateOnFocus: false,
        refreshWhenOffline: true,
        shouldRetryOnError: false
    });

    const memoShow=useMemo(()=>
    {
        if(isLoading)
        {
            return false;
        }

        return true;
    },[isLoading]);
        
    console.log(data);
    if(error)
    {
        console.log('error:',error);
    }

    return (
        <div>
            {(isLoading) && <Loading />}
            {(memoShow) &&
                <Modal
                open={open.current}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                    <Box data-type='modal-box' sx={style}>
                        <Button data-type='modal-click' onClick={handleClose}>&times;</Button>
                        <ModalContent error={error} data={data} index={index}/>
                    </Box>
                </Modal>
            }
        </div>
    )
}