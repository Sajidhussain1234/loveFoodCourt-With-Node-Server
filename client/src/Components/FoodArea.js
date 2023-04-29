import ProCategory from "./ProCategory";
// import { Category } from "../JSON/products";
import { useEffect, useState } from "react";
import axios from "axios";
// const qs = require("qs");


const FoodArea = () => {
  const [categorydata, setCategoryData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false)

  const getApiData = async () => {
    try {
      const res = await axios.get("http://localhost:1337/api/categories");
      const dt = await res.data.data;
      setCategoryData(dt);
  
      const productRes = await axios.get(
        "http://localhost:1337/api/products?populate=*"
      );
      const data = await productRes.data.data;
      setProductData(data);
      setIsLoading(false);

    } catch (error) {
      console.log(error.message)
      setIsLoading(false);
      setIsError(true); 
    }
 
  };  

  useEffect(() => {
    getApiData();
    
  }, []);

  if(isLoading) return <h3 className="text-white">Loading...</h3>
  if(isError) return <h3 className="text-white">Some thing went wrong...</h3>

  return (    
    <div className="food-area">      
      {categorydata.map((category) => (
        <ProCategory
          key={category.id}
          categoryWiseData={category}
          productData={productData}
        />        
      ))}
      
    </div>
  );
};

export default FoodArea;
