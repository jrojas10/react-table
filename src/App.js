// eslint-disable-next-line
import React, { Component } from 'react'
import Table from './Table'

class App extends React.Component {
  render() {
    const people = [
      {
        name: 'Sieg',
        job: 'Knight',
      },
      {
        name: 'Dainn',
        job: 'Mage',
      },
      {
        name: 'Eir',
        job: 'Cleric'
      },
    ]


    return (
      <div classname="container">
        <Table peopleData={people} />
      </div>
    )
  }
}

export default App