import React, { useMemo } from 'react'
import { Text, Select, Table } from '../static/index'
import pokedex from './pokedex.json'

export function TableExample() {
  const columns = useMemo(
    () => [
      {
        Header: 'Pokemon Name',
        accessor: 'name'
      },
      {
        Header: 'Pokemon Type',
        accessor: 'type',
        Cell: props => {
          if (props.value.length === 1) {
            const textProps =
              props.value[0] === 'Fire'
                ? {
                    intent: 'danger',
                    icon: 'flame'
                  }
                : {
                    intent: 'primary',
                    icon: 'tint'
                  }
            return <Text {...textProps}>{props.value}</Text>
          }
          const items = props.value.map(label => ({ label: label, value: label }))
          return <Select items={items} />
        }
      }
    ],
    []
  )
  const data = useMemo(() => pokedex.slice(0, 7), [])
  return (
    <Table
      className="pokemonTable"
      bpTableProps={{ bordered: true, condensed: true, striped: true }}
      columns={columns}
      data={data}
    />
  )
}
