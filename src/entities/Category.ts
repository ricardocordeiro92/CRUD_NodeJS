import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("categories")
export class Category {

    @PrimaryColumn()
    id: string;

    @Column() // Se o nome da coluna no bd for o mesmo do nome na classe então não precisa passar nada dentro dos parenteses, caso contrario deve-se passar o nome da coluna a ser referenciada.
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}