"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const combobox = ({ roles }) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className={cn(
            "w-[200px] justify-between",
            !field.value && "text-muted-foreground"
          )}
        >
          {field.value
            ? roles.find((role) => role.roles_aid === field.value)?.label
            : "Select Roles"}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." className="h-9" />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {roles.map((role) => (
              <CommandItem
                value={role.roles_name}
                key={role.roles_aid}
                onSelect={() => {
                  form.setValue("language", role.roles_aid);
                }}
              >
                {role.role_name}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    role.roles_aid === field.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default combobox;
