import { Badge } from "@/components/ui/badge";
import React from "react";

export default function Page() {
  return (
    <div className="flex gap-4">
      <Badge capitalize>default</Badge>
      <Badge variant="destructive">destructive</Badge>
      <Badge variant="outline">outline</Badge>
      <Badge variant="secondary">secondary</Badge>
      <Badge capitalize variant="info">
        Info
      </Badge>
      <Badge capitalize variant="success">
        success
      </Badge>
    </div>
  );
}
