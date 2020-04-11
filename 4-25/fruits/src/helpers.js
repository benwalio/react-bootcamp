function choice(items) {
    let pickIndex = Math.floor(Math.random() * items.length);
    return items[pickIndex];
};

function remove (items, item) {
    let foundItem = null;
    for (let i = 0; i < items.length; i++) {
        if (items[i] === item) {
            let foundItem = items.splice(i, 1);
            return items;
        }

    }
    return foundItem;
};

export {choice, remove};