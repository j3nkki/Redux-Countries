import React from 'react'
import { useSelector } from 'react-redux'
import {
  TableContainer as Container,
  Table,
  TableHead,
  TableRow as Row,
  TableBody,
} from '@material-ui/core/'
// import TableHeader from 'components/TableHeader'

import TableRow from 'components/TableRow'
import TableHeader from 'components/TableHeader'
import { AppState } from 'types'

const TableContainer = () => {
  const allCountries = useSelector(
    (state: AppState) => state.country.allCountries,
  )

  return (
    <>
      <Container>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <Row>
              <TableHeader />
            </Row>
          </TableHead>
          <TableBody>
            {allCountries.map(country => (
              <Row key={country.name}>
                <TableRow country={country} />
              </Row>
            ))}
          </TableBody>
        </Table>
      </Container>
    </>
  )
}

TableContainer.displayName = 'TableContainer'

export default TableContainer
