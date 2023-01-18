import React from "react";
import Questionnaire from "./questionnaire";

function Modal(){
return (
    <>
    
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable border-0">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5 text-center" id="staticBackdropLabel">Backgound information</h1>
                        {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                    </div>
                    <div class="modal-body">
                        <Questionnaire/>

                    </div>
                    <div class="modal-footer border-0">
                    </div>
                </div>
            </div>
        </div>
    </>
)
}
export default Modal;