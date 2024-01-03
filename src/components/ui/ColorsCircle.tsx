import {  DOMAttributes } from "react";

interface IProps extends DOMAttributes<HTMLSpanElement>{
color:string;
className:string;
}

const ColorsCircle= ({color,className,...props}: IProps)=>{
    return (
        <span
            className={`inline-block w-5 h-5 rounded-full ${className}`}
            style={{ backgroundColor: color }}
            {...props}
         />

    )
}

export default ColorsCircle