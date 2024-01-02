export const validateInput = (product:{
    title:string,
    description:string,
    imageURL:string,
    price:string,
  }) => {
    const errors= { title:'',description:'', imageURL:'',price:''} 
    if (!product.title.trim()) {
      errors.title = 'Title is required';
    }

    if (!product.description.trim()) {
      errors.description = 'Description is required';
    }

    if (!product.imageURL.trim()) {
      errors.imageURL = 'Image URL is required';
    }

    if (!product.price.trim()) {
      errors.price = 'Price is required';
    } else if (isNaN(Number(product.price))) {
      errors.price = 'Price must be a valid number';
    }


    return errors
  };