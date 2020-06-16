import React, { useState, useEffect } from 'react'
import { Button, ButtonProps } from '../Button/Button'
import { DateRangePicker, IDateRangePickerProps } from '@blueprintjs/datetime'
import { PopoverInteractionKind } from '@blueprintjs/core'
import moment from 'moment'

export interface DateRangePickerButtonProps extends Omit<ButtonProps, 'onChange'> {
  initialButtonText: string
  renderButtonText: (selectedDates: [Date, Date]) => string
  onChange: (selectedDates: [Date, Date]) => void
  isMaxDateEditable?: boolean
  initialMaxDate?: Date
  dateRangePickerProps?: IDateRangePickerProps
}

export const DateRangePickerButton: React.FC<DateRangePickerButtonProps> = props => {
  const [isOpen, setIsOpen] = useState(false)
  const [text, setText] = useState(props.initialButtonText)
  const [selectedShortcutIndex, setSelectedShortcutIndex] = useState(-1)
  const [maxDate, setMaxDate] = useState(props.initialMaxDate || new Date())

  useEffect(() => {
    setText(props.initialButtonText)
  }, [props.initialButtonText])

  useEffect(() => {
    setMaxDate(props.initialMaxDate || new Date())
  }, [isOpen])

  return (
    <Button
      minimal
      rightIcon="calendar"
      text={text}
      onClick={() => setIsOpen(open => !open)}
      tooltip={
        <DateRangePicker
          allowSingleDayRange={true}
          maxDate={props.isMaxDateEditable ? maxDate : new Date()}
          {...props.dateRangePickerProps}
          selectedShortcutIndex={selectedShortcutIndex}
          onShortcutChange={(_, index) => {
            setSelectedShortcutIndex(index)
          }}
          onChange={selectedDates => {
            setSelectedShortcutIndex(-1)
            if (selectedDates[0] && !selectedDates[1]) {
              setMaxDate(
                new Date(
                  moment()
                    .add(30, 'day')
                    .valueOf()
                )
              )
            }
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
