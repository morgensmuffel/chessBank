export const hideCardNumber = (str: string) => {
    let result = '**** ';
    for(let i = 0; i < str.length; i++) {
        if(i >= 12) {
            result = result + str[i]
        }
    }
    return result
}