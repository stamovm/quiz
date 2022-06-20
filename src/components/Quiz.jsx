import { useEffect } from 'react'
import axios from 'axios'
import Question from './Question'

const Quiz = () => {
  async function getQuiz() {
    try {
      const response = await axios.get('/api/quizzes')
      console.log(response.data.quizzes)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getQuiz()
  }, [])

  return (
    <div>
      {
        //todo: map questions to Question components and display them here
      }
      <Question />
    </div>
  )
}

export default Quiz
