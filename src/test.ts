export function someFn(arg: number): string {
    const number = 12342342
    const logRes = "Random" + number
    console.log(logRes);
    return `Random ${arg * number}`;
}


document.body.innerHTML = `<h1>${someFn(3)}</h1>`