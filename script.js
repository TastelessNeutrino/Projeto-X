// esta é a parte funcional, ou seja, o "script" em JavaScript, engraçado que até o coisinha de comentar já muda de "<-- -->" para "//"
    const armazemdehistorias= {// criando uma constante, chamada armazemdehistorias para armazenar o conteúdo de cada "página" do GameBook
        paginainicial: {
            texto: "Escolha uma história para se aventurar",
            imagemFundo: "url()",
            opcoes: [{texto: "1923 • O MISTÉRIO DO PUB", proximaPagina: "pagina0_0"},
                {texto: "2087 • ALÉM CORREDOR", proximaPagina: "pagina_intro"}]
        },

        // história I - a seguir as páginas da primeira história - o mistério do pub

pagina0_0: // esta parte definirá o conteúdo presente em cada etapa "página" do jogo, no caso, "página 0_0" será a interface inicial.
        {          // note que "pagina 0_0" foi nomeada com _ para não comprometer o reconhecimento pelo editor
            imagemFundo: "url('https://drive.google.com/uc?id=1bV-GKLT8nSi6gnitaIgFB_g75DvQKeq2')",
            audioNarracao: "https://drive.google.com/uc?id=1vuLgF3ts0ad6LBeFSc_g9I7TAvDeQ_aO",
            opcoes: [ // lembra que "opcoes" já foi visto anteriormente no HTML? posteriormente veremos também a sua definição em JS
                {     // aqui, dentro das chaves, cada opção terá um texto, visível no quadradinho, e "página" referenete a ele
                    texto: "START",    // eis aqui o texto do enunciado, que no caso, é a opção que será utilizada para iniciar a jogada, ou seja, levar para a interface
                    proximaPagina: "paginacapa"   // e aqui, a página que ele buscará
                },
                {
                    texto: "MENU",
                    proximaPagina: "paginainicial"
                }       
            ]
        },
        paginacapa:
        {
            texto: '"Achamos que somos livres, mas não somos, seguimos sempre o mesmo caminho."',
            imagemFundo: "url('https://drive.google.com/uc?id=1aw1FB7sZoZ9NjF05uQ0mIimxlonNLLMN')",
            audioNarracao: "https://drive.google.com/uc?id=1IBuP3qrvArGylqPASH0-f9sn2YN65rFZ",
            opcoes: [
                {
                    texto: "INICIAR JORNADA",
                    proximaPagina: "paginaintroducao"
                }
            ]
        },
        paginaintroducao: { // nessa página, 1_0, já haverá mais de uma opção
            texto: "Em derradeiro de setembro de 1923, na manhã daquele domingo nublado, depois de tomar um café na padaria da esquina e ler o seu jornal matinal, Adam estava caminhando para casa intrigado com a notícia dos arrombamentos recentes.",
            imagemFundo: "url('https://drive.google.com/uc?id=1b4mIcYeernwOi1lwppVmUrz68aj0oFBH')",
            audioNarracao: "https://drive.google.com/uc?id=1GFEmtZl5Sp2ohbPFUQN8R2uz0rWVMVEC",
            opcoes: [
                {
                    texto: "PROSSEGUIR",
                    proximaPagina: "paginacidade"
                }, // naturalmente as opções são separadas aqui com o uso de vírgulas ","
                {
                    texto: "VOLTAR À PADARIA", // aqui, por exemplo, o texto traz uma possibilidade para o jogador curioso
                    proximaPagina: "paginapadaria"
                },
                {
                    texto: "JÁ ME ENCHEU O SACO", // nessa opção, por exemplo, o texto traz uma possibilidade de enredo imprevisível, para surpreender o jogador
                    proximaPagina: "paginachorar"
                }
            ]
        },
        paginachorar: {
            imagemFundo: "url('https://drive.google.com/uc?id=1bmoDrWIOuJT0kgRUZDkvg6ELR-gpJ-9_')",
            audioNarracao: "https://drive.google.com/uc?id=1XVsQHD8u7NECskF-rC7jDifUzuhknk22",
            opcoes: [
                {
                    texto: "ENXUGAR LÁGRIMAS",
                    proximaPagina: "paginaintroducao"
                },
                {
                    texto: "IR CHORAR DE CÓCORAS NO BANHEIRO",
                    proximaPagina: "paginaperdedor"
                }
            ]
        },
        paginacidade: {
            texto: "A movimentada cidade em que residia, onde normalmente ninguém se importaria com as singularidades de transeuntes aleatórios, era o cenário perfeito para quem deseja passar despercebido.",
            imagemFundo: "url('https://drive.google.com/uc?id=1amorZlD7DGbZv68vZEtT5AIg7DedmzXw')",
            audioNarracao: "https://drive.google.com/uc?id=1gik7PDY_QyowWUyWj1VMPqJWqYpeLkDe",
            opcoes: [
                {
                    texto: "PROSSEGUIR",
                    proximaPagina: "paginajanela"
                }
            ]
        },
        paginapadaria: {
            texto: "Você já tomou café! Não há mais nada interessante a se fazer por aqui!",
            imagemFundo: "url('https://drive.google.com/uc?id=1av_8IrSbmQkvQMgJo7C50bK0YDc5KL-e')",
            audioNarracao: "https://drive.google.com/uc?id=1AUCS2rEvg_YEgEPPKPM5r_K9zHuO7oPi",
            opcoes: [
                {
                    texto: "SAIR DA PADARIA",
                    proximaPagina: "paginacidade"
                },
                {
                    texto: "TOMAR OUTRO CAFÉ",
                    proximaPagina: "paginamortecafe"
                },
                {
                    texto: "JOGO ENFADONHO",
                    proximaPagina: "paginalamuria"
                }
            ]
        },
        paginalamuria: {
            texto: "LAMÚRIA: Substantivo feminino, lamentação interminável, que importuna e que a nada leva; queixume, queixa. Semelhantes: lamentação, lenga-lenga, alarida...",
            imagemFundo: "url('https://drive.google.com/uc?id=1aCCB9_GOlKdmXdqJUsmMk4c5RC5SFjui')",
            audioNarracao: "https://drive.google.com/uc?id=1voegEdvtBsoWk0N2stzhhAZXN3Tq1P-2",
            opcoes: [
                {
                    texto: "NOVA JORNADA",
                    proximaPagina: "pagina0_0"
                },
                {
                    texto: "VOLTAR AO JOGO",
                    proximaPagina: "paginapadaria"
                }
            ]
        },
        paginajanela: {
            texto: "Adam Lawrence, costumava se fechar completamente para as possibilidades do mundo alheias à sua rotina, entretanto, era domingo, e ele percebeu um rapaz saindo pela janela do apartamento de sua vizinha, Isabella.",
            imagemFundo: "url('https://drive.google.com/uc?id=1alo3PVqA_d2msMy0OhH_N2KDotCM0mFr')",
            audioNarracao: "https://drive.google.com/uc?id=1XHurrLU9_htxlxCijoUOOd7XdrA-D1xb",
            opcoes: [
                {
                    texto: "SEGUIR SUSPEITO",
                    proximaPagina: "paginaperseguir"
                },
                {
                    texto: "ARREMESSAR UMA PEDRA",
                    proximaPagina: "paginapedrada"
                },
                {
                    texto: "IGNORAR O SUSPEITO E VOLTAR PARA CASA",
                    proximaPagina: "paginarollsroyce"
                }
            ]
        },        
        paginamortecafe: {
            texto: "Testemunhas relataram às autoridades, o comportamento frenético e alucinado de Adam que enfartou ao ingerir quantidades inacreditáveis do líquido preto. R.I.P.",
            imagemFundo: "url('https://drive.google.com/uc?id=1fr4LG1n24OqB4_DaYiBmdtx_-YqjsbYs')",
            audioNarracao: "https://drive.google.com/uc?id=1p2G6FtMseJ1xw0ct5BxwmpldOFuuWjNX",
            opcoes: [
                {
                    texto: "NOVA JORNADA",
                    proximaPagina: "pagina0_0"
                },
                {
                    texto: "SAIR DO JOGO",
                    proximaPagina: "paginainicial"
                }
            ]
        },
        paginalcoolatra: {
            texto: "Testemunhas relataram às autoridades, o comportamento frenético e alucinado de Adam que enfartou ao ingerir quantidades inacreditáveis de álcool. R.I.P.",
            imagemFundo: "url('https://drive.google.com/uc?id=1lG3VOjyPsOUIsv1tTl41UkLRK9_hpMsj')",
            audioNarracao: "https://drive.google.com/uc?id=17Lp8c-Oap8FLidshpVML6anPo7ClXwJr",
            opcoes: [
                {
                    texto: "NOVA JORNADA",
                    proximaPagina: "pagina0_0"
                },
                {
                    texto: "SAIR DO JOGO",
                    proximaPagina: "paginainicial"
                }
            ]
        },
        paginaperseguir: {
            texto: "Despretensiosamente, Adam resolve seguir o sujeito até um pub.",
            imagemFundo: "url('https://drive.google.com/uc?id=1aZZlZq0oZ5fqRyX9KSrUY3tqGUQOy8MK')",
            audioNarracao: "https://drive.google.com/uc?id=1o23ZyOb4KsRrlbeiipE56Al75iY9hvFg",
            opcoes: [
                {
                    texto: "PROSSEGUIR",
                    proximaPagina: "paginadecisaopub"
                }
            ]
        },        
        paginadecisaopub: {    
            texto: "Ao chegar no pub da esquina, Adam se depara com uma surpreendente coincidência: Michelle, sua colega do escritório, também estava lá.",
            imagemFundo: "url('https://drive.google.com/uc?id=1aunwCtSW4XKDmBRdc5VkgclA13nK6Hgg')",
            audioNarracao: "https://drive.google.com/uc?id=1JQrDEJvecC7jiYOoAfm-QJ_iP2Djlve-",
            opcoes: [
                {
                    texto: "CONTINUAR SEGUINDO O SUSPEITO",
                    proximaPagina: "paginaaproximacao"
                },
                {
                    texto: "FALAR COM MICHELLE",
                    proximaPagina: "paginaconversamichelle"
                },
                {
                    texto: "IGNORAR MICHELLE E O SUSPEITO",
                    proximaPagina: "paginaficarpub"
                }
            ]
        },
        paginaficarpub: {
            texto: "Não há nada mais a se fazer por aqui !",
            imagemFundo: "url('https://drive.google.com/uc?id=1amYIQG6v-fMcR_r3oJPZMKqlRZKsjPpo')",
            audioNarracao: "https://drive.google.com/uc?id=1vLFRqImv1itgdLiDdJWPSj3Y9Ek8h-st",
            opcoes: [
                {
                    texto: "HÁ SIM! FICAR NO PUB BEBENDO",
                    proximaPagina: "paginalcoolatra"
                },
                {
                    texto: "IR PARA CASA",
                    proximaPagina: "paginarollsroyce"
                },
                {
                    texto: "NOVA JORNADA",
                    proximaPagina: "pagina0_0"
                },
                { texto: "SAIR DO JOGO",
                proximaPagina: "paginainicial"
    
                }
            ]
        },
        paginarollsroyce: {
            texto: "Adam se apressou demais para prosseguir o seu percuso solitário e não percebeu quando um luxuoso Rolls-Royce Silver Ghost 1907 o acertou em cheio! R.I.P.",
            imagemFundo: "url('https://drive.google.com/uc?id=1bEXpAyViy9wvebFJ5MWa2q_oimM2Y-KL')",
            audioNarracao: "https://drive.google.com/uc?id=1yV93djm623JcwO7Zjk5-XzqaGsxkqQCq",
            opcoes: [
                {
                    texto: "NOVA JORNADA",
                    proximaPagina: "pagina0_0"
                },
                {
                    texto: "SAIR DO JOGO",
                    proximaPagina: "paginainicial"
                }
            ]
        },
        paginadesculpa: {
            texto: "Adam tentou se desculpar, mas as desculpas não foram aceitas e as autoridades foram acionadas. Trágico fim! Adam foi institucionalizado.",
            imagemFundo: "url('https://drive.google.com/uc?id=1amB8kNumgWyzbKnReFzZj5Y9GnVTzTZV')",
            audioNarracao: "https://drive.google.com/uc?id=12bnps8v5BssumBju38RqbsCP5Cd7q0vD",
            opcoes: [
                {
                    texto: "NOVA JORNADA",
                    proximaPagina: "pagina0_0"
                },
                {
                    texto: "SAIR DO JOGO",
                    proximaPagina: "paginainicial"
                }
            ]
        },
        paginapedrada: {
            texto: "Adam, se enfureceu ao ponto de atingir o suspeito com uma pedra. Estranhamente, Isabella, sua vizinha, correu para socorrer o suposto invasor que na verdade era um caso extraconjugal.",
            imagemFundo: "url('https://drive.google.com/uc?id=1atDbKainjlV_xhge2ll0A2Qsu6OA-ZTI')",
            audioNarracao: "https://drive.google.com/uc?id=1eD1XvWf3rzYG_4X6Kt1FJ7-adK-EbSzL",
            opcoes: [
                {
                    texto: "SE DESCULPAR",
                    proximaPagina: "paginadesculpa"
                },
                {
                    texto: "NOVA JORNADA",
                    proximaPagina: "pagina0_0"
                },
                {
                    texto: "DESISTIR",
                    proximaPagina: "paginaperdedor"
                }
            ]
        },
        paginaconversamichelle: {
            texto: "Conversando com Michelle, Adam percebe que ela está realmente interessada nos casos de invasões domiciliares. Ela relata o temor de que a cidade fique perigosa com a imigração. Adam comenta sobre o assunto e menciona o que acabou de ver na janela do apartamento de sua vizinha, Isabella. Michelle fica empolgada e sugere que eles explorem mais a situação, talvez conversando com Isabella ou investigando sua vizinhança para entender melhor os acontecimentos recentes.",
            imagemFundo: "url('https://drive.google.com/uc?id=1fA_qgTKfiKLwJC6AvSXZmuI8XEqHLtnL')",
            audioNarracao: "https://drive.google.com/uc?id=10jICZ0Yuqdeg7x-L4EMe3BvA8XQ3vTbX",
            opcoes: [
                {
                    texto: "ACOMPANHAR MICHELLE",
                    proximaPagina: "paginadetetives"
                },
                {
                    texto: "SAIR DO PUB SOZINHO, SEM MICHELLE",
                    proximaPagina: "paginarollsroyce"
                }
            ]
        },
        paginaaproximacao: {
            texto: "Adam se aproxima para obter mais informações e, em um momento inesperado, acaba se envolvendo em um confronto com o invasor. As coisas podem ficar perigosas, e Adam terá que tomar decisões rápidas para lidar com a situação.",
            imagemFundo: "url('https://drive.google.com/uc?id=1kLDPF33vRBilYOJiQ2dSJCWdgGf-vU4-')",
            audioNarracao: "https://drive.google.com/uc?id=1j9hXLqDExNmjDHTbDUzI0BTa9sRyJhU9",
            opcoes: [
                {
                    texto: "PRENDER O SUSPEITO",
                    proximaPagina: "paginaprender"
                },
                {
                    texto: "FAZER ACORDO COM O SUSPEITO",
                    proximaPagina: "paginacordo"
                },
                {
                    texto: "DEIXAR O SUSPEITO ESCAPAR",
                    proximaPagina: "paginafuga"
                },
                {
                    texto: "INTIMIDAR O SUSPEITO",
                    proximaPagina: "paginareputacao"
                }
            ]
        },   
        paginadetetives: {
            texto: "A dupla de detetives amadores, Michelle e Adam, decidem iniciar suas investigações, mergulhando no mistério que envolve o suspeito e o que está acontecendo com Isabella. Eles suspeitam que há segredos ocultos a serem descobertos e estão determinados a descobrir a verdade, mesmo que isso os leve a lugares obscuros e perigosos na cidade.",
            imagemFundo: "url('https://drive.google.com/uc?id=1jjH14vhU12TVLqHSdywsriKT6cTJszfU')",
            audioNarracao: "https://drive.google.com/uc?id=15LDawKUFARoKAJ-3bxxPBzuYKPqPmkXK",
            opcoes: [
                {
                    texto: "PROSSEGUIR COM MICHELLE",
                    proximaPagina: "paginaisabella"
                },
                {
                    texto: "TOMAR CACHAÇA NO PUB",
                    proximaPagina: "paginalcoolatra"
                },
                {
                    texto: "SAIR POR AÍ",
                    proximaPagina: "paginarollsroyce"
                }
            ]
        },
        paginaisabella: {
            texto: "Michelle e Adam decidem procurar Isabella para esclarecer a situação e obter mais informações. Ao se aproximarem dela com cautela, Isabella começa a revelar gradualmente os segredos que ela estava escondendo, levando-os a perceber que há um conflito oculto acontecendo nos bastidores, do qual ela é parte fundamental.",
            imagemFundo: "url('https://drive.google.com/uc?id=1lr_gs_2fXgc8R8m2gGO47ury5wvB0vvL')",
            audioNarracao: "https://drive.google.com/uc?id=1x2RGGypIXhKRBM1Mp4eH9z5DrqR8rQP-",
            opcoes: [
                {
                    texto: "ADAM X ISABELLA",
                    proximaPagina: "paginadella"
                },
                {
                    texto: "MICHELLE X ISABELLA",
                    proximaPagina: "paginamichella"
                }
            ]
        },
        paginaprender: {
            texto: "Adam, após o confronto, decide entregar o suspeito às autoridades. O invasor é preso preventivamente, mas Adam continua ignorante sobre sua verdadeira identidade. A polícia agradece a colaboração de Adam e promete investigar o caso com seriedade.",
            imagemFundo: "url('https://drive.google.com/uc?id=1jlJovcYyzQ9Ci_dzQkHpylHpDZuUXfv8')",
            audioNarracao: "https://drive.google.com/uc?id=1mw9GAym7HhapvC7Z-E8U0Z_1-8yfGGF-",
            opcoes: [
                {
                texto: "NOVA JORNADA",
                proximaPagina: "pagina0_0"
                },
                {
                    texto: " SAIR DO JOGO   ",
                    proximaPagina: "paginainicial"
                }
            ]
        },
        paginacordo: {
            texto: "Em vez de entregá-lo à polícia, Adam decide fazer um acordo com o suspeito, negociando informações em troca de sua liberdade. O suspeito concorda em revelar detalhes sobre sua relação extraconjugal com Isabella e suas atividades suspeitas.",
            imagemFundo: "url('https://drive.google.com/uc?id=1kOWYZ8XdDkeHxT-iMeTt5RlXRxUC7KEP')",
            audioNarracao: "https://drive.google.com/uc?id=1HYYmcbiAj8qimqD0ISPGP3jtK0wVydKk",
            opcoes: [
                {
                    texto: "CAIR NO PAPINHO",
                    proximaPagina: "paginafuienganado"
                },
                {
                    texto: "CAIR MATANDO",
                    proximaPagina: "paginaespancar"
                }
            ]
        },
        paginafuga: {
            texto: "Adam, em um momento de dúvida, permite que o suspeito fuja do confronto. O suspeito desaparece na escuridão, deixando Adam com mais perguntas do que respostas.",
            imagemFundo: "url('https://drive.google.com/uc?id=1kQVCbzYqiTRqIm0q7sTHlRLmnIHscp0b')",
            audioNarracao: "https://drive.google.com/uc?id=1_s2E2FRxSmmncp71mrW71rJsQEkamJhb",
            opcoes: [
                {
                    texto: "DESISTIR DA INVESTIGAÇÃO",
                    proximaPagina: "paginaperdedor"
                },
                {
                    texto: "FAZER ALGO MAIS INTERESSANTE",
                    proximaPagina: "paginaescape"
                }
            ]
        },
        paginaperdedor: {
            imagemFundo: "url('https://drive.google.com/uc?id=1blmYe84oVpdmaJiIPjrwGUul0D-Mzrz3')",
            audioNarracao: "https://drive.google.com/uc?id=1F1gaBu8Xx5QX-3OpKNxDpcpA18wHcuG1",
            opcoes: [
                {
                    texto: "REINICIAR JORNADA",
                    proximaPagina: "pagina0_0"
                },
                {
                    texto: "CONTINUAR SENDO PERDEDOR",
                    proximaPagina: "paginainicial"
                }
            ]
        },
        paginareputacao: {
            texto: "As ações de Adam têm consequências. Ele pode enfrentar acusações de perturbação da ordem pública e briga de bar. Sua imagem e reputação podem ser afetadas",
            imagemFundo: "url('https://drive.google.com/uc?id=1kn6ZQp8VQ-cxG1aI9bhNUOJ9m-dEJESy')",
            audioNarracao: "https://drive.google.com/uc?id=1PaoUDA0lHU4_vQoerr_DkyHip1coxp4b",
            opcoes: [
                {
                    texto: "ESPANCAR O SUSPEITO",
                    proximaPagina: "paginaespancar"
                },
                {
                    texto: "DEIXAR O SUSPEITO ESCAPAR",
                    proximaPagina: "paginafuga"
                },
                {
                    texto: "OBTER INFORMAÇÕES A PULSO",
                    proximaPagina: "paginafuienganado"    
                }
            ]
        },
        paginafuienganado: {
            texto: "As informações fornecidas pelo suspeito eram falsas, e os criminosos aproveitaram a confiança de Adam para encobrir suas atividades. Os culpados escapam impunes, a conspiração se aprofunda e a cidade continua a ser assolada pelos arrombamentos. Adam enfrenta a devastação de ter confiado nas informações erradas, e a verdadeira figura por trás dos crimes permanece oculta.",
            imagemFundo: "url('https://drive.google.com/uc?id=1jPXXhCAiP1iWv0gKm4NoXs_Z-8KtJULI')",
            audioNarracao: "https://drive.google.com/uc?id=1Mb2gTKpWu9YDW4hmXlfEHukdacsbeLE9",
            opcoes: [
                {
                    texto: "NOVA JORNADA",
                    proximaPagina: "pagina0_0"
                }
            ]
        },
        paginaescape: {
            texto: "Adam desiste da investigação e procura por entretenimento em uma livraria local.",
            imagemFundo: "url('https://drive.google.com/uc?id=1jdBsBO_f2w9NW-NEJGTAIezMM0RVLTRG')",
            audioNarracao: "https://drive.google.com/uc?id=1g498etUylGHHTcCZR1H-84yotnMn508T",
            opcoes:[
                {
                    texto: "CAIR FORA DA ESPELUNCA",
                    proximaPagina: "paginarollsroyce"
                },
                {
                    texto: "JOGO-LIVRO INTERATIVO",
                    proximaPagina: "paginalivreto"
                }
            ]
        },        
        paginalivreto: {
            texto: "No final da visita à livraria, Adam se depara com um livro-jogo interativo que captura completamente a sua atenção. À medida que avança na leitura, uma sensação peculiar o envolve: a história do jogo descreve um detetive que toma as mesmas decisões que ele, até mesmo as que ele só cogitou fazer. Essa descoberta o deixa intrigado, e ele começa a suspeitar que há uma conspiração muito mais profunda e sinistra em jogo na sua vida.",
            imagemFundo: "url('https://drive.google.com/uc?id=1Rnj-x2KTftWBtC568BIPaxrOHzlvnw2e')",
            audioNarracao: "https://drive.google.com/uc?id=1J6mqRJXfMKb4C5RmjBh9svh7l67F-aYH",
            opcoes:[
                {
                    texto: "NOVA JORNADA",
                    proximaPagina: "pagina0_0"
                },
                {
                    texto: "SAIR DA MATRIX",
                    proximaPagina: "paginainicial"
                }
            ]
        },
        paginaespancar: {
            texto: "Após a escalada das hostilidades, o caos se instala no pub. Adam, em sua tentativa de obter informações do invasor, se vê preso na confusão e acaba detido pelas autoridades locais.",
            imagemFundo: "url('https://drive.google.com/uc?id=1jPSwG51F4ncgMz8pCMyKZEJS8qYz3u3V')",
            audioNarracao: "https://drive.google.com/uc?id=1IkveaHLxa9yAYFT8iH6FPKCAttXyWzak",
            opcoes: [
                {
                    texto: "NOVA JORNADA",
                    proximaPagina: "pagina0_0"
                },
                {
                    texto: "SAIR DO JOGO",
                    proximaPagina: "paginainicial"
                }
            ]
        },
        paginamibella: {
            texto: "Enquanto investigam os vínculos do relacionamento de Isabella com seu amante, Sandro, Michelle dobra a aposta e acaba descobrindo que Isabella é, na verdade, a filha de Don Vincenzo Romano, um mafioso poderoso na cidade.",
            imagemFundo: "url('https://drive.google.com/uc?id=1aNZdrLj4Ihjio-VAjIzjM1bxljq3CjFD')",
            audioNarracao: "https://drive.google.com/uc?id=19MElMusOYF_g0YPQdAFnPZNuyecdnC_h",
            opcoes: [
                {
                    texto: "EXTRAIR CONFISSÃO",
                    proximaPagina: "paginaconfissao"
                }
            ]
        },
        paginaconfissao: {
            texto: "Isabella acaba confessando que está sendo ameaçada como parte dos planos de uma seita que busca influência na máfia local e ganhar acesso às atividades criminosas de seu pai, Don Vincenzo.",
            imagemFundo: "url('https://drive.google.com/uc?id=1hCtAOu0tjNBBJaF3fOat3aI-FababGGK')",
            audioNarracao: "https://drive.google.com/uc?id=1aeX1I5mZR8MRA6T-yI9YIZWdg4bqpC8W",
            opcoes: [
                {
                    texto: "DETALHES",
                    proximaPagina: "paginaquasefinal"
                }
            ]
        },
        paginadella: {
            texto: "Isabella mostrou uma notável resistência em compartilhar informações com Adam. Cada vez que ele tentava se aproximar do cerne do mistério, ela parecia habilmente desviar suas perguntas ou fornecer respostas evasivas. Ela mantinha uma muralha de segredos em torno de sua vida e dos perigos que enfrentava, fazendo com que Adam se sentisse constantemente em desvantagem.",
            imagemFundo: "url('https://drive.google.com/uc?id=1jhw2IeyZBocefj4ay5WCfYDQHarSvXIX')",
            audioNarracao: "https://drive.google.com/uc?id=1rczb-AntsXK-w-y_o_jLyswFke_mrGOM",
            opcoes: [
                {
                    texto: "BLÁ-BLÁ-BLÁ ENCHEU O SACO",
                    proximaPagina: "paginacavalo"
                },
                {
                    texto: "MICHELLE X ISABELLA",
                    proximaPagina: "paginamichella"
                }
            ]
        },
        paginamichella: {
            texto: "Michelle sabia que a situação era delicada, e sua abordagem seria crucial para obter informações valiosas. Com cuidado e empatia, Michelle começou a dar as suas investidas em Isabella.",
            imagemFundo: "url('https://drive.google.com/uc?id=1jh_8_09wt1RNSO3brx0EHJSHHYM9OejR')",
            audioNarracao: "https://drive.google.com/uc?id=1w-k3GyAthrsJ7hf5eg5XMIdu1GwIoi0I",
            opcoes: [
                {
                    texto: "DOBRAR APOSTA",
                    proximaPagina: "paginamibella"
                },
                {
                    texto: "ADAM X ISABELLA",
                    proximaPagina: "paginadella"
                },
                {
                    texto: "MELHOR TOMAR GORÓ",
                    proximaPagina: "paginalcoolatra"
                },
            ]
        },
        paginacavalo: {
            imagemFundo: "url('https://drive.google.com/uc?id=1aQY8BEuqM7CwhFU8Y1ix8_-6CA-M93z3')",
            audioNarracao: "https://drive.google.com/uc?id=11qfddPOTInDvyK7ArsiJhjs2O4IUN5BR",
            opcoes: [
                {
                    texto: "MARCHAR PARA TRÁS",
                    proximaPagina: "paginadella"
                },
                {
                    texto: "MARCHAR EM RETIRADA",
                    proximaPagina: "pagina0_0"
                }
            ]
        },
        paginaquasefinal: {
            texto: "Os invasores roubam documentos confidenciais, registros financeiros e informações pessoais que podem ser usados como alavancagem contra figuras poderosas da cidade. Invasões paralelas foram planejadas para criar distrações e desviar a atenção das atividades de chantagem e conspiração do grupo.",
            imagemFundo:"url('https://drive.google.com/uc?id=1aHH61BfDUhMLFNfWHx1pE9gN_dDkHpmu')",
            audioNarracao: "https://drive.google.com/uc?id=1jPliW-crrS14CiiVIpTHDSKqP52Ga3ih",
            opcoes: [
                {
                    texto: "AJUDAR ISABELLA",
                    proximaPagina: "paginajuda"
                },
                {
                    texto: "PROBLEMA DELA",
                    proximaPagina: "paginafodasela"
                }
            ]
        },
        paginafodasela: {
            texto: "Com Michelle e Adam decidindo deixar Isabella à própria sorte, ela se vê sozinha em sua luta contra a seita e suas ameaças. Isabella, desesperada para proteger a si e à integridade de seu amante, Sandro, é forçada a tomar decisões difíceis e a manter um equilíbrio delicado entre proteger seu relacionamento e ajudar os chantagistas. Enquanto isso, as invasões paralelas continuam a criar distrações na cidade, desviando a atenção das atividades de chantagem e conspiração do grupo secreto. Figuras poderosas da cidade começam a ser alvo das chantagens, resultando em tensões crescentes e potenciais consequências devastadoras para a cidade",
            imagemFundo: "url('https://drive.google.com/uc?id=1h8qNhRYIEPrgBBLbCCitkz19X0fNcelz')",
            audioNarracao: "https://drive.google.com/uc?id=1XFF2l5aAVis4mA1eoe9HxDpRNBwUMsLO",
            opcoes: [
                {
                    texto: "MUDAR DE IDEIA E AJUDAR ISABELLA",
                    proximaPagina: "paginaideia"
                },
                {
                    texto: "ACEITAR AS CONSEQUÊNCIAS",
                    proximaPagina: "paginaconsequencias"
                }
            ]
        },
        paginajuda: {
            texto: "Michelle, Adam e Isabella se reúnem, formando uma equipe improvável, trabalham juntos, para investigar e identificar os membros da seita e coletar evidências contra eles, conseguindo desvendar os segredos da seita e expor suas atividades criminosas. Em uma confrontação final com os líderes da máfia, Michelle, Adam e Isabella, apoiados por evidências irrefutáveis, conseguem expor a verdade, frustrando os planos conspiratórios e desmantelando a organização criminosa. A cidade é salva do caos instalado pelas chantagens e do controle da seita, e as figuras poderosas envolvidas podem ser responsabilizadas por seus crimes.",
            imagemFundo: "url('https://drive.google.com/uc?id=1bcl-Gmio6XXEajMGJF7Qq4e_cdAiwqaO')",
            audioNarracao: "https://drive.google.com/uc?id=15U4mrczj2VzufEa6cL_WI89vPAEMVE3g",
            opcoes: [
                {
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
                    proximaPagina: "paginainicial"
                }
            ]
        },
        paginacasamento: {
            texto: "Quanto ao casamento marcado da filha de Don Vincenzo Romano... bem, este entrou em ruína, após Isabella se mandar para a Itália com seu amante Sandro. ",
            imagemFundo: "url('https://drive.google.com/uc?id=1b6Mxr7jg8vbi_AmILrG6_KNYbzPMZTC6')",
            audioNarracao: "https://drive.google.com/uc?id=1oGU7ODW19PdpXQM8GrUVi5AqIdgaYt_7",
            opcoes: [
                {
                    texto: "VOLTAR",
                    proximaPagina: "paginajuda"
                }
            ]
        },
        pagina404: {
            texto: "( 404 error: File not found ) Os scripts desta seção foram tragicamente perdidos quando Kalil se esbarrou nos cabos do computador no laboratório.",
            imagemFundo: "url('https://drive.google.com/uc?id=1bapzFwXyZrJgNxJ2iQ-EhJjaWZ4qyl_I')",
            audioNarracao: "https://drive.google.com/uc?id=1bCV6g9_BFCuomw6Fy17N4uFYTHwh0ua-",
            opcoes: [
                {
                    texto: "VOLTAR",
                    proximaPagina: "paginajuda"
                }
            ]
        },
        paginaconsequencias: {
            texto: "Adam e Michelle  optam por não se envolverem mais na situação e continuar com suas vidas cotidianas, ignorando as crescentes tensões na cidade e as atividades da seita. Eles acreditam que não é responsabilidade deles lidar com a situação e tentam manter distância dos acontecimentos.",
            imagemFundo: "url('https://drive.google.com/uc?id=1anuMm7epxsc4xTIggSQWsY6aCujc8UUr')",
            audioNarracao: "https://drive.google.com/uc?id=1Bpjn-MHUr-_J9yRUH8rqMXTEbYJJWK44",
            opcoes: [
                {
                   texto: "NOVA JORNADA",
                    proximaPagina: "pagina0_0"
                }, 
                {
                    texto: "SAIR DO JOGO",
                    proximaPagina: "paginainicial"
                }
            ]
        },
        paginaideia: {
            texto: "À medida que a situação na cidade fica insustentável, Michelle e Adam, consumidos pelo remorso e preocupados com o destino de Isabella e da cidade, decidem finalmente se envolver. Eles reconhecem que a seita representa uma ameaça significativa e que sua ajuda é crucial para impedir as chantagens e conspirações.",
            imagemFundo: "url('https://drive.google.com/uc?id=1aw8L4BJyb-zOeAU8U-NbRHNKZ0U2zX9T')",
            audioNarracao: "https://drive.google.com/uc?id=1n9SwtzFzJyt5xwLy-SvRbOxiHvPaUEmy",
            opcoes: [
                {
                    texto: "AJUDAR ISABELLA",
                    proximaPagina: "paginajuda"
                }
            ]
        },
        paginabifurcacoes: {
            imagemFundo: "url('https://drive.google.com/uc?id=1aiFO2jPusrhDzf0-DnhZHd_HOt1Qn2RI')",
            audioNarracao: "https://drive.google.com/uc?id=1vuLgF3ts0ad6LBeFSc_g9I7TAvDeQ_aO",
            opcoes: [
                {   
                    texto: "VOLTAR",
                    proximaPagina: "paginajuda"
                }
            ]   
        },

        // História II começa a partir da página abaixo

        pagina_intro: {
            texto: 'Pois bem, caro jogador, suas opções são poucas, escolha errado, e... morra! Divirta-se :) ',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'pagina_a00'}]
        },

        pagina_a00: {
            texto: 'Você acabou de acordar no chão de um lugar pouco iluminado, úmido e com um forte cheiro de corpos em decomposição. Sua cabeça e corpo doem muito, e você não se lembra de nada; parece que sua memória se perdeu.',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'pagina_a01'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        pagina_a01: {
            texto: 'Você se levanta para olhar o local, mas está muito escuro para enxergar algo. Com o coração a mil, você começa a tatear as paredes sujas a procura de uma porta. Finalmente, após sujar suas mãos com aquela graxa vermelha de odor vomitativo, você encontra o que parece ser a chave de luz. Após apertar alguns botões, as luzes começam a piscar.',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'pagina_a02'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        pagina_a02: {
            texto: 'Ao dar uma rápida olhada ao seu redor, você percebe que existem diversos corpos sem vida na sala, todos eles usando aventais, inclusive você. Também existem balcões, armários, macas e instrumentos médicos: você constata que isso deve ser uma sala hospitalar. Mas tudo está realmente muito bagunçado e sujo de sangue. Parece que houve uma explosão aqui.',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'pagina_a03'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        pagina_a03: {
            texto: 'Poucos segundos depois, um alarme com sirenes e luzes vermelhas é acionado. O que você vai fazer?',
            imagemFundo: "url()",
            opcoes: [
                {texto: 'Fingir que não acordei e me esconder em um armário. ', proximaPagina: 'paginaopcao_a04'},
                {texto: 'Tentar sair. ', proximaPagina: 'paginaopcao_b00'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}
            ]
        },

        paginaopcao_a04: {
            texto: 'Você decide fingir que não acordou e se esconde em um armário. Alguns instantes depois, o alarme para e tudo fica em silêncio. Mas essa calmaria é interrompida por um som agudo e enlouquecedor. Algo estranho parece estar acontecendo com alguns desses cadáveres... ',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_a05'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_a05: {
            texto: 'Você, imóvel e observando pela frestal da porta do armário, observa que alguns deles estão voltando à vida, mas como uma espécie de zumbis... ',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_a06'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_a06: {
            texto: 'Seu coração começa a palpitar e seu rosto se enche de suor. Os mortos-vivos começam a comer uns aos outros. Em instantes, a sala se tornou um caos infernal.',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_a07'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_a07: {
            texto: 'O som agudo é insuportável, mas isso é o menos relevante no momento: parece que eles podem sentir sua presença. Eles são muitos e você não tem nenhuma arma. O desespero falou mais alto. Seu fim chegou.',
            imagemFundo: "url()",
            opcoes: [{texto: 'Reiniciar jogo', proximaPagina: 'pagina_intro'},
                {texto: 'Voltar para menu de histórias', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_b00: {
            texto: ' Você entra em desespero e procura uma saída o mais rápido possível. Mas não existem portas convencionais nessas salas, apenas aberturas semelhantes a janelas que ficam a cerca de dois metros de altura.',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_b01'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_b01: {
            texto: ' Você, então, consegue escalar a parede e sair da sala, até que não foi difícil fazer isso, você pensa. Do lado de fora, você se depara com um enorme corredor cheio de mais salas, onde cada corredor leva a outro: esse lugar é um labirinto.',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_b02'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_b02: {
            texto: ' Sua adrenalina está a mil por hora, você não sente mais as dores no corpo. Ao correr à procura de uma saída, você olha algumas salas e percebe que todas elas têm as mesmas coisas da que você saiu.',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_b03'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_b03: {
            texto: 'Algum tempo depois, o alarme parou, mas as luzes continuam acesas e piscando. Você, já cansado e sem aguentar mais correr, senta no corredor. Em instantes, sua visão começa a escurecer e você desmaia',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_b04'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_b04: {
            texto: 'Ao acordar, você está muito sonolento e amarrado a uma maca. Você vê a silhueta de pessoas que parecem ser médicos. Então, ainda desorientado, pede ajuda, mas, em seguida, desmaia novamente.',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_b05'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_b05: {
            texto: 'Ao acordar, você está muito sonolento e amarrado a uma maca. Você vê a silhueta de pessoas que parecem ser médicos. Então, ainda desorientado, pede ajuda, mas, em seguida, desmaia novamente.',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_b06'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_b06: {
            texto: ' Mas, ao olhar para sua coxa, nota uma cicatriz e jura que ela não existia antes, o que o deixa muito confuso. O que você vai fazer?',
            imagemFundo: "url()",
            opcoes: [{texto: 'Verificar a cicatriz. ', proximaPagina: 'paginaopcao_c00'},
                {texto: 'Continuo a procura da saída.', proximaPagina: 'paginaopcao_b07'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_b07: {
            texto: '  Você ignora esse acontecimento e continua a procurar a saída. ',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_b08'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_b08: {
            texto: 'Ao caminhar alguns metros, você sente sua coxa vibrando e sua cabeça começa a doer.',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_b09'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_b09: {
            texto: 'De repente, seu coração dispara e você começa a vomitar sangue. Seu fim chegou.',
            imagemFundo: "url()",
            opcoes: [{texto: 'Reiniciar jogo', proximaPagina: 'pagina_intro'},
                {texto: 'Voltar para menu de histórias', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_c00: {
            texto: 'Então você decide olhar direito essa cicatriz... Ao tocar na área, você sente algo. Parece ser um chip ou algo do tipo. De repente, ele começa a vibrar.',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_c01'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_c01: {
            texto: 'Desesperado, você rapidamente entra em uma sala, encontra um bisturi em meio aos instrumentos médicos e, mais rápido que a luz e sem pensar nas consequências, cirurgicamente abre um buraco na sua coxa e remove o chip. Isso foi simples, você pensa, parece que faço isso ha décadas...',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_c02'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_c02: {
            texto: 'No fim das contas, remover o chip salvou sua vida, pois, segundos após você retirá-lo, ele começou a liberar uma substancia azul com um cheiro horrível. Você fica em choque com aquilo, mas precisa estancar o sangue e suturar a abertura.',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_c03'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_c03: {
            texto: 'Assim que você termina de dar o ultimo ponto, as luzes se apagam por alguns minutos e depois começam a piscar, logo após isso, sirenes são acionadas e você rapidamente sai da sala. Isso pareceu familiar...',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_c04'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_c04: {
            texto: 'Ao andar um pouco pelos corredores, as sirenes cessam e tudo fica em silêncio. Mas essa calmaria é rapidamente interrompida por um som agudo e enlouquecedor. Você percebe que tem algo estranho acontecendo com aqueles cadáveres. O que você vai fazer?',
            imagemFundo: "url()",
            opcoes: [
                {texto: 'Entrar em uma sala para ver mais de perto.', proximaPagina: 'paginaopcao_c05'},
                {texto: 'Se afastar das janelas e esperar.', proximaPagina: 'paginaopcao_d00'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}
            ]
        },

        paginaopcao_c05: {
            texto: ' Você entra em uma sala e percebe que os cadáveres estão voltando à vida, mas como zumbis... ',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_c06'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_c06: {
            texto: ' Arrependido com escolha e impossibilitado de sair da sala, pois os mortos-vivos estão impedindo a saída, você se esconde em um armário e fica imóvel observando tudo pela fresta da porta.',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_c07'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_c07: {
            texto: ' Seu coração começa a palpitar e seu rosto se enche de suor. Os mortos-vivos começam a comer uns aos outros. Em instantes, a sala se torna um caos infernal.',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_c08'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_c08: {
            texto: '  O som agudo é insuportável, mas isso é o menos relevante no momento: parece que eles podem sentir sua presença. Eles são muitos e você não tem nenhuma arma. Você entra em desespero.',
            imagemFundo: "url()",
            opcoes: [{texto: 'Reiniciar jogo', proximaPagina: 'pagina_intro'},
                {texto: 'Voltar para menu de histórias', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_d00: {
            texto: ' Alguns segundos depois de se agachar no chao em uma tenativa fracassada de se esconder, você ouve sons vindo das salas, parece que os mortos estão se mechendo...',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_d01'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_d01: {
            texto: 'Você está com muito medo, mas decide dar uma espiada... Ao pular para ver através da janela, você fica apavorado ao ver que os cadáveres realmente voltaram a vida.',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_d02'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_d02: {
            texto: ' O barulho do seu pulo aliado ao seu grito de dor por ter reaberto o corte da coxa atrai os mortos até a abertura da janela.',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_d03'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_d03: {
            texto: ' Felizmente, eles não conseguem escalar, pois parecem ser bem fracos. Assustado e com o coração a mil, você sai correndo pelos corredores para fugir daquilo. Mas é um sacrifício inútil, já que, ao correr, seu barulho atrai mais zumbis para as janelas.',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_d04'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_d04: {
            texto: '  Ao virar a bifurcação de um dos corredores, você é atingido por um golpe na cabeça e perde a consciência...',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_d05'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_d05: {
            texto: 'Ao acordar, você está amarrado em uma cadeira em uma sala sem corpos. À sua frente, existe uma mesa com um rádio em cima. ',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_d06'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_d06: {
            texto: 'Você grita e pede ajuda desesperadamente. então, uma voz no rádio manda você calar a boca e ouvir o que ela tem a dizer, pois você só tem uma chance para responder. O que você vai fazer? ',
            imagemFundo: "url()",
            opcoes: [
                {texto: 'Pedir ajuda uma ultima vez.', proximaPagina: 'paginaopcao_d07'},
                {texto: 'Desistir de pedir ajuda e ouvir.', proximaPagina: 'paginaopcao_e00'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}
            ]
        },

        paginaopcao_d07: {
            texto: 'Eu mandei calar a boca, diz a voz. Não temos tempo para isso. Seu fim chegou. ',
            imagemFundo: "url()",
            opcoes: [{texto: 'Reiniciar jogo', proximaPagina: 'pagina_intro'},
                {texto: 'Voltar para menu de histórias', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_e00: {
            texto: 'Eu sei tudo sobre você e sobre esse lugar, diz a voz. Você não lembra de nada e está cheio de dúvidas, mas posso resolver esse problema para você... basta que aceite fazer o que eu mandar...',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_e01'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_e01: {
            texto: 'Adianto que não haverá negociação e que você aceitará cada termo do contrato sem ler uma única palavra. O que me diz?',
            imagemFundo: "url()",
            opcoes: [{texto: 'Aceita. ', proximaPagina: 'paginaopcao_f00'},
                {texto: 'Recusa.', proximaPagina: 'paginaopcao_e02'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_e02: {
            texto: '  Ok, você teve sua chance, diz a voz. Seu fim chegou.',
            imagemFundo: "url()",
            opcoes: [{texto: 'Reiniciar jogo', proximaPagina: 'pagina_intro'},
                {texto: 'Voltar para menu de histórias', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_f00: {
            texto: 'Ok, agora não tem volta, diz a voz.',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_f01'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_f01: {
            texto: 'Você deverá escolher entre resgatar o Kina ou o pacote. caso seja bem-sucedido, como recompensa, receberá um fragmento do mapa para O "Além Corredor".',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_f02'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_f02: {
            texto: 'Antes que pergunte algo, você deve saber que a cláusula primeira do seu contrato de vida é não fazer perguntas.',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_f03'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_f03: {
            texto: 'Cheio de questionamentos internos, você tem que decidir o que fazer: ',
            imagemFundo: "url()",
            opcoes: [
                {texto: 'Resgatar o Kira.', proximaPagina: 'paginaopcao_g00'},
                {texto: 'Resgatar o pacote.', proximaPagina: 'paginaopcao_f04'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}
            ]
        },

        paginaopcao_f04: {
            texto: 'Você, então, decide resgatar o pacote. Logo após sua decisão, um cheiro estranho toma o ambiente e você adormece.',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_f05'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_f05: {
            texto: 'Ao acordar, você está em uma sala que parece um quarto de uma base militar. Seus ferimentos foram tratados e suas roupas trocadas. Agora você tem um walkie-talkie, por onde a voz se comunica com você, uma mochila, suprimentos, kit de primeiros socorros, um fone de ouvido, um equipamento semelhante a um GPS e uma espada. A voz entra em contato e manda você seguir todas as instruções por ela dadas.',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_f06'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_f06: {
            texto: 'Pois bem, diz a voz, sua missão será resgatar o pacote. Para tal, você deve seguir o ponto no GPS, é lá que está seu destino. Você, então, pega suas coisas e sai da sala.',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_f07'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_f07: {
            texto: 'O ponto parece estar próximo... Caminhando por cerca de duas horas, você está chegando perto. Vai dar certo, você pensa. Porém, a poucos minutos do destino, as luzes começam a piscar, e as sirenes são acionadas: você sabe o que acontecerá depois.',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_f08'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_f08: {
            texto: 'Nervoso, você corre o mais rápido possível para chegar até a sala, mas não dá tempo: o perturbador som agudo já começou. Você, então, coloca os fones de ouvido e segue.',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_f09'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_f09: {
            texto: 'Ao chegar bem próximo da entrada da sala, a voz entra em contato: você está quase lá, sua missão é resgatar a maleta azul no armário 09. Ao que parece, "eles" já despertaram... ',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_f10'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_f10: {
            texto: 'Você se apressa e escala para a entrada da sala. A entrada desta sala parece ser mais alta que as das demais, e você tem um pouco de dificuldades para escalar. Ao entrar no recinto, você percebe que existem zumbis muito diferentes dos demais, eles são maiores, mais fortes e têm uma aparência tão perturbadora que não parecem ter sido pessoas antes... ',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_f11'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_f11: {
            texto: 'Você foi notado, eles te viram e estão atrás de você. Ao tenta sacar sua espada, percebe que ela não está lá. Parece que caiu quando você estava entrando na sala. Desesperado, você lança o dispositivo antizumbi contra aqueles monstros e reza...',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_f12'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_f12: {
            texto: 'Isso não surte efeito: A voz entra em contato e diz que você deveria ter ligado o dispositivo antes de lançá-lo contra os zumbis. Agora é tarde... Seu fim chegou.',
            imagemFundo: "url()",
            opcoes: [{texto: 'Reiniciar jogo', proximaPagina: 'pagina_intro'},
                {texto: 'Voltar para menu de histórias', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_g00: {
            texto: 'Você, então, decide resgatar Kina. Logo após sua decisão, um cheiro estranho toma o ambiente e você adormece.',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_g01'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_g01: {
            texto: 'Ao acordar, você está em uma sala que parece um quarto de uma base militar. Seus ferimentos foram tratados e suas roupas trocadas. Agora você tem um walkie-talkie, por onde a voz se comunica com você, uma mochila, suprimentos, kit de primeiros socorros, um tampão de ouvido, um equipamento semelhante a um GPS, um dispositivo "antizumbi" e uma espada. A voz entra em contato e manda você seguir todas as instruções por ela dadas.',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_g02'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_g02: {
            texto: 'Pois bem, diz a voz, sua missão será resgatar Kina. Para tal, siga o ponto no GPS: é lá que está seu destino. Você pega suas coisas e sai da sala.',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_g03'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_g03: {
            texto: 'O ponto parece estar próximo. Caminhando por cerca de duas horas, você está chegando perto. Vai dar certo, você pensa. Porém, a poucos minutos do destino, as luzes começam a piscar, e as sirenes são acionadas: você sabe o que acontecerá depois...',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_g04'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_g04: {
            texto: 'Nervoso, você corre o mais rápido possível para chegar até a sala, mas não dá tempo: o perturbador som agudo já começou. Você coloca os fones de ouvido e segue.',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_g05'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_g05: {
            texto: 'Chegando bem próximo da entrada da sala, a voz entra em contato: você está quase lá, sua missão é resgatar a moça de cabelos pretos. Ao que parece, "eles" já despertaram...',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_g06'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_g06: {
            texto: 'Você se apressa e escala para a entrada da sala. Já dentro, você fica impressionado ao ver como aquela mulher sabe partir um zumbi ao meio. Você entra na brincadeira e os dois começam a ver quem consegue arrancar mais cabeças... ',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_g07'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_g07: {
            texto: 'Quando finalmente o último zumbi é ceifado, ela te encurrala na parede e te dá um soco no estômago: isso é por você ter demorado tanto, ela diz, e sorri em seguida.',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_g08'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_g08: {
            texto: 'Sem entender nada, você pergunta o que está acontecendo. Porém, antes que ela responda, a voz os interrompe e dá a ordem para vocês esperarem o "som sub 01" parar para retornarem à base.',
            imagemFundo: "url()",
            opcoes: [{texto: 'Continuar', proximaPagina: 'paginaopcao_g09'},
                {texto: 'Sair do jogo', proximaPagina: 'paginainicial'}]
        },

        paginaopcao_g09: {
            texto: 'aka lpz! Parabéns, você sobreviveu até aqui! Espero que tenha gostado, porque fiquei uma madraguda inteira acordado criando essa história!',
            imagemFundo: "url()",
            opcoes: [{texto: 'Voltar ao menu', proximaPagina: 'paginainicial'}]
        }
    };

        // a seguir, optei por não currificar as funções, para que estas fiquem bem descritivas "function"
        // cada função, sujestivamente "function", implementará algum mecanismo no jogo

        function mostrarPagina(pagina)
{  // como diz o nome, esta função tem como argumento "(página)" serve para  exibir a página, ou seja,  atualiza a interface do jogo com o texto da página atual e opções disponíveis na página.
    const ElementoTextoHistoria = document.getElementById("narrativa") // esta linha buscará o referencial "Id" identificado acima, para este caso, busca o elemento narrativa
    const ElementoOpcoes = document.getElementById("opcoes") // já esta linha, buscará o referencial "Id" também identificado acima, para este caso, busca o elemento opções
    const paginaAtualObj = armazemdehistorias[pagina] // aqui, se obtém a seção que representa a página atual do jogo
    ElementoTextoHistoria.textContent = paginaAtualObj.texto // esta linha atualiza o conteúdo do elemento com o texto da página atual, ou seja,  com o "Id" narrativa
    document.getElementById("jogo-container").style.backgroundImage = paginaAtualObj.imagemFundo || 'none'; // define a imagem de fundo
    
    const audioNarracao = document.getElementById("audioNarracao") // nesta seção será definido o elemento de áudio com o ID "audioNarracao" no documento HTML anterior
    audioNarracao.pause() // chamando o "pause()"" no elemento de áudio para pausar a reprodução do áudio atual, se, somente se, houver algum
    audioNarracao.currentTime = 0 // é importente redefinir o tempo de reprodução do áudio para o segundo 0 para garantir que, quando o áudio for reproduzido novamente, ele comece do início
    if (paginaAtualObj.audioNarracao) { // nesta linha, será verificada se a página atual "paginaAtualObj" possui o audio, propriedade que definimos como "audioNarracao", ou seja, se houver um URL de áudio definido para a página, o código dentro deste bloco será executado
    audioNarracao.src = paginaAtualObj.audioNarracao // definindo o atributo "src" do elemento de áudio com o URL do arquivo de áudio da página atual
    audioNarracao.play() // aqui, "play()" será executado no elemento de áudio para iniciar a reprodução do áudio da página atual
    }
    
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
    } else { // caso contrário,
        mostrarPagina("paginainicial")// Retorna ao menu inicial
    }

    const efeitoSonoro = document.getElementById("efeitoSonoro") // ao escolher a opção, essa constante reproduz o efeito sonoro espcíficado acima ao clicar em uma opção
    efeitoSonoro.play() // como o nome diz, executará o arquivo de áudio específicado
}
// Função que da pre-load nas imagens (necessita apenas carregar a url das imagens usadas anteriormente já que o html salva a imagem por url no cache, ou seja essa função não precisa interferir com outras partes do codigo nas quais a imagem possui indexações específicas )
function preCarregarImagem(srcImagem) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = srcImagem;
  });
}

// essa é uma função genérica para pré-carregar um lote de imagens
async function preCarregarLoteDeImagens(arraySrcImagens) {
  const promessas = arraySrcImagens.map(preCarregarImagem);
  await Promise.all(promessas);
}//o 'promise' somado com o 'await' é um comando que serve para ordenação, ou seja quando todos as promessas forem cumpridas ele excutara tal função

// Aqui você pode pré-carregar imagens para as primeira páginas, para que elas estejam prontas quando o usuário começar a jogar
const imagensParaPreCarregar = [
  'https://drive.google.com/uc?id=1aw1FB7sZoZ9NjF05uQ0mIimxlonNLLMN',
  'https://drive.google.com/uc?id=1b4mIcYeernwOi1lwppVmUrz68aj0oFBH',
  'https://drive.google.com/uc?id=1amorZlD7DGbZv68vZEtT5AIg7DedmzXw',
  'https://drive.google.com/uc?id=1av_8IrSbmQkvQMgJo7C50bK0YDc5KL-e',
  'https://drive.google.com/uc?id=1aCCB9_GOlKdmXdqJUsmMk4c5RC5SFjui',
  'https://drive.google.com/uc?id=1alo3PVqA_d2msMy0OhH_N2KDotCM0mFr',
  'https://drive.google.com/uc?id=1fr4LG1n24OqB4_DaYiBmdtx_-YqjsbYs',
  'https://drive.google.com/uc?id=1amYIQG6v-fMcR_r3oJPZMKqlRZKsjPpo',
  'https://drive.google.com/uc?id=1aZZlZq0oZ5fqRyX9KSrUY3tqGUQOy8MK',
  'https://drive.google.com/uc?id=1aunwCtSW4XKDmBRdc5VkgclA13nK6Hgg'


  // Adicione mais URLs de imagens aqui
];

preCarregarLoteDeImagens(imagensParaPreCarregar).then(() => {
  // Todas as imagens estão pré-carregadas, você pode iniciar seu jogo ou mostrar a primeira página agora
  mostrarPagina("paginainicial"); //nesse caso você capenas conseguirá abrir o jogo inicial quandotodo o lote de imagens iniciais estiver pré-carregado, devido ao await e promise
});

// Esse 'batch' ou lote de imagens será pré-carregado enquanto o jogador progredir no jogo (ainda não utilizado)
const proximasPaginasParaPreCarregar1 = [
  'https://drive.google.com/uc?id=1aWmxrlCXbhJJSuxqHKhRNBEGnS8jJtcp',
  'https://drive.google.com/uc?id=1bEXpAyViy9wvebFJ5MWa2q_oimM2Y-KL',
  'https://drive.google.com/uc?id=1amB8kNumgWyzbKnReFzZj5Y9GnVTzTZV',
  'https://drive.google.com/uc?id=1atDbKainjlV_xhge2ll0A2Qsu6OA-ZTI',
  'https://drive.google.com/uc?id=1fA_qgTKfiKLwJC6AvSXZmuI8XEqHLtnL',
  'https://drive.google.com/uc?id=1kLDPF33vRBilYOJiQ2dSJCWdgGf-vU4-',
  'https://drive.google.com/uc?id=1jjH14vhU12TVLqHSdywsriKT6cTJszfU',
  'https://drive.google.com/uc?id=1jlJovcYyzQ9Ci_dzQkHpylHpDZuUXfv8',
  'https://drive.google.com/uc?id=1kOWYZ8XdDkeHxT-iMeTt5RlXRxUC7KEP',
  'https://drive.google.com/uc?id=1kQVCbzYqiTRqIm0q7sTHlRLmnIHscp0b',

];//essa daqui precisa ser integrada na logica do jogo mas pelo tamanho do mesmo provavelmente não será necessária
const proximasPaginasParaPreCarregar2 = [
  'https://drive.google.com/uc?id=1blmYe84oVpdmaJiIPjrwGUul0D-Mzrz3',
  'https://drive.google.com/uc?id=1kn6ZQp8VQ-cxG1aI9bhNUOJ9m-dEJESy',
  'https://drive.google.com/uc?id=1bmoDrWIOuJT0kgRUZDkvg6ELR-gpJ-9_',
  'https://drive.google.com/uc?id=1jPXXhCAiP1iWv0gKm4NoXs_Z-8KtJULI',
  'https://drive.google.com/uc?id=1jdBsBO_f2w9NW-NEJGTAIezMM0RVLTRG',
  'https://drive.google.com/uc?id=1Rnj-x2KTftWBtC568BIPaxrOHzlvnw2e',
  'https://drive.google.com/uc?id=1jPSwG51F4ncgMz8pCMyKZEJS8qYz3u3V',
  'https://drive.google.com/uc?id=1aNZdrLj4Ihjio-VAjIzjM1bxljq3CjFD',
  'https://drive.google.com/uc?id=1hCtAOu0tjNBBJaF3fOat3aI-FababGGK',
  'https://drive.google.com/uc?id=1jhw2IeyZBocefj4ay5WCfYDQHarSvXIX',

];
const proximasPaginasParaPreCarregar3 = [
  'https://drive.google.com/uc?id=1jh_8_09wt1RNSO3brx0EHJSHHYM9OejR',
  'https://drive.google.com/uc?id=1aQY8BEuqM7CwhFU8Y1ix8_-6CA-M93z3',
  'https://drive.google.com/uc?id=1aHH61BfDUhMLFNfWHx1pE9gN_dDkHpmu',
  'https://drive.google.com/uc?id=1h8qNhRYIEPrgBBLbCCitkz19X0fNcelz',
  'https://drive.google.com/uc?id=1bcl-Gmio6XXEajMGJF7Qq4e_cdAiwqaO',
  'https://drive.google.com/uc?id=1b6Mxr7jg8vbi_AmILrG6_KNYbzPMZTC6',
  'https://drive.google.com/uc?id=1bapzFwXyZrJgNxJ2iQ-EhJjaWZ4qyl_I',
  'https://drive.google.com/uc?id=1anuMm7epxsc4xTIggSQWsY6aCujc8UUr',
  'https://drive.google.com/uc?id=1aw8L4BJyb-zOeAU8U-NbRHNKZ0U2zX9T',
  'https://drive.google.com/uc?id=1aiFO2jPusrhD',

];
const proximasPaginasParaPreCarregar4 = [

];

preCarregarLoteDeImagens(proximasPaginasParaPreCarregar1).then(() => {
  // As imagens para as próximas páginas estão pré-carregadas
 mostrarPagina("paginainicial"); // Você pode continuar a lógica do jogo ou mostrar essas páginas quando necessário
});
preCarregarLoteDeImagens(proximasPaginasParaPreCarregar2).then(() => {
  mostrarPagina("paginainicial")
  // Você pode continuar a lógica do jogo ou mostrar essas páginas quando necessário
});
preCarregarLoteDeImagens(proximasPaginasParaPreCarregar3).then(() => {
  mostrarPagina("paginainicial")
  // Você pode continuar a lógica do jogo ou mostrar essas páginas quando necessário
});

mostrarPagina(paginainicial)
