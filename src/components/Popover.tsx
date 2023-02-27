import { FC, ReactNode } from "react";
import * as RadixPopover from "@radix-ui/react-popover";
import styles from "./Popover.module.css";

type PopoverProps = {
  trigger: ReactNode;
  content: ReactNode;
};

export const Popover: FC<PopoverProps> = ({ trigger, content }) => (
  <RadixPopover.Root>
    <RadixPopover.Trigger asChild>{trigger}</RadixPopover.Trigger>
    <RadixPopover.Portal>
      <RadixPopover.Content className={styles.PopoverContent} sideOffset={5}>
        {content}
        <RadixPopover.Arrow className={styles.PopoverArrow} />
      </RadixPopover.Content>
    </RadixPopover.Portal>
  </RadixPopover.Root>
);
