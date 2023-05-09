import { useMemo, useState } from 'react'
import { families } from '../../Data/familyData'
import { useTable } from 'react-table'
import './SearchPage.css'

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

  const [searchValue, setSearchValue] = useState('')

  const filteredData = useMemo(() => {
    if (!searchValue) {
      return data
    }
    return data.filter((family) => {
      return Object.values(family).some((value) =>
        value.toLowerCase().includes(searchValue.toLowerCase())
      )
    })
  }, [data, searchValue])

  const { getTableBodyProps, getTableProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: filteredData,
    })

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  return (
    <div className='tablebody'>
      <div className='searchbar'>
        <input
          type='text'
          placeholder='Search...'
          value={searchValue}
          onChange={handleSearchChange}
        />
      </div>
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
