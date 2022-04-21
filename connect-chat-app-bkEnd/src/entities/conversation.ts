import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    JoinTable,
    JoinColumn
} from 'typeorm'

import { User } from './user'
import { Message } from './message'

@Entity('conversation')
export class Conversation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToMany(
      () => User, user => user.conversation
  )
  @JoinTable({
    name: "ConversationUser",
    joinColumn: {
        name: "Conversation",
        referencedColumnName: 'id'
    },
    inverseJoinColumn: {
        name: "User",
        referencedColumnName: "id"
    }
})
  user: User[]

  @OneToMany(
    () => Message, message => message.conversation
  )
  message: Message;

  @CreateDateColumn({ type: 'timestamp' })
  dateCreated: Date

  @UpdateDateColumn({ type: 'timestamp' })
  dateUpdated: Date
}
