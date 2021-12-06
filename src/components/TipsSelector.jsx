export default function TipsSelector () {
    return (
        <div className="basket-tips">
            <h4>Add tips</h4>
            <div className="tips-selector">
                <div className="tip-box">
                    <input type="radio" name="tip" id="0" defaultChecked />
                    <label htmlFor="0">
                        <p>0 DKK</p>
                    </label>
                </div>
                <div className="tip-box">
                    <input type="radio" name="tip" id="15" />
                    <label htmlFor="15">
                        <p>15 DKK</p>
                    </label>
                </div>
                <div className="tip-box">
                    <input type="radio" name="tip" id="25" />
                    <label htmlFor="25">
                        <p>25 DKK</p>
                    </label>
                </div>
                <div className="tip-box">
                    <input type="radio" name="tip" id="35" />
                    <label htmlFor="35">
                        <p>35 DKK</p>
                    </label>
                </div>
                <div className="tip-box">
                    <input type="radio" name="tip" id="50" />
                    <label htmlFor="50">
                        <p>50 DKK</p>
                    </label>
                </div>
            </div>
            <hr />
        </div>
    )
}