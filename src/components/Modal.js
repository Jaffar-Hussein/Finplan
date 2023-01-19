import React from "react";
import Questionnaire from "./questionnaire";

function Modal(){
return (
    <>
    
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable border-0">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5 text-center" id="staticBackdropLabel">Backgound information</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <Questionnaire/>
                    </div>
                    <div className="modal-footer border-0">
                    </div>
                </div>
            </div>
        </div>
    </>
)
}
export default Modal;