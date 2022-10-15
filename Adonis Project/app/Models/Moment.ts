import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Comment from './Comment'

export default class Moment extends BaseModel {
  @hasMany(() => Comment)
  public comments: HasMany<typeof Comment>

  @column({ isPrimary: true })    //Primeira coluna da tabela - ID
  public id: number

  @column()                       //Segunda coluna - coluna de titulo
  public title: string
  
  @column()                       //Terceira coluna - descrição
  public description: string
  
  @column()                       //Quarta coluna - imagem postada
  public image: string

  @column.dateTime({ autoCreate: true }) //Quinta - "Criado em:"
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true }) //Sexta - "Atualizado em:"
  public updatedAt: DateTime
}
