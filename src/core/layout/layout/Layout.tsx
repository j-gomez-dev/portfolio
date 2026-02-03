import { Foorter, Header, NavBar } from '../components';

type Props = {}

const Layout = (props: Props) => {
  return (
    <section id="layout">
      <Header></Header>
      <NavBar></NavBar>
      <Foorter></Foorter>
    </section>
  )
} 

export default Layout;
