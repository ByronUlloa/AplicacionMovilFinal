

export interface Uid{
    nombre : string;
    correo: string;
    uid: string;
    password: string;
    perfil: 'estudiante'|'profesor'
}

export interface asistencia {
    nombre : string;
    date : string;
    assist : boolean; 
    uid : string;
}