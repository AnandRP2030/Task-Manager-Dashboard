
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";


export const HeaderDate = () => {
    return (
        <div>
            <div> Icon 
                <FontAwesomeIcon icon={faPlus} />
            </div>
            <div>
                {/* TODO: make it dynamic  */}
                <h3> 17/05/2026</h3>
                <h2> Sunday </h2>
            </div>
        </div>
    )
}