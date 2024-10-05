import { ComponentPropsWithoutRef, FC, memo, useCallback } from 'react';
import css from './ReactFinalForm.module.css';
import { Form, Field } from 'react-final-form';
import { isEmailValidator } from '../../validators/isEmailValidator.ts';


export type FormInputs = {
    email: string;
    password: string;
    rememberMe: boolean;
    age: number;
    gender: string;
    country: string;
    avatar: FileList;
    color: string;
    date: string;
    range: number;
}

export type ReactFinalFormProps =
    {}
    & ComponentPropsWithoutRef<'div'>;

let counter = 0;

export const ReactFinalForm: FC<ReactFinalFormProps> = memo(function ReactFinalForm (props) {
    const { className, ...other } = props;
    const onSubmit                = useCallback((data: FormInputs) => {
        console.log('Submit: ', data);
    }, []);

    return (
        <div { ...other } className={ [ css.container, className ].join(' ') }>
            <Form onSubmit={ onSubmit } render={ ({ handleSubmit }) => (
                <form onSubmit={ handleSubmit }>
                    Render: { counter++ }
                    <Field
                        name={ 'email' }
                        validate={ isEmailValidator }
                        render={ ({ input, meta }) => (
                            <label>
                                <span>Email</span>
                                { meta.error ? <span>{ meta.error }</span>
                                             : null }
                                <input type={ 'email' } { ...input }/>
                            </label>
                        ) }
                    />
                    <Field
                        name={ 'password' }
                        render={ ({ input }) => (
                            <label>
                                <span>Password</span>
                                <input required
                                       type={ 'password' } { ...input }/>
                            </label>
                        ) }
                    />
                    <Field
                        name={ 'rememberMe' }
                        render={ ({ input }) => (
                            <input type={ 'checkbox' } { ...input }/>
                        ) }
                    />
                    <Field
                        name={ 'avatar' }
                        render={ ({ input }) => (
                            <input type={ 'file' } { ...input }/>
                        ) }
                    />
                    <Field
                        name={ 'color' }
                        render={ ({ input }) => (
                            <input type={ 'color' } { ...input }/>
                        ) }
                    />
                    <button type={ 'submit' }>submit</button>
                </form>
            ) }>
            </Form>
        </div>
    );
});