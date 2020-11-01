import React from 'react';
import ReactDOM from 'react-dom';

const ModalPortal = (props: any) => {
    return ReactDOM.createPortal(
        <div>
            { props.children }
        </div>,
    document.getElementById('root-modal')!);
}

export default ModalPortal;
