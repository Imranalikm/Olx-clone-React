import React, { Fragment,useContext, useState }  from 'react';
import './Create.css';
import Header from '../Header/Header';
import {AuthContext,FirebaseContext} from "./../../store/Context";
import { useHistory}  from 'react-router-dom';

const Create = () => {
  const{firebase} =useContext(FirebaseContext);
  const{user} =useContext(AuthContext);
  const[name,setName] =useState('');
  const[category,setCategory]=useState('');
  const[price,setPrice] =useState('');
  const[image,setImage] =useState(null);
  const date = new Date();
  const history =useHistory();
  const handleSubmit=()=>{
     
     firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
       console.log(url);
       firebase.firestore().collection('products').add({
        name,
        category,
        price,
        url,
        userId:user.uid,
        createdAt:date.toDateString()
       })
       history.push('/');
      })
     })
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
         
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" step=".01" min="0" value={price}
              onChange={(e)=>setPrice(e.target.value)}/>
            <br />
        
          <br />
          <img alt='posts' width="200px" height="200px" src={image ? URL.createObjectURL(image):" "}></img>
         
            <br />
            <input  onChange={(e)=>{
               console.log(e.target.files[0]);
              setImage(e.target.files[0])
            }} 
              type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
        
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
