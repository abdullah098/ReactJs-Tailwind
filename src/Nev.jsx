import React from 'react';
import './index.css';

function Nev(){
    return(

        <>

        {/* <nav className="container-flex mx-auto grad border border-red-500 justify-center">
        
            <img src="#" alt="Logo image" className= "border border-black-500 mt-4" width="75px"height= "10px" />
            



            <u><a href="#" >Overview</a></u>
            <u><a href="#" className="ml-16 mt-8">Pricing</a></u>
            <u><a href="#" className="ml-16 mt-8">Case Study</a></u>
            <u><a href="#" className="ml-16 mt-8">FAQ's</a></u>
            
        
        </nav> */}

        <div className= "container-fluid absolute grad w-full h-auto grad border border-red-500" >
            
            <button type="button" className="signin mr-96 ml-8 mt-8">logo</button>
            <u><a href="#">Overview</a></u>
            <u><a href="#" className="ml-16 mt-8">Pricing</a></u>
            <u><a href="" className="ml-16 mt-8">Case Study</a></u>
            <u><a href="#" className="ml-16 mt-8">FAQ's</a></u>

            <button className = "ml-96 signin h-8 w-20" style={{fontSize:10}}>Sign in</button>
        </div>

        </>

    )
}

export default Nev;