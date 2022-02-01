import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Category } from "./Category";

@Entity("videos")
export class Video {

    @PrimaryColumn()
    id: string;

    @Column() // Se o nome da coluna no bd for o mesmo do nome na classe então não precisa passar nada dentro dos parenteses, caso contrario deve-se passar o nome da coluna a ser referenciada.
    name: string;

    @Column()
    description: string;

    @Column()
    duration: number;

    @Column()
    category_id: string;

    @ManyToOne(() => Category)
    @JoinColumn({ name: "category_id" })
    category: Category;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}