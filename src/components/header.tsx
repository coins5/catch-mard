import { $gameStatus } from "../stores/game_status_store"
function surrender () {
  $gameStatus.set("SETTINGS")
}
export default function Header () {
  return (
    <div className="flex justify-around py-8">
      <div className="text-2xl">
        Catch Mard
      </div>

      
      <div className="text-center">
        <button className="btn btn-primary" onClick={surrender}>Surrender?</button>
        <br />
        <span className="text-xs">
          Or just press F5
        </span>
      </div>

      
    </div>
  )
}