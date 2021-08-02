import React from "react"
import "./index.css"

function Footer(){
    return(

        <>

        <div className="flex border border-red-500 footer">
            <div className="container mx-auto border border-green-500">
                <div className="grid grid-cols-4 border border-pink-500 mt-8 mr-16 ml-16 mb-8">
                    <div classNmae="border border-pink-500">a</div>
                    <div>
                        <p>Company</p>
                        <div>
                            <ul className="mt-4">
                                <li><a href="#" style={{fontWeight:400, fontSize:12}}>About</a></li>
                                <li><a href="#" style={{fontWeight:400, fontSize:12}}>Blog</a></li>
                                <li><a href="#" style={{fontWeight:400, fontSize:12}}>Contact Us</a></li>
                                <li><a href="#" style={{fontWeight:400, fontSize:12}}>Pricing</a></li>
                                <li><a href="#" style={{fontWeight:400, fontSize:12}}>Testmonials</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p>Support</p>
                        <div>
                            <ul className="mt-4">
                                <li><a href="#" style={{fontWeight:400, fontSize:12}}>Help</a></li>
                                <li><a href="#" style={{fontWeight:400, fontSize:12}}>Team of service</a></li>
                                <li><a href="#" style={{fontWeight:400, fontSize:12}}>Legal</a></li>
                                <li><a href="#" style={{fontWeight:400, fontSize:12}}>Privacy Policy</a></li>
                                <li><a href="#" style={{fontWeight:400, fontSize:12}}>Status</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p>Get Updates and more</p>
                        <input type="text" name="email" placeholder="Enter your email"></input>
                        <button className="getStarted mt-4">abc</button>
                    </div>
                </div>
            </div>
        </div>


        </>



    )
}

export default Footer;