import { ComponentPropsWithoutRef, FC, memo } from 'react';
import css from './TanstackReactForm.module.css';


export type TanstackReactFormProps =
    {}
    & ComponentPropsWithoutRef<'div'>;

export const TanstackReactForm: FC<TanstackReactFormProps> = memo(function TanstackReactForm (props) {
    const { className, ...other } = props;

    return (
        <div { ...other } className={ [ css.container, className ].join(' ') }>
            TanstackReactForm Component
        </div>
    );
});