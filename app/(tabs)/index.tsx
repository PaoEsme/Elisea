// import { useState } from 'react';
// import Contraseña_de_seguridad_del_cambio from '../../screens/Contrasena_de_seguridad_del_cambio';
// import NuevaContraseña from '../../screens/NuevaContraseña';

// export default function Index() {
//   const [step, setStep] = useState(1);

//   if (step === 1) {
//     return (
//       <Contraseña_de_seguridad_del_cambio onContinue={() => setStep(2)} />
//     );
//   }

//   return <NuevaContraseña />;
// }
// }
// import Perfil_Proveedor_Edit from '../../screens/Perfil_Proveedor_Edit';

// export default function Index() {
//   return <Perfil_Proveedor_Edit />;
// }

import Lupa from '../../screens/Lupa';

export default function Index() {
  return <Lupa/>;
}
