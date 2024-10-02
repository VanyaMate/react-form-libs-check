import { ComponentPropsWithoutRef, FC, memo } from 'react';
import css from './FormikForm.module.css';
import { Field, Form, Formik } from 'formik';
import { isEmailValidator } from '../../validators/isEmailValidator.ts';
import { isAgeValidator } from '../../validators/isAgeValidator.ts';


export type FormikFormProps =
    {}
    & ComponentPropsWithoutRef<'div'>;

let renderCounter = 0;

export const FormikForm: FC<FormikFormProps> = memo(function FormikForm (props) {
    const { className, ...other } = props;

    return (
        <div { ...other } className={ [ css.container, className ].join(' ') }>
            <Formik
                initialValues={ {
                    email     : '',
                    password  : '',
                    rememberMe: false,
                    age       : 0,
                    gender    : '',
                    country   : '',
                    avatar    : '',
                    color     : '',
                    date      : '',
                    range     : 0,
                } }
                onSubmit={
                    (values, { setSubmitting }) => {
                        setTimeout(() => {
                            console.log('Submit:', values);
                            setSubmitting(false);
                        }, 1000);
                    }
                }
            >
                {
                    ({ errors, touched, values }) => (
                        <Form>
                            {
                                `Renders: ${ renderCounter++ }`
                            }
                            {
                                (errors.email && touched.email && values.email)
                                ? errors.email
                                : ''
                            }
                            <Field type={ 'text' } name={ 'email' }
                                   validate={ isEmailValidator }/>
                            <Field type={ 'password' } name={ 'password' }/>
                            <Field type={ 'checkbox' } name={ 'rememberMe' }/>
                            {
                                (errors.age && touched.age && values.age)
                                ? errors.age
                                : ''
                            }
                            <Field type={ 'number' } name={ 'age' }
                                   validate={ isAgeValidator }/>
                            <Field type={ 'radio' }
                                   name={ 'gender' }
                                   value={ 'male' }/>
                            <Field type={ 'radio' }
                                   name={ 'gender' }
                                   value={ 'female' }/>
                            <Field as={ 'select' } name={ 'country' }>
                                <option value={ 'RU' }>Russia</option>
                                <option value={ 'UA' }>Ukraine</option>
                                <option value={ 'BY' }>Belarus</option>
                            </Field>
                            <Field type={ 'file' } name={ 'avatar' }/>
                            <Field type={ 'color' } name={ 'color' }/>
                            <Field type={ 'date' } name={ 'date' }/>
                            <Field type={ 'range' } name={ 'range' }/>
                            <button type={ 'submit' }>submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    );
});