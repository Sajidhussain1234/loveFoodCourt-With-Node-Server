import React from "react";
import axios from "axios";
import { Container, Button, Form } from "react-bootstrap";

const INIT_PRODUCT = {
  title: '',
  description: '',
  price: '',
  images: []
}

const AddProductForm = () => {
  const [product, setProduct] = React.useState(INIT_PRODUCT);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const {images, ...data} = product;
    formData.append("data", JSON.stringify(data));
    images.forEach( ({file}) => {
      formData.append(`files.images`, file, file.name);
    });
    console.log("FormData", Object.fromEntries(formData.entries()));

    axios
      .post("http://localhost:1337/api/products", formData)
      .then(res => {
        console.log("Success", res.data);
        setProduct(INIT_PRODUCT);
        e.target.reset();
      })
      .catch(error => {
        if(error?.response?.data?.error)
          console.log(error?.response?.data?.error);
        else
          console.error("Error:", error.message);
      });
  };

  const onChangeInput = (e) => {
    const {name, value} = e.target;
    // can do validation before updaing state
    setProduct({...product, [name]: value});
  }

  const onChangeFile = (e) => {
    const fileList = e.target.files;
    // can do validation on max number of files that a user can upload 
    console.log("#Files: ", fileList.length);
    const images = [];
    for(const file of fileList){
      // can do validation on file type and file size
      images.push({file, previewUrl: URL.createObjectURL(file)})
      // console.log(`File: ${file}, previewUrl: ${URL.createObjectURL(file)})`)
    }
    setProduct({...product, images});
  }

  return (
        <Container className="my-5">
        <h3 className="text-white my-2">Data Entery Form - Add New Product (State)</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-1" controlId="postDataForm">
            <Form.Label className="text-white">Title</Form.Label>
            <Form.Control type="text" name="title" 
              value={product.title} onChange={onChangeInput}
            />
          </Form.Group>

          <Form.Group className="mb-1" controlId="postDataForm">
            <Form.Label className="text-white">Description</Form.Label>
            <Form.Control type="text" name="description"
              value={product.description} onChange={onChangeInput}
            />
          </Form.Group>

          <Form.Group className="mb-1" controlId="postDataForm">
            <Form.Label className="text-white mt-2">Price</Form.Label>
            <Form.Control type="number" name="price"
              value={product.price} onChange={onChangeInput}
            />
          </Form.Group>

          <Form.Group controlId="postDataForm" className="mb-1">
            <Form.Label className="text-white">Images</Form.Label>
            <Form.Control type="file" name="images" multiple={true}
              onChange={onChangeFile}
            />
          </Form.Group>

          <div className="my-3">{
            product.images.map(({previewUrl}) => (
              <img key={previewUrl} className="mx-3" src={previewUrl} height={60} alt={previewUrl}/>))
          }</div>
          
          <Button className="mt-2" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
    </Container>
  );
};

export default AddProductForm;






// This was my code -- that causes some error

// import { useState, useRef } from "react";
// import { Container } from "react-bootstrap";
// // import Button from "react-bootstrap/Button";
// // import Form from "react-bootstrap/Form";
// // import axios from "axios";

// const AddItemForm = () => {
//   const formRef = useRef(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = {};
//     const formData = new FormData();
//     const form = e.target;

//     // const form = formRef.current;
//     console.log(form);

//     // Object.fromEntries(
//     //   form.entries(({ name, type, value, files, ...element }) => {
//     //     if (!["submit", "file"].includes(type)) {
//     //       data[name] = value;
//     //     } else if (type === "file") {
//     //       files.forEach((file) => {
//     //         formData.append(`files.${name}`, file, file.name);
//     //       });
//     //     }
//     //   })
//     // );

//     form.elements.forEach(({ name, type, value, files, ...element }) => {
//       if (!["submit", "file"].includes(type)) {
//         data[name] = value;
//       } else if (type === "file") {
//         files.forEach((file) => {
//           formData.append(`files.${name}`, file, file.name);
//         });
//       }
//     });

