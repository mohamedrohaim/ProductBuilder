
import { textSlicer } from "../Utilities/TextSlicer";
import { IProduct } from "../data/IProduct";
import Image from "./Image";
import Button from "./ui/Button";


interface IProps{
    product:IProduct;
    setProductToEdit:(product:IProduct)=>void;
    openEditModal:()=>void;
}
const ProductCard= ({product,openEditModal,setProductToEdit}:IProps)=>{
    const renderColorList = product.colors.map(
        (color, index) => (
          <span
            key={index}
            className={`inline-block w-5 h-5 rounded-full`}
            style={{ backgroundColor: color }}
          />
        )
      );

      const onEdit=()=>{
        setProductToEdit(product);
        openEditModal();
      }
    
    return (
        <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col space-y-3">
            <Image  src={product.imageURL} alt="image" className="rounded-md h-52 w-full lg:object-cover"/>
            <h3>{product.title}</h3>
            <p className="text-xs text-gray-500 break-words">{textSlicer(product.description,90)}</p>
            <div className="flex my-2 space-x-1">
                {renderColorList}
            </div>
            <div className="flex items-center justify-between my-2">
                <span>{product.price} $</span>
                <div className="flex items-center space-x-1">
                    <Image alt="seller" className="w-8 h-8 rounded-full object-center" src={product.category.imageURL} />
                    <h4 className="text-lg">{product.category.name}</h4>
                </div>
            </div>
            <div className="flex items-center justify-between space-x-2">
                <Button className="bg-indigo-600  w-full" 
                onClick={onEdit}  >Edit </Button>
                <Button className="bg-red-600  w-full">Delete </Button>
            </div>
            
            
        </div>

    );
}

export default ProductCard


