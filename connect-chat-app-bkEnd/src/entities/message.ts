import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm'
import { Conversation } from './conversation'

import { User } from './user'

@Entity('cessage')
export class Message extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  Content: string

  @ManyToOne(
    () => User, user => user.message
  )
  @JoinColumn({
      name: 'userId'
  })
  user:User

  @ManyToOne(
      () => Conversation, conversation => conversation.message 
  )
  @JoinColumn()
  conversation: Conversation
  @CreateDateColumn({ type: 'timestamp' })
  dateCreated: Date

}
