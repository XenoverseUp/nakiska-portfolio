import Nav from 'components/Nav'

const Layout = ({ children }) => (
  <main className="app">
    <Nav />
    {children}
  </main>
)

export default Layout
