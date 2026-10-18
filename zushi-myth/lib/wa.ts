// WhatsApp number comes from env (digits with country code). Same pattern as the other JJ sites.
const NUM = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "").replace(/[^0-9]/g, "");
export function waLink(text = "Hi, I'd like to talk about MYTH AI x ZUSHI (design + sourcing + production).") {
  const q = encodeURIComponent(text);
  return NUM ? `https://wa.me/${NUM}?text=${q}` : `https://api.whatsapp.com/send?text=${q}`;
}
export const WA_ICON_PATH = "M16.02 3C9.39 3 4 8.33 4 14.9c0 2.1.56 4.15 1.62 5.95L4 29l8.35-2.14a12.1 12.1 0 0 0 3.67.57C22.65 27.43 28 22.1 28 15.53 28 8.95 22.65 3 16.02 3Zm5.1 15.07c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.63.14-.19.28-.72.9-.88 1.09-.16.19-.33.21-.6.07-.28-.14-1.18-.43-2.25-1.38-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.12.28-.33.42-.5.14-.16.19-.28.28-.47.1-.19.05-.35-.02-.5-.07-.14-.63-1.5-.86-2.06-.23-.54-.46-.47-.63-.48h-.54c-.19 0-.5.07-.76.35-.26.28-1 .97-1 2.37 0 1.4 1.03 2.75 1.17 2.94.14.19 2 3.1 4.9 4.27.69.3 1.23.47 1.65.6.7.22 1.33.19 1.83.12.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.54-.33Z";
