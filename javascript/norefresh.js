function openA(x){
	
	x.style.boxShadow = "0 0 22px -6px rgba(0,0,0,.2)";
	
	
}

function openB(x){

    
    x.style.boxShadow =" 0 0 22px -6px rgba(83, 82, 237,0.5)";	
    x.style.borderRadius="5px";
}



var controle;

function informacao(caixa,titulo,texto,botao){

if(controle == true){
	
	
	caixa = document.getElementById('gerenciador');
	titulo = document.getElementById("subTitulo");
	titulo.textContent="Painel de Controle";
	titulo = document.getElementById("explicacao");
	titulo.textContent="Nosso painel de controle SolusVM conta com várias opções para você gerenciar seu servidor. ";
	
	
	controle = false;
	
}else{
	
	caixa = document.getElementById('gerenciador');
	titulo = document.getElementById("subTitulo");
	titulo.textContent="";
	titulo = document.getElementById("explicacao");
	titulo.textContent="";
	controle = true;
}

}





function informacao2(caixa,titulo,texto){

if(controle == true){
	

	caixa = document.getElementById('virtualizador');
	titulo = document.getElementById("Titulo");
	titulo.textContent="Sistema";
	titulo = document.getElementById("texto");
	titulo.textContent="Suportamos os principais sistemas operacionais, caso o seu não esteja na lista, iremos montar a ISO de instalação para você.";
	controle = false;
	
}else{
	
	caixa = document.getElementById('virtualizador');
	titulo = document.getElementById("Titulo");
	titulo.textContent="";
	titulo = document.getElementById("texto");
	titulo.textContent="";
	controle = true;
}

}






     

