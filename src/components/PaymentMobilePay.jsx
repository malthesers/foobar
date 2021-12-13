export default function PaymentForm(props) {
  return (
  <>
    <h3>Pay with MobilePay</h3>
    <div className="modal-payment-mobile-pay">
      <h3>Enter your phone number</h3>
      <form>
        <label htmlFor="phone"></label>
        <input type="tel" id="phone" name="phone" placeholder="12 34 56 78" pattern="[0-9]{8}" required/>
      </form>
      <button onClick={() => props.setOrderDisplay(prevState => !prevState)}>Continue</button>
    </div>
  </>
  );
}
