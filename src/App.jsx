import Header from "../components/Header";
import Entry from "../components/Entry";
import map_marker from "/travel-image/map-marker.webp";
import japan_jpg from "/travel-image/japan.jpg";
import eiphel_jpg from "/travel-image/eiphel.jpg";
import pyramids_jpg from "/travel-image/pyramids.jpg";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Entry
          img={japan_jpg}
          icon={map_marker}
          countryName="Japan"
          title="Japanese Traditional Building"
          location="https://www.google.com/maps/place/Kyoto,+Japan/@35.3127248,135.2692883,363853m/data=!3m1!1e3!4m15!1m8!3m7!1s0x6001a8d6cd3cc3f1:0xc0961d366bbb1d3d!2sKyoto,+Japan!3b1!8m2!3d35.011564!4d135.7681489!16zL20vMDlkNF8!3m5!1s0x6001a8d6cd3cc3f1:0xc0961d366bbb1d3d!8m2!3d35.011564!4d135.7681489!16zL20vMDlkNF8?authuser=0&entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D"
          locText=" View on Google Maps"
          date="17 December, winter 2024"
          desc="Japan is located in Asia. One of the developed countries in the world. It is well known for its great companies like Hundai, Honda, and Honor. It has a lot of amazing technologies."
        />
        <Entry
          img={eiphel_jpg}
          icon={map_marker}
          countryName="France"
          location="https://www.google.com/maps/place/Eiffel+Tower/@48.8585211,2.2952778,72m/data=!3m1!1e3!4m6!3m5!1s0x47e66e2964e34e2d:0x8ddca9ee380ef7e0!8m2!3d48.8583701!4d2.2944813!16zL20vMDJqODE?authuser=0&entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"
          locText=" View on Google Maps"
          title="Eiffel Tower in Paris"
          date="18 January, winter 2025"
          desc="France is located in Europe. One of the developed countries in the world. It is well known for its great companies like Versace, Axa, and Total Energies. It has a lot of amazing technologies"
        />
        <Entry
          img={pyramids_jpg}
          icon={map_marker}
          countryName="Egypt"
          location="https://www.google.com/maps/@29.9736992,31.1282811,2a,75y,161.41h,89.33t/data=!3m7!1e1!3m5!1s2sQY2sbCNoMfyZ5fpgk8Ow!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0.6657468239760505%26panoid%3D2sQY2sbCNoMfyZ5fpgk8Ow%26yaw%3D161.41149994614548!7i13312!8i6656?authuser=0&entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"
          locText=" View on Google Maps"
          title="Pyramids Giza"
          date="12 July, summer 2024"
          desc="Egypt is located in Asia. One of the developing countries in the world. It is well known for its great traditions. It has a lot of amazing touristic places."
        />
      </main>
    </>
  );
}

export default App;
