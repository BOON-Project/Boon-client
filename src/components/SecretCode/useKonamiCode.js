
import {useSecretCode} from './useSecretCode'

const konamiCode =[
    "KeyB",
    "KeyO",
    "KeyO",
    "KeyN",
]

export const useKonamiCode = ()=>{
    const success = useSecretCode(konamiCode)



    return success;
}