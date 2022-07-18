export function generateRandomString(){
    let str = '';

    let chars = 
        `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`;
        
    for (let i = 0; i < 12; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    str = `${str}${Math.floor(Math.random()*(99-10) + 10)}`

    return str;
};
