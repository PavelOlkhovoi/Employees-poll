
const Authorization = () => {
    return (
        <div className="container">
            <h1>Please log in</h1>
            <form>
                <labe>Email</labe>
                <input id="email" type="email" placeholder="Type your email" />
                <label>Password</label>
                <input id="password" name="password" type="password"/>
                <dive className="error"></dive>
                <button onCliclk={()=> alert('Hallo')}>Submut</button>
            </form>
        </div>
    )
}

export default Authorization;