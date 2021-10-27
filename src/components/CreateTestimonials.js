import axios from "axios";
import { useState } from "react";
import styles from "../CreateTestimonials.css"

const CreateTestimonials = () => {
  
    const [name, setName ] = useState('');
    const [post, setPost ] = useState('');
    const [description, setDescription ] = useState('');
    const [photo, setPhoto ] = useState('');
    const [companyName, setCompanyName] = useState('');

    const [getPic, setGetPic] = useState('');
  
    const onChangeFile = (e) => {
      setPhoto(e.target.files[0])
    }

    // console.log(companyName);
    const addReviews = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("name", name);
      formData.append("post", post);
      formData.append("description", description)
      formData.append("photo", photo)
      formData.append("companyName", companyName)

       await axios.post("http://localhost:5000/api/testimonials",
        formData
      )
      .then((res) =>{
        console.log(res.data);
        setGetPic(res.data.photo);
      })
    
    //  await axios.post("http://localhost:5000/api/testimonials", {
    //     name,
    //     post,
    //     companyName,
    //     description,
    //     photo,
    //   })
    }

return(
        <>
        <div className="center border">
        <div>
						<h3>Testimonial</h3>
        </div>

        <div>
        <p className="headFormat"> Send Us Your Review!  </p>
        <p className="headFormat">Your opinion is important to us. Feel free share your thoughts using the form below.</p>

        <form className="center" onSubmit={addReviews} encType='multipart/form-data'>
        <div className="same-line">
        <div className="pad">
        <label htmlFor="name" >Name</label>
        </div>
        <input type="text" id="name" name="name" 
         onChange={(e) => setName(e.target.value)}  placeholder="Enter your Name"/>
        </div>

        <div className="same-line">
        <div className="pad">
        <label htmlFor="post" >Post</label>
        </div>
        <input type="text" id="post" name="post" 
         onChange={(e) => setPost(e.target.value)}  placeholder="Enter your Designation"/>
        </div>

        <div className="same-line">
        <div className="pad">
        <label htmlFor="companyName" >Company Name</label>
        </div>
        <input type="text" id="companyName" name="companyName" 
         onChange={(e) => setCompanyName(e.target.value)}  
         placeholder="Enter your Company Name"/>
        </div>

        <div className="same-line">
        <div className="pad">
        <label htmlFor="profilePic">Upload Your Image</label>
        </div>
        <input type="file" id="photo" name="photo" 
         onChange={onChangeFile} />
        </div>

        <div className="same-line">
        <div className="pad">
        <label htmlFor="description" >Description</label>
        </div>
        <textarea row="10" 
        placeholder="Tell us what do think about our product, services and supports!"
        onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
          
        <div className="btn">
          <button type="submit">Submit Your Review</button>
        </div>

        </form>
        </div>
        </div>
        </>
        )
}

export default CreateTestimonials;