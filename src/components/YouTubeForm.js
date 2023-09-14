import React from 'react'
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  
} from 'formik'
import * as Yup from 'yup'


const initialValues = {
  name: '',
  email: '',
  password: '',
 comment:'',
}



const onSubmit = (values) => {
  console.log('Form data', values)
  
}

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
  password: Yup.number().required('Required'),
  
})



function YoutubeForm () {
  
  return (
    <Formik
      initialValues={ initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      
      // validateOnChange={false}
      // validateOnBlur={false}
      // validateOnMount
    >
      
        
          <Form>
            <div className='form-control'>
              <label htmlFor='name'>Name</label>
              <Field type='text' id='name' name='name' />
              <ErrorMessage name='name' />
            </div>

            <div className='form-control'>
              <label htmlFor='email'>Email</label>
              <Field type='email' id='email' name='email' />
              <ErrorMessage name='email'/>
                
            </div>

            <div className='form-control'>
              <label htmlFor='password'>password</label>
              <Field
                type='password'
                id='password'
                name='password'
                
              />
              <ErrorMessage name='password' />
            </div>
            <div className='form-control'>
              <label htmlFor='name'>Comment</label>
              <Field as='textarea' type='text' id='comment' name='comment' />
              <ErrorMessage name='comment' />
            </div>

            
            
            
                
                      
            {/* <button
              type='button'
              onClick={() => formik.validateField('comments')}
            >
              Validate comments
            </button>
            <button
              type='button'
              onClick={() => formik.setFieldTouched('comments')}
            >
              Visit comments
            </button>
            <button type='button' onClick={() => formik.validateForm()}>
              Validate all
            </button>
            <button
              type='button'
              onClick={() =>
                formik.setTouched({
                  name: true,
                  email: true,
                  channel: true,
                  comments: true
                })
              }
            >
              Visit all
            </button> */}
            
            <button
              type='submit'
              
            >
              Submit
            </button>
          </Form>
       
      
    </Formik>
  )
}

export default YoutubeForm