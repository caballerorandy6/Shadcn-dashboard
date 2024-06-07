import React from "react";

export default function page() {
  return <div></div>;
}

// "use client";

// import { useState, useEffect } from "react";

// import {
//   Command,
//   CommandDialog,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
//   CommandSeparator,
//   CommandShortcut,
// } from "@/components/ui/command";

// export default function Page() {
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const onKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
//         e.preventDefault();
//         setOpen((open) => !open);
//       }
//     };

//     document.addEventListener("keydown", down);
//     return () => document.removeEventListener("keydown", down);
//   }, []);

//   return (
//     <div>
//       <CommandDialog open={open} onOpenChange={setOpen}>
//         <CommandInput placeholder="Type a command or search..." />
//         <CommandList>
//           <CommandEmpty>No results found.</CommandEmpty>
//           <CommandGroup heading="Suggestions">
//             <CommandItem>Calendar</CommandItem>
//             <CommandItem>Search Emoji</CommandItem>
//             <CommandItem>Calculator</CommandItem>
//           </CommandGroup>
//           <CommandSeparator />
//           <CommandGroup heading="Settings">
//             <CommandItem>Profile</CommandItem>
//             <CommandItem>Billing</CommandItem>
//             <CommandItem>Settings</CommandItem>
//           </CommandGroup>
//         </CommandList>
//       </CommandDialog>

//       <div className="mt-20 h-[200px] flex justify-center items-center">
//         <p className="text-sm text-muted-foreground">
//           Press{" "}
//           <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
//             <span className="text-xs">⌘</span>J
//           </kbd>{" "}
//           or{" "}
//           <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
//             <span className="text-xs">CTRL</span> + J
//           </kbd>
//         </p>
//       </div>
//     </div>
//   );
// }
