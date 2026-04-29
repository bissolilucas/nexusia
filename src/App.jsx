import { useState, useEffect } from "react";

const PLANNER = [
  { day: 1, format: "REELS", tema: "Empresas que não usam IA vão desaparecer", gancho: "Empresas que não usam inteligência artificial vão desaparecer nos próximos anos.", gatilho: "Medo de ficar para trás", pilar: "Autoridade em IA", roteiro: `Hoje existem dois tipos de empresa no mercado.\n\nAs que já usam inteligência artificial para responder clientes, organizar agenda e fechar vendas automaticamente.\n\nE as que ainda fazem tudo isso na mão, dependendo de uma pessoa para cada tarefa.\n\nEnquanto você demora para responder uma mensagem no WhatsApp, o seu concorrente já respondeu com automação, já coletou os dados do cliente e já agendou o atendimento.\n\nNo mercado atual existe uma regra simples e cruel: quem responde primeiro, vende.\n\nNão é uma questão de tamanho de empresa. É uma questão de velocidade.\n\nE velocidade hoje se chama automação com inteligência artificial.\n\nA pergunta não é mais SE você vai usar IA no seu negócio.\n\nA pergunta é: quando você vai começar?`, legenda: `A revolução da inteligência artificial já começou.\n\nEmpresas estão automatizando atendimento, agenda e vendas enquanto outras ainda respondem clientes manualmente.\n\nQuem responde primeiro, vende. Simples assim.`, cta: "Comente IA que eu te mostro como funciona no seu negócio." },
  { day: 2, format: "CARROSSEL", tema: "5 automações que toda empresa deveria ter", gancho: "5 automações que toda empresa deveria ter — e a maioria não usa.", gatilho: "Autoridade + utilidade", pilar: "Educação do mercado", roteiro: `SLIDE 1: 5 automações que toda empresa deveria ter\n\nSLIDE 2: Resposta automática no WhatsApp\n→ Seu cliente envia mensagem e recebe resposta em segundos, 24h por dia.\n\nSLIDE 3: CRM que organiza clientes\n→ Cada cliente é registrado automaticamente: nome, contato, histórico e status.\n\nSLIDE 4: Follow-up automático\n→ Sistema envia mensagem para clientes que não fecharam, no momento certo.\n\nSLIDE 5: Recuperação de clientes antigos\n→ Automação identifica clientes sumidos e envia mensagem personalizada.\n\nSLIDE 6: Agendamento automático\n→ Cliente escolhe horário disponível direto no WhatsApp. Sem ligação.\n\nSLIDE 7: Qual dessas você ainda faz manualmente?`, legenda: `A maioria das empresas não perde clientes por preço.\n\nPerde por falta de organização e demora no atendimento.\n\nAutomação resolve exatamente isso.`, cta: "Salve esse post para não perder e compartilhe com quem precisa." },
  { day: 3, format: "REELS", tema: "IA respondendo clientes 24h", gancho: "Enquanto você dorme, clientes continuam chamando.", gatilho: "Curiosidade", pilar: "Educação do mercado", roteiro: `São 23h da noite. Você está dormindo.\n\nMas um cliente entrou no seu WhatsApp agora.\n\nSe ninguém responde, ele vai para o concorrente.\n\nAgora imagina: uma inteligência artificial responde imediatamente, coleta os dados, agenda o atendimento.\n\nQuando você acorda, tem um novo cliente esperando.\n\nVocê fechou uma venda enquanto dormia.\n\nIsso não é o futuro. É automação com IA. E já existe.`, legenda: `Clientes não param de chamar às 23h.\n\nA pergunta é: quem está respondendo por você enquanto você descansa?`, cta: "Me chama no direct e te mostro como isso funciona." },
  { day: 4, format: "REELS", tema: "Erro das empresas no WhatsApp", gancho: "80% das empresas perdem clientes no WhatsApp sem nem perceber.", gatilho: "Choque", pilar: "Educação do mercado", roteiro: `Cliente manda mensagem às 14h. A empresa não responde.\n\nÀs 15h o cliente já está conversando com o concorrente. Fechou. Foi embora.\n\nIsso acontece dezenas de vezes por semana em empresas que dependem de uma pessoa para responder tudo.\n\nUma IA consegue atender cem clientes ao mesmo tempo, sem demora, sem erro.\n\nO problema não é o preço do seu serviço.\n\nÉ a velocidade da sua resposta.\n\nAutomação resolve isso hoje.`, legenda: `Quem responde primeiro, vende.\n\nNão importa se o seu produto é melhor. Se o concorrente responde mais rápido, ele leva o cliente.`, cta: "Comente AUTOMAÇÃO e eu te explico como implementar isso." },
  { day: 5, format: "POST FEED", tema: "Prova social – dashboard de atendimentos", gancho: "Isso aqui é o que acontece quando uma empresa automatiza o atendimento.", gatilho: "Autoridade", pilar: "Prova social", roteiro: `[Mostrar print do dashboard]\n\nAntes: 1 secretária sobrecarregada, clientes sem resposta, agenda bagunçada.\n\nDepois: IA respondendo 24h, agenda organizada, zero mensagem sem resposta.`, legenda: `Automação não é o futuro. É o presente.\n\nEmpresas que automatizam atendimento respondem mais rápido e vendem mais.`, cta: "Quer ver como isso funcionaria no seu negócio? Me chama no direct." },
  { day: 6, format: "REELS", tema: "3 coisas que IA faz melhor que humanos", gancho: "Existem 3 coisas que a inteligência artificial faz melhor do que qualquer humano.", gatilho: "Curiosidade", pilar: "Educação do mercado", roteiro: `Primeira: velocidade de resposta.\nIA responde em menos de 1 segundo. Sempre.\n\nSegunda: memória e organização.\nIA nunca esquece de fazer follow-up, nunca perde um cliente.\n\nTerceira: disponibilidade.\nHumano trabalha 8h por dia. IA trabalha 24h, 365 dias por ano.\n\nEnquanto você descansa, sua empresa continua atendendo.\n\nIA não substitui sua equipe. Ela libera sua equipe para o que realmente importa.`, legenda: `IA não substitui pessoas.\n\nEla substitui tarefas repetitivas que consomem tempo, energia e dinheiro.`, cta: "Comente IA e te mostro como aplicar isso no seu negócio." },
  { day: 7, format: "CARROSSEL", tema: "O erro que faz empresas perderem clientes", gancho: "Esse erro silencioso está fazendo empresas perderem clientes todos os dias.", gatilho: "Choque", pilar: "Educação do mercado", roteiro: `SLIDE 1: O erro que faz empresas perderem clientes todos os dias\nSLIDE 2: O cliente chama → quer resposta rápida\nSLIDE 3: A empresa demora → depende de alguém disponível\nSLIDE 4: O cliente perde a paciência → interesse cai a cada minuto\nSLIDE 5: O cliente vai para o concorrente → quem responder primeiro ganha\nSLIDE 6: Automação quebra esse ciclo → resposta imediata em segundos\nSLIDE 7: Seu concorrente não precisa ser melhor. Só precisa responder antes.`, legenda: `Seu concorrente não precisa ter produto melhor.\n\nEle só precisa responder antes de você.`, cta: "Salve esse carrossel e compartilhe com um empresário que precisa ver isso." },
  { day: 8, format: "REELS", tema: "Automatizei uma clínica", gancho: "Essa clínica estava perdendo pacientes todo dia. Então automatizamos tudo.", gatilho: "Prova social", pilar: "Prova social", roteiro: `Antes: recepcionista sobrecarregada, mensagens sem resposta, agenda bagunçada.\n\nDepois: IA respondendo pacientes imediatamente, agendando consultas, enviando lembretes automáticos.\n\nA recepcionista parou de ficar presa no WhatsApp e passou a focar no atendimento presencial.\n\nResultado: mais pacientes, menos cancelamento, equipe tranquila.\n\nAutomação organiza o caos.`, legenda: `Automação não demite pessoas.\n\nEla libera pessoas para o que realmente importa.`, cta: "Quer ver como funcionaria na sua empresa? Me chama no direct." },
  { day: 9, format: "REELS", tema: "Bastidores criando automação", gancho: "Vou te mostrar agora como uma automação de IA é criada do zero.", gatilho: "Curiosidade", pilar: "Bastidores de automação", roteiro: `[Mostrar tela do sistema enquanto narra]\n\nNesse primeiro bloco, a IA recebe a mensagem e identifica o que o cliente quer.\n\nNesse segundo bloco, ela responde com a linguagem da empresa.\n\nAqui ela consulta a agenda e oferece horários disponíveis.\n\nE nesse último bloco, confirma o agendamento e registra no CRM.\n\nTudo em segundos. Sem intervenção humana.\n\nPor trás de cada automação existe estratégia. É isso que fazemos na NexusIA.`, legenda: `Por trás de cada automação existe estratégia.\n\nNão é só tecnologia. É processo, lógica e entendimento do negócio.`, cta: "Compartilhe com alguém que ainda acha que automação é coisa do futuro." },
  { day: 10, format: "POST FEED", tema: "Antes e depois da automação", gancho: "Antes e depois da automação — a diferença é brutal.", gatilho: "Transformação", pilar: "Prova social", roteiro: `ANTES: WhatsApp caótico, clientes esperando horas, agenda bagunçada, equipe sobrecarregada.\n\nDEPOIS: IA respondendo 24h, agenda organizada, CRM registrando tudo, equipe focada em qualidade.`, legenda: `Automação não substitui pessoas.\n\nEla organiza processos. E empresa organizada vende mais.`, cta: "Quer virar o depois? Me chama no direct." },
  { day: 11, format: "REELS", tema: "Quanto dinheiro você perde sem automação", gancho: "Cada cliente que você demora para responder pode estar indo para o seu concorrente.", gatilho: "Dor financeira", pilar: "Educação do mercado", roteiro: `Quantas mensagens chegam no seu WhatsApp por semana?\n\nVocê responde todas em menos de 2 minutos?\n\nSe não, você está perdendo dinheiro. Todo dia.\n\nUm cliente perdido por demora, 5 vezes por semana, ticket de 500 reais = 10 mil reais por mês indo embora.\n\nNão por preço. Por demora.\n\nAutomação com IA responde em menos de 1 segundo. Qualifica, agenda, registra no CRM.\n\nO investimento se paga no primeiro cliente que você parar de perder.`, legenda: `Empresas acreditam que perdem clientes por preço.\n\nNa maioria das vezes, perdem por demora no atendimento.`, cta: "Comente IA e descubra quanto você pode estar deixando na mesa." },
  { day: 12, format: "CARROSSEL", tema: "CRM explicado de forma simples", gancho: "CRM parece coisa complicada. Mas é mais simples do que você imagina.", gatilho: "Educação", pilar: "Educação do mercado", roteiro: `SLIDE 1: O que é CRM? A explicação mais simples.\nSLIDE 2: CRM = Gestão de Relacionamento com Clientes\nSLIDE 3: Organiza todos os clientes em um painel\nSLIDE 4: Registra conversas e histórico automaticamente\nSLIDE 5: Avisa quando um cliente está parado faz dias\nSLIDE 6: Automação + CRM = vendas organizadas\nSLIDE 7: Se depende só do WhatsApp, você não tem controle real.`, legenda: `Se sua empresa depende apenas do WhatsApp para gerenciar clientes, você não tem controle. Você tem sorte.`, cta: "Salve esse post. Vai precisar mostrar para alguém da sua equipe." },
  { day: 13, format: "REELS", tema: "Recuperação automática de clientes", gancho: "Uma automação pode recuperar clientes que você já considerou perdidos.", gatilho: "Oportunidade", pilar: "Educação do mercado", roteiro: `Aquele cliente que pediu orçamento e sumiu?\n\nA maioria das empresas esquece. Vai para o próximo.\n\nMas ele não foi para o concorrente. Só ficou com dúvida ou teve um imprevisto.\n\nUma automação de follow-up muda isso.\n\n3 dias depois, a IA envia uma mensagem de acompanhamento.\n\nEm média, 20 a 30% dos leads que pareciam perdidos respondem e fecham.\n\nDinheiro que estava no lixo, de volta para o seu bolso.`, legenda: `Dinheiro perdido muitas vezes está nos clientes que você esqueceu.`, cta: "Me chama no direct e te mostro como montar isso." },
  { day: 14, format: "REELS", tema: "Por que empresas perdem clientes", gancho: "Empresas não perdem clientes por preço. E eu vou provar isso agora.", gatilho: "Quebra de crença", pilar: "Educação do mercado", roteiro: `68% dos clientes trocam de fornecedor por sensação de indiferença. Só 9% trocam por preço.\n\nO que gera indiferença? Demora para responder. Falta de acompanhamento. Esquecimento.\n\nEssas são exatamente as coisas que automação resolve.\n\nResposta imediata elimina a sensação de ser ignorado.\n\nFollow-up automático mostra que você se importa.\n\nCRM garante que nenhum cliente seja esquecido.\n\nPare de competir por preço. Comece a competir por velocidade e atenção.`, legenda: `Clientes não vão embora por preço.\n\nVão embora porque sentiram que não importavam.`, cta: "Comente AUTOMAÇÃO se isso fez sentido para você." },
  { day: 15, format: "POST FEED", tema: "Resultados de clientes", gancho: "Números reais de clientes que implementaram automação com a NexusIA.", gatilho: "Prova social", pilar: "Prova social", roteiro: `[Dashboard com métricas reais]\n- Atendimentos automatizados no mês\n- Taxa de agendamentos confirmados\n- Leads convertidos\n- Redução no tempo de resposta\n- Clientes recuperados pelo follow-up`, legenda: `Quando processos são automatizados, a empresa ganha velocidade. Velocidade gera mais vendas.`, cta: "Quer resultados assim no seu negócio? Me chama no direct." },
  { day: 16, format: "REELS", tema: "5 processos que toda empresa deveria automatizar", gancho: "Se sua empresa ainda faz esses 5 processos manualmente, você está perdendo dinheiro agora.", gatilho: "Autoridade", pilar: "Educação do mercado", roteiro: `1. Atendimento inicial — resposta imediata para todo cliente.\n2. Qualificação — IA filtra quem está pronto para comprar.\n3. Agendamento — cliente escolhe horário direto no WhatsApp.\n4. Follow-up — acompanhamento automático para quem não fechou.\n5. Recuperação — reativa clientes antigos automaticamente.\n\nTodos esses processos podem ser automatizados essa semana.\n\nAutomação não é luxo. É eficiência.`, legenda: `Automação não é luxo. É eficiência operacional.\n\nEficiência é o que separa empresas que crescem das que ficam paradas.`, cta: "Comente IA e vamos conversar sobre o seu negócio." },
  { day: 17, format: "CARROSSEL", tema: "Como a IA agenda consultas", gancho: "Uma IA pode preencher toda a sua agenda sem você tocar no telefone.", gatilho: "Curiosidade", pilar: "Educação do mercado", roteiro: `SLIDE 1: Como uma IA agenda consultas\nSLIDE 2: Cliente envia mensagem → "Quero agendar"\nSLIDE 3: IA identifica a intenção em milissegundos\nSLIDE 4: IA coleta nome, tipo de atendimento e preferência de horário\nSLIDE 5: IA consulta agenda em tempo real sem conflito\nSLIDE 6: IA oferece opções e confirma o agendamento\nSLIDE 7: IA registra no CRM e envia lembrete automático\nSLIDE 8: Agenda organizada = mais clientes = mais receita.`, legenda: `Agenda organizada significa mais clientes atendidos. Tudo isso sem você atender um telefone.`, cta: "Salve esse post e me chama para ver como implementar." },
  { day: 18, format: "REELS", tema: "Secretária de IA", gancho: "Essa inteligência artificial funciona como uma secretária — mas melhor.", gatilho: "Curiosidade", pilar: "Bastidores de automação", roteiro: `Nunca chega atrasada. Nunca fica doente. Nunca fica estressada. Atende 200 clientes ao mesmo tempo. Trabalha 24h por dia.\n\nEsse é o papel da secretária de IA.\n\nEla responde mensagens, coleta dados, agenda, confirma, registra no CRM.\n\nTudo com a linguagem e personalidade da sua empresa.\n\nNão substitui sua equipe. Libera sua equipe para criar conexão, gerar confiança e fechar negócio.`, legenda: `IA não substitui pessoas. Ela substitui tarefas repetitivas e libera sua equipe para o que gera valor.`, cta: "Me chama no direct e te mostro como seria sua secretária de IA." },
  { day: 19, format: "REELS", tema: "Automação transforma atendimento em vendas", gancho: "Automação não é sobre tecnologia. É sobre transformar atendimento em vendas.", gatilho: "Resultado", pilar: "Autoridade em IA", roteiro: `Empresas que respondem em menos de 1 minuto convertem até 7 vezes mais que empresas que demoram 1 hora.\n\nNão é teoria. É dado de pesquisa.\n\nQuando você automatiza o atendimento, todo cliente recebe resposta imediata. Sempre.\n\nNenhum lead é esquecido. Nunca.\n\nVelocidade mais organização equivale a mais vendas.\n\nNão é mágica. É processo. E processo é exatamente o que automação cria.`, legenda: `Velocidade + organização = vendas. É o resultado de empresas que usam automação.`, cta: "Comente AUTOMAÇÃO e vamos conversar sobre o seu processo." },
  { day: 20, format: "POST FEED", tema: "Dashboard de resultados com indicadores", gancho: "Empresa que não mede não cresce.", gatilho: "Autoridade", pilar: "Bastidores de automação", roteiro: `[Dashboard com indicadores]\n- Total de atendimentos\n- Taxa de conversão\n- Tempo médio de resposta\n- Agendamentos confirmados\n- Leads recuperados`, legenda: `Empresas que usam dados tomam decisões melhores. E crescem mais rápido.`, cta: "Quer um dashboard assim no seu negócio? Me chama no direct." },
  { day: 21, format: "REELS", tema: "Seu WhatsApp pode estar perdendo dinheiro", gancho: "Seu WhatsApp pode estar fazendo você perder dinheiro todos os dias.", gatilho: "Dor financeira", pilar: "Educação do mercado", roteiro: `Todo dia clientes entram no WhatsApp de empresas no Brasil.\n\nPedem informação. Perguntam preço. Querem agendar.\n\nA maioria não recebe resposta rápida. E vai para o próximo.\n\nMensagem sem resposta é cliente perdido.\n\nCliente perdido é dinheiro que foi para o concorrente.\n\nImagina se uma IA respondesse cada mensagem em menos de 1 segundo, coletasse dados e agendasse automaticamente.\n\nSua porta de entrada estaria sempre aberta.`, legenda: `Clientes não esperam mais. Quem responde primeiro, vende. Sempre.`, cta: "Comente IA e te mostro como automatizar seu WhatsApp." },
  { day: 22, format: "CARROSSEL", tema: "Como empresas perdem clientes — jornada visual", gancho: "Essa é a jornada exata de como uma empresa perde um cliente sem perceber.", gatilho: "Consciência do problema", pilar: "Educação do mercado", roteiro: `SLIDE 1: Como empresas perdem clientes sem perceber\nSLIDE 2: Cliente manda mensagem → interesse no pico\nSLIDE 3: Empresa não responde rápido → pode levar horas\nSLIDE 4: Interesse cai → a cada minuto sem resposta\nSLIDE 5: Cliente desiste → vai para o Google, manda para outro\nSLIDE 6: Concorrente responde rápido → cliente fecha\nSLIDE 7: Automação quebra esse ciclo\nSLIDE 8: Empresas não perdem por preço. Perdem por falta de velocidade.`, legenda: `Empresas não perdem clientes por preço. Perdem por falta de velocidade.`, cta: "Salve e compartilhe com quem precisa ver isso." },
  { day: 23, format: "REELS", tema: "IA atende 100 clientes ao mesmo tempo", gancho: "Uma IA pode atender 100 clientes ao mesmo tempo enquanto você faz outra coisa.", gatilho: "Curiosidade", pilar: "Educação do mercado", roteiro: `Uma pessoa atende um cliente por vez.\n\nUma IA atende 100, 500, 1000 ao mesmo tempo. Sem fila. Sem espera.\n\nEla entende o que cada cliente pergunta, responde de forma personalizada, qualifica, consulta a agenda, registra no CRM.\n\nVocê não precisa contratar 10 atendentes para atender 10 vezes mais.\n\nVocê precisa de uma IA bem configurada.`, legenda: `Escala é a grande vantagem da automação. Sua IA não tem limite de atendimentos simultâneos.`, cta: "Me chama no direct e te explico como isso funciona na prática." },
  { day: 24, format: "REELS", tema: "O futuro do atendimento", gancho: "O futuro do atendimento já começou — e quem não percebeu está ficando para trás.", gatilho: "Visão de futuro", pilar: "Autoridade em IA", roteiro: `2020: automação era tendência.\n2023: virou vantagem competitiva.\n2025: está se tornando obrigação.\n\nClínicas, academias, escritórios, lojas — todos usando IA para atender e organizar.\n\nQuem adota tecnologia primeiro ganha vantagem. Quem espera, corre atrás.\n\nEnquanto você espera o momento certo, seu concorrente está respondendo seus clientes mais rápido.`, legenda: `Tecnologia não substitui empresas. Ela fortalece quem usa e enfraquece quem ignora.`, cta: "Comente AUTOMAÇÃO e vamos dar o primeiro passo juntos." },
  { day: 25, format: "POST FEED", tema: "Automação na prática — fluxos e agenda", gancho: "É assim que uma automação completa funciona na prática.", gatilho: "Autoridade", pilar: "Bastidores de automação", roteiro: `[Mostrar fluxo + agenda organizada]\n- Fluxo visual de atendimento automático\n- Agenda sem conflitos\n- Painel de clientes no CRM\n\nTexto: "Da mensagem ao agendamento em menos de 60 segundos."`, legenda: `Automação é organização. Organização é velocidade. Velocidade transforma atendimento em venda.`, cta: "Quer um fluxo assim? Me chama no direct." },
  { day: 26, format: "REELS", tema: "Seu concorrente pode estar usando IA", gancho: "Seu concorrente pode já estar usando IA para roubar seus clientes.", gatilho: "Medo de ficar para trás", pilar: "Conteúdo viral", roteiro: `Dois negócios no mesmo segmento. Na mesma cidade.\n\nUm responde manualmente. Às vezes demora 2 horas.\n\nO outro usa IA. Responde em 1 segundo, 24h por dia.\n\nUm cliente manda mensagem para os dois. Quem ele vai escolher?\n\nNão precisa ser melhor. Não precisa ser mais barato. Só precisa responder primeiro.\n\nVocê não sabe se o seu concorrente já está fazendo isso.\n\nA única forma de garantir é automatizar também.`, legenda: `Tecnologia cria vantagem competitiva. E ela pertence a quem age primeiro.`, cta: "Comente IA e vamos conversar antes que seja tarde." },
  { day: 27, format: "CARROSSEL", tema: "5 sinais de que sua empresa precisa de automação", gancho: "Se você identificar pelo menos 1 desses sinais, sua empresa precisa de automação agora.", gatilho: "Diagnóstico", pilar: "Educação do mercado", roteiro: `SLIDE 1: 5 sinais de que sua empresa precisa de automação\nSLIDE 2: Você demora mais de 5 minutos para responder → vendas perdidas\nSLIDE 3: Você já encontrou mensagem com horas de atraso → urgente\nSLIDE 4: Clientes somem depois do orçamento → sem follow-up = dinheiro na mesa\nSLIDE 5: Agenda vive desorganizada → conflitos e remarcações = processo manual\nSLIDE 6: Sem histórico dos clientes → se rola o WhatsApp para lembrar, não tem controle\nSLIDE 7: Identificou 1? Automação não é opção. É necessidade.`, legenda: `Se você identificou pelo menos um desses sinais, automação pode transformar o seu negócio.`, cta: "Salve esse post e me chama para conversarmos." },
  { day: 28, format: "REELS", tema: "Como empresas crescem com automação", gancho: "Empresas que usam automação crescem mais rápido — e tem uma razão lógica para isso.", gatilho: "Prova lógica", pilar: "Autoridade em IA", roteiro: `Sem automação, o crescimento é limitado pela capacidade humana.\n\nQuer atender mais? Contrata mais. Mais custo. Mais gestão.\n\nCom automação, essa limitação some.\n\nA IA atende mais sem custo adicional por atendimento.\n\nMais clientes, mais conversões, com a mesma equipe.\n\nAutomação é sobre criar um modelo de negócio que cresce de forma sustentável.`, legenda: `Automação é sobre crescer sem precisar dobrar o custo. Essa é a equação que muda o jogo.`, cta: "Me chama no direct e te conto como montar essa estrutura." },
  { day: 29, format: "REELS", tema: "Automação como funcionário digital 24h", gancho: "Automação é como um funcionário que trabalha 24 horas — mas nunca cobra hora extra.", gatilho: "Analogia simples", pilar: "Educação do mercado", roteiro: `Nunca chega atrasado. Nunca falta. Nunca fica doente. Nunca pede aumento. Atende 200 clientes ao mesmo tempo. Trabalha 24h, 365 dias.\n\nEsse funcionário existe. É automação com IA.\n\nEla cuida do atendimento enquanto você descansa.\n\nOrganiza a agenda enquanto você está em reunião.\n\nFaz o follow-up enquanto você está com o cliente.\n\nAutomação é o novo funcionário digital. E nunca pede para sair mais cedo.`, legenda: `Automação é o novo funcionário digital. Trabalha 24h, nunca falta, nunca esquece.`, cta: "Comente AUTOMAÇÃO e vamos montar o seu funcionário digital." },
  { day: 30, format: "POST FEED", tema: "Mensagem final de autoridade", gancho: "30 dias de conteúdo. Uma mensagem final para quem ainda está em dúvida.", gatilho: "Autoridade", pilar: "Autoridade em IA", roteiro: `[Foto profissional]\n\n"Automação e IA não são o futuro do seu negócio.\nJá são o presente.\nE o presente pertence a quem age."\n\n— Lucas Bissoli | NexusIA`, legenda: `30 dias falando sobre atendimento automático, CRM, follow-up e resultados reais.\n\nTudo com um fio condutor: empresas que usam tecnologia crescem mais rápido.\n\nA pergunta que resta é: quando você vai começar?`, cta: "Quer ver como isso funcionaria no seu negócio? Me chama no direct agora." },
];

