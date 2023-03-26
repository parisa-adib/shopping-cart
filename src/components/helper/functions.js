const shorten = (title) => {
    const splitedTitle = title.split(" ");
    const newTtile = `${splitedTitle[0]} ${splitedTitle[1]}`;
    return newTtile;
} 
export {shorten};