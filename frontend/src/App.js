import React, { Component } from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    { name: "Taro", age:10 },
    { name: "toshi", age:27 },
    { name: "user" },
  ]
  return (
    <div>
      {
        profiles.map((profiles, index) => {
          return <User name = {profiles.name} age={profiles.age} key={index}/>
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}! I am {props.age} years old</div>
}

User.defaultProps = {
  age: 1
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
