import { Container } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
const INIT_BRAND = {
  name: '',
  images: []
}


const AddBrandForm = () => {
  const [brand, setBrand] = useState(INIT_BRAND);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const {images, ...data} = brand;
    formData.append("data", JSON.stringify(data));
    images.forEach( ({file}) => {
      formData.append(`files.images`, file, file.name);
    });
    console.log("FormData", Object.fromEntries(formData.entries()));

    axios
      .post("http://localhost:1337/api/brands", formData)
      .then(res => {
        console.log("Success", res.data);
        setBrand(INIT_BRAND);
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
    setBrand({...brand, [name]: value});
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
    setBrand({...brand, images});
  }

 

  return (
    <div>
      <Container>
        <div className="my-5">
          <form className="custom-file" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label text-white">Brand name</label>
              <input type="text" className="form-control" id="name" name="name" value={brand.name} onChange={onChangeInput} />
              <label htmlFor="formFile" className="form-label text-white"> Brand logo</label>
              <input className="form-control" type="file" id="formFile" name="files" onChange={onChangeFile} />
            </div>
            <div className="col-12 mb-5">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </Container>
      {/* <BrandsLogo formData = {formData}/> */}
    </div>
  )
}

export default AddBrandForm;