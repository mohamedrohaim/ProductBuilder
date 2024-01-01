import { ReactNode } from "react";

interface IProps{
    children:ReactNode
    className?:string;
    onClick?:()=>void;
}

const Button= ({children,className, onClick}: IProps)=>{
    return (
        <>
        <button className={`${className}   text-white rounded-md p-2`} onClick={onClick} >{children}</button>
        </>

    )
}

export default Button