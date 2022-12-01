import { HydraAdmin } from "@api-platform/admin";

function Admin_pannel(){
    return(
        <HydraAdmin entrypoint="https://localhost:8000/api" />
    )
}
export default Admin_pannel;