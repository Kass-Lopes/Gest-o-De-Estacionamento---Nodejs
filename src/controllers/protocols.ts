export interface HttpResponse<T> {
    status: number,
    data: T | string
}

export interface HttpRequest {
    
}

export interface vagas{
    id: number,
    status: string
}

export interface ticket {
    id: string,
    placa: string,
    vaga_id: string,
    hora_de_entrada?: Date,
    hora_de_saide?: Date
}