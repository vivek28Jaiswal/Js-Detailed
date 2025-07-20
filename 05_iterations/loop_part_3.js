// For...of ek aisa loop hai jo kisi bhi iterable (jaise array, string, set, etc.) ke har ek value par chal kar usse ek-ek karke access karta hai.

let username= 'Weasily'
for (const user of username) {
    console.log(`Every char is ${user}`);
}