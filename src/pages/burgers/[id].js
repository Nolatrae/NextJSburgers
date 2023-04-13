export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:5000/items')
  const data = await res.json()

  const paths = data.map(burger =>{
    return {
      params: { id: burger.id}
    }
  })

  return {
    paths,
    fallback: false
  }
}


const Details = () => {
  return (
    <div>
      <h1>Details</h1>
    </div>
  )
}

export default Details
