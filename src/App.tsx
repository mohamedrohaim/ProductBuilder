import ProductCard from "./components/ProductCard"


const App= ()=>{
    return (
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 m-5 p-2 rounded-md">
          
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        </div>
        </>

    )
}

export default App