const REELS_PLANNER = [
  { dia: 1, reels: [
    { seg: "EMPRESAS", pub: "Donos de empresa", tema: "Seu concorrente já usa IA — você não", gancho: "Enquanto você lê isso, seu concorrente pode estar usando IA para roubar seus clientes.", roteiro: "Dois negócios. Mesmo segmento. Mesma cidade.\n\nUm responde manualmente. Às vezes demora 2 horas.\n\nO outro tem uma IA que responde em 1 segundo, 24 horas por dia.\n\nUm cliente manda mensagem para os dois ao mesmo tempo.\n\nQuem ele vai escolher?\n\nNão precisa ser melhor. Não precisa ser mais barato.\n\nSó precisa responder primeiro.\n\nE a triste realidade é que você não sabe se o seu concorrente já está fazendo isso.\n\nA única forma de garantir é agir antes.", dicas: "Grave na rua ou em frente ao seu negócio. Use cortes rápidos a cada frase.", cta: "Comenta IA aqui embaixo que eu te explico." },
    { seg: "EMPRESAS", pub: "Empreendedores", tema: "Quanto custa não ter automação", gancho: "Você sabe exatamente quanto dinheiro está perdendo por não ter automação?", roteiro: "Imagina 10 clientes chegando no seu WhatsApp hoje.\n\nVocê responde 7. 3 ficam sem resposta.\n\nEsses 3 foram para o concorrente.\n\nSe o ticket médio do seu negócio é mil reais...\n\nVocê acabou de perder 3 mil reais hoje.\n\nMultiplicado por 5 dias da semana... 15 mil por semana.\n\n60 mil por mês.\n\nNão por preço. Não porque seu serviço é pior.\n\nPor falta de velocidade.\n\nAutomação com IA resolve exatamente isso.", dicas: "Use texto na tela com os números enquanto fala.", cta: "Me chama no direct e calcula o quanto você pode recuperar." },
    { seg: "SAÚDE", pub: "Médicos e clínicas", tema: "Pacientes sumindo antes do agendamento", gancho: "73% dos pacientes que não recebem resposta rápida vão para outra clínica.", roteiro: "É noite. Um paciente está com dor e procura uma clínica no Google.\n\nEncontra a sua. Manda mensagem no WhatsApp.\n\nNinguém responde até de manhã.\n\nEle já agendou em outro lugar.\n\nIsso acontece todo dia em clínicas que dependem de uma recepcionista para responder tudo.\n\nA solução? Uma IA que responde imediatamente, coleta os dados do paciente, verifica a agenda e já oferece os horários disponíveis.\n\nTudo em segundos. Sem precisar acordar ninguém.", dicas: "Grave num ambiente de clínica. Use jaleco se possível.", cta: "Clínica ou consultório? Me conta nos comentários qual é o seu." },
  ]},
  { dia: 2, reels: [
    { seg: "EMPRESAS", pub: "Donos de negócio", tema: "O que é um agente de IA na prática", gancho: "Todo mundo fala em IA mas ninguém explica o que ela realmente faz no dia a dia de um negócio.", roteiro: "Agente de IA não é robô de ficção científica.\n\nÉ um sistema que conversa com seus clientes no WhatsApp como se fosse um atendente humano.\n\nEle recebe a mensagem, entende o que o cliente quer, responde com a linguagem da sua empresa e já encaminha para o próximo passo.\n\nSe for agendamento, verifica a agenda e confirma o horário.\n\nSe for dúvida, responde com as informações do seu negócio.\n\nSe for orçamento, coleta os dados e avisa sua equipe.\n\nTudo automático. Tudo rápido. Tudo no seu WhatsApp.", dicas: "Mostre a tela do celular com exemplos de conversa enquanto narra.", cta: "Qual seria o primeiro processo que você automatizaria? Comenta aqui." },
    { seg: "EMPRESAS", pub: "Empreendedores digitais", tema: "3 automações para implementar essa semana", gancho: "3 automações que qualquer empresa pode implementar essa semana e já sentir resultado.", roteiro: "Primeira: resposta automática no WhatsApp.\n\nCliente manda mensagem. IA responde em menos de 1 segundo. Sempre.\n\nSegunda: follow-up automático.\n\nCliente pediu orçamento e sumiu? A IA manda mensagem de acompanhamento em 24 horas.\n\nTerceira: agendamento automático.\n\nCliente escolhe horário disponível direto no WhatsApp. Sem ligação.\n\nTrês processos simples. Três problemas resolvidos.\n\nE o mais importante: você pode ter tudo isso rodando essa semana.", dicas: "Use três cards visuais na tela. Energia alta do início ao fim.", cta: "Qual dessas você precisa mais urgente? 1, 2 ou 3? Comenta aqui." },
    { seg: "SAÚDE", pub: "Estética e beleza", tema: "Agenda cheia sem precisar ligar", gancho: "Sua agenda poderia estar cheia todo dia sem você ou sua equipe fazer uma ligação sequer.", roteiro: "Profissional de estética passa horas por dia confirmando agendamento, respondendo mensagem e organizando horário.\n\nIsso é tempo que poderia estar sendo usado no atendimento.\n\nCom automação, a cliente envia mensagem, a IA mostra os horários disponíveis, a cliente escolhe e confirma.\n\nNo dia anterior, a IA já manda lembrete automático para reduzir cancelamento.\n\nSe cancelar, o horário já vai para lista de espera.\n\nAgenda organizada. Zero ligação. Zero mensagem manual.", dicas: "Grave num salão ou espaço de estética. Mostre a agenda no celular.", cta: "Quantas horas por semana você gasta só organizando agenda? Comenta." },
  ]},
  { dia: 3, reels: [
    { seg: "EMPRESAS", pub: "Gestores e CEOs", tema: "Por que sua equipe não consegue escalar", gancho: "Sua equipe não consegue atender mais clientes não porque é ruim. É porque o processo trava.", roteiro: "Uma equipe de 3 pessoas atende no máximo 3 clientes ao mesmo tempo.\n\nNão importa o quanto elas se esforcem. O limite é humano.\n\nQuando você automatiza o atendimento inicial com IA, esse limite some.\n\nA IA atende 100, 200, 500 clientes ao mesmo tempo.\n\nEla filtra, qualifica e só passa para sua equipe os clientes que estão prontos para fechar.\n\nSua equipe para de perder tempo com quem não vai comprar e foca em quem vai.\n\nResultado: mesma equipe, muito mais vendas.", dicas: "Use whiteboard ou animação simples para mostrar o funil.", cta: "Sua equipe consegue dar conta da demanda atual? Comenta sim ou não." },
    { seg: "EMPRESAS", pub: "Pequenos empresários", tema: "IA não é caro — é investimento", gancho: "Todo mundo acha que automação com IA é caro. Então vou te mostrar a conta real.", roteiro: "Um atendente custa em média dois a três mil reais por mês.\n\nTrabalha 8 horas por dia. Falta. Fica doente. Comete erros.\n\nUma IA custa uma fração disso. Trabalha 24 horas. Nunca falta.\n\nE mais importante: ela atende 100 clientes ao mesmo tempo enquanto o atendente atende um.\n\nA questão não é se você pode pagar por automação.\n\nA questão é se você pode continuar pagando por não ter automação.\n\nCada cliente perdido por demora é dinheiro que foi para o concorrente.\n\nFaz a conta.", dicas: "Use calculadora na tela. Fale com confiança.", cta: "Faz sentido para você? Comenta e me conta seu segmento." },
    { seg: "SAÚDE", pub: "Médicos", tema: "Consultório que funciona enquanto você opera", gancho: "E se seu consultório pudesse agendar consultas enquanto você está no centro cirúrgico?", roteiro: "Médico não pode estar no consultório e na cirurgia ao mesmo tempo.\n\nMas sua agenda pode estar se organizando enquanto você opera.\n\nCom um agente de IA, pacientes que mandam mensagem recebem resposta imediata.\n\nA IA verifica sua agenda em tempo real, oferece os horários disponíveis e confirma o agendamento.\n\nQuando você termina o procedimento, já tem novos pacientes agendados.\n\nSem secretária precisar interromper. Sem paciente ficar esperando.", dicas: "Tom profissional. Grave em ambiente médico se possível.", cta: "Médico aqui? Me conta qual especialidade nos comentários." },
  ]},
  { dia: 4, reels: [
    { seg: "EMPRESAS", pub: "E-commerce", tema: "Recuperação de carrinho abandonado com IA", gancho: "70% dos clientes abandonam o carrinho. E a maioria pode ser recuperada com automação.", roteiro: "Cliente entrou na sua loja. Escolheu os produtos. Chegou no pagamento.\n\nE foi embora.\n\nSem automação, esse cliente some para sempre.\n\nCom um agente de IA, 30 minutos depois ele recebe uma mensagem personalizada.\n\nNão um spam genérico. Uma mensagem com o produto que ele estava olhando.\n\nEm média, 15 a 25% desses clientes voltam e finalizam a compra.\n\nSão vendas que você já tinha e quase perdeu.", dicas: "Mostre print de conversa de recuperação.", cta: "Tem loja online? Me conta e te mostro como funciona." },
    { seg: "EMPRESAS", pub: "Prestadores de serviço", tema: "Follow-up que fecha vendas", gancho: "A maioria das vendas não é perdida na proposta. É perdida no silêncio depois dela.", roteiro: "Cliente pediu orçamento.\n\nVocê enviou uma proposta incrível.\n\nPassou um dia. Dois. Uma semana. Silêncio.\n\nO que a maioria faz? Nada. Fica esperando.\n\nO que automação faz? Manda follow-up no momento certo.\n\nNo dia seguinte: mensagem de acompanhamento.\n\nTrês dias depois: caso de sucesso de um cliente similar.\n\nUma semana depois: última tentativa com urgência.\n\nEm média, 25% dos leads que pareciam perdidos fecham só com follow-up automático.", dicas: "Use timeline visual na tela. Foque nos números.", cta: "Você faz follow-up manual hoje? Comenta como funciona." },
    { seg: "SAÚDE", pub: "Clínicas de estética", tema: "Redução de no-show com IA", gancho: "Clínica com agenda cheia mas atendimento vazio. Você conhece esse problema?", roteiro: "No-show é o terror de toda clínica.\n\nPaciente agenda, você reserva o horário.\n\nE ele não aparece.\n\nCom automação, isso cai drasticamente.\n\nA IA manda lembrete 48 horas antes. Outro 24 horas. Um último no dia.\n\nSe o paciente cancelar, o horário vai automaticamente para uma lista de espera.\n\nNenhuma hora perdida. Nenhum dinheiro jogado fora.\n\nClínicas reduzem no-show em até 60% com esse sistema.", dicas: "Use dados visuais. Grave em ambiente de clínica.", cta: "Qual é a taxa de no-show na sua clínica? Comenta aqui." },
  ]},
  { dia: 5, reels: [
    { seg: "EMPRESAS", pub: "Corretores", tema: "IA que qualifica leads imobiliários", gancho: "Corretor de imóveis perde metade do dia atendendo cliente que não tem perfil. Tem solução.", roteiro: "Lead chega pelo portal imobiliário.\n\nCorretor para tudo para ligar.\n\nConversa 20 minutos. Descobre que o cliente quer algo que você não tem.\n\nTempo perdido.\n\nCom um agente de IA, antes de qualquer ligação a IA já conversa com o lead.\n\nDescobre o que ele quer, qual o orçamento, se é para morar ou investir.\n\nSó chega para você o lead qualificado. Pronto para visita.\n\nVocê troca 10 ligações improdutivas por 2 visitas com chances reais de fechamento.", dicas: "Use linguagem do mercado imobiliário. Foque na economia de tempo.", cta: "Corretor ou imobiliária? Me conta quantos leads você atende por dia." },
    { seg: "EMPRESAS", pub: "Agências", tema: "Automatize o onboarding de clientes", gancho: "O primeiro mês com um novo cliente define se ele fica ou vai embora.", roteiro: "Novo cliente fechou. Você está feliz.\n\nMas agora começa o trabalho manual: coleta de informações, acesso a ferramentas, alinhamento de expectativas.\n\nCom automação, assim que o contrato é assinado, um fluxo é disparado.\n\nA IA coleta todas as informações. Solicita os acessos. Envia o cronograma do projeto.\n\nManda os materiais de boas-vindas.\n\nO cliente sente que foi recebido com profissionalismo.\n\nVocê não gastou nenhuma hora com isso.", dicas: "Mostre exemplos de mensagens automáticas.", cta: "Agência ou consultoria? Me conta como é seu onboarding hoje." },
    { seg: "SAÚDE", pub: "Psicólogos", tema: "Automação sem perder o lado humano", gancho: "Psicólogo não pode automatizar o atendimento. Mas pode automatizar tudo que não é atendimento.", roteiro: "A consulta é sagrada. O vínculo terapêutico é insubstituível.\n\nMas a parte administrativa? Pode e deve ser automatizada.\n\nConfirmação de consulta: automático.\n\nLembrete de sessão: automático.\n\nCobrança e link de pagamento: automático.\n\nResposta a dúvidas sobre horários: automático.\n\nVocê fica 100% focado no atendimento ao paciente.\n\nSem precisar ficar olhando o celular entre uma sessão e outra.", dicas: "Tom calmo e acolhedor. Ambiente neutro e tranquilo.", cta: "Profissional de saúde mental aqui? Me conta como organiza sua agenda." },
  ]},
  { dia: 6, reels: [
    { seg: "EMPRESAS", pub: "Restaurantes", tema: "Pedidos automáticos no WhatsApp", gancho: "Restaurante que ainda anota pedido na mão está perdendo dinheiro e cliente.", roteiro: "Cliente abre o WhatsApp e manda mensagem para o restaurante.\n\nSem automação: alguém precisa ler, anotar, confirmar, mandar para a cozinha.\n\nCom automação: a IA recebe o pedido, mostra o cardápio, coleta o endereço, processa o pagamento e manda para a cozinha.\n\nTudo em menos de 2 minutos. Sem um funcionário sequer envolvido.\n\nErro de pedido? Zero. Porque o cliente escolheu e confirmou.\n\nFila de mensagem? Zero. A IA atende todo mundo ao mesmo tempo.", dicas: "Grave em ambiente de cozinha ou balcão. Mostre o celular com a conversa.", cta: "Restaurante, lanchonete ou delivery? Me conta o segmento." },
    { seg: "EMPRESAS", pub: "Academias", tema: "Captação e retenção de alunos com IA", gancho: "Academia perde aluno todo mês por falta de acompanhamento. Tem como resolver com IA.", roteiro: "Lead entra no Instagram e manda mensagem querendo saber sobre a academia.\n\nSe demorar para responder, ele vai para a academia da esquina.\n\nCom automação, resposta imediata. IA apresenta planos, pergunta o objetivo do aluno, oferece aula experimental.\n\nAluno entra. Primeiro mês passa. IA já manda mensagem de acompanhamento.\n\nViu que o aluno faltou três vezes seguidas? Manda mensagem de motivação automática.\n\nMenos churn. Mais receita recorrente.", dicas: "Grave na academia. Tom energético.", cta: "Academia ou personal? Me conta sua maior dificuldade com alunos." },
    { seg: "SAÚDE", pub: "Dentistas", tema: "Menos faltas, mais procedimentos", gancho: "Dentista perde em média 30% da receita por causa de faltas. Tem como mudar isso.", roteiro: "Procedimento demorado, equipamento preparado, horário bloqueado.\n\nE o paciente não aparece.\n\nCom automação, a sequência de lembretes começa 72 horas antes.\n\nWhatsApp com link de confirmação. Se não confirmar, a IA tenta de novo.\n\nSe cancelar, o sistema notifica automaticamente quem está na lista de espera.\n\nO horário é preenchido. A receita é mantida.\n\nDentistas reduzem faltas em até 65% com esse sistema.", dicas: "Ambiente odontológico. Tom focado em resultado financeiro.", cta: "Dentista ou clínica odontológica? Me conta nos comentários." },
  ]},
  { dia: 7, reels: [
    { seg: "EMPRESAS", pub: "Todos", tema: "O que acontece quando você implementa IA", gancho: "Vou te contar o que acontece nos primeiros 30 dias depois de implementar IA.", roteiro: "Semana 1: você sente estranho. A IA está respondendo por você.\n\nMas os clientes não percebem. E as respostas são mais rápidas do que antes.\n\nSemana 2: você começa a ver os números. Menos mensagens sem resposta. Mais agendamentos.\n\nSemana 3: sua equipe respira. Parou de ficar soterrada no WhatsApp.\n\nSemana 4: você olha para o mês e vê mais resultado com o mesmo time.\n\nMês 2 em diante: você não consegue mais imaginar trabalhar sem IA.", dicas: "Formato pessoal, como conversa. Tom honesto e próximo.", cta: "Que semana desse processo você está? Comenta aqui." },
    { seg: "EMPRESAS", pub: "Iniciantes", tema: "Por onde começar com automação", gancho: "Quer automatizar o seu negócio mas não sabe por onde começar? Começa aqui.", roteiro: "Passo 1: mapeie onde você perde mais tempo.\n\nNormalmente é no atendimento inicial ou no agendamento.\n\nPasso 2: automatize só esse processo primeiro.\n\nNão tenta automatizar tudo de uma vez.\n\nPasso 3: mede o resultado.\n\nTempo economizado, leads respondidos, agendamentos realizados.\n\nPasso 4: expande para o próximo processo.\n\nEm 3 meses, você tem uma operação praticamente automatizada.", dicas: "Use passos visuais na tela. Tom didático e encorajador.", cta: "Qual é o processo que mais te consome hoje? Comenta aqui." },
    { seg: "SAÚDE", pub: "Clínicas", tema: "CRM para clínicas de saúde", gancho: "Clínica que não tem CRM está perdendo pacientes e nem sabe quais.", roteiro: "CRM não é só coisa de empresa de vendas.\n\nClínica de saúde precisa tanto quanto qualquer negócio.\n\nSem CRM: paciente que não voltou some no histórico. Você não sabe quando foi a última consulta.\n\nCom CRM integrado à IA: o sistema identifica automaticamente pacientes que não voltam há mais de 3 meses.\n\nA IA manda mensagem personalizada de acompanhamento.\n\nAlguns vão agendar. Outros vão indicar.\n\nClientes inativos são uma mina de ouro que a maioria das clínicas ignora.", dicas: "Mostre tela de CRM. Tom educativo.", cta: "Sua clínica tem CRM hoje? Comenta sim ou não." },
  ]},
  { dia: 8, reels: [
    { seg: "EMPRESAS", pub: "Todos", tema: "Bastidores de uma automação real", gancho: "Vou te mostrar ao vivo como uma automação de IA funciona por dentro.", roteiro: "Isso aqui é um fluxo de automação real que configurei para um cliente.\n\nQuando o cliente manda mensagem no WhatsApp, esse bloco recebe.\n\nEsse segundo bloco identifica a intenção: agendamento, dúvida ou orçamento.\n\nDependendo do que é, ele vai para um caminho diferente.\n\nAqui ele consulta a agenda. Aqui ele responde com as informações da empresa.\n\nTudo em menos de 3 segundos. Do zero ao agendamento confirmado.\n\nNão é mágica. É lógica bem construída.", dicas: "Grave a tela do computador com o fluxo real.", cta: "Ficou alguma dúvida? Me pergunta nos comentários." },
    { seg: "EMPRESAS", pub: "Donos", tema: "IA que nunca pede aumento", gancho: "Meu melhor funcionário nunca chega atrasado, nunca falta e nunca pede aumento.", roteiro: "Esse funcionário responde 500 clientes por dia.\n\nTrabalha sem parar.\n\nNão tem dia ruim. Não fica de mau humor com cliente difícil.\n\nNunca esquece de fazer follow-up. Nunca perde um lead.\n\nEsse funcionário é um agente de IA.\n\nE o custo mensal é uma fração do salário de um atendente humano.\n\nNão estou dizendo para você demitir sua equipe.\n\nEstou dizendo que para tarefas repetitivas, IA é simplesmente imbatível.", dicas: "Tom bem-humorado no início, sério no final.", cta: "Qual tarefa do seu negócio mais merece ser automatizada? Comenta." },
    { seg: "SAÚDE", pub: "Nutricionistas", tema: "Acompanhamento de pacientes automatizado", gancho: "Nutricionista que acompanha 50 pacientes não consegue checar todos manualmente toda semana.", roteiro: "Com automação, a IA manda mensagem de check-in semanal para cada paciente automaticamente.\n\nColeta o peso, as refeições, o nível de energia.\n\nOrganiza tudo no painel para você revisar.\n\nVocê analisa os dados em 10 minutos e dá feedback personalizado.\n\nMesmo acompanhamento. Um décimo do tempo.", dicas: "Tom próximo e especializado. Exemplos práticos da rotina do nutricionista.", cta: "Nutricionista aqui? Me conta quantos pacientes você acompanha." },
  ]},
  { dia: 9, reels: [
    { seg: "EMPRESAS", pub: "Vendas", tema: "IA que qualifica e aquece leads", gancho: "Vendedor gasta 80% do tempo com lead frio. Automação inverte essa equação.", roteiro: "Lead entra pelo anúncio.\n\nSem automação: alguém precisa responder, qualificar, entender a necessidade.\n\nMuito lead frio. Muito tempo perdido.\n\nCom automação: a IA entra antes do vendedor.\n\nFaz as perguntas certas. Entende o estágio do lead.\n\nSe estiver quente, avisa o vendedor com todas as informações já coletadas.\n\nSe estiver frio, a IA nutre com conteúdo até ele estar pronto.\n\nVendedor só fala com quem está pronto para comprar.", dicas: "Use linguagem de vendas. Tom ágil e focado em resultado.", cta: "Você está na área de vendas? Me conta como é seu processo hoje." },
    { seg: "EMPRESAS", pub: "Pequenos negócios", tema: "Não precisa ser grande para ter IA", gancho: "Automação com IA não é só para grandes empresas. Pequeno negócio precisa mais ainda.", roteiro: "Grande empresa tem 10 atendentes.\n\nPequeno negócio tem você.\n\nQuando você está em reunião ou atendimento, quem está respondendo no WhatsApp?\n\nNinguém.\n\nE cada mensagem sem resposta é um cliente em risco.\n\nCom automação, o tamanho do negócio não limita o atendimento.\n\nA IA trabalha quando você não pode.\n\nPequeno negócio com atendimento de grande empresa. Essa é a vantagem.", dicas: "Tom inclusivo e acessível.", cta: "Qual o seu negócio? Me conta nos comentários." },
    { seg: "SAÚDE", pub: "Fisioterapeutas", tema: "Agenda e produtividade automatizadas", gancho: "Fisioterapeuta ainda faz tudo manual está gastando 2 horas por dia que poderia estar atendendo.", roteiro: "Cada sessão tem evolução. Cada evolução leva tempo.\n\nCom 8 atendimentos por dia, são horas de documentação.\n\nAutomação organiza tudo ao redor.\n\nAgendamento automático. Lembrete para o paciente. Confirmação de sessão.\n\nHistórico de atendimentos acessível em segundos.\n\nMenos tempo em processo. Mais tempo em atendimento.\n\nMais atendimentos por dia. Mais receita.", dicas: "Tom técnico mas acessível. Foco em produtividade clínica.", cta: "Fisioterapeuta aqui? Me conta quantos pacientes você atende por dia." },
  ]},
  { dia: 10, reels: [
    { seg: "EMPRESAS", pub: "Financeiro", tema: "Cobrança automática sem constrangimento", gancho: "A parte mais desconfortável de qualquer negócio é cobrar. IA faz isso por você.", roteiro: "Boleto venceu.\n\nVocê precisa ligar para o cliente. Que constrangimento.\n\nCom automação, a cobrança é automática, personalizada e sem pressão.\n\nNo dia do vencimento: lembrete amigável.\n\nTrês dias depois: mensagem com link para regularizar.\n\nUma semana depois: última notificação.\n\nTom profissional, sem ser agressivo.\n\nEmpresas que automatizam cobrança recuperam em média 30% mais inadimplência.", dicas: "Tom sério mas não pesado. Foque na solução.", cta: "Você faz cobrança manual hoje? Comenta como é o seu processo." },
    { seg: "EMPRESAS", pub: "Recorrentes", tema: "Retenção é mais barata que captação", gancho: "Captar um novo cliente custa 5 vezes mais do que reter um que já tem.", roteiro: "Cliente antigo é ouro.\n\nEle já te conhece. Já confia. Já comprou.\n\nMas a maioria das empresas foca só em novos clientes e esquece quem já está dentro.\n\nCom automação, nenhum cliente fica esquecido.\n\nAniversário? A IA manda mensagem.\n\nFaz 3 meses que não compra? A IA aciona reengajamento.\n\nNovo produto? A IA avisa os clientes mais propensos.\n\nCliente que se sente visto, fica. E indica.", dicas: "Tom estratégico. Use dados de LTV.", cta: "Você tem algum processo de retenção hoje? Comenta sim ou não." },
    { seg: "SAÚDE", pub: "Clínicas", tema: "Triagem automática de pacientes", gancho: "Antes de o paciente chegar à recepção, a IA já sabe o que ele precisa.", roteiro: "Paciente manda mensagem para a clínica.\n\nSem automação: recepcionista pergunta nome, queixa, plano de saúde, disponibilidade. Um por um.\n\nCom automação: a IA faz a triagem completa.\n\nColeta sintomas, urgência, plano de saúde, preferência de médico e horário.\n\nJá direciona para a especialidade correta.\n\nRecepcionista recebe o paciente já triado.\n\nAtendimento mais rápido. Paciente mais satisfeito. Equipe mais eficiente.", dicas: "Tom técnico e clínico. Foco na eficiência operacional.", cta: "Clínica multiprofissional? Me conta o segmento." },
  ]},
];

