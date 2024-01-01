
import { textSlicer } from "../Utilities/TextSlicer";
import { IProduct } from "../data/IProduct";
import Image from "./Image";
import Button from "./ui/Button";


interface IProps{
    Iproduct:IProduct
}
const ProductCard= (product:IProps)=>{
    const renderColorList = product.Iproduct.colors.map(
        (color, index) => (
          <span
            key={index}
            className={`inline-block w-5 h-5 rounded-full`}
            style={{ backgroundColor: color }}
          />
        )
      );
    return (
        <div className="border rounded-md p-2 md:max-w-2xl flex-cols ">
            <Image  src={product.Iproduct.imageURL} alt="image" className="rounded-md mb-2"/>
            <h3>{product.Iproduct.title}</h3>
            <p className="text-sm">{textSlicer(product.Iproduct.description,90)}</p>
            <div className="flex my-2 space-x-1">
                {renderColorList}
            </div>
            <div className="flex items-center justify-between my-2">
                <span>{product.Iproduct.price} $</span>
                <div className="flex items-center space-x-1">
                    <Image alt="seller" className="w-8 h-8 rounded-full object-center" src={product.Iproduct.category.imageURL} />
                    <h4 className="text-lg">{product.Iproduct.category.name}</h4>
                </div>
            </div>
            <div className="flex items-center justify-between space-x-2 mt-3">
                <Button className="bg-indigo-600  w-full" 
                onClick={()=>console.log("clicked.....")}  >Edit </Button>
                <Button className="bg-red-600  w-full">Delete </Button>
            </div>
            
            
        </div>

    );
}

export default ProductCard