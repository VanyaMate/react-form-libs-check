import { FC, memo } from 'react';
import css from './App.module.css';
import { FormikForm } from './forms/Formik/FormikForm.tsx';
import { ReactFinalForm } from './forms/ReactFinalForm/ReactFinalForm.tsx';
import { ReactHookForm } from './forms/ReactHookForm/ReactHookForm.tsx';
import {
    TanstackReactForm,
} from './forms/TanstackReactForm/TanstackReactForm.tsx';


export const App: FC = memo(function App () {
    return (
        <div className={ css.container }>
            <div className={ css.item }>
                <h2 className={ css.title }>FormikForm</h2>
                <FormikForm/>
            </div>

            <div className={ css.item }>
                <h2 className={ css.title }>ReactFinalForm</h2>
                <ReactFinalForm/>
            </div>

            <div className={ css.item }>
                <h2 className={ css.title }>ReactHookForm</h2>
                <ReactHookForm/>
            </div>

            <div className={ css.item }>
                <h2 className={ css.title }>TanstackReactForm</h2>
                <TanstackReactForm/>
            </div>
        </div>
    );
});