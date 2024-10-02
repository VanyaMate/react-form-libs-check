export const isEmailValidator = function (value: string): string {
    console.log('[exec] email validation');

    if (value.match('@')) {
        return '';
    }

    return 'Введите правильную почту';
};