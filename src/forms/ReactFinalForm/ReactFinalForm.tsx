import { ComponentPropsWithoutRef, FC, memo } from 'react';
import css from './ReactFinalForm.module.css';


export type ReactFinalFormProps =
    {}
    & ComponentPropsWithoutRef<'div'>;

export const ReactFinalForm: FC<ReactFinalFormProps> = memo(function ReactFinalForm (props) {
    const { className, ...other } = props;

    return (
        <div { ...other } className={ [ css.container, className ].join(' ') }>
            ReactFinalForm Component
        </div>
    );
});