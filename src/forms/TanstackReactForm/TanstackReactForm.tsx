import { ComponentPropsWithoutRef, FC, memo } from 'react';
import css from './TanstackReactForm.module.css';
import { useForm } from '@tanstack/react-form';
import { isEmailValidator } from '../../validators/isEmailValidator.ts';


export type FormInputs = {
    email: string;
    password: string;
    rememberMe: boolean;
    age: number;
    gender: string;
    country: string;
    avatar: File;
    color: string;
    date: string;
    range: number;
}

export type TanstackReactFormProps =
    {}
    & ComponentPropsWithoutRef<'div'>;

export const TanstackReactForm: FC<TanstackReactFormProps> = memo(function TanstackReactForm (props) {
    const { className, ...other } = props;
    const form                    = useForm<FormInputs>({
        onSubmit       : async (data) => {
            console.log('Submit: ', data.value);
            data.formApi.reset();
        },
        onSubmitInvalid: () => {
            console.log('Invalid');
        },
    });

    return (
        <div { ...other } className={ [ css.container, className ].join(' ') }>
            <form onSubmit={ (e) => {
                e.preventDefault();
                e.stopPropagation();
                form.handleSubmit();
            } }>
                <form.Field
                    name={ 'email' }
                    asyncDebounceMs={ 500 }
                    validators={ {
                        onChangeAsync: ({ value }) => isEmailValidator(value),
                    } }
                    children={ (field) => (
                        <>
                            {
                                field.state.meta.errors.length
                                ? field.state.meta.errors : null
                            }
                            <input
                                type={ 'email' }
                                id={ field.name }
                                name={ field.name }
                                onBlur={ field.handleBlur }
                                onChange={ (e) => field.handleChange(e.target.value) }
                            />
                        </>
                    ) }
                />
                <form.Field
                    name={ 'country' }
                    children={ (field) => (
                        <select onBlur={ field.handleBlur }
                                onChange={ (e) => field.handleChange(e.target.value) }
                                name={ field.name } id={ field.name }>
                            <option value={ 'ru' }>russia</option>
                            <option value={ 'ua' }>ukraine</option>
                            <option value={ 'br' }>belarus</option>
                        </select>
                    ) }
                />
                <form.Field
                    name={ 'avatar' }
                    children={ (field) => (
                        <input type={ 'file' }
                               name={ field.name }
                               onBlur={ field.handleBlur }
                               onChange={ (e) => field.setValue(e.target.files!?.[0]) }
                        />
                    ) }
                />
                <form.Field
                    name={ 'color' }
                    children={ (field) => (
                        <input type={ 'color' }
                               name={ field.name }
                               onBlur={ field.handleBlur }
                               onChange={ (e) => field.handleChange(e.target.value) }
                        />
                    ) }
                />
                <button type={ 'submit' }>submit</button>
            </form>
        </div>
    );
});