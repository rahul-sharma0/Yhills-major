import {useFormik} from "formik";
import * as Yup from 'yup';
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";



function Update_product(){

    const { id}=useParams();
    const [products, setProducts]=useState(null);

    const navigate= useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:5000/products/${id}`)

        .then(response =>{
          setProducts(response.data);
        })
    
        .catch(error =>{
          console.error('There was an error in fetching the vehicle data',error)
        })
    },[id])

    const formik=useFormik({
        initialValues: {
            image: products?.image || '' ,
            name: products?.name || '',
            price: products?.price || '',
            size: products?.size || '',
            category: products?.category || '' ,
            ingredients: products?.ingredients || ''
        },
        enableReinitialize:true,

        validationSchema: Yup.object({
            image: Yup.string().required('Image URL is required'),
            name: Yup.string()
            .min(4,'Name must be atleast 4 characters')
            .required('Name is required'),
            price: Yup.number()
            .min(1,'Price must be greater than 0')
            .required('Price is required'),
            size: Yup.string()
            .min(4,'Size must be atleast 5 characters')
            .required('Sizes are required'),
            category: Yup.string()
            //.min(4,'Seater must be atleast 5 seats')
            .max(10,'Category must be less than 10 characters')
            .required('Category is required'),
            ingredients: Yup.string()
            .max(150,'Ingredients must be specified in 150 words')
            .required('Ingredients are requied'),
             // name: Yup.string()
            // .min(4,'Name must be atleast 4 characters')
            // .required('Name is required'),

        }),
        onSubmit:(values, {setSubmitting, resetForm, setStatus})=>{
            axios.put(`http://localhost:5000/products/${id}`,values)
            .then(response=>{
                setStatus('Success');
                resetForm();
                navigate('/our-product')
            })
            .catch(error=>{
                setStatus('Error');
            })
            .finally(()=>{
                setSubmitting(false);
            });
        },
    });

    


    return(
        <div className="container mt-4">
        <h2>Update Existing Product</h2>
        <form onSubmit={formik.handleSubmit}>
            <div className="mb-3"> 
                <label htmlFor="image" className="form-label">Image URL</label>
                    <input
                    id="image"
                    name="image"
                    type="text"
                    className="form-control"
                     onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    value={formik.values.image}
                    />

                    {
                        formik.touched.image && formik.errors.image ?(
                            <div className="text-danger">{formik.errors.image}</div>
                        ):null
                    }
            </div>
            <div className="mb-3"> 
                <label htmlFor="name" className="form-label">Name</label>
                    <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control"
                     onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    value={formik.values.name}
                    />

                    {
                        formik.touched.name && formik.errors.name ?(
                            <div className="text-danger">{formik.errors.name}</div>
                        ):null
                    }
            </div>
            <div className="mb-3"> 
                <label htmlFor="price" className="form-label">Price</label>
                    <input
                    id="price"
                    name="price"
                    type="number"
                    className="form-control"
                     onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    value={formik.values.price}
                    />

                    {
                        formik.touched.price && formik.errors.price ?(
                            <div className="text-danger">{formik.errors.price}</div>
                        ):null
                    }
            </div>
            <div className="mb-3"> 
                <label htmlFor="size" className="form-label">Size</label>
                    <input
                    id="size"
                    name="size"
                    type="text"
                    className="form-control"
                     onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    value={formik.values.fuel}
                    />

                    {
                        formik.touched.size && formik.errors.size ?(
                            <div className="text-danger">{formik.errors.size}</div>
                        ):null
                    }
            </div>
            <div className="mb-3"> 
                <label htmlFor="category" className="form-label">Category</label>
                    <input
                    id="category"
                    name="category"
                    type="text"
                    className="form-control"
                     onChange={formik.handleChange}
                    //  onBlur={formik.handleBlur}
                    value={formik.values.category}
                    />

                    {
                        formik.touched.category && formik.errors.category ?(
                            <div className="text-danger">{formik.errors.category}</div>
                        ):null
                    }
            </div>
            <div className="mb-3"> 
                <label htmlFor="ingredients" className="form-label">Ingredients</label>
                    <input
                    id="ingredients"
                    name="ingredients"
                    type="text"
                    className="form-control"
                     onChange={formik.handleChange}
                    //  onBlur={formik.handleBlur}
                    value={formik.values.ingredients}
                    />

                    {
                        formik.touched.ingredients && formik.errors.ingredients ?(
                            <div className="text-danger">{formik.errors.ingredients}</div>
                        ):null
                    }
            </div>

                    <button type="submit" className="btn btn-primary">Submit</button>

        </form>
      </div>
      
    )
}




export default Update_product;