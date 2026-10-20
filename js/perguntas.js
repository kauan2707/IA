export const perguntas = [
    {
        enunciado: "Você está começando a treinar Jiu-Jitsu e percebe que existem diferentes formas de lutar. Você pode buscar passar a guarda do adversário ou jogar de guarda e tentar controlar a luta por baixo. Qual estilo você escolheria?",
        alternativas: [
            {
                texto: "Ser passador e buscar dominar a luta por cima.",
                afirmacao: "escolheu ser passador e focar em dominar a luta por cima.",
                proxima: 1,
            },
            {
                texto: "Ser guardeiro e buscar controlar a luta por baixo.",
                afirmacao: "escolheu ser guardeiro e focar em controlar a luta por baixo.",
                proxima: 2,
            },
        ]
    },
    {
        enunciado: "escolheu ser passador. Durante o treino, seu adversário puxa para a guarda e começa a tentar controlar suas pernas. O que você deve fazer?",
        alternativas: [
            {
                texto: "Trabalhar a passagem de guarda, controlar as pernas e avançar buscando uma posição dominante.",
                afirmacao: "Trabalhou a passagem de guarda controlando as pernas do adversário para avançar até uma posição dominante.",
                proxima: 3,
            },
            {
                texto: "Escolhi ser Guardeiro",
                afirmacao: "Decidiu alterar a estratégia no treino e transitar para o jogo de guarda.",
                proxima: 3,
            },
        ]
    },
    {
        enunciado: "escolheu ser guardeiro. Seu adversário está tentando passar sua guarda. Você precisa usar sua posição para controlar o adversário e criar oportunidades de ataque. O que você faz?",
        alternativas: [
            {
                texto: "Usar as pernas e os braços para controlar a distância, buscar raspagens e procurar uma finalização.",
                afirmacao: "Utilizou os membros para controlar a distância, aplicar raspagens e buscar a finalização.",
                proxima: 3,
            },
            {
                texto: "Escolhi ser Passador",
                afirmacao: "Decidiu alterar a estratégia no treino e buscar a passagem de guarda.",
                proxima: 3,
            },
        ]
    },
    {
        enunciado: "E quando o plano não funciona? Durante uma competição, você percebe que seu adversário conhece bem seu estilo de luta. Você precisa se adaptar para conseguir vencer. O que deve fazer?",
        alternativas: [
            {
                texto: "Continuar usando sempre a mesma estratégia, mesmo que ela não esteja funcionando.",
                afirmacao: "Manteve uma estratégia rígida, dificultando a adaptação na luta."
            },
            {
                texto: "Adaptar seu jogo, misturando técnicas e procurando aproveitar os erros do adversário.",
                afirmacao: "Soube adaptar seu jogo no momento certo, misturando técnicas e aproveitando os erros do adversário para vencer."
            }
        ]
    }
];