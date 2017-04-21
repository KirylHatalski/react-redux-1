const convert = (input, fro, to) => {
    return (input * fro / to).toFixed(3) * 100 / 100;
}

export default convert;