const FORMATS = ["REELS", "CARROSSEL", "POST FEED"];
const PILLARS = ["Autoridade em IA", "Educação do mercado", "Prova social", "Bastidores de automação", "Conteúdo viral"];
const TRIGGERS = ["Curiosidade", "Medo de ficar para trás", "Dor financeira", "Prova social", "Quebra de crença", "Choque", "Oportunidade", "Transformação", "Visão de futuro", "Autoridade", "Resultado", "Diagnóstico", "Analogia simples"];
const FMT = { "REELS": { color: "#f97316", bg: "#fff7ed" }, "CARROSSEL": { color: "#7c3aed", bg: "#f5f3ff" }, "POST FEED": { color: "#0891b2", bg: "#ecfeff" } };

const parseRSS = (xml, source) => {
  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)];
  return items.slice(0, 10).map((m, i) => {
    const title = m[1].match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] || m[1].match(/<title>(.*?)<\/title>/)?.[1] || "";
    const snippet = m[1].match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/)?.[1]?.replace(/<[^>]+>/g, "").slice(0, 120) || "";
    return { source, title: title.replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'"), snippet, score: 100 - i };
  });
};

const FREE_SOURCES = [
  { id: "instagram", label: "Instagram",    emoji: "📸" },
  { id: "tiktok",    label: "TikTok",       emoji: "🎵" },
  { id: "youtube",   label: "YouTube",      emoji: "▶️" },
  { id: "ia_br",     label: "IA no Brasil", emoji: "🤖" },
  { id: "devto",     label: "Dev.to",       emoji: "📝", url: "https://dev.to/api/articles?tag=ai&per_page=10&top=7", parse: d => d.map(a => ({ source: "Dev.to", title: a.title, snippet: a.description||"", score: a.positive_reactions_count })) },
];

