interface IProps{
 msg:string
}

const ValidationMessage= ({msg}: IProps)=>{
    return msg? <span className="mt-1 mb-2 block text-xs text-red-500 break-words">{msg}</span>:null

    
}

export default ValidationMessage