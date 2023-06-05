

//sleep(time): uma função que retorna uma promise que é resolvida após um determinado período de tempo (em milissegundos).

//hoverSlide(index): uma função que adiciona a classe 'hover' ao elemento filho com o índice fornecido do elemento slides, se existir.

//unhoverSlide(index): uma função que remove a classe 'hover' do elemento filho com o índice fornecido do elemento slides, se existir.

//demo(): uma função assíncrona que realiza uma demonstração dos slides. Ela executa uma sequência de ações, como definir a página inicial, exibir slides específicos, adicionar classes 'hover', aguardar um tempo determinado, etc. Essa função é chamada quando o menu é clicado.

//Adiciona listeners de eventos aos botões 'next', 'prev' e 'menu' para chamar as funções correspondentes quando são clicados. No caso dos botões 'next' e 'prev', a função goToPage é chamada para atualizar a página atual. No caso do botão 'menu', a função demo é chamada para iniciar a demonstração.

//Chama a função demo após um pequeno atraso de 100ms (usando a função sleep) para iniciar a demonstração automaticamente.

//Em resumo, esse código controla a exibição de slides, a navegação entre as páginas e realiza uma demonstração automática dos slides quando o menu é clicado.



let hero = document.getElementById('hero-slides');
//hero: representa o elemento com ID hero-slides.
let menu = document.getElementById('menu');
//menu: representa o elemento com ID menu.
let slides = document.getElementById('slides');
//slides: representa o elemento com ID slides.
let dribbble = document.getElementById('dribbble');
//dribbble: representa o elemento com ID dribbble.
let next = [ 'next', 'next-catch' ].map(n => document.getElementById(n));
//next: é um array contendo dois elementos, que são os elementos com IDs next e next-catch.
let prev = [ 'prev', 'prev-catch' ].map(n => document.getElementById(n));
//prev: é um array contendo dois elementos, que são os elementos com IDs prev e prev-catch.
let slideChildren = slides.children;
//slideChildren: representa os elementos filhos do elemento com ID slides.
let slideCount = slides.children.length;
//slideCount: representa a quantidade de elementos filhos do elemento com ID slides.
let currentlyDemoing = false;
//currentlyDemoing: uma variável booleana para controlar se a demonstração está em andamento.
let slidesPerPage = () => window.innerWidth > 1700 ? 4 : window.innerWidth > 1200 ? 3 : 2;
//slidesPerPage: uma função que retorna a quantidade de slides por página, dependendo da largura da janela.
let currentPage = 0;
//currentPage: representa a página atual (inicialmente é 0).
let maxPageCount = () => slideCount / slidesPerPage() - 1;
//maxPageCount: uma função que retorna a contagem máxima de páginas com base na quantidade de slides por página.
function goToPage(pageNumber = 0) {
	currentPage = Math.min(maxPageCount(), Math.max(0, pageNumber));
	console.log(currentPage);
	hero.style.setProperty('--page', currentPage);
}
//goToPage(pageNumber): uma função que recebe um número de página como parâmetro (por padrão, é 0) 
// atualiza a variável currentPage para esse valor, garantindo que esteja dentro dos limites válidos. 
//Essa função também define a propriedade CSS --page do elemento hero com o valor da página atual
function sleep(time) {
	return new Promise(res => setTimeout(res, time));
}
//sleep(time): uma função que retorna uma promise que é resolvida após um determinado período de tempo (em milissegundos).
function hoverSlide(index) {
	index in slideChildren &&
		slideChildren[index].classList.add('hover');
}
//hoverSlide(index): uma função que adiciona a classe 'hover' ao elemento filho com o índice fornecido do elemento slides, se existir.
function unhoverSlide(index) {
	index in slideChildren &&
		slideChildren[index].classList.remove('hover');
}
//unhoverSlide(index): uma função que remove a classe 'hover' do elemento filho com o índice fornecido do elemento slides, se existir.

async function demo() {
	if(currentlyDemoing) {
		return;
	}
    //demo(): uma função assíncrona que realiza uma demonstração dos slides. Ela executa uma sequência de ações, como definir a página inicial,
    //exibir slides específicos, adicionar classes 'hover', aguardar um tempo determinado, etc. Essa função é chamada quando o menu é clicado.
	currentlyDemoing = true;
	if(currentPage !== 0) {
		goToPage(0);
		await sleep(800);
	}
	let slides = slidesPerPage();
	let pageSeq_ = { 2: [ 1, 2, 1 ], 3: [ 1, 2, 1 / 3 ], 4: [ 1, 1, 0 ] };
	let pageSeq = pageSeq_[slides] || pageSeq_[4];
	let slideSeq_ = { 2: [ 2, 4, 3 ], 3: [ 3, 6, 2 ], 4: [ 3, 6, 2 ] };
	let slideSeq = slideSeq_[slides] || slideSeq_[2];
	await sleep(300);
	goToPage(pageSeq[0]);
	await sleep(500);
	hoverSlide(slideSeq[0]);
	await sleep(1200);
	goToPage(pageSeq[1]);
	dribbble.classList.add('hover');
	unhoverSlide(slideSeq[0]);
	await sleep(500);
	hoverSlide(slideSeq[1]);
	await sleep(1200);
	goToPage(pageSeq[2]);
	unhoverSlide(slideSeq[1]);
	await sleep(300);
	hoverSlide(slideSeq[2]);
	await sleep(1600);
	goToPage(0);
	unhoverSlide(slideSeq[2]);
	dribbble.classList.remove('hover');
	currentlyDemoing = false;
}//Adiciona listeners de eventos aos botões 'next', 'prev' e 'menu' para chamar as funções
// correspondentes quando são clicados. No caso dos botões 'next' e 'prev', a função goToPage é chamada para atualizar a página atual. No caso do botão 'menu',
 //a função demo é chamada para iniciar a demonstração.

next.forEach(n => n.addEventListener('click', () => !currentlyDemoing && goToPage(currentPage + 1)));
prev.forEach(n => n.addEventListener('click', () => !currentlyDemoing && goToPage(currentPage - 1)));
menu.addEventListener('click', demo);

sleep(100).then(demo);

// window.addEventListener('resize', () => {
	// console.log(document.body.style.getPropertyValue('--slide-per-page'));
// });

/* requestAnimationFrame */

//Em resumo, esse código controla a exibição de slides, a navegação entre as páginas e realiza uma demonstração automática dos slides quando o menu é clicado.