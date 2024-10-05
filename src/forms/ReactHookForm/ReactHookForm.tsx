import { ComponentPropsWithoutRef, FC, memo, useCallback } from 'react';
import css from './ReactHookForm.module.css';
import { useForm } from 'react-hook-form';
import { isEmailValidator } from '../../validators/isEmailValidator.ts';
import { isAgeValidator } from '../../validators/isAgeValidator.ts';


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

export type ReactHookFormProps =
    {}
    & ComponentPropsWithoutRef<'div'>;

let counter = 0;

export const ReactHookForm: FC<ReactHookFormProps> = memo(function ReactHookForm (props) {
    const { className, ...other } = props;
    const {
              register,
              handleSubmit,
              reset,
              formState: { errors },
          }                       = useForm<FormInputs>();
    const onSubmit                = useCallback((data: FormInputs) => {
        console.log('Submit: ', data);
        reset();
    }, []);

    console.log(errors);

    return (
        <div { ...other } className={ [ css.container, className ].join(' ') }>
            Render: { counter++ }
            <form onSubmit={ handleSubmit(onSubmit) }>
                {
                    errors.email ? `error ${ errors.email.message }` : null
                }
                <input type={ 'email' } { ...register('email', {
                    validate: (data) => {
                        let error = isEmailValidator(data);
                        return error ? error : true;
                    },
                    required: true,
                }) }/>
                <input type={ 'password' } { ...register('password', {
                    required : true,
                    minLength: 10,
                    maxLength: 20,
                }) }/>
                <input type={ 'checkbox' } { ...register('rememberMe') }/>
                <input type={ 'number' } { ...register('age', {
                    validate: (data) => {
                        let error = isAgeValidator(data);
                        return error ? error : true;
                    },
                }) }/>
                <input type={ 'radio' }
                       value={ 'male' }
                       { ...register('gender') }/>
                <input type={ 'radio' }
                       value={ 'female' }
                       { ...register('gender') }/>
                <select { ...register('country') }>
                    <option value={ 'ru' }>russia</option>
                    <option value={ 'ua' }>ukraine</option>
                    <option value={ 'br' }>belarus</option>
                </select>
                <input type={ 'file' } { ...register('avatar') }/>
                <input type={ 'color' } { ...register('color') }/>
                <input type={ 'date' } { ...register('date') }/>
                <input type={ 'range' } { ...register('range') }/>
                <button type={ 'submit' }>submit</button>
            </form>
        </div>
    );
});