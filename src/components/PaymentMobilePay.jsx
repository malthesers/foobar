export default function PaymentMobilePay(props) {
  
  function preventFormSubmission(e) {
    e.preventDefault();
  }

  function validateForm () {
    const form = document.querySelector("#form-mobile-pay");

    form.classList.add("submitted");
    
    if (form.checkValidity()) {
      props.setOrderDisplay(prevState => !prevState)
    }
  }


  return (
  <>
    <h3>Pay with MobilePay</h3>
    <div className="modal-payment-mobile-pay">
      <h3>Enter your phone number</h3>
      <form id="form-mobile-pay">
        <label htmlFor="phone"></label>
        <div className="input-container">
          <input type="tel" id="phone" name="phone" placeholder="12 34 56 78" pattern="[0-9]{8}" required onSubmit={preventFormSubmission} />
          <div className="validation-icons">
            <img className="icon-invalid" src="./images/icons/icon-invalid.svg" alt="Foobar icon invalid" />
            <img className="icon-valid" src="./images/icons/icon-valid.svg" alt="Foobar icon valid" />
          </div>
        </div>
      </form>
      <button onClick={validateForm}>Continue</button>
    </div>
  </>
  );
}
