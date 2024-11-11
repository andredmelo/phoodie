import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { MenuItem } from '../../types/sharedTypes';

interface SearchProps {
  search: string;
}

const useSearch = ({ search }: SearchProps): { handleSearch: () => MenuItem[] } => {
  const { menuData } = useContext(AppContext);

  function handleSearch(): MenuItem[] {
    return menuData.filter((item: MenuItem) => {
      if (search === '') {
        return true;
      } else {
        return item.dishUpper.toLowerCase().includes(search.toLowerCase());
      }
    });
  }

  return { handleSearch };
};

export default useSearch;