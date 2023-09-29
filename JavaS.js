    // esta é a parte funcional, ou seja, o "script" em JavaScript, engraçado que até o coisinha de comentar já muda de "<-- -->" para "//"
    const armazemdehistorias={// criando uma constante, chamada armazemdehistorias para armazenar o conteúdo de cada "página" do GameBook
        paginainicial:{
          texto:"Escolha uma história para se aventurar",
          imagemFundo:"url()",
          opcoes:[{texto:"O mistério do pub", proximaPagina: "pagina0_0"},
                  {texto:"História2", proximaPagina:"pagina-a0"}]
        },

    // historia I 

        pagina0_0: // esta parte definirá o conteúdo presente em cada etapa "página" do jogo, no caso, "página 0_0" será a interface inicial.
        {          // note que "pagina 0_0" foi nomeada com _ poara não atrapalhar o reconhecimento pelo browser
            texto: "",
            imagemFundo: "url('https://drive.google.com/uc?id=1bV-GKLT8nSi6gnitaIgFB_g75DvQKeq2')",
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
            imagemFundo: "url('https://drive.google.com/uc?id=1aw1FB7sZoZ9NjF05uQ0mIimxlonNLLMN')",
            opcoes: [
            {
                texto: "INICIAR JORNADA",
                proximaPagina: "pagina1_0"
                }        
            ]
        },
        pagina1_0: { // nessa página, 1_0, já haverá mais de uma opção
            texto: "Em derradeiro de setembro de 1923, na manhã daquele domingo nublado, depois de tomar um café na padaria da esquina e ler o seu jornal matinal, Adam estava caminhando para casa intrigado com a notícia dos arrombamentos recentes.",
            imagemFundo: "url('https://drive.google.com/uc?id=1b4mIcYeernwOi1lwppVmUrz68aj0oFBH')",
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
            imagemFundo: "url('https://drive.google.com/uc?id=1amorZlD7DGbZv68vZEtT5AIg7DedmzXw')",
            opcoes: [
                {
                    texto: "PROSSEGUIR",
                    proximaPagina: "pagina3_0"
                },
            ]
        },
        pagina2_1: {
            texto: "Você já tomou café! Não há mais nada interessante a se fazer por aqui!",
            imagemFundo: "url('https://drive.google.com/uc?id=1av_8IrSbmQkvQMgJo7C50bK0YDc5KL-e')",
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
            imagemFundo: "url('https://drive.google.com/uc?id=1aCCB9_GOlKdmXdqJUsmMk4c5RC5SFjui')",
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
            imagemFundo: "url('https://drive.google.com/uc?id=1alo3PVqA_d2msMy0OhH_N2KDotCM0mFr')",
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
            imagemFundo: "url('https://drive.google.com/uc?id=1amYIQG6v-fMcR_r3oJPZMKqlRZKsjPpo')",
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
        imagemFundo: "url('https://drive.google.com/uc?id=1aZZlZq0oZ5fqRyX9KSrUY3tqGUQOy8MK')",
        opcoes: [{
                    texto: "PROSSEGUIR",
                    proximaPagina: "pagina4_2_0"
                }]
        },
        
        pagina4_2_0: {    
            texto: "Ao chegar no pub da esquina, Adam se depara com uma surpreendente coincidência: Michelle, sua colega do escritório, também estava lá.",
            imagemFundo: "url('https://drive.google.com/uc?id=1aunwCtSW4XKDmBRdc5VkgclA13nK6Hgg')",
            opcoes: [{
                    texto: "CONTINUAR SEGUINDO O SUSPEITO",
                    proximaPagina: "pagina7_2"
                },
                {
                    texto: "FALAR COM MICHELLE",
                    proximaPagina: "pagina7_0"
                },
                {
                    texto: "IGNORAR MICHELLE E O SUSPEITO",
                    proximaPagina: "pagina4_2_1"
                }]
        },
        pagina4_2_1: {
            texto: "Não há nada mais a se fazer por aqui !",
            imagemFundo: "url('https://drive.google.com/uc?id=1aWmxrlCXbhJJSuxqHKhRNBEGnS8jJtcp')",
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
            imagemFundo: "url('https://drive.google.com/uc?id=1bEXpAyViy9wvebFJ5MWa2q_oimM2Y-KL')",
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
            imagemFundo: "url('https://drive.google.com/uc?id=1amB8kNumgWyzbKnReFzZj5Y9GnVTzTZV')",
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
            imagemFundo: "url('https://drive.google.com/uc?id=1atDbKainjlV_xhge2ll0A2Qsu6OA-ZTI')",
            opcoes: [{
                    texto: "SE DESCULPAR",
                    proximaPagina: "pagina5_0"
                },
                {
                    texto: "NOVA JORNADA",
                    proximaPagina: "pagina0_0"
                },
                {
                    texto: "DESISTIR",
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
            imagemFundo: "url('https://drive.google.com/uc?id=1aNZdrLj4Ihjio-VAjIzjM1bxljq3CjFD')",
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
            imagemFundo: "url('https://drive.google.com/uc?id=1aQY8BEuqM7CwhFU8Y1ix8_-6CA-M93z3')",
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
            imagemFundo:"url('https://drive.google.com/uc?id=1aHH61BfDUhMLFNfWHx1pE9gN_dDkHpmu')",
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
            imagemFundo: "url('https://drive.google.com/uc?id=1bcl-Gmio6XXEajMGJF7Qq4e_cdAiwqaO')",
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
            imagemFundo: "url('https://drive.google.com/uc?id=1b6Mxr7jg8vbi_AmILrG6_KNYbzPMZTC6')",
            opcoes: [{
                    texto: "VOLTAR",
                    proximaPagina: "paginajuda"
                }]
        },
            pagina404: {
            texto: "( 404 error: File not found ) Os scripts desta seção foram tragicamente perdidos quando Kalil se esbarrou nos cabos do computador no laboratório.",
            imagemFundo: "url('https://drive.google.com/uc?id=1bapzFwXyZrJgNxJ2iQ-EhJjaWZ4qyl_I')",
            opcoes: [{
                    texto: "VOLTAR",
                    proximaPagina: "paginajuda"
                }]
        },
            paginaconsequencias: {
            texto: "Adam e Michelle  optam por não se envolverem mais na situação e continuar com suas vidas cotidianas, ignorando as crescentes tensões na cidade e as atividades da seita. Eles acreditam que não é responsabilidade deles lidar com a situação e tentam manter distância dos acontecimentos.",
            imagemFundo: "url('https://drive.google.com/uc?id=1anuMm7epxsc4xTIggSQWsY6aCujc8UUr')",
            opcoes: [{
                    texto: "SAIR DO JOGO",
                    proximaPagina: "pagina????"
                },
                {
                texto: "NOVA JORNADA",
                    proximaPagina: "pagina0_0"
                }]
        },
            paginaideia: {
            texto: "À medida que a situação na cidade fica insustentável, Michelle e Adam, consumidos pelo remorso e preocupados com o destino de Isabella e da cidade, decidem finalmente se envolver. Eles reconhecem que a seita representa uma ameaça significativa e que sua ajuda é crucial para impedir as chantagens e conspirações.",
            imagemFundo: "url('https://drive.google.com/uc?id=1aw8L4BJyb-zOeAU8U-NbRHNKZ0U2zX9T')",
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
        },

    
  // História II começa a partir da págima abaixo

      'pagina-a0': {
        texto: 'Você acabou de acordar no chão de uma sala pouco iluminada...',
        imagemFundo: "url()",
        opcoes: [
        
          { texto: 'Fingirei que não acordei e me esconderei em um armário.', proximaPagina: 'paginaopcao-a02' },
          { texto: 'tentarei sair.', proximaPagina: 'pagina-b0' },
          { texto: 'Sair do jogo', proximaPagina: 'paginainicial' }
        ]
      },
  
      'paginaopcao-a02': {
        texto: 'Você decide fingir que não acordou e se esconde em um armário...',
        imagemFundo: "url()",
        opcoes: [
          { texto: 'Reiniciar Jogo', proximaPagina: 'pagina-a0' },
          { texto: 'Sair do jogo', proximaPagina: 'paginainicial' }
        ]
      },
      'pagina-b0': {
        texto: 'Ao acordar, você está muito sonolento e amarrado a uma maca...',
        imagemFundo: "url()",
        opcoes: [
          { texto: 'Verifica a cicatriz.', proximaPagina: 'pagina-c0' },
          { texto: 'Ignora o acontecimento e continua procurando uma saída.', proximaPagina: 'paginaopcao-b02' },
          { texto: 'Sair do jogo', proximaPagina: 'paginainicial' }
        ]
      },
      'paginaopcao-b02': {
        texto: 'Texto-b02. O jogo foi reiniciado.',
        imagemFundo: "url()",
        opcoes: [
          { texto: 'Reiniciar Jogo', proximaPagina: 'pagina-a0' },
          { texto: 'Sair do jogo', proximaPagina: 'paginainicial' }
        ]
      },
      'pagina-c0': {
        texto: 'Texto-c0. Escolha uma opção:',
        imagemFundo: "url()",
        opcoes: [
          { texto: 'Opção-c02', proximaPagina: 'paginaopcao-c02' },
          { texto: 'Opção-c01', proximaPagina: 'pagina-d0' },
          { texto: 'Sair do jogo', proximaPagina: 'paginainicial' }
        ]
      },
      'paginaopcao-c02': {
        texto: 'Texto-c02. O jogo foi reiniciado.',
        imagemFundo: "url()",
        opcoes: [
          { texto: 'Reiniciar Jogo', proximaPagina: 'pagina-a0' },
          { texto: 'Sair do jogo', proximaPagina: 'paginainicial' }
        ]
      },
      'pagina-d0': {
        texto: 'Texto-d0. Escolha uma opção:',
        imagemFundo: "url()",
        opcoes: [
          { texto: 'Opção-d01', proximaPagina: 'pagina-d01' },
          { texto: 'Opção-d02', proximaPagina: 'pagina-d02' },
          { texto: 'Sair do jogo', proximaPagina: 'paginainicial' }
        ]
      },
      'pagina-d02': {
        texto: 'Texto-d02. O jogo foi reiniciado.',
        imagemFundo: "url()",
        opcoes: [
          { texto: 'Reiniciar Jogo', proximaPagina: 'pagina-a0' },
          { texto: 'Sair do jogo', proximaPagina: 'paginainicial' }
        ]
      },
      'pagina-d01': {
        texto: 'Texto-d01. Escolha uma opção:',
        imagemFundo: "url()",
        opcoes: [
          { texto: 'Opção-d0101', proximaPagina: 'pagina-e0' },
          { texto: 'Opção-d0202', proximaPagina: 'paginaopcao-d0202' },
          { texto: 'Sair do jogo', proximaPagina: 'paginainicial' }
        ]
      },
      'paginaopcao-d0202': {
        texto: 'Texto-d0202. O jogo foi reiniciado.',
        imagemFundo: "url()",
        opcoes: [
          { texto: 'Reiniciar Jogo', proximaPagina: 'pagina-a0' },
          { texto: 'Sair do jogo', proximaPagina: 'paginainicial' }
        ]
      },
      'pagina-e0': {
        texto: 'Texto-e0. Escolha uma opção:',
        imagemFundo: "url()",
        opcoes: [
          { texto: 'Opção-e02', proximaPagina: 'paginaopcao-e02' },
          { texto: 'Opção-e01', proximaPagina: 'pagina-f0' },
          { texto: 'Sair do jogo', proximaPagina: 'paginainicial' }
        ]
      },
      'pagina-f0': {
        texto: 'Texto-f0. O jogo foi reiniciado.',
        imagemFundo: "url()",
        opcoes: [
          { texto: 'Reiniciar Jogo', proximaPagina: 'pagina-a0' },
          { texto: 'Sair do jogo', proximaPagina: 'paginainicial' }
        ]
      },
      'paginaopcao-e02': {
        texto: 'Texto-e02. O jogo foi reiniciado.',
        imagemFundo: "url()",
        opcoes: [
          { texto: 'Reiniciar Jogo', proximaPagina: 'pagina-a0' },
          { texto: 'Sair do jogo', proximaPagina: 'paginainicial' }
        ]
      },
      
    };
  
  
  // a seguir, optei por não currificar as funções, para que estas fiquem bem descritivas "function"
  // cada função, sujestivamente "function", implementará algum mecanismo no jogo
  
  function mostrarPagina(pagina) {  // como diz o nome, esta função tem como argumento "(página)" serve para  exibir a página, ou seja,  atualiza a interface do jogo com o texto da página atual e opções disponíveis na página.
      const ElementoTextoHistoria = document.getElementById("narrativa") // esta linha buscará o referencial "Id" identificado acima, para este caso, busca o elemento narrativa
      const ElementoOpcoes = document.getElementById("opcoes") // já esta linha, buscará o referencial "Id" também identificado acima, para este caso, busca o elemento opções
      const paginaAtualObj = armazemdehistorias[pagina] // aqui, se obtém a seção que representa a página atual do jogo
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
  
      if (armazemdehistorias[proximaPagina]) { // a condicional é haver uma próxima página da história a ser retornada pela opcao
          mostrarPagina(proximaPagina) // em caso afirmativo, ela retorna, "mostra" a próxima página
      }
  
      else { // caso contrário,
          alert("Fim do jogo!") // exibe uma mensagem para lidar com páginas inexistentes, considere como o fim do jogo
      }
  
      const efeitoSonoro = document.getElementById("efeitoSonoro") // ao escolher a opção, essa constante reproduz o efeito sonoro espcíficado acima ao clicar em uma opção
      efeitoSonoro.play() // como o nome diz, executará o arquivo de áudio específicado
  }
  
  mostrarPagina("paginainicial") 