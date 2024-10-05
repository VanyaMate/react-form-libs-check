import { ComponentPropsWithoutRef, FC, memo } from 'react';
import css from './ReactFinalForm.module.css';


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

    return (
        <div { ...other } className={ [ css.container, className ].join(' ') }>
            Renders: { counter++ }
            <form>
                <input type={ 'email' }/>
                <input type={ 'password' }/>
                <input type={ 'checkbox' }/>
                <input type={ 'number' }/>
                <input type={ 'radio' }
                       value={ 'male' }/>
                <input type={ 'radio' }
                       value={ 'female' }/>
                <select>
                    <option value={ 'ru' }>russia</option>
                    <option value={ 'ua' }>ukraine</option>
                    <option value={ 'br' }>belarus</option>
                </select>
                <input type={ 'file' }/>
                <input type={ 'color' }/>
                <input type={ 'date' }/>
                <input type={ 'range' }/>
                <button type={ 'submit' }>submit</button>
            </form>
        </div>
    );
});