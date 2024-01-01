import ProductCard from "./components/ProductCard"
import { productList } from "./data"



const App= ()=>{
    const renderProductList=productList.map((product)=><ProductCard Iproduct={product} key={product.id} /> );
    return (
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-4 m-5 p-2 rounded-md">
          
        {renderProductList}
        </div>
        </>

    )
}

export default App