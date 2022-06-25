import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { LinkContainer } from 'react-router-bootstrap'

const Home = () => {
  const [qData, setQData] = useState([])
  async function getQuiz() {
    try {
      const response = await axios.get('/api/quizzes')
      setQData(response.data.quizzes)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getQuiz()
  }, [])

  return (
    <div>
      <Container className="p-3">
        {qData.map((q) => (
          <Card key={q.id} style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title> {q.name}</Card.Title>
              <Card.Text>Description: {q.description}</Card.Text>
              <Card.Text>
                <p>Author: {q.author}</p>
                <p>Created on: {q.dateCreated}</p>
                <p>Updated on: {q.dateUpdated}</p>
              </Card.Text>
              <LinkContainer to={`/quiz${q.id}`}>
                <Button variant="primary">Start quiz</Button>
              </LinkContainer>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </div>
  )
}

export default Home
