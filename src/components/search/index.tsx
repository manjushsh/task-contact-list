import { useContext } from "react";
import { GlobalStateContext } from "../../context/global-context";
import "./styles.css";

const Search = () => {
  const { state, setState } = useContext(GlobalStateContext);
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      type: "contactList",
      payload: { searchTerm: e?.target?.value || "" }
    });
  };
  return (
    <div className="searchContainer">
      <input
        type={"text"}
        className="searchInput"
        placeholder="Search users.."
        value={state?.contactList?.searchTerm || ""}
        onChange={onSearch}
      />
    </div>
  );
};

export default Search;
