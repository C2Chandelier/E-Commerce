import { HydraAdmin, ResourceGuesser } from "@api-platform/admin";
import { Link } from "react-router-dom";
import './admin.css'

function AdminPannel() {
    return (
        <div>
        <Link className="btn-back" to={"/"}>Retour</Link>
        <HydraAdmin basename="/admin" entrypoint="https://localhost:8000/api">
            <ResourceGuesser name={"articles"} />
            <ResourceGuesser name={"users"} />
        </HydraAdmin>
        </div>
    )
}
export default AdminPannel;