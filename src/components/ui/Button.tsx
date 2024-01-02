import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children:ReactNode
    className?:string;
    onClick?:()=>void;
}

const Button= ({children,className,...prop}: IProps)=>{
    return (
        <>
        <button className={`${className}   text-white rounded-md p-2`}  {...prop}>{children}</button>
        </>

    )
}

export default Button