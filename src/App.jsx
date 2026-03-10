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
const FORMAT_COLORS = { "REELS": "#f97316", "CARROSSEL": "#8b5cf6", "POST FEED": "#06b6d4" };
const FORMAT_BG = { "REELS": "#fff7ed", "CARROSSEL": "#f5f3ff", "POST FEED": "#ecfeff" };

const FREE_SOURCES = [
  { id: "reddit_ai", label: "Reddit r/artificial", emoji: "🤖", url: "https://www.reddit.com/r/artificial/hot.json?limit=10", parse: (d) => d.data.children.map(p => ({ source: "Reddit /r/artificial", title: p.data.title, snippet: p.data.selftext?.slice(0, 120) || "Discussão em alta", score: p.data.score })) },
  { id: "reddit_chatgpt", label: "Reddit r/ChatGPT", emoji: "💬", url: "https://www.reddit.com/r/ChatGPT/hot.json?limit=10", parse: (d) => d.data.children.map(p => ({ source: "Reddit /r/ChatGPT", title: p.data.title, snippet: p.data.selftext?.slice(0, 120) || "Discussão em alta", score: p.data.score })) },
  { id: "reddit_automation", label: "Reddit r/automation", emoji: "⚙️", url: "https://www.reddit.com/r/automation/hot.json?limit=10", parse: (d) => d.data.children.map(p => ({ source: "Reddit /r/automation", title: p.data.title, snippet: p.data.selftext?.slice(0, 120) || "Discussão em alta", score: p.data.score })) },
  { id: "devto", label: "Dev.to — IA & Tech", emoji: "👨‍💻", url: "https://dev.to/api/articles?tag=ai&per_page=10&top=7", parse: (d) => d.map(a => ({ source: "Dev.to", title: a.title, snippet: a.description || "", score: a.positive_reactions_count })) },
  { id: "hn", label: "Hacker News", emoji: "🔶", url: "https://hacker-news.firebaseio.com/v2/topstories.json?limitToFirst=20&orderBy=%22$key%22", parse: null },
];

