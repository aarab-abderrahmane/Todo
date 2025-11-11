import * as React from "react";
import PropTypes from "prop-types";

import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";

import { cn } from "../../lib/utils";
import { Button, buttonVariants } from "./button";

// Main Calendar component
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "applyRadius bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent ",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn("flex gap-4 flex-col md:flex-row relative", defaultClassNames.months),
        month: cn("flex flex-col w-full gap-4", defaultClassNames.month),
        nav: cn("flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between", defaultClassNames.nav),
        button_previous: cn(buttonVariants({ variant: buttonVariant }), "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none", defaultClassNames.button_previous),
        button_next: cn(buttonVariants({ variant: buttonVariant }), "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none", defaultClassNames.button_next),
        month_caption: cn("flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)", defaultClassNames.month_caption),
        dropdowns: cn("w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5", defaultClassNames.dropdowns),
        dropdown_root: cn("relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md", defaultClassNames.dropdown_root),
        dropdown: cn("absolute bg-popover inset-0 opacity-0", defaultClassNames.dropdown),
        caption_label: cn(
          "select-none font-medium",
          captionLayout === "label"
            ? "text-sm"
            : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn("text-muted-foreground rounded-md flex-1 font-bold text-[0.9rem] select-none", defaultClassNames.weekday),
        week: cn("applyRadius flex w-full mt-2 bg-white/10", defaultClassNames.week),
        week_number_header: cn("select-none w-(--cell-size)", defaultClassNames.week_number_header),
        week_number: cn("text-[0.9rem] select-none text-muted-foreground", defaultClassNames.week_number),
        day: cn("relative w-full h-full p-0 text-center font-bold [&:first-child[data-selected=true]_button]:rounded-[var(--border-radius)] [&:last-child[data-selected=true]_button]:rounded-[var(--border-radius)] group/day aspect-square select-none", defaultClassNames.day),
        range_start: cn("rounded-[var(--border-radius)] bg-accent", defaultClassNames.range_start),
        range_middle: cn("rounded-[var(--border-radius)]", defaultClassNames.range_middle),
        range_end: cn("rounded-[var(--border-radius)] bg-accent", defaultClassNames.range_end),
        today: cn("bg-[var(--color-text)] text-white applyRadius data-[selected=true]:rounded-[var(--border-radius)]", defaultClassNames.today),
        outside: cn("text-muted-foreground aria-selected:text-muted-foreground", defaultClassNames.outside),
        disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: CalendarRoot,
        Chevron: CalendarChevron,
        DayButton: CalendarDayButton,
        WeekNumber: CalendarWeekNumber,
        ...components,
      }}
      {...props}
    />
  );
}

Calendar.propTypes = {
  className: PropTypes.string,
  classNames: PropTypes.object,
  showOutsideDays: PropTypes.bool,
  captionLayout: PropTypes.oneOf(["buttons", "dropdown", "label"]),
  buttonVariant: PropTypes.string,
  formatters: PropTypes.object,
  components: PropTypes.object,
};

// Root subcomponent
const CalendarRoot = ({ className, rootRef, ...props }) => (
  <div data-slot="calendar" ref={rootRef} className={cn(className)} {...props} />
);
CalendarRoot.propTypes = {
  className: PropTypes.string,
  rootRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.instanceOf(Element) })]),
};

// Chevron subcomponent
const CalendarChevron = ({ className, orientation, ...props }) => {
  if (orientation === "left") return <ChevronLeftIcon className={cn("size-4", className)} {...props} />;
  if (orientation === "right") return <ChevronRightIcon className={cn("size-4", className)} {...props} />;
  return <ChevronDownIcon className={cn("size-4", className)} {...props} />;
};
CalendarChevron.propTypes = {
  className: PropTypes.string,
  orientation: PropTypes.oneOf(["left", "right", "down"]),
};

// WeekNumber subcomponent
const CalendarWeekNumber = ({ children, ...props }) => (
  <td {...props}>
    <div className="flex size-(--cell-size) items-center justify-center text-center">{children}</div>
  </td>
);
CalendarWeekNumber.propTypes = {
  children: PropTypes.node,
};

// DayButton subcomponent
function CalendarDayButton({ className, day, modifiers, ...props }) {
  const defaultClassNames = getDefaultClassNames();
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle}
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-[var(--border-radius)] data-[range-middle=true]:rounded-[var(--border-radius)] data-[range-start=true]:rounded-md data-[range-start=true]:rounded-[var(--border-radius)] [&>span]:text-xs [&>span]:opacity-70 font-bold",
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  );
}
CalendarDayButton.propTypes = {
  className: PropTypes.string,
  day: PropTypes.shape({
    date: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
  modifiers: PropTypes.shape({
    focused: PropTypes.bool,
    selected: PropTypes.bool,
    range_start: PropTypes.bool,
    range_middle: PropTypes.bool,
    range_end: PropTypes.bool,
  }).isRequired,
};

export { Calendar, CalendarDayButton };
