import { useState } from 'react';
import Contraseña_de_seguridad_del_cambio from '../../screens/Contrasena_de_seguridad_del_cambio';
import NuevaContraseña from '../../screens/NuevaContraseña';

export default function Index() {
const [step, setStep] = useState(1);

if (step === 1) {
     return (
       <Contraseña_de_seguridad_del_cambio onContinue={() => setStep(2)} />
     );
   }

   return <NuevaContraseña />;
}