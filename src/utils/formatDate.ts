export function formatDate(data:string) {
  const initialDate = new Date(data)

  const day = String(initialDate.getDate()).padStart(2, '0');
  const month = String(initialDate.getMonth() + 1).padStart(2, '0');
  const fullYear = initialDate.getFullYear();

  return `${day}/${month}/${fullYear}`;
}