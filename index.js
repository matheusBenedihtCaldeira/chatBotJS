//Chama o gerador de QR Code para conectar o whatsapp a framework
const qrcode = require('qrcode-terminal');
//Chama a framework do whatsapp-web.js
const { Client } = require('whatsapp-web.js');
//Guarda o whatsapp na variavel cliente
const client = new Client();
//Gera o QR Code para acessar o whatsapp
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
//Verifica se o WhatsApp está conectado
client.on('ready', () => {
    console.log('WhatsApp conectado!');
});

client.on('message', message => {
	console.log(message.body);
});

client.initialize();
//Define a mensagem de gatilho para iniciar o atendimento
const gatilho = "Olá, gostaria de realizar um pedido."
let nome = "xvx99*"

client.on('message', message => {
	if(message.body === gatilho) {
		client.sendMessage(message.from, 'Olá, primeiramente agradeço por ter escolhido nossa pizzaria, para iniciarmos o seu atendimento rápido, me informe o seu nome completo.');
	}
	if(message.body !==  null && message.body !== gatilho && nome === "xvx99*"){
		nome = message.body;
		console.log(nome)
		client.sendMessage(message.from, `Olá ${nome} escolha a opção de atendimento.`)
		client.sendMessage(message.from, "Menu:\n1 - Fazer um pedido\n2 - Acompanhar o pedido\n3 - Ver as opções de pizzas\n4 - Falar com um atendente")
	}
	if(message.body !== null){
		let opcaoDoMenu = message.body;
		
		switch(opcaoDoMenu){
			case 1:
				console.log("cliente deseja fazer um pedido ")
				break;
			case 2:
				console.log("Cliente deseja acompanhar o pedido.")
				break;
			case 3:
				console.log("Cliente deseja ver as opções de pizzaria")
				break;
			case 4: 
				console.log("Cliente deseja falar com algum atendente")
				break;
			default:
				cliente.sendMessage(message.from, "Opção inválida")
		}
	}
});