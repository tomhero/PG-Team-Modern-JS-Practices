// In ES10 We are now able to import it dynamically in one of the following ways

import('./functions/mather').then((mathModule) => {
    mathModule.default(2) // = mather.square(2)
    mathModule.add(4) // = mather.add(4)
    mathModule.divide(9) // = mather.divide(9)
}).catch(err => console.error(err))

// OR |> You can use async / await 

(async () => { // using Immediately-invoked Function Expressions (IIFE) with `async`
    const Mathmodule = await import('./functions/mather')
    Mathmodule.default(2)
    Mathmodule.add(4)
    Mathmodule.divide(9)
})()