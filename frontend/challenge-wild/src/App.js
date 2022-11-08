import "../src/main.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [member, setMember] = useState();
  const [isLoad, setIsLoad] = useState(true);
  const [list, setList] = useState([]);

  const send = (e) => {
    e.preventDefault();

    const data = {
      member: member,
    };

    axios
      .post("http://localhost:8080/members/", data)
      .then(function (res) {
        console.log(res);
        setIsLoad(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (isLoad) {
      axios
        .get("http://localhost:8080/members/allMembers")
        .then(function (res) {
          setList(res.data);
          console.log(res.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      setIsLoad(false);
    }
  }, [isLoad]);

  return (
    <div className="App">
      <header>
        <h1>
          <img
            src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png"
            alt="Wild Code School logo"
          />
          Les Argonautes
        </h1>
      </header>

      <main>
        <h2>Ajouter un(e) Argonaute</h2>
        <form className="new-member-form" onSubmit={(e) => send(e)}>
          <label htmlFor="name">Nom de l&apos;Argonaute</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Charalampos"
            value={member}
            onChange={(e) => setMember(e.target.value)}
          />
          <button type="submit">Envoyer</button>
        </form>

        <h2>Membres de l'équipage</h2>
        <section className="member-list">
          {list.map((member, i) => (
            <div key={i} className="member-item">
              {member.member}
            </div>
          ))}
        </section>
      </main>

      <footer>
        <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
      </footer>
    </div>
  );
}

export default App;
