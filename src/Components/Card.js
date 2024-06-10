import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
function Card(props) {


    function objIncHandler() {
        if(props.count<=3){
        props.setCount(props.count+1); 
        }
        if(props.count==4){
            props.setCount(0);       
        }
    }
    function objDecHandler(){
        if(props.count==0){
            props.setCount(4);         
        }
        if(props.count>=1){
            props.setCount(props.count-1);
        }
            
    }
    function objRandHandler() {
        props.setCount(Math.floor(Math.random()*5));
        
    }

    useEffect(()=>{
        props.setObj(props.reviews[props.count]);
    },[props.count])

 
    return(<div className="relative flex flex-col w-[700px] mx-auto mt-12 bg-white rounded-lg py-10 px-16 max-w-[95%] card">
        <div className="flex justify-center">
        <img src={props.obj.image} className="md:absolute md:h-[150px] md:w-[150px] md:rounded-full md:left-10 md:top-[-20%] eng static rounded-full w-[150px] h-[150px]"></img></div>
        <h3 className="text-black text-2xl font-bold text-center">{props.obj.name}</h3>
        <p className="text-[#a78bfa] text-center ">{props.obj.job.toUpperCase()}</p>
        <div className="flex justify-center mt-4"><FaQuoteLeft className="text-[#a78bfa]"></FaQuoteLeft></div>
        <p className="py-4 text-center text-[#78748b]">{props.obj.text}</p>
        <div className="flex justify-center"><FaQuoteRight className="text-[#a78bfa]"></FaQuoteRight></div>
        <div className="flex justify-center gap-10 mt-6">
        <FaAngleLeft fontSize="2rem" onClick={objDecHandler} className="cursor-pointer text-[#a78bfa] hover:text-[#8b5cf6]"></FaAngleLeft>
        <FaAngleRight fontSize="2rem" onClick={objIncHandler} className="cursor-pointer text-[#a78bfa] hover:text-[#8b5cf6]"></FaAngleRight>
        </div>
        <div className="flex justify-center mt-8">
            <button onClick={objRandHandler} className="bg-[#a78bfa] hover:bg-[#8b5cf6] transition-all duration-300 text-white rounded-md py-3 px-12 font-bold text-[1.25rem]">Surprise Me</button>
        </div>
    </div>);
}

export default Card;