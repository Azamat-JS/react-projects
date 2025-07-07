import ModalTest from "./components/custom-modal/modal-test"
import TabTest from "./components/custom-tabs/tab-test"
import FeatureFlagsGlobalState from "./components/feature-flag/Context/Context"
import FeatureFlags from "./components/feature-flag/Flag"
import Github from "./components/github/Github"
import ScrollTopAndBottom from "./components/scrollingTopandBottom/ScrollTop"
import Autocomplete from "./components/search-autocomplete/Autocomplete"
import TicTac from "./components/TicTac/TicTac"
import TestClick from "./components/use-outside-click/TestClick"
import TestFetch from "./components/UseFetchHook/TestFetch"
import WindowTest from "./components/WindowResize/WindowTest"

function App() {

  return (
    <>
    {/* <FeatureFlagsGlobalState>
      <FeatureFlags />
    </FeatureFlagsGlobalState> */}

      <ScrollTopAndBottom/>
        </>
  )
}

export default App
