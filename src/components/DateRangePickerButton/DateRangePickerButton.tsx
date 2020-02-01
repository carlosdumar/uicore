import React, { useState } from 'react'
import { Button, ButtonProps } from '../Button/Button'
import { DateRangePicker, IDateRangePickerProps } from '@blueprintjs/datetime'
import { PopoverInteractionKind } from '@blueprintjs/core'

export interface DateRangePickerButtonProps extends Omit<ButtonProps, 'onChange'> {
  initialButtonText: string
  renderButtonText: (selectedDates: [Date, Date]) => string
  onChange: (selectedDates: [Date, Date]) => void
  dateRangePickerProps?: IDateRangePickerProps
}

export const DateRangePickerButton: React.FC<DateRangePickerButtonProps> = props => {
  const [range, setRange] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const [text, setText] = useState(props.initialButtonText)
  const [selectedShortcutIndex, setSelectedShortcutIndex] = useState(-1)

  return (
    <Button
      minimal
      rightIcon="calendar"
      text={text}
      onClick={() => setIsOpen(open => !open)}
      tooltip={
        <DateRangePicker
          value={range}
          allowSingleDayRange={true}
          maxDate={new Date()}
          {...props.dateRangePickerProps}
          selectedShortcutIndex={selectedShortcutIndex}
          onShortcutChange={(_, index) => {
            setSelectedShortcutIndex(index)
          }}
          onChange={selectedDates => {
            setSelectedShortcutIndex(-1)
            setRange(selectedDates)

            if (selectedDates[0] && selectedDates[1]) {
              setIsOpen(false)
              props.onChange?.([selectedDates[0], selectedDates[1]])
              setText(props.renderButtonText([selectedDates[0], selectedDates[1]]))
            }
          }}
        />
      }
      tooltipProps={{
        interactionKind: PopoverInteractionKind.CLICK,
        onInteraction: isOpen => {
          setIsOpen(isOpen)
        },
        isOpen: isOpen
      }}
      {...{
        ...props,
        initialButtonText: undefined,
        renderButtonText: undefined,
        dateRangePickerProps: undefined,
        onChange: undefined
      }}
    />
  )
}