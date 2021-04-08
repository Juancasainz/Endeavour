import { Modal } from "@material-ui/core";

const Details = ({combo}) => {
    return ( 
        <div>

<Modal
  disablePortal
  disableEnforceFocus
  disableAutoFocus
  open
  aria-labelledby="server-modal-title"
  aria-describedby="server-modal-description"
  className={classes.modal}
  container={() => rootRef.current}
>
  <div className={classes.paper}>
    <h2 id="server-modal-title">Server-side modal</h2>
    <p id="server-modal-description">If you disable JavaScript, you will still see me.</p>
  </div>
</Modal>
        </div>
     );
}
 
export default Details;