import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'

import { PriceHighlight, TransactionsContainer, TransactionsTable } from './styles'
export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td>
              </td>
              <td>
                <PriceHighlight variant='income'>
                </PriceHighlight>
              </td>
              <td>
              </td>
              <td>
              </td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
