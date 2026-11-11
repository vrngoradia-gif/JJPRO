"use client";

import { useSearchParams } from "next/navigation";
import ConnectForm from "@/components/forms/ConnectForm";

export default function ConnectWithParams() {
  const as = useSearchParams().get("as") ?? undefined;
  return <ConnectForm defaultAudience={as} />;
}