async function store(key, val) { try { await window.storage.set(key, JSON.stringify(val)); } catch {} }
async function load(key, def) { try { const r = await window.storage.get(key); return r ? JSON.parse(r.value) : def; } catch { return def; } }

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
  const [selectedTrends, setSelectedTrends] = useState([]);
  const [loadingTrends, setLoadingTrends] = useState(false);
  const [trendsLoaded, setTrendsLoaded] = useState(false);
  const [activeSources, setActiveSources] = useState(["reddit_ai", "devto"]);

  useEffect(() => {
    load("nexusia_v6_gen", []).then(setGenerated);
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const usedThemes = [...PLANNER.map(c => c.tema), ...generated.map(c => c.tema)];
  const nextDay = 30 + generated.length + 1;

  const fetchTrends = async () => {
    setLoadingTrends(true);
    setTrends([]);
    setSelectedTrends([]);
    setTrendsLoaded(false);
    const all = [];

    for (const src of FREE_SOURCES.filter(s => activeSources.includes(s.id))) {
      try {
        if (src.id === "hn") {
          const ids = await fetch(src.url).then(r => r.json());
          const top = Array.isArray(ids) ? ids.slice(0, 12) : Object.values(ids).slice(0, 12);
          const items = await Promise.all(top.map(id => fetch(`https://hacker-news.firebaseio.com/v2/item/${id}.json`).then(r => r.json())));
          items.filter(i => i && i.title).forEach(i => {
            all.push({ source: "Hacker News", title: i.title, snippet: i.url || "", score: i.score || 0 });
          });
        } else {
          const data = await fetch(src.url).then(r => r.json());
          src.parse(data).forEach(i => all.push(i));
        }
      } catch (e) { console.log(src.id, e); }
    }

    // Filter AI/automation relevant
    const keywords = ["ai", "artificial intelligence", "automation", "chatgpt", "llm", "gpt", "machine learning", "bot", "workflow", "crm", "whatsapp", "atendimento", "ia ", "automat"];
    const filtered = all.filter(t => keywords.some(k => (t.title + " " + t.snippet).toLowerCase().includes(k)));
    const final = (filtered.length > 3 ? filtered : all).sort((a, b) => (b.score || 0) - (a.score || 0)).slice(0, 20);

    setTrends(final);
    setTrendsLoaded(true);
    setLoadingTrends(false);
  };

  const toggleSource = (id) => setActiveSources(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  const toggleTrend = (i) => setSelectedTrends(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);

  const generate = async () => {
    setLoading(true); setResult(null); setError("");
    const trendCtx = selectedTrends.length > 0
      ? `\n\nTENDÊNCIAS EM ALTA AGORA (use como base para tornar o roteiro atual e viral):\n${selectedTrends.map(i => `- [${trends[i].source}] ${trends[i].title}${trends[i].snippet ? ": " + trends[i].snippet.slice(0, 100) : ""}`).join("\n")}`
      : "";

    const prompt = `Você é especialista em marketing digital de Automação e IA para empresas brasileiras.
Crie roteiro COMPLETO (~60 segundos de fala) para Lucas Bissoli da NexusIA.

FORMATO: ${fmt} | PILAR: ${pilar} | GATILHO: ${gatilho}
${temaInput ? `TEMA SUGERIDO: ${temaInput}` : ""}${trendCtx}

TEMAS JÁ USADOS — NÃO REPETIR NENHUM:
${usedThemes.map((t, i) => `${i + 1}. ${t}`).join("\n")}

REGRAS:
- Tema 100% diferente dos acima
- Linguagem direta, impactante, brasileira
- Público: donos de empresa, gestores, empreendedores
- ${fmt === "REELS" ? "Roteiro narrado em voz, ~130-150 palavras (60s). Gancho forte, desenvolvimento, fechamento impactante." : fmt === "CARROSSEL" ? "Slides numerados com conteúdo detalhado de cada slide." : "Texto para imagem + legenda poderosa."}

Responda SOMENTE JSON válido sem markdown:
{"tema":"...","gancho":"...","gatilho":"${gatilho}","pilar":"${pilar}","roteiro":"...","legenda":"...","cta":"..."}`;

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 1200, messages: [{ role: "user", content: prompt }] }),
      });
      const data = await res.json();
      const text = data.content?.map(b => b.text || "").join("") || "";
      const parsed = JSON.parse(text.replace(/```json|```/g, "").trim());
      parsed.day = nextDay; parsed.fmt = fmt; parsed.date = new Date().toLocaleDateString("pt-BR");
      if (selectedTrends.length > 0) parsed.trendBased = true;
      const newList = [parsed, ...generated];
      setGenerated(newList); await store("nexusia_v6_gen", newList); setResult(parsed);
    } catch { setError("Erro ao gerar roteiro. Tente novamente."); }
    setLoading(false);
  };

  const copyItem = (item, id) => {
    navigator.clipboard.writeText(`📌 DIA ${item.day} — ${item.fmt || item.format}\n\n🎯 TEMA:\n${item.tema}\n\n🪝 GANCHO:\n${item.gancho}\n\n⚡ GATILHO: ${item.gatilho}\n\n🎬 ROTEIRO:\n${item.roteiro}\n\n📝 LEGENDA:\n${item.legenda}\n\n📣 CTA:\n${item.cta}`);
    setCopied(id); setTimeout(() => setCopied(null), 2000);
  };

  const delGenerated = async (i) => {
    const l = generated.filter((_, x) => x !== i);
    setGenerated(l); await store("nexusia_v6_gen", l);
  };

  const sy = { fontFamily: "'Syne', sans-serif" };
  const dm = { fontFamily: "'DM Sans', sans-serif" };

  return (
    <div style={{ minHeight: "100vh", background: "#f8f5f0", ...dm }}>
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -200, right: -200, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: -100, left: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 70%)" }} />
      </div>

      {/* HEADER */}
      <header style={{ position: "relative", zIndex: 10, background: "rgba(15,15,15,0.97)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 38, height: 38, borderRadius: 11, background: "linear-gradient(135deg,#10b981,#f97316)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontSize: 18, ...sy, fontWeight: 800 }}>N</span>
            </div>
            <div>
              <div style={{ ...sy, fontWeight: 800, fontSize: 18, color: "#fff", letterSpacing: -0.5 }}>NexusIA</div>
              <div style={{ fontSize: 10, color: "#6b7280", letterSpacing: 1.5, textTransform: "uppercase" }}>Agente de Conteúdo</div>
            </div>
          </div>
          <nav style={{ display: "flex", gap: 4, background: "#1a1a1a", borderRadius: 12, padding: 4 }}>
            {[["gerar","Gerar"],["historico","Histórico"],["planner","Planner 30D"]].map(([id, label]) => (
              <button key={id} onClick={() => setTab(id)} style={{ ...sy, fontWeight: tab === id ? 700 : 500, fontSize: 13, background: tab === id ? "linear-gradient(135deg,#10b981,#059669)" : "transparent", color: tab === id ? "#fff" : "#9ca3af", border: "none", borderRadius: 8, padding: "8px 18px", cursor: "pointer" }}>{label}</button>
            ))}
          </nav>
          <div style={{ fontSize: 12, color: "#4b5563" }}>
            <span style={{ color: "#10b981", fontWeight: 600 }}>{usedThemes.length}</span> temas · dia <span style={{ color: "#10b981", fontWeight: 600 }}>{nextDay}</span>
          </div>
        </div>
      </header>

      <main style={{ position: "relative", zIndex: 1, maxWidth: 1180, margin: "0 auto", padding: "32px" }}>

        {/* GERAR */}
        {tab === "gerar" && (
          <div style={{ display: "grid", gridTemplateColumns: "360px 1fr", gap: 24, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

              {/* Config */}
              <div style={{ background: "#fff", borderRadius: 24, padding: 28, boxShadow: "0 1px 3px rgba(0,0,0,0.05),0 8px 32px rgba(0,0,0,0.04)" }}>
                <h2 style={{ ...sy, fontWeight: 800, fontSize: 20, color: "#111", margin: "0 0 4px" }}>Novo Roteiro</h2>
                <p style={{ ...dm, color: "#9ca3af", fontSize: 13, margin: "0 0 24px" }}>Configure e gere conteúdo único</p>

                <Lbl sy={sy}>Formato</Lbl>
                <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
                  {FORMATS.map(f => <button key={f} onClick={() => setFmt(f)} style={{ flex: 1, padding: "9px 0", borderRadius: 10, border: `2px solid ${fmt === f ? FORMAT_COLORS[f] : "#e5e7eb"}`, background: fmt === f ? FORMAT_BG[f] : "#fafafa", color: fmt === f ? FORMAT_COLORS[f] : "#9ca3af", ...sy, fontWeight: 700, fontSize: 10, cursor: "pointer" }}>{f}</button>)}
                </div>

                <Lbl sy={sy}>Pilar</Lbl>
                <select value={pilar} onChange={e => setPilar(e.target.value)} style={sel(dm)}>{PILLARS.map(p => <option key={p}>{p}</option>)}</select>

                <Lbl sy={sy}>Gatilho</Lbl>
                <select value={gatilho} onChange={e => setGatilho(e.target.value)} style={sel(dm)}>{TRIGGERS.map(t => <option key={t}>{t}</option>)}</select>

                <Lbl sy={sy}>Tema sugerido <span style={{ color: "#d1d5db", fontWeight: 400 }}>(opcional)</span></Lbl>
                <input value={temaInput} onChange={e => setTemaInput(e.target.value)} placeholder="ex: IA para pet shops..." style={{ ...sel(dm), marginBottom: 20 }} />

                {selectedTrends.length > 0 && (
                  <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 10, padding: "10px 14px", marginBottom: 16, fontSize: 13, color: "#166534" }}>
                    ✅ <strong>{selectedTrends.length}</strong> tendência{selectedTrends.length > 1 ? "s" : ""} incorporada{selectedTrends.length > 1 ? "s" : ""}
                  </div>
                )}

                <button onClick={generate} disabled={loading} style={{ width: "100%", padding: 15, borderRadius: 14, border: "none", background: loading ? "#e5e7eb" : "linear-gradient(135deg,#10b981,#059669)", color: loading ? "#9ca3af" : "#fff", ...sy, fontWeight: 800, fontSize: 15, cursor: loading ? "not-allowed" : "pointer", boxShadow: loading ? "none" : "0 4px 20px rgba(16,185,129,0.3)" }}>
                  {loading ? "Gerando roteiro..." : "▶  Gerar Roteiro"}
                </button>
                {error && <div style={{ color: "#ef4444", fontSize: 13, marginTop: 10 }}>{error}</div>}
              </div>

              {/* Trends — FREE ONLY */}
              <div style={{ background: "#fff", borderRadius: 24, padding: 28, boxShadow: "0 1px 3px rgba(0,0,0,0.05),0 8px 32px rgba(0,0,0,0.04)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                  <div>
                    <h3 style={{ ...sy, fontWeight: 800, fontSize: 16, color: "#111", margin: 0 }}>📡 Tendências Gratuitas</h3>
                    <p style={{ ...dm, fontSize: 12, color: "#9ca3af", margin: "3px 0 0" }}>Reddit · Dev.to · Hacker News — 100% grátis</p>
                  </div>
                  <button onClick={fetchTrends} disabled={loadingTrends} style={{ padding: "8px 14px", borderRadius: 10, border: "none", background: loadingTrends ? "#e5e7eb" : "linear-gradient(135deg,#6366f1,#8b5cf6)", color: loadingTrends ? "#9ca3af" : "#fff", ...sy, fontWeight: 700, fontSize: 12, cursor: loadingTrends ? "not-allowed" : "pointer", flexShrink: 0 }}>
                    {loadingTrends ? "..." : "🔄 Buscar"}
                  </button>
                </div>

                {/* Source toggles */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
                  {FREE_SOURCES.map(s => (
                    <button key={s.id} onClick={() => toggleSource(s.id)} style={{ padding: "4px 10px", borderRadius: 8, border: `1px solid ${activeSources.includes(s.id) ? "#6366f1" : "#e5e7eb"}`, background: activeSources.includes(s.id) ? "#eef2ff" : "#fafafa", color: activeSources.includes(s.id) ? "#4338ca" : "#9ca3af", fontSize: 11, ...sy, fontWeight: 600, cursor: "pointer" }}>
                      {s.emoji} {s.label}
                    </button>
                  ))}
                </div>

                {!trendsLoaded && !loadingTrends && (
                  <div style={{ textAlign: "center", padding: "20px 0", color: "#d1d5db" }}>
                    <div style={{ fontSize: 28, marginBottom: 8 }}>📡</div>
                    <div style={{ fontSize: 13 }}>Selecione as fontes e clique em Buscar</div>
                    <div style={{ fontSize: 11, color: "#e5e7eb", marginTop: 4 }}>Sem custo · Sem cadastro · Atualizado agora</div>
                  </div>
                )}

                {loadingTrends && (
                  <div style={{ textAlign: "center", padding: "20px 0" }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", border: "3px solid #e5e7eb", borderTop: "3px solid #8b5cf6", margin: "0 auto 10px", animation: "spin 1s linear infinite" }} />
                    <div style={{ fontSize: 13, color: "#9ca3af" }}>Buscando tendências gratuitas...</div>
                  </div>
                )}

                {trends.length > 0 && (
                  <div>
                    <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 10 }}>Selecione para usar no roteiro:</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 7, maxHeight: 320, overflowY: "auto" }}>
                      {trends.map((t, i) => (
                        <div key={i} onClick={() => toggleTrend(i)} style={{ padding: "10px 12px", borderRadius: 10, border: `2px solid ${selectedTrends.includes(i) ? "#10b981" : "#f3f4f6"}`, background: selectedTrends.includes(i) ? "#f0fdf4" : "#fafafa", cursor: "pointer" }}>
                          <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                            <div style={{ width: 16, height: 16, borderRadius: 4, border: `2px solid ${selectedTrends.includes(i) ? "#10b981" : "#d1d5db"}`, background: selectedTrends.includes(i) ? "#10b981" : "transparent", flexShrink: 0, marginTop: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
                              {selectedTrends.includes(i) && <span style={{ color: "#fff", fontSize: 9 }}>✓</span>}
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{ fontSize: 10, color: "#8b5cf6", ...sy, fontWeight: 700, marginBottom: 2 }}>{t.source}</div>
                              <div style={{ ...sy, fontWeight: 600, fontSize: 12, color: "#111", lineHeight: 1.3 }}>{t.title}</div>
                              {t.snippet && <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 2, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical" }}>{t.snippet}</div>}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {selectedTrends.length > 0 && <button onClick={() => setSelectedTrends([])} style={{ marginTop: 8, background: "none", border: "none", color: "#9ca3af", fontSize: 12, cursor: "pointer", padding: 0 }}>✕ Limpar seleção</button>}
                  </div>
                )}

                {trendsLoaded && trends.length === 0 && (
                  <div style={{ textAlign: "center", padding: "12px 0", color: "#9ca3af", fontSize: 13 }}>
                    Nenhuma tendência relevante encontrada agora. Tente novamente.
                  </div>
                )}
              </div>
            </div>

            {/* Result */}
            <div style={{ background: result ? "#fff" : "#fafafa", borderRadius: 24, padding: 32, boxShadow: result ? "0 1px 3px rgba(0,0,0,0.05),0 8px 32px rgba(0,0,0,0.04)" : "none", border: result ? "none" : "2px dashed #e5e7eb", minHeight: 420, overflowY: "auto", maxHeight: 780 }}>
              {!result && !loading && (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", minHeight: 380, textAlign: "center" }}>
                  <div style={{ width: 72, height: 72, borderRadius: 22, background: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18, fontSize: 32 }}>✍️</div>
                  <div style={{ ...sy, fontWeight: 700, fontSize: 18, color: "#9ca3af" }}>Pronto para criar</div>
                  <div style={{ fontSize: 13, color: "#d1d5db", marginTop: 6 }}>Configure, busque tendências e clique em Gerar</div>
                </div>
              )}
              {loading && (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", minHeight: 380, textAlign: "center" }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", border: "3px solid #e5e7eb", borderTop: "3px solid #10b981", marginBottom: 20, animation: "spin 1s linear infinite" }} />
                  <div style={{ ...sy, fontWeight: 700, fontSize: 18, color: "#374151" }}>Criando roteiro único...</div>
                  <div style={{ fontSize: 13, color: "#9ca3af", marginTop: 6 }}>
                    {selectedTrends.length > 0 ? `Com ${selectedTrends.length} tendência(s) real(is) incorporada(s)` : `Analisando ${usedThemes.length} temas já usados`}
                  </div>
                </div>
              )}
              {result && !loading && <ResultCard item={result} onCopy={() => copyItem(result, "r")} copied={copied === "r"} sy={sy} dm={dm} />}
            </div>
          </div>
        )}

        {/* HISTÓRICO */}
        {tab === "historico" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ ...sy, fontWeight: 800, fontSize: 26, color: "#111", margin: 0 }}>Roteiros Gerados</h2>
              <p style={{ color: "#9ca3af", fontSize: 14, margin: "4px 0 0" }}>{generated.length} roteiro{generated.length !== 1 ? "s" : ""} no histórico</p>
            </div>
            {generated.length === 0 ? (
              <div style={{ textAlign: "center", padding: "80px 0" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>📂</div>
                <div style={{ ...sy, fontWeight: 700, fontSize: 18, color: "#9ca3af" }}>Histórico vazio</div>
              </div>
            ) : generated.map((item, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 20, padding: "22px 26px", boxShadow: "0 1px 3px rgba(0,0,0,0.04)", marginBottom: 12 }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 42, height: 42, borderRadius: 12, background: "linear-gradient(135deg,#10b981,#059669)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: "#fff", ...sy, fontWeight: 800, fontSize: 13 }}>{item.day}</span>
                    </div>
                    <div>
                      <div style={{ ...sy, fontWeight: 700, fontSize: 15, color: "#111" }}>{item.tema}</div>
                      <div style={{ display: "flex", gap: 6, marginTop: 4 }}>
                        <span style={{ fontSize: 10, color: FORMAT_COLORS[item.fmt], background: FORMAT_BG[item.fmt], padding: "2px 7px", borderRadius: 6, ...sy, fontWeight: 700 }}>{item.fmt}</span>
                        {item.trendBased && <span style={{ fontSize: 10, color: "#8b5cf6", background: "#f5f3ff", padding: "2px 7px", borderRadius: 6, ...sy, fontWeight: 700 }}>📡 Trend</span>}
                        <span style={{ fontSize: 11, color: "#9ca3af" }}>{item.date}</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button onClick={() => copyItem(item, `h${i}`)} style={{ padding: "6px 12px", borderRadius: 8, border: `1px solid ${copied === `h${i}` ? "#10b981" : "#e5e7eb"}`, background: copied === `h${i}` ? "#f0fdf4" : "#fff", color: copied === `h${i}` ? "#10b981" : "#6b7280", ...sy, fontWeight: 700, fontSize: 11, cursor: "pointer" }}>{copied === `h${i}` ? "✓" : "Copiar"}</button>
                    <button onClick={() => delGenerated(i)} style={{ background: "none", border: "none", color: "#d1d5db", fontSize: 18, cursor: "pointer" }}>×</button>
                  </div>
                </div>
                <div style={{ color: "#f97316", fontSize: 13, fontStyle: "italic", marginBottom: 8 }}>"{item.gancho}"</div>
                <button onClick={() => setExpanded(expanded === i ? null : i)} style={{ background: "none", border: "none", color: "#10b981", ...sy, fontWeight: 700, fontSize: 12, cursor: "pointer", padding: 0 }}>
                  {expanded === i ? "▾ Fechar" : "▸ Ver roteiro completo"}
                </button>
                {expanded === i && (
                  <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid #f3f4f6" }}>
                    <ResultCard item={item} onCopy={() => copyItem(item, `he${i}`)} copied={copied === `he${i}`} sy={sy} dm={dm} compact />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* PLANNER */}
        {tab === "planner" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ ...sy, fontWeight: 800, fontSize: 26, color: "#111", margin: 0 }}>Planner 30 Dias</h2>
              <p style={{ color: "#9ca3af", fontSize: 14, margin: "4px 0 0" }}>Clique em qualquer dia para ver o roteiro completo</p>
            </div>
            {PLANNER.map(item => (
              <div key={item.day} style={{ background: "#fff", borderRadius: 16, overflow: "hidden", marginBottom: 8, border: `2px solid ${plannerOpen === item.day ? FORMAT_COLORS[item.format] : "transparent"}`, transition: "border 0.2s" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "13px 18px", cursor: "pointer" }} onClick={() => setPlannerOpen(plannerOpen === item.day ? null : item.day)}>
                  <div style={{ width: 34, height: 34, borderRadius: 9, background: plannerOpen === item.day ? FORMAT_COLORS[item.format] : "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ ...sy, fontWeight: 800, fontSize: 12, color: plannerOpen === item.day ? "#fff" : "#9ca3af" }}>{item.day}</span>
                  </div>
                  <span style={{ fontSize: 10, color: FORMAT_COLORS[item.format], background: FORMAT_BG[item.format], padding: "3px 9px", borderRadius: 7, ...sy, fontWeight: 700, flexShrink: 0 }}>{item.format}</span>
                  <span style={{ ...sy, fontWeight: 600, fontSize: 14, color: "#111", flex: 1 }}>{item.tema}</span>
                  <span style={{ color: plannerOpen === item.day ? FORMAT_COLORS[item.format] : "#d1d5db", fontSize: 16 }}>{plannerOpen === item.day ? "▾" : "▸"}</span>
                </div>
                {plannerOpen === item.day && (
                  <div style={{ padding: "0 18px 22px", borderTop: "1px solid #f9fafb" }}>
                    <div style={{ paddingTop: 18, display: "flex", justifyContent: "flex-end", marginBottom: 14 }}>
                      <button onClick={() => copyItem(item, `p${item.day}`)} style={{ padding: "7px 16px", borderRadius: 9, border: `1px solid ${copied === `p${item.day}` ? "#10b981" : "#e5e7eb"}`, background: copied === `p${item.day}` ? "#f0fdf4" : "#fff", color: copied === `p${item.day}` ? "#10b981" : "#6b7280", ...sy, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                        {copied === `p${item.day}` ? "✓ Copiado!" : "Copiar Roteiro"}
                      </button>
                    </div>
                    <ResultCard item={item} onCopy={() => copyItem(item, `pp${item.day}`)} copied={copied === `pp${item.day}`} sy={sy} dm={dm} compact />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
      <style>{`@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}*{box-sizing:border-box}select{appearance:none}`}</style>
    </div>
  );
}

const sel = (dm) => ({ width: "100%", padding: "11px 14px", borderRadius: 12, border: "2px solid #e5e7eb", background: "#fafafa", color: "#374151", ...dm, fontSize: 14, outline: "none", cursor: "pointer", marginBottom: 18 });
function Lbl({ children, sy }) { return <div style={{ ...sy, fontWeight: 600, fontSize: 11, color: "#6b7280", letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>{children}</div>; }

function ResultCard({ item, onCopy, copied, sy, dm, compact }) {
  const fk = item.fmt || item.format;
  return (
    <div>
      {!compact && (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, paddingBottom: 16, borderBottom: "1px solid #f3f4f6" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: "linear-gradient(135deg,#10b981,#059669)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", ...sy, fontWeight: 800, fontSize: 13 }}>{item.day}</span>
            </div>
            <div>
              <span style={{ fontSize: 11, color: FORMAT_COLORS[fk] || "#6b7280", background: FORMAT_BG[fk] || "#f3f4f6", padding: "2px 8px", borderRadius: 6, ...sy, fontWeight: 700 }}>{fk}</span>
              {item.trendBased && <span style={{ fontSize: 11, color: "#8b5cf6", background: "#f5f3ff", padding: "2px 8px", borderRadius: 6, ...sy, fontWeight: 700, marginLeft: 6 }}>📡 Trend</span>}
            </div>
          </div>
          <button onClick={onCopy} style={{ padding: "8px 18px", borderRadius: 10, border: `1px solid ${copied ? "#10b981" : "#e5e7eb"}`, background: copied ? "#f0fdf4" : "#fff", color: copied ? "#10b981" : "#6b7280", ...sy, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
            {copied ? "✓ Copiado!" : "Copiar Tudo"}
          </button>
        </div>
      )}
      <div style={{ ...sy, fontWeight: 800, fontSize: compact ? 15 : 21, color: "#111", lineHeight: 1.3, marginBottom: 14 }}>{item.tema}</div>
      <div style={{ marginBottom: 16 }}>
        <div style={{ ...sy, fontWeight: 700, fontSize: 10, color: "#9ca3af", letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>🪝 Gancho</div>
        <div style={{ fontSize: 14, color: "#374151", fontStyle: "italic", lineHeight: 1.6 }}>"{item.gancho}"</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
        <div style={{ background: "#fef3c7", borderRadius: 11, padding: "11px 13px" }}><div style={{ ...sy, fontWeight: 700, fontSize: 10, color: "#92400e", letterSpacing: 1, textTransform: "uppercase", marginBottom: 3 }}>⚡ Gatilho</div><div style={{ fontSize: 13, color: "#78350f" }}>{item.gatilho}</div></div>
        <div style={{ background: "#ede9fe", borderRadius: 11, padding: "11px 13px" }}><div style={{ ...sy, fontWeight: 700, fontSize: 10, color: "#5b21b6", letterSpacing: 1, textTransform: "uppercase", marginBottom: 3 }}>📌 Pilar</div><div style={{ fontSize: 13, color: "#4c1d95" }}>{item.pilar}</div></div>
      </div>
      {[["🎬 Roteiro", item.roteiro, true], ["📝 Legenda", item.legenda, true]].map(([label, val, pre]) => (
        <div key={label} style={{ marginBottom: 16 }}>
          <div style={{ ...sy, fontWeight: 700, fontSize: 10, color: "#9ca3af", letterSpacing: 1, textTransform: "uppercase", marginBottom: 7 }}>{label}</div>
          <div style={{ fontSize: 13, color: "#374151", whiteSpace: pre ? "pre-wrap" : "normal", lineHeight: 1.8, background: label.includes("Roteiro") ? "#fafafa" : "transparent", padding: label.includes("Roteiro") ? 14 : 0, borderRadius: label.includes("Roteiro") ? 11 : 0 }}>{val}</div>
        </div>
      ))}
      <div style={{ background: "linear-gradient(135deg,#f0fdf4,#dcfce7)", borderRadius: 13, padding: "13px 16px", border: "1px solid #bbf7d0" }}>
        <div style={{ ...sy, fontWeight: 700, fontSize: 10, color: "#166534", letterSpacing: 1, textTransform: "uppercase", marginBottom: 5 }}>📣 CTA</div>
        <div style={{ fontWeight: 600, fontSize: 14, color: "#14532d" }}>{item.cta}</div>
      </div>
    </div>
  );
}
