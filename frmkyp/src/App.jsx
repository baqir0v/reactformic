import React from 'react';
import './App.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstname: Yup.string().min(3, 'Minimum 3 herf daxil etmelisiniz').max(15, 'Maximum 15 herf daxil etmelisiniz').required('Firstname bos olmasin'),
  lastname: Yup.string().min(4, 'Minimum 4 herf daxil etmelisiniz').max(20, 'Maximum 20 herf daxil etmelisiniz').required('Lastname bos olmasin'),
  email: Yup.string().email('Emaili duzgun daxil et').required('Email bos olmasin'),
  password: Yup.string().min(8, 'Sifre en az 8 isare olmalidir').required('Parol bos olmasin'),
});

const initialValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
};

const UserForm = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      localStorage.setItem('userData', JSON.stringify(values));
      console.log('Form submitted:', values);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <h1>Sign Up</h1>
        <div>
          <label htmlFor="firstname">Firstname:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstname}
          />
          {formik.touched.firstname && formik.errors.firstname ? (
            <div>{formik.errors.firstname}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="lastname">Lastname:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastname}
          />
          {formik.touched.lastname && formik.errors.lastname ? (
            <div>{formik.errors.lastname}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>

        <button className='btn' type="submit" disabled={!formik.isValid}>
          Submit
        </button>
      </form>
    </>
  );
};

export default UserForm;