import { useEffect, useState } from 'react'

import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'

import { PriceHighlight, TransactionsContainer, TransactionsTable } from './styles'

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  category: string;
  price: number;
  createdAt: string;
}

export function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions() {
    const response = await fetch('http://localhost/3333/transactions')
    const data = await response.json()

    setTransactions(data)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.length > 0 ? transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">
                  {transaction.description}
                </td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.price}
                  </PriceHighlight>
                </td>
                <td>
                  {transaction.category}
                </td>
                <td>
                  {transaction.createdAt}
                </td>
              </tr>
            )) : null}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
