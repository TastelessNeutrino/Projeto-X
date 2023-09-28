// esta é a parte funcional, ou seja, o "script" em JavaScript, engraçado que até o coisinha de comentar já muda de "<-- -->" para "//"
     const historia = { // criando uma constante, chamada história para armazenar o conteúdo de cada "página" do GameBook
    pagina0_0: // esta parte definirá o conteúdo presente em cada etapa "página" do jogo, no caso, "página 0_0" será a interface inicial.
    {          // note que "pagina 0_0" foi nomeada com _ poara não atrapalhar o reconhecimento pelo browser
        texto: "",
        imagemFundo: "url('https://drive.google.com/uc?id=1wqIjtRUgE1m3K2Il1I4-SfAScZWMgLK5')",
        opcoes: [ // lembra que "opcoes" já foi visto anteriormente no HTML? posteriormente veremos também a sua definição em JS
            {     // aqui, dentro das chaves, cada opção terá um texto, visível no quadradinho, e "página" referenete a ele
                texto: "START",    // eis aqui o texto do enunciado, que no caso, é a opção que será utilizada para iniciar a jogada, ou seja, levar para a interface
                proximaPagina: "pagina0_01"   // e aqui, a página que ele buscará
            }
        ]
    },
    pagina0_01:
    {
        texto: '"Achamos que somos livres, mas não somos, seguimos sempre o mesmo caminho."',
        imagemFundo: "url('https://t3.ftcdn.net/jpg/03/72/04/98/360_F_372049835_ngbGE2vG3NFEab5Fw5qI0mVSTBIQXjdA.jpg')",
        opcoes: [
        {
            texto: "INICIAR JORNADA",
            proximaPagina: "pagina1_0"
            }
        ]
    },
    pagina1_0: { // nessa página, 1_0, já haverá mais de uma opção
        texto: "Em derradeiro de setembro de 1923, na manhã daquele domingo nublado, depois de tomar um café na padaria da esquina e ler o seu jornal matinal, Adam estava caminhando para casa intrigado com a notícia dos arrombamentos recentes.",
        imagemFundo: "url('https://wallpapercave.com/wp/wp7740516.jpg')",
        opcoes: [
            {
                texto: "PROSSEGUIR",
                proximaPagina: "pagina2_0"
            }, // naturalmente as opções são separadas aqui com o uso de vírgulas ","
            {
                texto: "VOLTAR À PADARIA", // aqui, por exemplo, o texto traz uma possibilidade para o jogador curioso
                proximaPagina: "pagina2_1"
            },
            {
                texto: "JÁ ME ENCHEU O SACO", // nessa opção, por exemplo, o texto traz uma possibilidade de enredo imprevisível, para surpreender o jogador
                proximaPagina: "pagina2_2"
            }
        ]
    },
    pagina2_0: {
        texto: "A movimentada cidade em que residia, onde normalmente ninguém se importaria com as singularidades de transeuntes aleatórios, era o cenário perfeito para quem deseja passar despercebido.",
        imagemFundo: "url('https://i.pinimg.com/736x/92/30/a8/9230a85c6ddd61a878663d5132347a0a.jpg')",
        opcoes: [
            {
                texto: "PROSSEGUIR",
                proximaPagina: "pagina3_0"
            },
        ]
    },
    pagina2_1: {
        texto: "Você já tomou café! Não há mais nada interessante a se fazer por aqui!",
        imagemFundo: "url('https://images.squarespace-cdn.com/content/v1/595bdfa4414fb51e2862f53c/1634922882167-B0CW1BPVT8TDLGVIBWMQ/The-Hyperreal-and-Simulated-Coffee-Shops.png')",
        opcoes: [
            {
                texto: "SAIR DA PADARIA",
                proximaPagina: "pagina1_0"
            },
            {
                texto: "TOMAR OUTRO CAFÉ",
                proximaPagina: "pagina2_2cafe"
            },
            {
                texto: "JOGO ENFADONHO",
                proximaPagina: "pagina2_2"
            }
        ]
    },
    pagina2_2: {
        texto: "LAMÚRIA: Substantivo feminino, lamentação interminável, que importuna e que a nada leva; queixume, queixa. Semelhantes: lamentação, lenga-lenga, alarida...",
        imagemFundo: "url('https://www.pixelstalk.net/wp-content/uploads/2016/06/HD-Wallpapers-Sad-Free-Desktop.jpg')",
        opcoes: [
            {
                texto: "NOVA JORNADA",
                proximaPagina: "pagina0_0"
            },
            {
                texto: "VOLTAR AO JOGO",
                proximaPagina: "pagina1_0"
            }
        ]
    },
    pagina3_0: {
        texto: "Adam Lawrence, costumava se fechar completamente para as possibilidades do mundo alheias à sua rotina, entretanto, era domingo, e ele percebeu um rapaz saindo pela janela do apartamento de sua vizinha, Isabella.",
        imagemFundo: "url('https://i.imgur.com/TwuMJJp.jpeg')",
        opcoes:
        [
            {
                texto: "SEGUIR SUSPEITO",
                proximaPagina: "pagina4_2"
            },
            {
                texto: "ARREMESSAR UMA PEDRA",
                proximaPagina: "pagina4_0"
            },
            {
                texto: "IGNORAR O SUSPEITO E VOLTAR PARA CASA",
                proximaPagina: "pagina4_1"
            },
        ]
    },
    pagina2_2cafe: {
        texto: "Testemunhas relataram às autoridades, o comportamento frenético e alucinado de Adam que enfartou ao ingerir quantidades inacreditáveis do líquido. R.I.P.",
        imagemFundo: "url('https://i.ytimg.com/vi/dQwu8hRgbn0/maxresdefault.jpg')",
        opcoes: [{
                texto: "NOVA JORNADA",
                proximaPagina: "pagina0_0"
            },
            {
                texto: "SAIR DO JOGO",
                proximaPagina: "pagina ?"
            }]
    },

    pagina4_2: {
    texto: "Despretensiosamente, Adam resolve seguir o sujeito até um pub.",
    imagemFundo: "url('https://wallpapercave.com/wp/wp7480174.jpg')",
    opcoes: [{
                texto: "PROSSEGUIR",
                proximaPagina: "pagina4_2_0"
            }]
    },

    pagina4_2_0: {
        texto: "Ao chegar no pub da esquina, Adam se depara com uma surpreendente coincidência: Michelle, sua colega do escritório, também estava lá.",
        imagemFundo: "url('https://media.istockphoto.com/id/925619134/photo/celebration-retro-pub-old-fashioned-group-of-senior-men-and-young-woman-drinking-beer-party.jpg?s=612x612&w=0&k=20&c=cYDjTxC7L5pg8yh3KPJLggt5DwTZbvNAfA3giNjNOQA=')",
        opcoes: [{
                texto: "FALAR COM MICHELLE",
                proximaPagina: "pagina7_0"
            },
            {
                texto: "IGNORAR MICHELLE E O SUSPEITO",
                proximaPagina: "pagina4_2_1"
            },
            {
                texto: "CONTINUAR SEGUINDO O SUSPEITO",
                proximaPagina: "pagina7_2"
            }
           ]
    },
    pagina4_2_1: {
        texto: "Não há nada mais a se fazer aqui !",
        imagemFundo: "url('https://i.pinimg.com/originals/5e/da/7c/5eda7cdaa0048723006df11cb8faa3ed.jpg')",
        opcoes: [{
                texto: "HÁ SIM! FICAR NO PUB BEBENDO",
                proximaPagina: "pagina2_2cafe"
            },
            {
                texto: "IR PARA CASA",
                proximaPagina: "pagina4_1"
            },
            {
                texto: "NOVA JORNADA",
                proximaPagina: "pagina0_0"
            },
            { texto: "SAIR DO JOGO",
            proximaPagina: "?"

            }
           ]
    },
     pagina4_1: {
        texto: "Adam se apressou demais para prosseguir o seu percuso solitário e não percebeu quando um luxuoso Rolls-Royce Silver Ghost 1907 o acertou em cheio! R.I.P.",
        imagemFundo: "url('https://thumbs.dreamstime.com/b/classic-luxury-car-past-rolls-royce-glides-effortlessly-cityscape-turning-heads-its-timeless-277245740.jpg')",
        opcoes: [{
                texto: "SAIR DO JOGO",
                proximaPagina: "?"
            },
            {
                texto: "NOVA JORNADA",
                proximaPagina: "pagina0_0"
            }]
    },
    pagina5_0: {
        texto: "Adam tentou se desculpar, mas as desculpas não foram aceitas e as autoridades foram acionadas. Trágico fim! Adam foi institucionalizado.",
        imagemFundo: "url('https://1.bp.blogspot.com/-we7nAO8C3C4/XBHAQndu1aI/AAAAAAAAJYw/SdL-FOI4_9s3SNNuT2x_O2slKgMIYvG6gCLcBGAs/s1600/Rear%2BWindow%2B18.jpg')",
        opcoes: [
            {
                texto: "NOVA JORNADA",
                proximaPagina: "pagina0_0"
            },
            {
                texto: "SAIR DO JOGO",
                proximaPagina: "?"
            }]
    },
    pagina4_0: {
        texto: "Adam, se enfureceu ao ponto de atingir o suspeito com uma pedra. Estranhamente, Isabella, sua vizinha, correu para socorrer o suposto invasor que na verdade era um caso extraconjugal.",
        imagemFundo: "url('https://alfredhitchblog.files.wordpress.com/2017/09/courtyardjpg.jpg')",
        opcoes: [{
                texto: "SE DESCULPAR",
                proximaPagina: "pagina5_0"
            },
            {
                texto: "NOVA JORNADA",
                proximaPagina: "pagina0_0"
            },
            {
                texto: "EU DESISTO",
                proximaPagina: "?"
            }]
    },
    pagina7_0: {
        texto: "Conversando com Michelle, Adam percebe que ela está realmente interessada nos casos de invasões domiciliares. Ela relata o temor de que a cidade fique perigosa com a imigração. Adam comenta sobre o assunto e menciona o que acabou de ver na janela do apartamento de sua vizinha, Isabella. Michelle fica empolgada e sugere que eles explorem mais a situação, talvez conversando com Isabella ou investigando sua vizinhança para entender melhor os acontecimentos recentes.",
        imagemFundo: "url('')",
        opcoes: [{
                texto: "ACOMPANHAR MICHELLE",
                proximaPagina: "pagina8_0"
            },
            {
                texto: "SAIR DO PUB SOZINHO, SEM FALAR COM MICHELLE",
                proximaPagina: "pagina4_1"
            }]
    },
    pagina7_2: {
        texto: "Adam escolhe se aproximar para obter mais informações e, em um momento inesperado, acaba se envolvendo em um confronto com o invasor. As coisas podem ficar perigosas, e Adam terá que tomar decisões rápidas para lidar com a situação.",
        opcoes: [{
                texto: "PRENDER O SUSPEITO",
                proximaPagina: "pagina88_1"
            },

        {
                texto: "FAZER ACORDO COM O SUSPEITO",
                proximaPagina: "pagina88_2"
            },
        {
                texto: "DEIXAR ELE ESCAPAR",
                proximaPagina: "pagina88_3"
            },
        {
                texto: "INTIMIDAR O SUSPEITO",
                proximaPagina: "pagina88_4"
            }]
    },

    pagina8_0: {
        texto: "A dupla de detetives amadores, Michelle e Adam, decidem iniciar suas investigações, mergulhando no mistério que envolve o suspeito e o que está acontecendo com Isabella. Eles suspeitam que há segredos ocultos a serem descobertos e estão determinados a descobrir a verdade, mesmo que isso os leve a lugares obscuros e perigosos na cidade.",
        opcoes: [{
                texto: "CONTINUAR ACOMPANHANDO MICHELLE",
                proximaPagina: "pagina8_1"
            },
            {
                texto: "FICAR NO PUB BEBENDO",
                proximaPagina: "pagina2_2cafe"
            },
            {
                texto: "SAIR DO PUB SOZINHO",
                proximaPagina: "pagina4_1"
            }]
    },
    pagina8_1: {
        texto: "Michelle e Adam decidem procurar Isabella para esclarecer a situação e obter mais informações. Ao se aproximarem dela com cautela, Isabella começa a revelar gradualmente os segredos que ela estava escondendo, levando-os a perceber que há um conflito oculto acontecendo nos bastidores, do qual ela é parte fundamental.",
        opcoes: [{
                texto: "ADAM X ISABELLA",
                proximaPagina: "paginadella"
            },
            {
                texto: "MICHELLE X ISABELLA",
                proximaPagina: "paginamibella"
            }]
    },
    pagina88_1: {
        texto: "Adam, após o confronto, decide chamar a polícia e entregar o suspeito às autoridades. O invasor é preso preventivamente, mas Adam continua ignorante sobre sua verdadeira identidade. A polícia agradece a colaboração de Adam e promete investigar o caso com seriedade.",
        opcoes: [{
            texto: "NOVA JORNADA",
            proximaPagina: "pagina0_0"
        },
            {
                texto: " SAIR DO JOGO   ",
                proximaPagina: "paginanothing"
            }]
    },
        pagina88_2: {
        texto: "Em vez de entregá-lo à polícia, Adam decide fazer um acordo com o suspeito, negociando informações em troca de sua liberdade. O suspeito concorda em revelar detalhes sobre sua relação extraconjugal com Isabella e suas atividades suspeitas.",
        opcoes: [{
                texto: "CAIR NO PAPINHO",
                proximaPagina: "paginafuienganado"
            },
        {
                texto: "CAIR MATANDO",
                proximaPagina: "paginaespancar"
            }]
    },

        pagina88_3: {
        texto: "Adam, em um momento de dúvida, permite que o suspeito fuja do confronto. O suspeito desaparece na escuridão, deixando Adam com mais perguntas do que respostas.",
        opcoes: [{
                texto: "DESISTIR DA INVESTIGAÇÃO E FAZER ALGO MAIS INTERESSANTE",
                proximaPagina: "paginaescape"
            },
            {
                texto: "PERDER DO JOGO",
                proximaPagina: "pagina?"
            }]
    },
        pagina88_4: {
        texto: "As ações de Adam têm consequências. Ele pode enfrentar acusações de perturbação da ordem pública e briga de bar. Sua imagem e reputação podem ser afetadas",
        imagemFundo: "url('https://i.guim.co.uk/img/static/sys-images/Lifeandhealth/Pix/pictures/2014/10/2/1412244566088/John-Shelby-in-Peaky-Blin-010.jpg?width=620&quality=85&auto=format&fit=max&s=4ccdcea932893b6730eda5ca15f7543e')",
        opcoes: [{
                texto: "ESPANCAR O SUSPEITO",
                proximaPagina: "paginaespancar"
            },
            {
                texto: "DEIXAR O SUSPEITO ESCAPAR",
                proximaPagina: "pagina???"
            },
            {
                texto: "FORÇÁ-LO A ENTREGAR INFORMAÇÕES",
                proximaPagina: "paginafuienganado"

            }]
    },
        paginafuienganado: {
        texto: " As informações fornecidas pelo suspeito eram falsas, e os criminosos aproveitaram a confiança de Adam para encobrir suas atividades. Os culpados escapam impunes, a conspiração se aprofunda e a cidade continua a ser assolada pelos arrombamentos. Adam enfrenta a devastação de ter confiado nas informações erradas, e a verdadeira figura por trás dos crimes permanece oculta.",
        opcoes: [{
                texto: "NOVA JORNADA",
                proximaPagina: "pagina0_0"
            },
            ]
    },
        paginaescape: {
        texto: "Adam desiste da investigação e procura por entretenimento em uma livraria local. Decide ler um gamebook que lhe pega a atenção. Ao ler um pouco, Adam percebe que o jogo é sobre um detetive que faz exatamente as mesmas escolhas que ele fez ou cogitou fazer, porém com um nome diferente. Sente-se um pouco melhor depois de perceber o fato, mas ainda assim, não é mais o mesmo.",
        opcoes: [{
                texto: "SAIR DA MATRIX",
                proximaPagina: "paginamatrix"
            },
            {
                texto: "NOVA JORNADA",
                proximaPagina: "pagina0_0"
            }]
    },
        paginaespancar: {
        texto: "Após a escalada das hostilidades, o caos se instala no pub. Adam, em sua tentativa de obter informações do suspeito, se vê preso na confusão e acaba sendo detido junto com o suspeito pela polícia.",
        opcoes: [{
                texto: "NOVA JORNADA",
                proximaPagina: "pagina0_0"
            },
            {
                texto: "SAIR DO JOGO",
                proximaPagina: "?"
            }]
    },

        paginamibella: {
        texto: "Enquanto investigam os vínculos do relacionamento de Isabella com seu amante Sandro, Michelle dobra a aposta e acaba descobrindo que Isabella é, na verdade, a filha de Don Vincenzo Romano, um mafioso poderoso na cidade. Isabella acaba confessando que está sendo ameaçada como parte dos planos de uma seita que busca influencia na máfia local e ganhar acesso às atividades criminosas de Don Vincenzo.",
        imagemFundo: "url('https://img.freepik.com/fotos-premium/um-homem-esta-sentado-em-uma-mesa-em-um-quarto-escuro-com-uma-lampada-que-diz-o-homem-esta-sentado-em-uma-mesa_862489-492.jpg?w=740')",
        opcoes: [{
                texto: "DETALHES",
                proximaPagina: "paginaquasefinal"
            },
            ]
    },
        paginadella: {
        texto: "Isabella mostrou uma notável resistência em compartilhar informações com Adam. Cada vez que ele tentava se aproximar do cerne do mistério, ela parecia habilmente desviar suas perguntas ou fornecer respostas evasivas. Ela mantinha uma muralha de segredos em torno de sua vida e dos perigos que enfrentava, fazendo com que Adam se sentisse constantemente em desvantagem.",
        opcoes: [{
                texto: "BLÁ-BLÁ-BLÁ ENCHEU O SACO",
                proximaPagina: "paginacavalo"
            },
            {
                texto: "MICHELLE X ISABELLA",
                proximaPagina: "paginamibella"
            }]
    },
    paginacavalo: {
        imagemFundo: "url('https://c.wallhere.com/photos/14/82/horse_corral_dust_shadow-1026404.jpg!d')",
        opcoes: [{
                texto: "MARCHAR PARA TRÁS",
                proximaPagina: "paginadella"
            },
            {
                texto: "MARCHAR EM RETIRADA",
                proximaPagina: "pagina0_0"
            }]
    },
        paginaquasefinal: {
        texto: "Os invasores roubam documentos confidenciais, registros financeiros e informações pessoais que podem ser usados como alavancagem contra figuras poderosas da cidade. Invasões paralelas foram planejadas para criar distrações e desviar a atenção das atividades de chantagem e conspiração do grupo.",
        imagemFundo:"url('https://www.wallpaperflare.com/static/281/173/77/cillian-murphy-peaky-blinders-thomas-shelby-arthur-shelby-wallpaper.jpg')",
        opcoes: [{
                texto: "AJUDAR ISABELLA",
                proximaPagina: "paginajuda"
            },
            {
                texto: "PROBLEMA DELA",
                proximaPagina: "paginafodasela"
            }]
    },
        paginafodasela: {
        texto: "Com Michelle e Adam decidindo deixar Isabella à própria sorte, ela se vê sozinha em sua luta contra a seita e suas ameaças. Isabella, desesperada para proteger a si e à integridade de Sandro, é forçada a tomar decisões difíceis e a manter um equilíbrio delicado entre proteger seu relacionamento e ajudar os chantagistas. Enquanto isso, as invasões paralelas continuam a criar distrações na cidade, desviando a atenção das atividades de chantagem e conspiração do grupo secreto. Figuras poderosas da cidade começam a ser alvo das chantagens, resultando em tensões crescentes e potenciais consequências devastadoras para a cidade",
        opcoes: [{
                texto: "MUDAR DE IDEIA E AJUDAR ISABELLA",
                proximaPagina: "paginaideia"
            },
            {
                texto: "ACEITAR AS CONSEQUÊNCIAS",
                proximaPagina: "paginaconsequencias"
            }]
    },
        paginajuda: {
        texto: "Michelle, Adam e Isabella, formando uma equipe improvável, trabalham juntos para investigar, identificar os membros da seita e coletar evidências contra eles. Michelle, Adam e Isabella se reúnem, formando uma equipe improvável. Trabalham juntos, utilizando suas habilidades para investigar, identificar os membros da seita e coletar evidências contra elesEles conseguem desvendar os segredos da seita e expor suas atividades criminosas. Em uma confrontação final com os líderes da seita, Michelle, Adam e Isabella, apoiados por evidências irrefutáveis, conseguem expor a verdade, frustrar os planos conspiratórios e desmantelar a seita. A cidade é salva do caos instalado pelas chantagens e do controle da seita, e as figuras poderosas envolvidas podem ser responsabilizadas por seus crimes.",
        imagemFundo: "url('https://i0.wp.com/blog.son-video.com/wp-content/uploads/2022/12/Peaky-Blinders-Canal-Tous-droits-reserves-BBC.jpg?resize=696%2C392&ssl=1')",
        opcoes: [{
                texto: "E O CORNO ?",
                proximaPagina: "paginacasamento"
            },
            {
                texto: "E A MÁFIA DO ROMANO ?",
                proximaPagina: "pagina404"
            },
            {
                texto: "SEGREDOS DO JOGO",
                proximaPagina: "paginabifurcacoes"
            },
            {
                texto: "RESET",
                proximaPagina: "pagina0_0"
            },
            {
                texto: "SAIR DO JOGO",
                proximaPagina: "?"
            }]
    },
        paginacasamento: {
        texto: "Quanto ao casamento marcado da filha de Don Vincenzo Romano... bem, este entrou em ruína, após Isabella se mandar para a Itália com seu amante Sandro. ",
        opcoes: [{
                texto: "VOLTAR",
                proximaPagina: "paginajuda"
            }]
    },
        pagina404: {
        texto: "( 404 error: File not found ) Os scripts desta seção foram tragicamente perdidos quando Kalil se esbarrou nos cabos do computador no laboratório.",
        imagemFundo: "url('https://i.pinimg.com/1200x/e9/1d/64/e91d644760b495a829a062ffcfd73edb.jpg')",
        opcoes: [{
                texto: "VOLTAR",
                proximaPagina: "paginajuda"
            }]
    },
        paginaconsequencias: {
        texto: "Michelle e Adam optam por não se envolverem mais na situação e continuar com suas vidas cotidianas, ignorando as crescentes tensões na cidade e as atividades da seita. Eles acreditam que não é responsabilidade deles lidar com a situação e tentam manter distância dos acontecimentos.",
        imagemFundo: "url('https://wallpapercrafter.com/th8004/1243841-boardwalk-crime-drama-empire-hbo-history-mafia.jpg')",
        opcoes: [{
                texto: "SAIR DO JOGO",
                proximaPagina: "pagina????"
            }]
    },
        paginaideia: {
        texto: "À medida que a situação na cidade fica insustentável, Michelle e Adam, consumidos pelo remorso e preocupados com o destino de Isabella e da cidade, decidem finalmente se envolver. Eles reconhecem que a seita representa uma ameaça significativa e que sua ajuda é crucial para impedir as chantagens e conspirações.",
        imagemFundo: "url('https://i0.wp.com/www.screenspy.com/wp-content/uploads/2021/12/peaky-blinders-s1-e6-7.png?ssl=1')",
        opcoes: [{
                texto: "AJUDAR ISABELLA",
                proximaPagina: "paginajuda"
            }]
    },
        paginabifurcacoes: {
        imagemFundo: "url('https://drive.google.com/uc?id=1aiFO2jPusrhDzf0-DnhZHd_HOt1Qn2RI')",
        opcoes: [{
                texto: "VOLTAR",
                proximaPagina: "paginajuda"
            }]
    }
}

