export const storedInputs: string[] = [];

function validateInput(s: string): string {
  if (typeof s !== "string") {
    console.log("typeof input is not string");
  }

  return s;
}

function storeData(data: string) {
  storedInputs.push(data);
}

export function storeInput(data: string): void {
  const validatedData = validateInput(data);

  storeData(validatedData);
}
