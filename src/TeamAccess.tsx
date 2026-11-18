import { ChevronDown, X } from 'lucide-react'
export type StaffRole = 'administrador' | 'cajero' | 'mozo'

export function TeamAccess({ role, onChange, onClose }: { role: StaffRole; onChange: (role: StaffRole) => void; onClose: () => void }) {
  const profiles: { role: StaffRole; initials: string; detail: string }[] = [
    { role: 'administrador', initials: 'AD', detail: 'Gestiona el sistema y el equipo' },
    { role: 'cajero', initials: 'CJ', detail: 'Caja, cobros y reportes' },
    { role: 'mozo', initials: 'MO', detail: 'Mesas, pedidos y cocina' },
  ]
  return <div className="modal-backdrop" onMouseDown={e => { if (e.target === e.currentTarget) onClose() }}><section className="team-modal"><header><div><div className="eyebrow">CUENTA PRINCIPAL Y PERSONAL</div><h2>Accesos del sistema</h2><p>Perfiles de acceso para cada función.</p></div><button className="icon-button" onClick={onClose}><X size={20}/></button></header><article className="main-account"><div className="google-mark">G</div><div><strong>Cuenta principal · Google</strong><small>Administrador · conexión Firebase pendiente</small></div><span className="status-tag tag-occupied">Principal</span></article><div className="role-options">{profiles.map(p=><button key={p.role} className={role===p.role?'chosen':''} onClick={()=>onChange(p.role)}><span className={`role-badge ${p.role}`}>{p.initials}</span><span><strong>{p.role[0].toUpperCase()+p.role.slice(1)}</strong><small>{p.detail}</small></span><ChevronDown size={16}/></button>)}</div><small className="auth-note">Los perfiles son una vista de demostración. Para iniciar sesión con Google y cuentas reales del personal, configura Firebase Authentication y los permisos del proyecto.</small></section></div>
}
