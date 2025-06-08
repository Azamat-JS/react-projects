import React from 'react'

const Conditions = ({isValid}) => {
    const ValidPassword = () => <h1>Valid password</h1>
    const InvalidPassword = () => <h1>Invalid password</h1>

  return isValid ? <ValidPassword/> : <InvalidPassword/>
}

export default Conditions