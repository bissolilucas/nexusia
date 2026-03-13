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

    // Traduz títulos para PT-BR
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
    const prompt = `Você é o melhor copywriter de marketing digital do Brasil, especialista em IA e automação para empresas.
Crie um roteiro COMPLETO e CRIATIVO para Lucas Bissoli da NexusIA. O conteúdo deve ser irresistível, provocador e gerar engajamento imediato.

FORMATO: ${fmt}
PILAR: ${pilar}
GATILHO EMOCIONAL: ${gatilho}
${temaInput ? `TEMA: ${temaInput}` : ""}${tCtx}

REGRAS OBRIGATÓRIAS:
- Gancho nos primeiros 3 segundos — deve parar o scroll imediatamente
- Use storytelling, dados reais, analogias poderosas ou provocações
- Linguagem natural, brasileira, como se estivesse conversando
- Nunca seja genérico — seja específico, surpreendente e memorável
- Terminar com CTA direto e irresistível
${fmt === "REELS" ? "- Roteiro narrado em voz: mínimo 150 palavras, máximo 180. Ritmo dinâmico, frases curtas e impactantes. Use pausas dramáticas com '...' e perguntas retóricas." : fmt === "CARROSSEL" ? "- Mínimo 7 slides. Cada slide com título impactante + 2-3 linhas de conteúdo rico. Progressão lógica que prende até o final." : "- Texto principal da imagem (máximo 10 palavras impactantes) + legenda completa e envolvente com mínimo 5 linhas."}

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

if (data.error) {
  setError("Erro da API: " + (data.error.message || JSON.stringify(data.error)));
  setLoading(false);
  return;
}

if (!data.content || !data.content.length) {
  setError("Resposta vazia. Verifique sua chave de API.");
  setLoading(false);
  return;
}

const text = data.content.map(b => b.text || "").join("");
let parsed;
try {
  const clean = text.replace(/```json|```/g, "").trim();
  const jsonMatch = clean.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error("sem JSON");
  parsed = JSON.parse(jsonMatch[0]);
} catch {
  try {
    // Tenta extrair campos manualmente se JSON quebrado
    const extract = (field) => {
      const m = text.match(new RegExp(`"${field}"\\s*:\\s*"([\\s\\S]*?)"(?=\\s*,\\s*"|\\s*\\})`));
      return m ? m[1].replace(/\\n/g, "\n") : "";
    };
    parsed = {
      tema: extract("tema"),
      gancho: extract("gancho"),
      gatilho: extract("gatilho") || gatilho,
      pilar: extract("pilar") || pilar,
      roteiro: extract("roteiro"),
      legenda: extract("legenda"),
      cta: extract("cta"),
    };
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
            {[["gerar", "Gerar"], ["historico", "Histórico"], ["planner", "Planner 30D"]].map(([id, label]) => (
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
                {[["claude", "Claude (Anthropic)"], ["openai", "ChatGPT (OpenAI)"]].map(([id, label]) => (
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
                    <p style={{ fontSize: 11, color: "#9ca3af", marginTop: 2 }}>Reddit · Dev.to · HN — 100% grátis</p>
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
                  <div style={{ textAlign: "center", padding: "22px 0", color: "#d1d5db" }}>
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
