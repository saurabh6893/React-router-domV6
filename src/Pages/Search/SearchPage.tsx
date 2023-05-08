import { useMemo } from 'react'
import { families } from '../../Data/familyData'
import { useTable } from 'react-table'
const SearchPage = () => {
  const data = useMemo(() => families, [])
  const columns: any = useMemo(
    () => [
      { Header: 'Flat', accessor: 'flatNo' },
      { Header: 'Family Name', accessor: 'familyName' },
      { Header: 'Email', accessor: 'email' },
      { Header: 'Vehicle No', accessor: 'vehicleNo' },
      { Header: 'Primary Phone', accessor: 'primary' },
      { Header: 'Secondary Phone', accessor: 'secondary' },
    ],
    []
  )

  const { getTableBodyProps, getTableProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    })

  return (
    <div className='tablebody'>
      <div className='container'>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((hgroup) => (
              <tr {...hgroup.getHeaderGroupProps()}>
                {hgroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((r) => {
              prepareRow(r)
              return (
                <tr {...r.getRowProps()}>
                  {r.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SearchPage

// const data = families.map((f: any) => <h1>{f.email}</h1>)
