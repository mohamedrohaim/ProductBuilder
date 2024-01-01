import { useState } from "react";
import ProductCard from "./components/ProductCard"
import Modal from "./components/ui/Modal";
import { productList } from "./data"
import Button from "./components/ui/Button";


const App= ()=>{

    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    } 
  

    const renderProductList=productList.map((product)=><ProductCard Iproduct={product} key={product.id} /> );
    return (
    <main className="container">
    <div className="mt-8 flex justify-between">
        <h1 className="font-bold">Products</h1>
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-indigo-700 hover:bg-indigo-800 px-4 py-2 text-sm font-medium text-white"
        >
          Open dialog
        </button>
    </div>
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductList}
        </div>
        <Modal isOpen={isOpen} closeModel={closeModal}  title="Hello Ya Negm :)">
            <div className="flex justify-end space-x-2">
            <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={closeModal}>Cancel</Button>
            <Button  className="bg-red-700 hover:bg-red-800" onClick={closeModal}>Submit</Button>
            </div>
        </Modal>
        </main>

    )
}

export default App