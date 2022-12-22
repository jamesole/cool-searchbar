import "../App.css";
import SearchIcon from "@mui/icons-material/Search";

export default function Search(props) {
  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" required placeholder="Search City..." />
        <div className="searchIcon">
          <SearchIcon />
        </div>
      </div>
      <div className="dataResult"></div>
    </div>
  );
}
