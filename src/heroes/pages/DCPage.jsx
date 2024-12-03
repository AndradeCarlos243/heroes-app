import { HeroList } from "../components"

export const DCPage = () => {
  return (
    <div className="my-3">
      <h1>DC Comics</h1>
      <hr />
      <HeroList publisher="DC Comics" />
    </div>
  )
}
