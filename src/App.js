import { Routes, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { LinkContainer } from 'react-router-bootstrap'
// import Button from 'react-bootstrap/Button'
// import Badge from 'react-bootstrap/Badge'
import Nav from 'react-bootstrap/Nav'
import Home from './components/Home'
import Quiz from './components/Quiz'
import About from './components/About'
import DataProvider from './components/DataContext'

function App() {
  return (
    <div className="App">
      <DataProvider>
        <div className="App d-flex flex-column">
          <header className="App-header">
            <Navbar bg="primary" variant="dark">
              <Container>
                <LinkContainer to="/">
                  <Navbar.Brand href="#home">Q</Navbar.Brand>
                </LinkContainer>
                <Nav className="me-auto">
                  <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/quiz:id">
                    <Nav.Link>Quiz</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/about">
                    <Nav.Link>About</Nav.Link>
                  </LinkContainer>
                </Nav>
              </Container>
            </Navbar>
          </header>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </DataProvider>
    </div>
  )
}

export default App
