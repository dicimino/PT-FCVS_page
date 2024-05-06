export interface Fotos {
    id: string
    usuario: string
    imagePath: string
}

export interface Comentarios {
    id: string
    usuario: string
    conteudo: string
    fotosId: string
}
