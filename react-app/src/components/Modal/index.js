import React,{useEffect} from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal, setCurrentModal } from '../../store/modal';


import './modal.css';

export default function Modal () {

    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user);
    const display = useSelector(state => state.modal.display);
    const Current = useSelector(state => state.modal.current);

    const onClose = () => {
        dispatch(hideModal());
    };
    useEffect(() => {
        if(user){
            dispatch(hideModal())
            dispatch(setCurrentModal(null))
        }
    },[user, dispatch])

    console.log('modal component')
    return !user && display && Current && ReactDOM.createPortal(
    <div onClick={onClose} className='modal-background'>
        <div
        onClick={e => {e.stopPropagation()}}
        className='modal-content'
        >
        <Current />
        </div>
    </div>,
    document.getElementById('modal'));
}
