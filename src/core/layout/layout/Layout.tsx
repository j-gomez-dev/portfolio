import React, { Component } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'

type Props = {}

type State = {}

export default class Layout extends Component<Props, State> {
  state = {}

  render() {
    return (
      <section id="app">
        <Header></Header>
        <Footer></Footer>
      </section>
    )
  }
}