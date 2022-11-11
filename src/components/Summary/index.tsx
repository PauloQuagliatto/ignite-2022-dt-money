import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'

import { SummaryContainer, SummaryCard } from './styles'

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>
            Entradas
          </span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>diheiro</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>
            Saídas
          </span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>diheiro</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>
            Total
          </span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>diheiro</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}