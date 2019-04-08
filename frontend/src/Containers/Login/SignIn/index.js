import React from 'react'
import Button from '../../../Components/Button';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .required('Required'),
  password: Yup.string()
    .required('Required'),
});

const Signup = (props) => (
  <div>
    <h1>SignIn</h1>
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
        props.onSubmitSignIn(values)

      }}
    >
      {({ errors, touched, values }) => (
        <Form>
          <Field name="username" type="username" />
          {errors.username && touched.username ? <div>{errors.username}</div> : null}
          <Field name="password" type="password" />
          {errors.password && touched.password ? <div>{errors.password}</div> : null}
          <Button type="submit" >Submit</Button>
        </Form>
      )}
    </Formik>
  </div>
);
export default Signup