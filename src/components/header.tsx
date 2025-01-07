export default function Header () {
  return (
    <div className="py-8">

      <div className="join pr-8">
        <input className="join-item btn" type="radio" name="options" aria-label="Easy" value="easy" />
        <input className="join-item btn" type="radio" name="options" aria-label="Medium" value="medium" />
        <input className="join-item btn" type="radio" name="options" aria-label="Hard" value="hard" />
      </div>

      <div className="join">
        <input className="input input-bordered join-item" placeholder="Giphy images" />
        <button className="btn join-item rounded-r-full">Start</button>
      </div>

    </div>
  )
}