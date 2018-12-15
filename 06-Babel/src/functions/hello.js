export function divide(x) {
    return x / 2;
}

// only one 'default' function may be exported and the rest (above) must be named //
export default function square(x) {  // <---- declared as a default function
    return x * x;
}

export default function (x) {  // <---- declared as a default function
    return x * x;
}