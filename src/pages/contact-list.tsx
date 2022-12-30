import { useContext, useEffect } from "react";
import Header from "../components/header";
import Search from "../components/search";
import User from "../components/user";
import { DynamicObject, GlobalStateContext } from "../context/global-context";

const contactApiUrl =
  "https://randomuser.me/api/?results=20&amp;inc=name,picture,id,cell&amp;nat=in";

const Contacts = () => {
  const { state, setState } = useContext(GlobalStateContext);
  useEffect(() => {
    fetch(contactApiUrl)
      .then((response) => response.json())
      .then((contactsData) => {
        setState({
          type: "contacts",
          payload: { allContacts: contactsData?.results || [] }
        });
      })
      .catch((err) => console.error("Caught Error. Details:", err?.message));
  }, []);

  const contacts = state?.contacts?.allContacts;
  const searchTerm = state?.contactList?.searchTerm;
  const filteredUsers =
    contacts?.length && searchTerm?.length
      ? contacts.filter((contact: DynamicObject) =>
          `${contact?.name?.first || ""} ${contact?.name?.last || ""}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        )
      : contacts;
  return (
    <>
      <header className="header-grp sticky">
        <Header title={"Contacts"} />
        <Search />
      </header>
      <main className="content-grp">
        {filteredUsers?.length &&
          filteredUsers.map((contact: DynamicObject, key: number) => (
            <User key={key} user={contact} />
          ))}
      </main>
    </>
  );
};

export default Contacts;
