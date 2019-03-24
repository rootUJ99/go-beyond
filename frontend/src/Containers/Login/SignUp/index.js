import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const Signup = (props) => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
        props.onSubmitSignUp(values)
      }}
    >
      {({ errors, touched, values }) => (
        <Form>
          <Field name="firstName" />
          {errors.firstName && touched.firstName ? (<div>{errors.firstName}</div>) : null}
          <Field name="lastName" />
          {errors.lastName && touched.lastName ? (<div>{errors.lastName}</div>) : null}
          <Field name="username" />
          {errors.lastName && touched.lastName ? (<div>{errors.lastName}</div>) : null}
          <Field name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <Field name="password" type="password" />
          {errors.password && touched.password ? <div>{errors.password}</div> : null}
          <button type="submit" >Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);
export default Signup