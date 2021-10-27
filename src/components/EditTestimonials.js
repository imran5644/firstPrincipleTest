import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditTestimonials = () => {
    const [id, setID] = useState(null);
    const [name, setName ] = useState('');
    const [post, setPost ] = useState('');
    const [description, setDescription ] = useState('');
    const [photo, setPhoto ] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [testimonialsData, setTestimonialsData] = useState([]);

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setName(localStorage.getItem('Name'));
        setPost(localStorage.getItem('Designation'));
        setCompanyName(localStorage.getItem('Company Name'));
        setDescription(localStorage.getItem('Description'));
        setPhoto(localStorage.getItem('Profile Image'));
    }, []);

    const onChangeFile = (e) => {
        setPhoto(e.target.files[0])
      }

    const editReviews = async() => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("post", post);
        formData.append("description", description)
        formData.append("photo", photo)
        formData.append("companyName", companyName)
  
        await axios.put(`http://localhost:5000/api/testimonials/${id}`,
          formData
        )
        .then(() => {
            getData();
            localStorage.clear();
        })
        // await axios.put(`http://localhost:5000/api/testimonials/${id}`,{
        //     name,
        //     post,
        //     companyName,
        //     description,
        //     photo,
        // })
        
    }

    const getData = () => {
        axios.get('http://localhost:5000/api/testimonials')
        .then((response) => {
            setTestimonialsData(response.data);
        })
      }

    return (
        <>
        <div className="center border">
        <div>
			<h3>Update Testimonial</h3>
        </div>

        <div>
        <p className="headFormat"> Send Us Your Review!  </p>
        <p className="headFormat">Your opinion is important to us. Feel free share your thoughts using the form below.</p>

        <form className="center" onSubmit={editReviews} encType='multipart/form-data'>
        <div className="same-line">
        <div className="pad">
        <label htmlFor="name" >Name</label>
        </div>
        <input type="text" id="name" name="name" value={name}
         onChange={(e) => setName(e.target.value)}  placeholder="Enter your Name"/>
        </div>

        <div className="same-line">
        <div className="pad">
        <label htmlFor="post" >Post</label>
        </div>
        <input type="text" id="post" name="post" value={post}
         onChange={(e) => setPost(e.target.value)}  placeholder="Enter your Designation"/>
        </div>

        <div className="same-line">
        <div className="pad">
        <label htmlFor="post" >Comapny Name</label>
        </div>
        <input type="text" id="companyName" name="companyName" value={companyName}
         onChange={(e) => setCompanyName(e.target.value)}  placeholder="Enter your Company Name"/>
        </div>

        <div className="same-line">
        <div className="pad">
        <label htmlFor="profilePic">Upload Your Image</label>
        </div>
        <input type="file" id="photo" filename="photo" 
         onChange={onChangeFile} />
        </div>

        <div className="same-line">
        <div className="pad">
        <label htmlFor="description" >Description</label>
        </div>
        <textarea row="10" id="description" name="description" value={description}
        placeholder="Tell us what do think about our product, services and supports!"
        onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
          
        <div className="btn">
          <button type="submit">Update Your Review</button>
        </div>

        </form>
        </div>
        </div>
        </>
    )
}

export default EditTestimonials;