async function store(k, v) { try { await window.storage.set(k, JSON.stringify(v)); } catch {} }
async function load(k, d) { try { const r = await window.storage.get(k); return r ? JSON.parse(r.value) : d; } catch { return d; } }

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Plus Jakarta Sans', sans-serif; background: #f5f5f7; }
  select { appearance: none; }
  @keyframes fadeUp { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:translateY(0); } }
  @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
  @keyframes spin { to { transform: rotate(360deg); } }
  @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.4} }
  @keyframes popIn { 0%{transform:scale(.94);opacity:0} 60%{transform:scale(1.02)} 100%{transform:scale(1);opacity:1} }
  .fade-up { animation: fadeUp .4s cubic-bezier(.22,1,.36,1) both; }
  .fade-in { animation: fadeIn .3s ease both; }
  .pop-in  { animation: popIn .4s cubic-bezier(.22,1,.36,1) both; }
  .card { background:#fff; border-radius:20px; border:1px solid rgba(0,0,0,.06); box-shadow:0 1px 2px rgba(0,0,0,.04),0 4px 24px rgba(0,0,0,.05); transition:box-shadow .2s; }
  .btn-primary { width:100%; padding:14px; border-radius:14px; border:none; background:linear-gradient(135deg,#6366f1,#8b5cf6); color:#fff; font-family:'Plus Jakarta Sans',sans-serif; font-weight:700; font-size:15px; cursor:pointer; box-shadow:0 4px 16px rgba(99,102,241,.35); transition:transform .15s,box-shadow .15s; }
  .btn-primary:hover:not(:disabled) { transform:translateY(-1px); box-shadow:0 6px 24px rgba(99,102,241,.45); }
  .btn-primary:disabled { background:#e5e7eb; color:#9ca3af; box-shadow:none; cursor:not-allowed; }
  .input-field { width:100%; padding:11px 14px; border-radius:12px; border:1.5px solid #e5e7eb; background:#fafafa; font-family:'Plus Jakarta Sans',sans-serif; font-size:14px; color:#111; outline:none; transition:border-color .15s,background .15s; }
  .input-field:focus { border-color:#6366f1; background:#fff; box-shadow:0 0 0 3px rgba(99,102,241,.1); }
  .tab-btn { padding:8px 20px; border-radius:10px; border:none; font-family:'Plus Jakarta Sans',sans-serif; font-weight:600; font-size:13px; cursor:pointer; transition:all .2s; }
  .trend-item { padding:10px 12px; border-radius:12px; border:1.5px solid #f3f4f6; background:#fafafa; cursor:pointer; transition:all .15s; }
  .trend-item:hover { border-color:#c4b5fd; background:#faf5ff; }
  .trend-item.selected { border-color:#6366f1; background:#f5f3ff; }
  .copy-btn { padding:7px 16px; border-radius:10px; border:1.5px solid #e5e7eb; background:#fff; font-family:'Plus Jakarta Sans',sans-serif; font-weight:600; font-size:12px; cursor:pointer; transition:all .15s; white-space:nowrap; }
  .copy-btn.copied { border-color:#22c55e; background:#f0fdf4; color:#16a34a; }
  .copy-btn:not(.copied):hover { border-color:#6366f1; color:#6366f1; }
  .source-chip { padding:4px 10px; border-radius:8px; font-size:11px; font-weight:600; cursor:pointer; transition:all .15s; border:1.5px solid #e5e7eb; background:#fafafa; color:#6b7280; font-family:'Plus Jakarta Sans',sans-serif; }
  .source-chip.active { border-color:#6366f1; background:#eef2ff; color:#4338ca; }
  .planner-row { background:#fff; border-radius:14px; border:1.5px solid transparent; transition:border-color .2s,box-shadow .2s; overflow:hidden; box-shadow:0 1px 2px rgba(0,0,0,.04); }
  ::-webkit-scrollbar { width:5px; } ::-webkit-scrollbar-thumb { background:#e5e7eb; border-radius:3px; }
`;

export default function App() {
  const [tab, setTab] = useState("gerar");
  const [generated, setGenerated] = useState([]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [fmt, setFmt] = useState("REELS");
  const [pilar, setPilar] = useState("Autoridade em IA");
  const [gatilho, setGatilho] = useState("Curiosidade");
  const [temaInput, setTemaInput] = useState("");
  const [copied, setCopied] = useState(null);
  const [expanded, setExpanded] = useState(null);
  const [plannerOpen, setPlannerOpen] = useState(null);
  const [reelsOpen, setReelsOpen] = useState(null);
  const [reelsDone, setReelsDone] = useState({});
  const [trends, setTrends] = useState([]);
  const [selTrends, setSelTrends] = useState([]);
  const [loadingTrends, setLoadingTrends] = useState(false);
  const [trendsLoaded, setTrendsLoaded] = useState(false);
  const [activeSrc, setActiveSrc] = useState(["instagram", "tiktok", "youtube"]);
  const [provider, setProvider] = useState("claude");

  useEffect(() => {
    load("nexusia_v7", []).then(setGenerated);
    const s = document.createElement("style");
    s.textContent = CSS;
    document.head.appendChild(s);
  }, []);

  const usedThemes = [...PLANNER.map(c => c.tema), ...generated.map(c => c.tema)];
  const nextDay = 30 + generated.length + 1;

  const fetchTrends = async () => {
    setLoadingTrends(true); setTrends([]); setSelTrends([]); setTrendsLoaded(false);
    const all = [];
    for (const src of FREE_SOURCES.filter(s => activeSrc.includes(s.id))) {
      try {
        if (src.url && src.parse) {
          src.parse(await fetch(src.url).then(r => r.json())).forEach(i => all.push(i));
        } else {
          const data = await fetch(`/api/trends?source=${src.id}&pilar=${encodeURIComponent(pilar)}&gatilho=${encodeURIComponent(gatilho)}&tema=${encodeURIComponent(temaInput)}`).then(r => r.json());
          (data.items || []).forEach(i => all.push(i));
        }
      } catch {}
    }
    const kw = ["ai", "artificial", "automat", "chatgpt", "llm", "gpt", "bot", "workflow", "crm", "whatsapp"];
    const filtered = all.filter(t => kw.some(k => (t.title + " " + t.snippet).toLowerCase().includes(k)));
    const top = (filtered.length > 3 ? filtered : all).sort((a, b) => (b.score || 0) - (a.score || 0)).slice(0, 15);
    try {
      const translatePrompt = `Traduza os títulos abaixo para português brasileiro de forma natural e direta. Retorne SOMENTE um array JSON com os títulos traduzidos na mesma ordem, sem explicações:\n${JSON.stringify(top.map(t => t.title))}`;
      const tRes = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ provider: "claude", model: "claude-sonnet-4-20250514", max_tokens: 1000, messages: [{ role: "user", content: translatePrompt }] }),
      });
      const tData = await tRes.json();
      const tText = tData.content?.map(b => b.text || "").join("") || "";
      const translated = JSON.parse(tText.replace(/```json|```/g, "").trim());
      const final = top.map((t, i) => ({ ...t, title: translated[i] || t.title }));
      setTrends(final);
    } catch {
      setTrends(top);
    }
    setTrendsLoaded(true);
    setLoadingTrends(false);
  };

  const generate = async () => {
    setLoading(true); setResult(null); setError("");
    const tCtx = selTrends.length
      ? `\n\nTENDÊNCIAS EM ALTA INTERNACIONAIS (use como inspiração e adapte para o contexto brasileiro de automação e IA):\n${selTrends.map(i => `- ${trends[i].title}`).join("\n")}`
      : "";
    const formatInstructions = {
      "REELS": `FORMATO REELS (vídeo narrado):\n- Roteiro narrado em voz: OBRIGATORIAMENTE entre 160 e 200 palavras\n- Estrutura: 1) Gancho impactante (2-3 frases), 2) Problema detalhado com dados ou história real (4-5 frases), 3) Solução com exemplos concretos (4-5 frases), 4) Prova social ou resultado (2-3 frases), 5) Fechamento poderoso (2 frases)\n- Use '...' para pausas dramáticas e perguntas retóricas\n- Linguagem conversacional, como se estivesse falando direto para a câmera`,
      "CARROSSEL": `FORMATO CARROSSEL INSTAGRAM (sequência de imagens):\n- Crie EXATAMENTE entre 6 e 8 slides\n- SLIDE 1 (Capa): Título impactante de no máximo 8 palavras que para o scroll. Subtítulo curto opcional.\n- SLIDES 2 a 6/7 (Conteúdo): Cada slide com UM ponto específico. Título curto (3-5 palavras) + texto de 2-3 linhas curtas. Os slides devem se conectar como uma história progressiva, cada um levando naturalmente ao próximo.\n- ÚLTIMO SLIDE (CTA): Frase de fechamento poderosa + chamada para ação direta\n- Use emojis estratégicos em cada slide\n- Formato do roteiro: "SLIDE 1: [título] | [texto]\\nSLIDE 2: [título] | [texto]\\n..." e assim por diante\n- Cada slide deve ter no máximo 25 palavras no total`,
      "POST FEED": `FORMATO POST FEED INSTAGRAM (imagem única):\n- TEXTO DA IMAGEM: frase principal de no máximo 10 palavras, impactante e direta, que funcione visualmente\n- LEGENDA: mínimo 8 linhas envolventes com storytelling ou dado relevante. Use emojis estratégicos. Quebre em parágrafos curtos. Termine sempre com 3-5 hashtags relevantes.\n- O roteiro deve conter: "IMAGEM: [texto da imagem]\\n\\nLEGENDA:\\n[legenda completa]"`,
    };
    const prompt = `Você é o melhor copywriter de marketing digital do Brasil, especialista em IA e automação para empresas.
Crie conteúdo COMPLETO e CRIATIVO para Lucas Bissoli da NexusIA. O conteúdo deve ser irresistível, provocador e gerar engajamento imediato no Instagram.

FORMATO: ${fmt}
PILAR: ${pilar}
GATILHO EMOCIONAL: ${gatilho}
${temaInput ? `TEMA: ${temaInput}` : ""}${tCtx}

INSTRUÇÕES DO FORMATO:
${formatInstructions[fmt]}

REGRAS GERAIS OBRIGATÓRIAS:
- Gancho nos primeiros 3 segundos — deve parar o scroll imediatamente
- Linguagem natural, brasileira, direta e envolvente
- Nunca seja genérico — seja específico, surpreendente e memorável
- Use dados reais, analogias poderosas ou provocações quando possível

TEMAS JÁ USADOS — CRIE ALGO COMPLETAMENTE DIFERENTE:
${usedThemes.map((t, i) => `${i + 1}. ${t}`).join("\n")}

Responda SOMENTE JSON válido sem markdown:
{"tema":"...","gancho":"...","gatilho":"${gatilho}","pilar":"${pilar}","roteiro":"...","legenda":"...","cta":"..."}`;
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ provider, model: "claude-haiku-4-5-20251001", max_tokens: 1200, messages: [{ role: "user", content: prompt }] }),
      });
      const data = await res.json();
      if (data.error) { setError("Erro da API: " + (data.error.message || JSON.stringify(data.error))); setLoading(false); return; }
      if (!data.content || !data.content.length) { setError("Resposta vazia. Verifique sua chave de API."); setLoading(false); return; }
      const rawText = data.content?.map(b => b.text || "").join("") || data.choices?.[0]?.message?.content || "";
      let parsed;
      try {
        const clean = rawText.replace(/```json|```/g, "").trim();
        const jsonMatch = clean.match(/\{[\s\S]*\}/);
        if (!jsonMatch) throw new Error("sem JSON");
        parsed = JSON.parse(jsonMatch[0]);
      } catch {
        try {
          const extract = (field) => {
            const m = rawText.match(new RegExp(`"${field}"\\s*:\\s*"([\\s\\S]*?)"(?=\\s*,\\s*"|\\s*\\})`));
            return m ? m[1].replace(/\\n/g, "\n") : "";
          };
          parsed = { tema: extract("tema"), gancho: extract("gancho"), gatilho: extract("gatilho") || gatilho, pilar: extract("pilar") || pilar, roteiro: extract("roteiro"), legenda: extract("legenda"), cta: extract("cta") };
          if (!parsed.tema) throw new Error("extração falhou");
        } catch {
          setError("Formato inválido na resposta. Tente usar o modelo Claude.");
          setLoading(false);
          return;
        }
      }
      parsed.day = nextDay; parsed.fmt = fmt; parsed.date = new Date().toLocaleDateString("pt-BR");
      if (selTrends.length) parsed.trendBased = true;
      const list = [parsed, ...generated];
      setGenerated(list); await store("nexusia_v7", list); setResult(parsed);
    } catch (e) {
      setError("Erro ao gerar roteiro. Tente novamente.");
    }
    setLoading(false);
  };

  const copyItem = (item, id) => {
    navigator.clipboard.writeText(`📌 DIA ${item.day} — ${item.fmt || item.format}\n\n🎯 TEMA:\n${item.tema}\n\n🪝 GANCHO:\n${item.gancho}\n\n⚡ GATILHO: ${item.gatilho}\n\n🎬 ROTEIRO:\n${item.roteiro}\n\n📝 LEGENDA:\n${item.legenda}\n\n📣 CTA:\n${item.cta}`);
    setCopied(id); setTimeout(() => setCopied(null), 2000);
  };

  const delGen = async (i) => {
    const l = generated.filter((_, x) => x !== i);
    setGenerated(l); await store("nexusia_v7", l);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f5f5f7", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
      <header style={{ background: "rgba(255,255,255,.9)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(0,0,0,.06)", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 28px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg,#6366f1,#8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(99,102,241,.3)" }}>
              <span style={{ color: "#fff", fontWeight: 800, fontSize: 16 }}>N</span>
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 17, color: "#111", letterSpacing: "-0.4px" }}>NexusIA</div>
              <div style={{ fontSize: 10, color: "#9ca3af", letterSpacing: "1.2px", textTransform: "uppercase" }}>Agente de Conteúdo</div>
            </div>
          </div>
          <nav style={{ display: "flex", gap: 2, background: "#f5f5f7", borderRadius: 12, padding: 4 }}>
            {[["gerar", "Gerar"], ["historico", "Histórico"], ["planner", "Planner 30D"], ["reels", "Reels 30D"]].map(([id, label]) => (
              <button key={id} className="tab-btn" onClick={() => setTab(id)} style={{ background: tab === id ? "#fff" : "transparent", color: tab === id ? "#6366f1" : "#6b7280", boxShadow: tab === id ? "0 1px 4px rgba(0,0,0,.1)" : "none" }}>{label}</button>
            ))}
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#f5f5f7", borderRadius: 10, padding: "7px 14px" }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", animation: "pulse 2s infinite" }} />
            <span style={{ fontSize: 13, color: "#374151", fontWeight: 500 }}>
              <strong style={{ color: "#6366f1" }}>{usedThemes.length}</strong> temas · dia <strong style={{ color: "#6366f1" }}>{nextDay}</strong>
            </span>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: 1160, margin: "0 auto", padding: "32px 28px" }}>

        {tab === "gerar" && (
          <div className="fade-in" style={{ display: "grid", gridTemplateColumns: "350px 1fr", gap: 20, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div className="card fade-up" style={{ padding: 28 }}>
                <div style={{ marginBottom: 24 }}>
                  <h2 style={{ fontWeight: 800, fontSize: 21, color: "#111", letterSpacing: "-0.5px" }}>Novo Roteiro</h2>
                  <p style={{ fontSize: 13, color: "#9ca3af", marginTop: 3 }}>Configure e gere conteúdo único</p>
                </div>
                <Label>Formato</Label>
                <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
                  {FORMATS.map(f => (
                    <button key={f} onClick={() => setFmt(f)} style={{ flex: 1, padding: "9px 0", borderRadius: 11, border: `2px solid ${fmt === f ? FMT[f].color : "#e5e7eb"}`, background: fmt === f ? FMT[f].bg : "#fafafa", color: fmt === f ? FMT[f].color : "#9ca3af", fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 10, cursor: "pointer", transition: "all .15s", transform: fmt === f ? "scale(1.02)" : "scale(1)" }}>{f}</button>
                  ))}
                </div>
                <Label>Pilar de Conteúdo</Label>
                <select className="input-field" value={pilar} onChange={e => setPilar(e.target.value)} style={{ marginBottom: 16 }}>
                  {PILLARS.map(p => <option key={p}>{p}</option>)}
                </select>
                <Label>Gatilho Emocional</Label>
                <select className="input-field" value={gatilho} onChange={e => setGatilho(e.target.value)} style={{ marginBottom: 16 }}>
                  {TRIGGERS.map(t => <option key={t}>{t}</option>)}
                </select>
                <Label>Tema sugerido <span style={{ color: "#d1d5db", fontWeight: 400 }}>(opcional)</span></Label>
                <input className="input-field" value={temaInput} onChange={e => setTemaInput(e.target.value)} placeholder="ex: IA para pet shops..." style={{ marginBottom: 20 }} />
                {selTrends.length > 0 && (
                  <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#f0fdf4", border: "1.5px solid #bbf7d0", borderRadius: 10, padding: "10px 14px", marginBottom: 18 }}>
                    <span style={{ fontSize: 16 }}>✅</span>
                    <span style={{ fontSize: 13, color: "#166534", fontWeight: 600 }}>{selTrends.length} tendência{selTrends.length > 1 ? "s" : ""} incorporada{selTrends.length > 1 ? "s" : ""}</span>
                  </div>
                )}
                <Label>Modelo de IA</Label>
                <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
                  {[["claude", "IA Nexus Uno"], ["openai", "IA Nexus Due"]].map(([id, label]) => (
                    <button key={id} onClick={() => setProvider(id)} style={{ flex: 1, padding: "9px 0", borderRadius: 11, border: `2px solid ${provider === id ? "#6366f1" : "#e5e7eb"}`, background: provider === id ? "#eef2ff" : "#fafafa", color: provider === id ? "#6366f1" : "#9ca3af", fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 11, cursor: "pointer", transition: "all .15s" }}>{label}</button>
                  ))}
                </div>
                <button className="btn-primary" onClick={generate} disabled={loading}>
                  {loading
                    ? <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
                        <span style={{ width: 16, height: 16, border: "2.5px solid rgba(255,255,255,.3)", borderTop: "2.5px solid #fff", borderRadius: "50%", display: "inline-block", animation: "spin 1s linear infinite" }} />
                        Gerando roteiro...
                      </span>
                    : "▶  Gerar Roteiro"}
                </button>
                {error && <p style={{ color: "#ef4444", fontSize: 13, marginTop: 10 }}>{error}</p>}
              </div>

              <div className="card fade-up" style={{ padding: 24, animationDelay: ".05s" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: 15, color: "#111" }}>📡 Tendências Agora</h3>
                    <p style={{ fontSize: 11, color: "#9ca3af", marginTop: 2 }}>Google News · Dev.to — 100% grátis</p>
                  </div>
                  <button onClick={fetchTrends} disabled={loadingTrends} style={{ padding: "7px 14px", borderRadius: 10, border: "none", background: loadingTrends ? "#e5e7eb" : "linear-gradient(135deg,#6366f1,#8b5cf6)", color: loadingTrends ? "#9ca3af" : "#fff", fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 12, cursor: loadingTrends ? "not-allowed" : "pointer" }}>
                    {loadingTrends ? "..." : "🔄 Buscar"}
                  </button>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
                  {FREE_SOURCES.map(s => (
                    <button key={s.id} className={`source-chip${activeSrc.includes(s.id) ? " active" : ""}`} onClick={() => setActiveSrc(p => p.includes(s.id) ? p.filter(x => x !== s.id) : [...p, s.id])}>
                      {s.emoji} {s.label}
                    </button>
                  ))}
                </div>
                {!trendsLoaded && !loadingTrends && (
                  <div style={{ textAlign: "center", padding: "22px 0" }}>
                    <div style={{ fontSize: 32, marginBottom: 8 }}>📡</div>
                    <div style={{ fontSize: 13, color: "#9ca3af" }}>Selecione as fontes e clique em Buscar</div>
                  </div>
                )}
                {trends.length > 0 && (
                  <div>
                    <p style={{ fontSize: 12, color: "#9ca3af", marginBottom: 10 }}>Selecione para incorporar no roteiro:</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 7, maxHeight: 300, overflowY: "auto" }}>
                      {trends.map((t, i) => (
                        <div key={i} className={`trend-item${selTrends.includes(i) ? " selected" : ""}`} onClick={() => setSelTrends(p => p.includes(i) ? p.filter(x => x !== i) : [...p, i])}>
                          <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                            <div style={{ width: 18, height: 18, borderRadius: 5, border: `2px solid ${selTrends.includes(i) ? "#6366f1" : "#d1d5db"}`, background: selTrends.includes(i) ? "#6366f1" : "transparent", flexShrink: 0, marginTop: 1, display: "flex", alignItems: "center", justifyContent: "center", transition: "all .15s" }}>
                              {selTrends.includes(i) && <span style={{ color: "#fff", fontSize: 10, fontWeight: 700 }}>✓</span>}
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <span style={{ fontSize: 10, color: "#6366f1", fontWeight: 700 }}>{t.source}</span>
                              <div style={{ fontWeight: 600, fontSize: 12, color: "#111", lineHeight: 1.35, marginTop: 1 }}>{t.title}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {selTrends.length > 0 && <button onClick={() => setSelTrends([])} style={{ marginTop: 8, background: "none", border: "none", color: "#9ca3af", fontSize: 12, cursor: "pointer", fontFamily: "inherit" }}>✕ Limpar seleção</button>}
                  </div>
                )}
              </div>
            </div>

            <div className={`card${result ? " pop-in" : " fade-up"}`} style={{ padding: 32, minHeight: 420, overflowY: "auto", maxHeight: 780, animationDelay: ".08s", background: result ? "#fff" : "#fafafa", border: result ? "1px solid rgba(0,0,0,.06)" : "2px dashed #e5e7eb", boxShadow: result ? "0 1px 2px rgba(0,0,0,.04),0 4px 24px rgba(0,0,0,.05)" : "none" }}>
              {!result && !loading && (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", minHeight: 360, textAlign: "center" }}>
                  <div style={{ width: 72, height: 72, borderRadius: 24, background: "linear-gradient(135deg,#eef2ff,#f5f3ff)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18, fontSize: 30 }}>✍️</div>
                  <h3 style={{ fontWeight: 700, fontSize: 18, color: "#374151" }}>Pronto para criar</h3>
                  <p style={{ fontSize: 13, color: "#9ca3af", marginTop: 6 }}>Configure, busque tendências e clique em Gerar</p>
                </div>
              )}
              {loading && (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", minHeight: 360, textAlign: "center" }}>
                  <div style={{ position: "relative", width: 64, height: 64, marginBottom: 24 }}>
                    <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "3px solid #eef2ff" }} />
                    <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "3px solid transparent", borderTopColor: "#6366f1", animation: "spin 1s linear infinite" }} />
                    <div style={{ position: "absolute", inset: 8, borderRadius: "50%", border: "2px solid transparent", borderTopColor: "#a78bfa", animation: "spin .7s linear infinite reverse" }} />
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: 18, color: "#111" }}>Criando roteiro único...</h3>
                  <p style={{ fontSize: 13, color: "#9ca3af", marginTop: 6 }}>{selTrends.length > 0 ? `Incorporando ${selTrends.length} tendência(s)` : `Analisando ${usedThemes.length} temas já usados`}</p>
                </div>
              )}
              {result && !loading && <ResultCard item={result} onCopy={() => copyItem(result, "r")} copied={copied === "r"} />}
            </div>
          </div>
        )}

        {tab === "historico" && (
          <div className="fade-in">
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontWeight: 800, fontSize: 26, color: "#111", letterSpacing: "-0.5px" }}>Roteiros Gerados</h2>
              <p style={{ color: "#9ca3af", fontSize: 14, marginTop: 4 }}>{generated.length} roteiro{generated.length !== 1 ? "s" : ""} no histórico</p>
            </div>
            {generated.length === 0 ? (
              <div style={{ textAlign: "center", padding: "80px 0" }}>
                <div style={{ fontSize: 52, marginBottom: 16 }}>📂</div>
                <h3 style={{ fontWeight: 700, fontSize: 18, color: "#9ca3af" }}>Histórico vazio</h3>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {generated.map((item, i) => (
                  <div key={i} className="card fade-up" style={{ padding: "22px 26px", animationDelay: `${i * .04}s` }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 12 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <div style={{ width: 44, height: 44, borderRadius: 13, background: "linear-gradient(135deg,#6366f1,#8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <span style={{ color: "#fff", fontWeight: 800, fontSize: 13 }}>{item.day}</span>
                        </div>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: 15, color: "#111" }}>{item.tema}</div>
                          <div style={{ display: "flex", gap: 6, marginTop: 5 }}>
                            <span style={{ fontSize: 10, color: FMT[item.fmt]?.color || "#6b7280", background: FMT[item.fmt]?.bg || "#f3f4f6", padding: "2px 8px", borderRadius: 6, fontWeight: 700 }}>{item.fmt}</span>
                            {item.trendBased && <span style={{ fontSize: 10, color: "#7c3aed", background: "#f5f3ff", padding: "2px 8px", borderRadius: 6, fontWeight: 700 }}>📡 Trend</span>}
                            <span style={{ fontSize: 11, color: "#9ca3af" }}>{item.date}</span>
                          </div>
                        </div>
                      </div>
                      <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                        <button className={`copy-btn${copied === `h${i}` ? " copied" : ""}`} onClick={() => copyItem(item, `h${i}`)}>{copied === `h${i}` ? "✓ Copiado" : "Copiar"}</button>
                        <button onClick={() => delGen(i)} style={{ background: "none", border: "none", color: "#d1d5db", fontSize: 20, cursor: "pointer", lineHeight: 1, padding: "0 4px" }}>×</button>
                      </div>
                    </div>
                    <p style={{ color: "#f97316", fontSize: 13, fontStyle: "italic", marginBottom: 10 }}>"{item.gancho}"</p>
                    <button onClick={() => setExpanded(expanded === i ? null : i)} style={{ background: "none", border: "none", color: "#6366f1", fontFamily: "inherit", fontWeight: 700, fontSize: 12, cursor: "pointer", padding: 0 }}>
                      {expanded === i ? "▾ Fechar" : "▸ Ver roteiro completo"}
                    </button>
                    {expanded === i && (
                      <div className="fade-up" style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid #f3f4f6" }}>
                        <ResultCard item={item} onCopy={() => copyItem(item, `he${i}`)} copied={copied === `he${i}`} compact />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "reels" && (
          <div className="fade-in">
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontWeight: 800, fontSize: 26, color: "#111", letterSpacing: "-0.5px" }}>🎬 Reels 30 Dias</h2>
              <p style={{ color: "#9ca3af", fontSize: 14, marginTop: 4 }}>3 reels por dia · 70% Empresas · 30% Saúde · Clique para ver o roteiro</p>
              <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#6366f1", background: "#eef2ff", padding: "4px 12px", borderRadius: 8, fontWeight: 700 }}>🏢 EMPRESAS</div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#059669", background: "#ecfdf5", padding: "4px 12px", borderRadius: 8, fontWeight: 700 }}>🏥 SAÚDE</div>
                <div style={{ fontSize: 12, color: "#9ca3af", padding: "4px 12px" }}>{Object.keys(reelsDone).filter(k => reelsDone[k]).length} / {REELS_PLANNER.reduce((a, d) => a + d.reels.length, 0)} gravados</div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {REELS_PLANNER.map((diaObj) => (
                <div key={diaObj.dia} className="card fade-up" style={{ overflow: "hidden" }}>
                  <div style={{ padding: "16px 22px", background: "linear-gradient(135deg,#f9fafb,#f3f4f6)", borderBottom: "1px solid #f3f4f6", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 38, height: 38, borderRadius: 11, background: "linear-gradient(135deg,#6366f1,#8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ color: "#fff", fontWeight: 800, fontSize: 14 }}>{diaObj.dia}</span>
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 15, color: "#111" }}>Dia {diaObj.dia}</div>
                        <div style={{ fontSize: 11, color: "#9ca3af" }}>{diaObj.reels.length} reels · {diaObj.reels.filter((r, idx) => reelsDone[`${diaObj.dia}-${idx}`]).length} gravados</div>
                      </div>
                    </div>
                    <button onClick={() => setReelsOpen(reelsOpen === diaObj.dia ? null : diaObj.dia)} style={{ background: "none", border: "none", color: "#6366f1", fontSize: 20, cursor: "pointer" }}>
                      {reelsOpen === diaObj.dia ? "▾" : "▸"}
                    </button>
                  </div>
                  {reelsOpen === diaObj.dia && (
                    <div className="fade-up" style={{ padding: "20px 22px", display: "flex", flexDirection: "column", gap: 20 }}>
                      {diaObj.reels.map((reel, idx) => {
                        const key = `${diaObj.dia}-${idx}`;
                        const done = reelsDone[key];
                        return (
                          <div key={idx} style={{ border: `2px solid ${done ? "#bbf7d0" : reel.seg === "EMPRESAS" ? "#e0e7ff" : "#d1fae5"}`, borderRadius: 16, padding: 20, background: done ? "#f0fdf4" : "#fafafa", transition: "all .2s" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                                <span style={{ fontSize: 10, fontWeight: 700, color: reel.seg === "EMPRESAS" ? "#6366f1" : "#059669", background: reel.seg === "EMPRESAS" ? "#eef2ff" : "#ecfdf5", padding: "3px 10px", borderRadius: 7 }}>{reel.seg === "EMPRESAS" ? "🏢" : "🏥"} {reel.seg}</span>
                                <span style={{ fontSize: 10, color: "#9ca3af", background: "#f3f4f6", padding: "3px 10px", borderRadius: 7 }}>{reel.pub}</span>
                              </div>
                              <button onClick={() => setReelsDone(p => ({ ...p, [key]: !p[key] }))} style={{ padding: "6px 14px", borderRadius: 10, border: `2px solid ${done ? "#22c55e" : "#e5e7eb"}`, background: done ? "#f0fdf4" : "#fff", color: done ? "#16a34a" : "#9ca3af", fontFamily: "inherit", fontWeight: 700, fontSize: 11, cursor: "pointer", transition: "all .15s", whiteSpace: "nowrap" }}>
                                {done ? "✅ Gravado" : "○ Marcar"}
                              </button>
                            </div>
                            <div style={{ fontWeight: 800, fontSize: 17, color: "#111", marginBottom: 10, letterSpacing: "-0.3px" }}>{reel.tema}</div>
                            <div style={{ background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: 10, padding: "10px 14px", marginBottom: 12 }}>
                              <div style={{ fontSize: 10, fontWeight: 700, color: "#9ca3af", marginBottom: 4 }}>🪝 GANCHO</div>
                              <p style={{ fontSize: 13, color: "#92400e", fontStyle: "italic", lineHeight: 1.5 }}>"{reel.gancho}"</p>
                            </div>
                            <div style={{ marginBottom: 12 }}>
                              <div style={{ fontSize: 10, fontWeight: 700, color: "#9ca3af", marginBottom: 6 }}>🎬 ROTEIRO</div>
                              <div style={{ background: "#f9fafb", borderRadius: 10, padding: "12px 14px" }}>
                                <p style={{ fontSize: 13, color: "#374151", whiteSpace: "pre-wrap", lineHeight: 1.8 }}>{reel.roteiro}</p>
                              </div>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                              <div style={{ background: "#f0fdf4", borderRadius: 10, padding: "10px 14px" }}>
                                <div style={{ fontSize: 10, fontWeight: 700, color: "#9ca3af", marginBottom: 4 }}>📹 DICAS</div>
                                <p style={{ fontSize: 12, color: "#374151", lineHeight: 1.5 }}>{reel.dicas}</p>
                              </div>
                              <div style={{ background: "#eef2ff", borderRadius: 10, padding: "10px 14px" }}>
                                <div style={{ fontSize: 10, fontWeight: 700, color: "#9ca3af", marginBottom: 4 }}>📣 CTA</div>
                                <p style={{ fontSize: 12, color: "#4338ca", fontWeight: 600, lineHeight: 1.5 }}>{reel.cta}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "planner" && (
          <div className="fade-in">
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontWeight: 800, fontSize: 26, color: "#111", letterSpacing: "-0.5px" }}>Planner 30 Dias</h2>
              <p style={{ color: "#9ca3af", fontSize: 14, marginTop: 4 }}>Clique em qualquer dia para ver o roteiro completo</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {PLANNER.map((item, i) => (
                <div key={item.day} className="planner-row fade-up" style={{ animationDelay: `${i * .02}s`, borderColor: plannerOpen === item.day ? FMT[item.format]?.color : "transparent" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "13px 18px", cursor: "pointer" }} onClick={() => setPlannerOpen(plannerOpen === item.day ? null : item.day)}>
                    <div style={{ width: 34, height: 34, borderRadius: 9, background: plannerOpen === item.day ? `linear-gradient(135deg,${FMT[item.format]?.color},${FMT[item.format]?.color}99)` : "#f5f5f7", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all .2s" }}>
                      <span style={{ fontWeight: 800, fontSize: 12, color: plannerOpen === item.day ? "#fff" : "#9ca3af" }}>{item.day}</span>
                    </div>
                    <span style={{ fontSize: 10, color: FMT[item.format]?.color, background: FMT[item.format]?.bg, padding: "3px 9px", borderRadius: 7, fontWeight: 700, flexShrink: 0 }}>{item.format}</span>
                    <span style={{ fontWeight: 600, fontSize: 14, color: "#111", flex: 1 }}>{item.tema}</span>
                    <span style={{ color: plannerOpen === item.day ? FMT[item.format]?.color : "#d1d5db", fontSize: 16, flexShrink: 0 }}>{plannerOpen === item.day ? "▾" : "▸"}</span>
                  </div>
                  {plannerOpen === item.day && (
                    <div className="fade-up" style={{ padding: "0 18px 22px", borderTop: "1px solid #f9fafb" }}>
                      <div style={{ paddingTop: 18, display: "flex", justifyContent: "flex-end", marginBottom: 14 }}>
                        <button className={`copy-btn${copied === `p${item.day}` ? " copied" : ""}`} onClick={() => copyItem(item, `p${item.day}`)}>
                          {copied === `p${item.day}` ? "✓ Copiado!" : "Copiar Roteiro"}
                        </button>
                      </div>
                      <ResultCard item={item} onCopy={() => copyItem(item, `pp${item.day}`)} copied={copied === `pp${item.day}`} compact />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}

function Label({ children }) {
  return <div style={{ fontWeight: 600, fontSize: 11, color: "#6b7280", letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: 8, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{children}</div>;
}

function ResultCard({ item, onCopy, copied, compact }) {
  const fk = item.fmt || item.format;
  return (
    <div>
      {!compact && (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 22, paddingBottom: 18, borderBottom: "1px solid #f3f4f6" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: 13, background: "linear-gradient(135deg,#6366f1,#8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontWeight: 800, fontSize: 14 }}>{item.day}</span>
            </div>
            <div>
              <span style={{ fontSize: 10, color: FMT[fk]?.color || "#6b7280", background: FMT[fk]?.bg || "#f3f4f6", padding: "2px 8px", borderRadius: 6, fontWeight: 700 }}>{fk}</span>
              {item.trendBased && <span style={{ fontSize: 10, color: "#7c3aed", background: "#f5f3ff", padding: "2px 8px", borderRadius: 6, fontWeight: 700, marginLeft: 6 }}>📡 Trend</span>}
            </div>
          </div>
          <button className={`copy-btn${copied ? " copied" : ""}`} onClick={onCopy}>{copied ? "✓ Copiado!" : "Copiar Tudo"}</button>
        </div>
      )}
      <h3 style={{ fontWeight: 800, fontSize: compact ? 16 : 22, color: "#111", letterSpacing: "-0.3px", lineHeight: 1.3, marginBottom: 14 }}>{item.tema}</h3>
      <div style={{ marginBottom: 16 }}>
        <Label>🪝 Gancho</Label>
        <p style={{ fontSize: 14, color: "#374151", fontStyle: "italic", lineHeight: 1.65, borderLeft: "3px solid #6366f1", paddingLeft: 12 }}>"{item.gancho}"</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 18 }}>
        <div style={{ background: "linear-gradient(135deg,#fef9c3,#fef3c7)", borderRadius: 12, padding: "11px 14px", border: "1px solid #fde68a" }}>
          <Label>⚡ Gatilho</Label>
          <p style={{ fontSize: 13, color: "#92400e", fontWeight: 600 }}>{item.gatilho}</p>
        </div>
        <div style={{ background: "linear-gradient(135deg,#ede9fe,#f5f3ff)", borderRadius: 12, padding: "11px 14px", border: "1px solid #ddd6fe" }}>
          <Label>📌 Pilar</Label>
          <p style={{ fontSize: 13, color: "#5b21b6", fontWeight: 600 }}>{item.pilar}</p>
        </div>
      </div>
      <div style={{ marginBottom: 16 }}>
        <Label>🎬 Roteiro</Label>
        <div style={{ background: "#fafafa", border: "1px solid #f3f4f6", borderRadius: 14, padding: 16 }}>
          <p style={{ fontSize: 13, color: "#374151", whiteSpace: "pre-wrap", lineHeight: 1.85 }}>{item.roteiro}</p>
        </div>
      </div>
      <div style={{ marginBottom: 16 }}>
        <Label>📝 Legenda</Label>
        <p style={{ fontSize: 13, color: "#374151", whiteSpace: "pre-wrap", lineHeight: 1.85 }}>{item.legenda}</p>
      </div>
      <div style={{ background: "linear-gradient(135deg,#eef2ff,#f5f3ff)", borderRadius: 14, padding: "14px 18px", border: "1px solid #c7d2fe" }}>
        <Label>📣 CTA</Label>
        <p style={{ fontWeight: 700, fontSize: 14, color: "#3730a3" }}>{item.cta}</p>
      </div>
    </div>
  );
}
