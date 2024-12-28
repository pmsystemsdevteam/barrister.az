import React, { useEffect, useState } from 'react'
import './addPage.scss'
import { Helmet } from "react-helmet";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'

function AddPage() {

  const [product, setProduct] = useState([])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState(null)

  async function getProduct() {
    const res = await axios.get("http://localhost:3000/exampart1")
    setProduct(res.data)
  }

  async function deleteProduct(id) {
    await axios.delete(`http://localhost:3000/exampart1/${id}`)
    getProduct()
  }


  useEffect(() => {
    getProduct()
  }, [])

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add</title>
      </Helmet>
<div className="notMean"></div>
      <div className="addPage">
        <Formik
          initialValues={{ icon: '', name: '', comment: '' }}
          validationSchema={Yup.object({
            icon: Yup.string()
            .matches(
              /^[a-zA-Z]+$/,
              'createdOn is not in correct format',
            )
              .required('Required'),
            name: Yup.string()
              .required('Required'),
            comment: Yup.string()
              .required('Required')
          })}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            try {
              await axios.post("http://localhost:3000/exampart1", values)
              alert(JSON.stringify(values, null, 2));
              getProduct()
              setSubmitting();
resetForm()
            } catch (error) {

            }
          }}
        >
          <Form>
            <label htmlFor="icon">Icon</label>
            <Field name="icon" type="text" />
<div className="errorBox">
<ErrorMessage name="icon" />
</div>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" />
            <div className="errorBox">
<ErrorMessage name="name" />
</div>
            <label htmlFor="comment">Comment</label>
            <Field name="comment" type="text" />
            <div className="errorBox">
<ErrorMessage name="comment" />
</div>
            <button type="submit">Submit</button>
          </Form>
        </Formik>

  <table>
  <thead>
          <tr>
            <th>Name</th>
            <th>Icon</th>
            <th>Comment</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>

          {
            product && product
              .filter((x) => x.name.toLowerCase().includes(search.toLowerCase()))
              .sort((a, b) => {
                if (sort && sort.asc === true) {
                  return (a[sort.property] > b[sort.property]) ? 1 : ((b[sort.property] > a[sort.property]) ? -1 : 0)
                }
                else if (sort && sort.asc === false) {
                  return (a[sort.property] < b[sort.property]) ? 1 : ((b[sort.property] < a[sort.property]) ? -1 : 0)
                }
                else {
                  return 0
                }
              })
              .map((item) => (
                <tr>
                  <td>{item.name}</td>
                  <td><i className={item.icon}></i></td>
                  <td> {item.comment}</td>
                  <td><button onClick={() => deleteProduct(item._id)}>Delete</button></td>
                </tr>
              ))
          }
        </tbody>
  </table>
        <div className="SearchBox">
        <input type="text" placeholder='Search' onChange={(e) => setSearch(e.target.value)} />
       <div className="buttons">
       <button onClick={() => setSort({ property: "name", asc: true })}>A-z</button>
        <button onClick={() => setSort({ property: "name", asc: false })}>Z-a</button>
        <button onClick={() => setSort(null)}>Default</button>
       </div>
        </div>
      </div>
    </>

  )
}

export default AddPage