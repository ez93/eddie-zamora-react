import { 
     faTrash,
     faSignOutAlt, 
     faEdit, 
     faCircleNotch, 
     faPlug, 
     faPhone,
     faAt,
     faHome,
     faEnvelope,
     faKey,
     faGreaterThan
    } from "@fortawesome/free-solid-svg-icons";
 
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
    return library.add(faTrash, faSignOutAlt, faEdit, faCircleNotch, faPlug, faAt, faPhone, faHome, faEnvelope,faKey,faGreaterThan);
};
 
export default Icons;