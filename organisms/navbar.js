import Logo from '../atoms/logo'
import SearchBar from '../molecules/searchbar'

export default () => {
  return <div className="flex items-center h-16 bg-purple-700">
    <Logo className="py-1 ml-6"></Logo>
    <SearchBar></SearchBar>
  </div>
}
