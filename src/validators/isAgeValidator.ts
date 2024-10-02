export const isAgeValidator = function (age: number): string {
    console.log('[exec] age validation');

    if (age < 18) {
        return 'Вам нет 18';
    } else if (age > 200) {
        return 'Научите так же';
    } else {
        return '';
    }
};