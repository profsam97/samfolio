import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DevicesOutlined, Language } from "@mui/icons-material";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
const services = [
    {
    name :  'WEB DEVELOPMENT',
    description: "Responsible for the coding, design and layout of a website according to a company's specifications. taking into consideration user experience and function.",
    icon: <Language  fontSize='2' className='i'/>
    },
     {
    name :  'FRONT END DEVELOPER',
    description: "Responsible for the coding, design and layout of a website according to a company's specifications. taking into consideration user experience and function.",
    icon:  <DevicesOutlined fontSize='2' className='i'/>
    },
     {
    name :  'BACKEND DEVELOPER',
    description: 'Builds and maintains the technology needed to power the components which enable the user-facing side of the website to exist. including but not limited to the core application logic, databases, data and application integration, API and other back end processes.',
    icon: <FontAwesomeIcon icon={faDatabase}  fontSize='2' className='i'/>
    },

]
export default services;