// a seguir, optei por não currificar as funções, para que estas fiquem bem descritivas "function"
// cada função, sujestivamente "function", implementará algum mecanismo no jogo

function mostrarPagina(pagina) {  // como diz o nome, esta função tem como argumento "(página)" serve para  exibir a página, ou seja,  atualiza a interface do jogo com o texto da página atual e opções disponíveis na página.
    const ElementoTextoHistoria = document.getElementById("narrativa") // esta linha buscará o referencial "Id" identificado acima, para este caso, busca o elemento narrativa
    const ElementoOpcoes = document.getElementById("opcoes") // já esta linha, buscará o referencial "Id" também identificado acima, para este caso, busca o elemento opções
    const paginaAtualObj = historia[pagina] // aqui, se obtém a seção que representa a página atual do jogo
    ElementoTextoHistoria.textContent = paginaAtualObj.texto // esta linha atualiza o conteúdo do elemento com o texto da página atual, ou seja,  com o "Id" narrativa
    document.getElementById("jogo-container").style.backgroundImage = paginaAtualObj.imagemFundo || 'none'; // define a imagem de fundo

    // é necessário limpar as opções anteriores quando se escolhe a próxima, para isso utiliza-se innerHTML
    ElementoOpcoes.innerHTML = "" // a princípio, tentei implementar o código  sem o conhecimento desta propriedade, mas, na interface acontecia algo inesperado com os botões - ficavam se acumulando indiscriminadamente

function criarOpcoes(opcoes) { // função para adicionar botões para as opções usando recursividade
        if (opcoes.length === 0) { // traduzindo, quando o tamanho (length que serve como um medidor) for igual a 0, ou seja, quando não houver,
            return                // ele deverá retornar (return) o processo a seguir para trazer novos botoes de opções
        }
        const opcaoAtual = opcoes[0] // consta que a opção atual é [0], ou seja, a primeira do grupo
        const botao = document.createElement("button") // temos aqui uma constante chamada "botao" que armazena uma referência ao elemento "button". (tentei fazer botao mas não deu certo, acho que o )
        botao.textContent = opcaoAtual.texto // aqui, o botão usará a propriedade para acessar o conteúdo em HTML.
        botao.addEventListener("click", () => escolherOpcao(opcaoAtual.proximaPagina)) // o botão usará um manipulador de eventos, o EventListener,  para associar o botão a um evento específico, no caso clicar "click" no elemento "button" que definimos anteriormente no CSS
        ElementoOpcoes.appendChild(botao) // adiciona o botão à seção onde as opções do jogo são exibidas em sua interface
        // chamada recursiva para criar botões para as opções restantes
        criarOpcoes(opcoes.slice(1)) // ela pegará uma fatia do total de opções (referentes aos botões) excluindo a primeira e retornando a si mesma novamente até não haver mais opções, ou seja, até que todos os botões tenham sido criados, aí então, a recursividade será encerrada.
    }

    if (paginaAtualObj.opcoes.length > 0) { // este é o momento exato em que o encerramento da recursividade é definido, quando o tamanho "length" (quantidade) de opcoes atuais seja igual a zero,
        criarOpcoes(paginaAtualObj.opcoes) // portanto, ela será executada enquanto o número de opções for maior que zero (>0)
    }
}

function escolherOpcao(proximaPagina) { // esta função é responsável por exibir, "mostrar" a póxima página

    if (historia[proximaPagina]) { // a condicional é haver uma próxima página da história a ser retornada pela opcao
        mostrarPagina(proximaPagina) // em caso afirmativo, ela retorna, "mostra" a próxima página
    }

    else { // caso contrário,
        alert("Fim do jogo!") // exibe uma mensagem para lidar com páginas inexistentes, considere como o fim do jogo
    }

    const efeitoSonoro = document.getElementById("efeitoSonoro") // ao escolher a opção, essa constante reproduz o efeito sonoro espcíficado acima ao clicar em uma opção
    efeitoSonoro.play() // como o nome diz, executará o arquivo de áudio específicado
}

mostrarPagina("pagina0_0") // para mostrar a página inicial ao carregar o jogo
