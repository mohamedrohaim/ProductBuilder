/* eslint-disable @typescript-eslint/no-unused-vars */
import { InputHTMLAttributes } from "react"

interface IProps extends InputHTMLAttributes<HTMLInputElement>{} 
const Input= ({...prop}:IProps)=>{
    return <input {...prop} /> ;
}

export default Input