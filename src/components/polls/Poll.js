const Poll = () => {
    return (
        <div className="container">
            <h1>Whta would your rathe</h1>
            <span className="info">You can answer only once</span>
            <form>
                <div className="answer">
                    <label for="optionOne">Question One</label>
                    <input type="radiobutton" name="optionOne" id="optionOne" />
                </div>
                <div className="answer">
                    <label for="optionTwo">Option Two</label>
                    <input type="radiobutton" name="optionTwo" id="optionTwo" />
                </div>
                <div className="error"></div>
                <div className="btn">Submit</div>
            </form>
        </div>
    )
}

export default Poll;