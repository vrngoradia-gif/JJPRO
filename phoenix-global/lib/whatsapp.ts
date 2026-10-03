export function whatsappLink(number: string | undefined, text: string) {
  const clean = (number ?? "").replace(/[^0-9]/g, "");
  const q = encodeURIComponent(text);
  return clean ? `https://wa.me/${clean}?text=${q}` : `https://api.whatsapp.com/send?text=${q}`;
}
