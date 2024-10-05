export const isEmailValidator = function (value: string): string {
    console.log('[exec] Email validator', value);

    if (typeof value !== 'string') {
        return '';
    }

    if (value.match('@')) {
        return '';
    }

    return 'Введите правильную почту';
};