export function divide(x) {
    return x / 2;
}

export function add(x) {
    return x++;
}

// only one 'default' function may be exported and the rest (above) must be named //
// export default function square(x) {  // <---- declared as a default function
//     return x * x;
// }

// export default function (x) {  // <---- declared as a default function
//     return x * x;
// }

export default {
    name: "HelloWorld",
    components: {
        otherComponent
    },
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        }
    },
    methods: {
        method1() {

        },
        method2() {

        }
    }
  }