//     form.append("data", JSON.stringify(data));
//     const out = Object.fromEntries(formData.entries());
//     console.log(out);
// // 
//     //  axios
//     //     .post("http://localhost:1337/api/products", { data: formData })
//     //     .then((res) => console.log(res.data));
//     //     .catch((error) => console.error("Error:", error));
//     //   alert("New item added");
//     //   formRef.current.reset();
//   };

//   return (
//     <Container>
//       <div className="my-5">
//         <h3 className="text-white my-2">Add New Item</h3>
//         <form ref={formRef} onSubmit={handleSubmit}>
//           <label htmlFor="title" className="form-label text-white">
//             Title
//           </label>
//           <input type="text" className="form-control" id="title" name="title" />
//           <label htmlFor="description" className="form-label text-white">
//             Description
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="description"
//             name="description"
//           />
//           <label htmlFor="price" className="form-label text-white">
//             Price
//           </label>
//           <input
//             type="number"
//             className="form-control"
//             id="price"
//             name="price"
//           />
//           <label htmlFor="category" className="form-label text-white">
//             Category
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="category"
//             name="category"
//           />
//           <label htmlFor="formFile" className="form-label text-white">
//             Image
//           </label>
//           <input
//             className="form-control"
//             type="file"
//             id="formFile"
//             name="files"
//           />
//           <button type="submit" className="btn btn-primary mt-3">
//             Submit
//           </button>
//         </form>
//       </div>
//     </Container>
//   );
// };

// export default AddItemForm;

// // React Bootstrap
// // import { useState, useRef } from "react";
// // import { Container } from "react-bootstrap";
// // import Button from "react-bootstrap/Button";
// // import Form from "react-bootstrap/Form";
// // import axios from "axios";

// // const AddItemForm = () => {
// //   const formRef = useRef(null);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const data = {};
// //     const formData = new FormData();

// //       Form.elements
// //         .forEach(({ name, type, value, files, ...element }) => {
// //           if (!['submit', 'file'].includes(type)) {
// //             data[name] = value;
// //           } else if (type === 'file') {
// //             files.forEach((file) => {
// //               formData.append(`files.${name}`, file, file.name);
// //             });
// //           }
// //         });

// //     formData.append('data', JSON.stringify(data));
// //     const out = Object.fromEntries(formData.entries());
// //     console.log(out);

// //   //  axios
// //   //     .post("http://localhost:1337/api/products", { data: formData })
// //   //     .then((res) => console.log(res.data))
// //   //     .catch((error) => console.error("Error:", error));
// //   //   alert("New item added");
// //   //   formRef.current.reset();
// //   };

// //   return (
// //     <Container>
// //       <div className="my-5">
// //         <h3 className="text-white my-2">Add New Item</h3>

// //         <Form ref={formRef} onSubmit={handleSubmit}>
// //           <Form.Group className="mb-1" controlId="postDataForm">
// //             <Form.Label className="text-white">Title</Form.Label>
// //             <Form.Control type="text" name="title" />
// //           </Form.Group>
// //           <Form.Group className="mb-1" controlId="postDataForm">
// //             <Form.Label className="text-white">Description</Form.Label>
// //             <Form.Control type="text" name="description" />
// //           </Form.Group>
// //           <Form.Group className="mb-1" controlId="postDataForm">
// //             <Form.Label className="text-white mt-2">Price</Form.Label>
// //             <Form.Control type="text" name="price" />
// //           </Form.Group>
// //           <Form.Group className="mb-1" controlId="postDataForm">
// //             <Form.Label className="text-white">Category</Form.Label>
// //             <Form.Control type="text" name="category" />
// //           </Form.Group>
// //           <Form.Group controlId="postDataForm" className="mb-1">
// //             <Form.Label className="text-white">image</Form.Label>
// //             <Form.Control type="file" name="cover" />
// //           </Form.Group>
// //           <Button className="mt-2" variant="primary" type="submit">
// //             Submit
// //           </Button>
// //         </Form>
// //       </div>
// //     </Container>
// //   );
// // };

// // export default AddItemForm;
