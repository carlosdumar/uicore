import React from 'react'

import { FieldArray, TextInput, Heading } from '../static/index'
import { FieldValue } from '../../src/components/FieldArray/FieldArray'
import { Formik } from 'formik'

export default function FieldArrayExample() {
  const fields = [
    {
      name: 'col1',
      label: 'Column 1 Header',
      defaultValue: 'Column 1 value'
    },
    {
      name: 'col2',
      label: 'Column 2 Header',
      renderer: (value: FieldValue, handleChange) => (
        <TextInput defaultValue={value} placeholder="Column 2 value" onChange={handleChange} />
      )
    }
    // {
    //   name: 'col3',
    //   label: 'Column 3 Header'
    // }
  ]

  const noDataText =
    'This is a no data/add data message. Use this to explain this widget to the use. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'

  const data = [
    {
      col1: 'col 1',
      col2: 'col 2'
      // col3: 'col 3'
    },
    {
      col1: 'col 1',
      col2: 'col 2'
      // col3: 'col 3'
    }
  ]

  return (
    <Formik
      initialValues={{ myFieldArray2: data }}
      onSubmit={x => {
        console.log(x)
      }}>
      {props => (
        <form onSubmit={props.handleSubmit}>
          <div style={{ width: '620px' }}>
            {/* <Heading level={2}>Without data</Heading>
            <FieldArray name="myFieldArray" fields={fields} title="Field List" placeholder={noDataText} />

            <br /> */}
            <Heading level={2}>With pre-filled data</Heading>
            <FieldArray name="myFieldArray2" fields={fields} label="Field List" placeholder={noDataText} />
            <input type="submit" />
          </div>
        </form>
      )}
    </Formik>
  )
}
