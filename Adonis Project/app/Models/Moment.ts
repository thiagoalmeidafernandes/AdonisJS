import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Moment extends BaseModel {
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
