import Basic from './components/Basic';

function App() {
  return (
    <div className="w-full h-[100vh] p-0" style={{ backgroundColor: '#f8fafd' }}>
      <div className="flex h-full">
        <div
          className="
            h-full
            flex-grow
            w-[20%] 
            sm:w-[30%] 
            md:w-[20%] 
            lg:w-[50%] 
            xl:w-[60%]
          "
        >
          <Basic />
        </div>
      </div>
    </div>
  );
}

export default App;
