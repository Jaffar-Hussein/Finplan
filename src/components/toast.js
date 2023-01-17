import React from "react";

function Toast({message}){
return (
    <>
        <div className="toast-container position-fixed bottom-0 end-0 p-3 ">
  <div id="liveToast" class={`toast  align-items-center text-danger data-bs-delay='{"show":0,"hide":150}' ${message ? 'show fade' :''}`} data-bs-custom-class="beautifier"  role="alert" aria-live="assertive" aria-atomic="true">
  <div className="d-flex">
    <div className="toast-body">
      {message}
    </div>
    <button type="button" className="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  </div>
</div>
    </>
)
}

export default Toast;