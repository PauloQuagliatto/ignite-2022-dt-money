import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Busque sua transação" />

      <button>
        Buscar
        <MagnifyingGlass size={20} />
      </button>
    </SearchFormContainer>
  )
}
