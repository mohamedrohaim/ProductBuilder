import { useState } from "react";
import ProductCard from "./components/ProductCard"
import Modal from "./components/ui/Modal";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import { formInputsList } from "./data/IFormInput";
import { productList } from "./data";


const App= ()=>{

    const [isOpen, setIsOpen] = useState(false);


    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    } 
  
    const renderInputFormComponent=formInputsList.map((input)=>
       <div className="flex flex-col">
            <label className="block text-sm font-medium leading-6 text-gray-900">{input.label}</label>
            <Input type={input.type}  name={input.name}  id={input.id}
            className="shadow-md block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
/>
        </div>
    )
  

    const renderProductList=productList.map((product)=><ProductCard Iproduct={product} key={product.id} /> );
    return (
    <main className="container">
    <div className="mt-8 flex justify-between">
        <h1 className="font-bold">All Products</h1>
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-indigo-700 hover:bg-indigo-800 px-4 py-2 text-sm font-medium text-white"
        >
          Create Product
        </button>
    </div>
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductList}
        </div>
        <Modal isOpen={isOpen} closeModel={closeModal}  title="Create New Product Ya Negm :)">
            {renderInputFormComponent}
            <div className="flex justify-end space-x-2 mt-3 mb-2">
            <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={closeModal}>Cancel</Button>
            <Button  className="bg-red-700 hover:bg-red-800" onClick={closeModal}>Submit</Button>
            </div>
        </Modal>
        </main>

    )
}

export default App