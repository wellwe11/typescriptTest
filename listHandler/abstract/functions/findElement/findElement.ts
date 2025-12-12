function findElement(query: string): HTMLElement | null {
  if (!query) return null;

  const element = document.querySelector(query);

  return element as HTMLElement | null;
}

export default findElement;
