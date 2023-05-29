import { useParams, Link } from 'react-router-dom'

function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)

  const prevNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextNumber = questionNumberInt + 1

  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <Link to={`/survey/${prevNumber}`}>Précédent</Link>

      {questionNumberInt === 10 ? (
        <Link to="/results">Résultats</Link>
      ) : (
        <Link to={`/survey/${nextNumber}`}>Suivant</Link>
      )}

      <h2>Question {questionNumber}</h2>
    </div>
  )
}

export default Survey
