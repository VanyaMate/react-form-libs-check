import { ComponentPropsWithoutRef, FC, memo } from 'react';
import css from './ReactHookForm.module.css';


export type ReactHookFormProps =
    {}
    & ComponentPropsWithoutRef<'div'>;

export const ReactHookForm: FC<ReactHookFormProps> = memo(function ReactHookForm (props) {
    const { className, ...other } = props;

    return (
        <div { ...other } className={ [ css.container, className ].join(' ') }>
            ReactHookForm Component
        </div>
    );
});