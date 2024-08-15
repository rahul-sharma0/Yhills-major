

function Contact(){
    return(
        <>
        <h1 className="header"> Contact Us</h1>
        <div className="container404">
            <form className="form404">
                <input className="input404" type="text" size={25} maxLength={25} placeholder="First Name"/>
                <input className="input404" type="text" size={25} maxLength={25} placeholder="Last Name"/><br/>
                <input className="input404" type="email" size={25} maxLength={25} placeholder="Email-id"/>
                <input className="input404" type="number" size={25} maxLength={25} placeholder="Contact Number"/><br/>
                <textarea className="input404" id="special404" type="text"  rows={10} cols={56} placeholder="Description"/>
                <button className="btn404">Submit</button>
            </form>
        </div>
        </>
    )
}

export default Contact;