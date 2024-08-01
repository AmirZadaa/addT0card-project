
import Cardlist from "./Cardlist"
export default function Cards({update,setupdate}) {
  return (
    <div>
        <Cardlist update={update} setupdate={setupdate} ></Cardlist>
    </div>
  )
}
