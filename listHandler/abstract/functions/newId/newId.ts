// adds id to child to later allow for manipulation
function newId(): string {
  return crypto.randomUUID();
}

export default newId;
