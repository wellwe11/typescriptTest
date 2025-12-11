export const storedInputs = [];
function validateInput(s) {
    if (typeof s !== "string") {
        console.log("typeof input is not string");
    }
    return s;
}
function storeData(data) {
    storedInputs.push(data);
}
export function storeInput(data) {
    const validatedData = validateInput(data);
    storeData(validatedData);
}
