/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, FormEvent, useState } from "react";
import ProductCard from "./components/ProductCard"
import Modal from "./components/ui/Modal";
import Button from "./components/ui/Button";
import ColorsCircle from "./components/ui/ColorsCircle";
import Input from "./components/ui/Input";
import { formInputsList } from "./data/IFormInput";
import { categories, colors, productList } from "./data";
import { IProduct } from "./data/IProduct";
import { validateInput } from "./validation";
import ValidationMessage from "./components/ui/ValidationMessage";
import { v4 as uuid } from 'uuid';
import Select from "./components/ui/SelectMenue";


const App= ()=>{

  const emptyProduct:IProduct={
    title:'',
    description:'',
    imageURL:'',
    price:'',
    id:'',
    colors:[],
    category: {name:'',imageURL:''}
  }

  const initialValidationMsg={
    title:'',
    description:'',
    imageURL:'',
    price:'',
  }
    const [isOpen, setIsOpen] = useState(false);
    const [product,setProduct]=useState<IProduct>(emptyProduct);
    const [validation,setValidation]=useState(initialValidationMsg);
    const [selectColors,setSelectColors]=useState<string[]>([]);
    const [selectedCategory, setSelected] = useState(categories[0])
    const [productToEdit, setProductToEdit] = useState<IProduct>(emptyProduct)
    const [isOpenEditModal, setIsOpenEditModal] = useState(false);
    



    const onchangeHandeler=(event:ChangeEvent<HTMLInputElement>)=>{
      const {name,value}=event.target
      setProduct({...product,[name]:value});
      setValidation({...validation,[name]:""});
    }

    const onchangeEditHandeler=(event:ChangeEvent<HTMLInputElement>)=>{
      const {name,value}=event.target
      setProductToEdit({...productToEdit,[name]:value});
      setValidation({...validation,[name]:""});
    }

    
    const validationErrors=validateInput(product)
    const hasValidatioErrorMsg=Object.values(validationErrors).some(value=>value!=='')
    const submitAddProductHandeler=(event:FormEvent<HTMLFormElement>)=>{
      event.preventDefault();
      if(hasValidatioErrorMsg){
        setValidation(validationErrors);
        console.log(validationErrors);
      }else{
      console.log("submited.........")
      product.id=uuid();
      product.category=selectedCategory
      product.colors=selectColors
      productList.push(product);
      closeModal();
      }
    }
    const submitEditProductHandeler=(event:FormEvent<HTMLFormElement>)=>{
      event.preventDefault();
      const productIndex = productList.findIndex(product => product.id === productToEdit.id);
        productList[productIndex] = productToEdit;
      closeEditModal();
      
    }
    

    function closeModal() {
      setIsOpen(false);
      setProduct(emptyProduct);
      setValidation(initialValidationMsg)
      setSelectColors([])
    }
  
    function openModal() {
      setIsOpen(true)
    } 
    
    function closeEditModal() {
      setIsOpenEditModal(false);
    }
    function OpenEditModal(){
      setSelected(productToEdit.category)
      setIsOpenEditModal(true)}
    const renderColorListComponent= colors.map((color)=>
          <ColorsCircle color={color} key={color} className="hover:h-6 hover:w-6"  
          onClick={()=>{
            if(!selectColors.some((c)=>c===color)){
                  setSelectColors((prevColors) => [...prevColors, color]);
            }
            console.log(selectColors)
          }}
          
          />
          
    )
    const renderEditColorListComponent= colors.map((color)=>
          <ColorsCircle color={color} key={color} className="hover:h-6 hover:w-6"  
          onClick={()=>{
            if (!productToEdit.colors.some((c) => c === color)) {
              const newColors = [...productToEdit.colors, color];
              setProductToEdit((prevProduct) => ({
                ...prevProduct,
                colors: newColors,
              }));
            }
            console.log(selectColors)
          }}
          
          />
          
    )
    const renderSelectedColors=selectColors.map((color)=><div key={color} className="w-auto  p-2 h-auto mt-0 mb-2 text-white rounded-md" style={{backgroundColor:color}}>
      {color}
    </div>)
    
    const renderEditSelectedColors=productToEdit.colors.map((color)=><div key={color} className="w-auto  p-2 h-auto mt-0 mb-2 text-white rounded-md" style={{backgroundColor:color}}>
      {color}
    </div>)

    const renderInputFormComponent=formInputsList.map((input)=>
       <div className="flex flex-col" key={input.id}>
            <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor={input.id}>{input.label}</label>
            <Input type={input.type}  name={input.name} 
            id={input.id}
            value={product[input.name]}
            onChange={onchangeHandeler}
            className="shadow-md block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
            <ValidationMessage msg={validation[input.name]} />

        </div> 
    )
    const renderEditInputFormComponent=formInputsList.map((input)=>
       
       <div className="flex flex-col" key={input.id}>
            <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor={input.id}>{input.label}</label>
            <Input type={input.type}  name={input.name} 
            id={input.id}
            value={productToEdit[input.name]}
            onChange={onchangeEditHandeler}
            className="shadow-md block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
            <ValidationMessage msg={validation[input.name]} />

        </div> 
    )
   

    const renderProductList=productList.map((product)=><ProductCard openEditModal={OpenEditModal} setProductToEdit={setProductToEdit} product={product} key={product.id} /> );
   console.log(productToEdit)
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
        
        {/* Edit product Modal*/}
        <Modal isOpen={isOpenEditModal} closeModel={closeModal}  title="Edit Product Ya Negm :)">
        <form onSubmit={submitEditProductHandeler} id="edit-product">
            {renderEditInputFormComponent}
            <Select selected={productToEdit.category} setSelected={setSelected} />
            <div className="block flex  space-x-3 h-9 items-center">
              {renderEditColorListComponent}
            </div>

            {productToEdit.colors.length > 0 && (
            <div>
              <label className="block text-sm font-medium leading-6 space-y-3 text-gray-900">
                Selected Colors
              </label>
              <div className="block flex flex-wrap space-x-2 rounded-md">
             {renderEditSelectedColors}
            </div>
            </div>
             )}

            <div className="flex justify-end space-x-2 mt-3 mb-2">
            <Button className="bg-indigo-700 hover:bg-indigo-800 "
             form="edit-product"
             type="reset"
              onClick={closeEditModal}
              >Cancel</Button>

            <Button  className="bg-red-700 hover:bg-red-800 " 
            form="edit-product"
             type="submit"
               onClick={()=>console.log(productToEdit)}
               >Submit</Button>
            </div>
            </form>
        </Modal>
        {/* Add product Modal*/}
        <Modal isOpen={isOpen} closeModel={closeModal}  title="Create New Product Ya Negm :)">
        <form onSubmit={submitAddProductHandeler} id="add-product">
            {renderInputFormComponent}
            <Select selected={selectedCategory} setSelected={setSelected} />
            <div className="block flex  space-x-3 h-9 items-center">
              {renderColorListComponent}
            </div>
           
            {selectColors.length > 0 && (
            <div>
              <label className="block text-sm font-medium leading-6 space-y-3 text-gray-900">
                Selected Colors
              </label>
              <div className="block flex flex-wrap space-x-2 rounded-md">
            {renderSelectedColors}
            </div>
            </div>
             )}

            <div className="flex justify-end space-x-2 mt-3 mb-2">
            <Button className="bg-indigo-700 hover:bg-indigo-800 "
             form="add-product"
             type="reset"
              onClick={closeModal}
              >Cancel</Button>

            <Button  className="bg-red-700 hover:bg-red-800 " 
            form="add-product"
             type="submit"
               onClick={()=>console.log(product)}
               >Submit</Button>
            </div>
        
          </form>
        </Modal>
        </main>

    )
}

export default App