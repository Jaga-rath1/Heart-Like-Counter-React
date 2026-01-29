import { useState } from "react";
export default function LikeButton(){
    const[isClicked,SetisCliked]=useState(false);
    const[count,Setcount]=useState(0);
    let ClickedButton = ()=>{
        console.log("Button Clicked");
        SetisCliked(!isClicked);
        Setcount(count+1);
    }
    let likeStyles = {color:"red"};
    return(
        <div>
        <h3>States in React</h3>
        <h4>Count = {count}</h4>
        <p onClick = {ClickedButton}>
            {
                isClicked ? (<i className="fa-regular fa-heart" ></i>):
                (<i className="fa-solid fa-heart" style={likeStyles}></i>)
            }
            
        </p>
        </div>
    )
}