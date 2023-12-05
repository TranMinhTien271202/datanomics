export const formatCurrency = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const stripHtml = (value: string | null | undefined) => {
  if (value == null) return '';

  const div = document.createElement('div');
  div.innerHTML = value;
  const text = div.textContent || div.innerText || '';
  return text;
};
