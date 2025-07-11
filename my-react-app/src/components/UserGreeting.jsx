import React from 'react'
import PropTypes from 'prop-types'

const UserGreeting = (props) => {
  const welcomeMessage = <h2 className='welcome-message'>
                          Welcome {props.username}
                          </h2>

  const loginPrompt = <h2 className='login-prompt'>
                      Please log in to continue
                      </h2>
return (props.isLoggedIn ? welcomeMessage : loginPrompt);
}

UserGreeting.proptypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
}

UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Hamidulloh"
}

export default UserGreeting