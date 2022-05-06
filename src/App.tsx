import "./App.css";
import { useEffect, useState } from "react";
import DetailsCard from "./components/DetailsCard";
import InputBox from "./components/InputBox";
import { IDetail } from "./interfaces/interface";
import Header from "./components/Header";
import { getStorageTheme } from "./helpers/Helpers";
import Loader from "./components/Loader";
import NotFound from "./components/Not-found";

function App() {
  const [theme, setTheme] = useState<string>(getStorageTheme());
  const [userDetails, setUserDetails] = useState<IDetail>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [searchInfo, setSearchInfo] = useState<string>("ChibuezeSamObisike");

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_GITHUB_URL}/users/${searchInfo}`
      );
      const data = await response.json();
      console.log(data);
      setUserDetails(data);
      setLoading(false);
    } catch (ex) {
      console.log(ex);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else if (theme === "dark-theme") {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="App">
      <div className="App-child">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <InputBox
          setSearch={setSearchInfo}
          searchValue={searchInfo}
          fetchUsers={fetchUsers}
        />
        {loading && <Loader />}
        {!userDetails.id && !loading && <NotFound />}
        {userDetails.id && !loading && (
          <DetailsCard userDetails={userDetails} />
        )}
      </div>
    </div>
  );
}

export default App;
