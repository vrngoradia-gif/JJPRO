"use client";

import { useSearchParams } from "next/navigation";
import InquiryForm from "@/components/forms/InquiryForm";

export default function InquiryWithParams() {
  const type = useSearchParams().get("type") ?? "buyer";
  return <InquiryForm defaultType={type} />;
}
