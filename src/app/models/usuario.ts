export class Usuario {
    public nombre: string;
    private clave: string;

    public constructor(nombre: string, clave: string)
    {
        this.nombre = nombre;
        this.clave = clave;
    }
}
