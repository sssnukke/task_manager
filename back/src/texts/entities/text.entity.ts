import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Text {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @Column({default: false})
    done: boolean;
}