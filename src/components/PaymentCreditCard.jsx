export default function PaymentCreditCard() {

    function preventFormSubmission(e) {
        e.preventDefault();
    }

  return (
  <>
    <h3>Pay with Credit Card</h3>
    <div className="modal-payment-credit-card">
        <form id="form-credit-card">
            <div className="modal-payment-form-group">
                <label htmlFor="name">Name</label>
                <div className="input-container">
                   <input id="name" type="text" placeholder="John Doe" required onSubmit={preventFormSubmission} />
                   <div className="validation-icons">
                            <img className="icon-invalid" src="./images/icons/icon-invalid.svg" alt="Foobar icon invalid" />
                            <img className="icon-valid" src="./images/icons/icon-valid.svg" alt="Foobar icon valid" />
                        </div>
                </div>
            </div>
            <div className="modal-payment-form-group">
                <label htmlFor="ccn">Card number</label>
                <div className="input-container">
                  <input id="ccn" type="tel" inputMode="numeric" placeholder="1234 5678 9012 3456" pattern="[0-9]{16}" required onSubmit={preventFormSubmission} />
                  <div className="validation-icons">
                            <img className="icon-invalid" src="./images/icons/icon-invalid.svg" alt="Foobar icon invalid" />
                            <img className="icon-valid" src="./images/icons/icon-valid.svg" alt="Foobar icon valid" />
                        </div>
                </div>
            </div>
            <div className="modal-payment-form-bottom">
                <div className="modal-payment-form-group">
                    <label htmlFor="expiration">Expiration date</label>
                    <div className="input-container">
                       <input id="expiration" type="tel" inputMode="numeric" placeholder="MM/YY" pattern="(0[1-9]|10|11|12)/(2[1-9])" required onSubmit={preventFormSubmission} />
                       <div className="validation-icons">
                            <img className="icon-invalid" src="./images/icons/icon-invalid.svg" alt="Foobar icon invalid" />
                            <img className="icon-valid" src="./images/icons/icon-valid.svg" alt="Foobar icon valid" />
                        </div>
                    </div>
                </div>
                <div className="modal-payment-form-group">
                    <label htmlFor="security">Security code</label>
                    <div className="input-container">
                        <input id="security" type="tel" inputMode="numeric" pattern="[0-9]{3}" placeholder="123" required onSubmit={preventFormSubmission} />
                        <div className="validation-icons">
                            <img className="icon-invalid" src="./images/icons/icon-invalid.svg" alt="Foobar icon invalid" />
                            <img className="icon-valid" src="./images/icons/icon-valid.svg" alt="Foobar icon valid" />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
  </>
  );
}
