import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm'
import { Conversation } from './conversation'
import { Message } from './message'

@Entity('User_Auth')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column({ unique: true})
  email: string

  @Column()
  password: string

  @Column({ unique: true })
  username: string

  @OneToMany(
    () => Message, message => message.user
  )
  message:Message[]
  
  @ManyToMany(
    () => Conversation, conversation => conversation.user
  )
  conversation: Conversation

  @CreateDateColumn({ type: 'timestamp' })
  dateCreated: Date

  @UpdateDateColumn({ type: 'timestamp' })
  dateUpdated: Date
}
