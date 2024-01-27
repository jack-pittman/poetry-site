import '../body.css';


export default function ContactBody() {
    return (
        <div className="body">
            <div className="canvas">
                <div className="accent-container">
                    <div className='contact-row'>
                        <div id="portrait-container">
                            <img src="./media/images/portrait.jpeg" id="portrait" alt="Portait of Caroline Pittman."/>
                        </div>
                        <div className="bio-text-container" id="contact">
                            <div className="contact-button">
                                <p>contact</p>
                            </div>
                            <p id="bodyText">
                                For readings, lectures, classroom visits, or requests for work, contact me at csppoetry@gmail.com
                            </p>
                            <br/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
