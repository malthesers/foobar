export default function PaymentForm() {

    function preventFormSubmission(e) {
        e.preventDefault();
    }

  return (
  <>
    <h3>Pay with Credit Card</h3>
    <div className="modal-payment-credit-card">
        <form>
            <div className="modal-payment-form-group">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="John Doe" required onSubmit={preventFormSubmission} />
            </div>
            <div className="modal-payment-form-group">
                <label htmlFor="ccn">Card number</label>
                <input id="ccn" type="tel" inputMode="numeric" placeholder="1234 5678 9012 3456" pattern="[0-9]{16}" required onSubmit={preventFormSubmission} />
            </div>
            <div className="modal-payment-form-bottom">
                <div className="modal-payment-form-group">
                    <label htmlFor="expiration">Expiration date</label>
                    <input id="expiration" type="tel" inputMode="numeric" placeholder="MM/YY" pattern="(0[1-9]|10|11|12)/(2[1-9])" required onSubmit={preventFormSubmission} />
                </div>
                <div className="modal-payment-form-group">
                    <label htmlFor="security">Security code</label>
                    <input id="security" type="tel" inputMode="numeric" pattern="[0-9]{3}" placeholder="123" required onSubmit={preventFormSubmission} />
                </div>
            </div>
        </form>
    </div>
  </>
  );
}
