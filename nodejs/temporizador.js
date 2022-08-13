const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 17 * * 1', function(){

  console.log('Executando tarefa 1!', new Date().getSeconds())

}) // schedulejob tem este formato ''segundo minuto hora diaDoMês mês diaDaSemana'  Dias da semana começam em 0, sendo 0 = domingo,1 = segunda

setTimeout(function(){ // regra para cancelar apos 20 segundos // Aparentemente setTimeout, já é nativo do Node // Também nativos, setImmediate e setInterval
  tarefa1.cancel()
  console.log('Cancelando Tarefa 1!')
}, 20000) // 20k milisegundos = 20 seconds

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [ new schedule.Range(1, 5)] // Rergras para funcionar nos dias da semana, sendo 0 = domingo, 1 = segunda
regra.hour = 17
regra.second = 30
// Dentro do range de segund a sexta, as 17:00, todos os segundo "30" a regra vai ativar

const tarefa2 = schedule.scheduleJob(regra, function(){
  console.log('Executando tarefa 2!', new Date().getSeconds())
})
// Isso aqui só vai ser executado de acordo com a regra da linha 14.