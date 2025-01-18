import Header from "../components/Header";
import Entry from "../components/Entry";
import data from "./doc";
function App() {

const entryElements = data.map((entry) => {
  return (
    <Entry
    key={entry.id}
      img={entry.img}
      icon={entry.icon}
      countryName={entry.countryName}
      location={entry.location}
      locText={entry.locText}
      title={entry.title}
      date={entry.date}
      desc={entry.desc}
    />
  )});


  return (
    <>
      <Header />
      <main className="container">
       {entryElements}
      </main>
    </>
  );
}

export default App;
