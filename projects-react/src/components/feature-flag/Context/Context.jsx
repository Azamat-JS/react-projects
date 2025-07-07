import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../Data";

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagsGlobalState({ children }) {
    const [loading, setLoading] = useState(false);
    const [enabledFlags, setEnabledFlags] = useState({});


    async function fetchFeatureFlags() {
        try {
            setLoading(true)
            // original service call
            const response = await featureFlagsDataServiceCall()
            console.log(response);
            setEnabledFlags(response)
            setLoading(false)
        } catch (error) {
            console.error(error)
            setLoading(false)
            throw new Error(error.message)
        }
    }
    useEffect(() => {
        fetchFeatureFlags()
    },[])
  return (
    <FeatureFlagsContext.Provider  value={{loading, enabledFlags}}>{children}</FeatureFlagsContext.Provider>
  );
}
