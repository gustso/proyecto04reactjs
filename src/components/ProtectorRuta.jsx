// RutaProtegida
import { Navigate } from 'react-router-dom'
import { useAutorizaciones } from '../hooks/useAutorizaciones'

const ProtectorRuta = ({ children, rolRequerido }) => {
  const { usuarioActivo } = useAutorizaciones()

  // No hay sesión → login
  if (!usuarioActivo) {
    return <Navigate to="/" replace />
  }

  // Hay sesión pero no tiene el rol necesario
  if (rolRequerido && usuarioActivo.rol !== rolRequerido) {
    return <Navigate to="/pedidos" replace />
  }

  return children
}

export default ProtectorRuta;