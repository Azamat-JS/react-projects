import { useContext } from 'react'
import Accordian from '../accordian/Accordian'
import LightDarkMode from '../dark-theme/theme'
import RandomColor from '../random-color/random'
import StarRating from '../star-rating/rating'
import TicTac from '../TicTac/TicTac'
import './flag.css'
import { FeatureFlagsContext } from './Context/Context'
import TabTest from '../custom-tabs/tab-test'

export default function FeatureFlags() {

    const {loading, enabledFlags} = useContext(FeatureFlagsContext)

    const componentsToRender = [
        {
            key: 'showLightAndDarkMode',
            component: <LightDarkMode />
        },
        {
            key: 'showTicTacBoard',
            component: <TicTac />
        },
        {
            key: 'showRandomColorGenerator',
            component: <RandomColor />
        },
        {
            key: 'showAccordian',
            component: <Accordian />
        },
        {
            key: 'showStarRating',
            component: <StarRating />
        },
        {
            key: 'showTabs',
            component: <TabTest />
        }
    ];

    function checkEnabledFlags(getCurrentKey){
        return enabledFlags[getCurrentKey]
    }

    if(loading){
        return <h1>Loading data...</h1>
    }
  return (
    <div className='flag-title-container'>
      <h1 className="flag-title">Feature Flags</h1>
      {
        componentsToRender.map((componentItem) => checkEnabledFlags(componentItem.key) ? componentItem.component : null)
      }
    </div>
  );
}
