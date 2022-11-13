import {  ReactNode, useEffect, useCallback, useState } from 'react'
import { createContext } from 'use-context-selector'

import { api } from '../lib/axios'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

type FormData = Omit<Transaction, 'createdAt' | 'id'>
interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => void
  createTransaction: (formData: FormData) => void
}

export const TransactionsContext = createContext({} as TransactionContextType)

interface TransactionsProviderType {
  children: ReactNode
}

export function TransactionsProvider({ children }: TransactionsProviderType) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransactions = useCallback(async (query?: string)=> {
    const response = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }, [])

  const createTransaction = useCallback(
  async({
    description,
    category,
    price,
    type,
  }: FormData) => {
    const response = await api.post('transactions', {
      description,
      category,
      price,
      type,
      createdAt: new Date(),
    })

    setTransactions((prevState) => [{ ...response.data }, ...prevState])
  }, [])

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
