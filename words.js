const WORD_NAMES = `Abundância,Acolhedor,Alarde,Alheio,Alicerce,Aliado,Altruísta,Ameaçador,Âmago,Angústia,Ansiedade,Antecipar,Apatia,Apogeu,Aprimorar,Árduo,Arrogância,Assertividade,Astúcia,Audaz,Auge,Autêntico,Autonomia,Autossabotagem,Avassalador,Banal,Benevolente,Bizarro,Bravura,Brilhante,Brusco,Cativante,Cauteloso,Célebre,Cético,Cínico,Clareza,Clichê,Coerente,Coincidência,Colossal,Comovente,Compaixão,Complacente,Compreensão,Conceder,Conciso,Conflito,Consequência,Constante,Contagioso,Contraditório,Contundente,Convicção,Corrupto,Crucial,Cúmplice,Curiosidade,Decepcionante,Decisivo,Dedicação,Definitivo,Delicado,Desafiador,Desapego,Desastroso,Desconfiança,Desconforto,Desespero,Deslumbrante,Desolador,Desprezo,Destemido,Destreza,Devoção,Dilema,Dinâmico,Drástico,Efêmero,Eficaz,Eloquente,Empatia,Empenho,Engenhoso,Enigma,Enigmático,Entusiasmo,Envolvente,Equivalente,Esclarecer,Essencial,Espontâneo,Estratégia,Euforia,Evidente,Exausto,Excepcional,Excêntrico,Êxito,Expectativa,Extraordinário,Fascinante,Fictício,Fiel,Foco,Forasteiro,Formidável,Frágil,Frenético,Frustrado,Fugaz,Furioso,Fútil,Genuíno,Gentil,Gesto,Grandioso,Gratidão,Hábito,Harmonia,Heroico,Hesitar,Hipócrita,Hipótese,Honra,Hostil,Humor,Identidade,Idôneo,Ilusão,Imediato,Imenso,Iminente,Impacto,Imparável,Imparcial,Impecável,Imperceptível,Implacável,Imponente,Imprescindível,Imprudente,Impulsivo,Ímpeto,Inabalável,Inacreditável,Incalculável,Incessante,Inconsciente,Indeciso,Indiferente,Indispensável,Inédito,Inerente,Inesperado,Inevitável,Infame,Influência,Injustiça,Inocente,Inovador,Inspirador,Instinto,Íntegro,Intenso,Intolerante,Intrépido,Intrincado,Intrigante,Introspecção,Intuição,Inusitado,Inventivo,Invisível,Irônico,Irreversível,Jornada,Jovial,Julgamento,Lealdade,Legado,Lógica,Lúcido,Lúdico,Magnânimo,Majestoso,Mágoa,Maravilhoso,Medíocre,Melancólico,Memorável,Mérito,Meticuloso,Minucioso,Misterioso,Monumental,Motivação,Nocivo,Nostalgia,Notável,Nuança,Obcecado,Obscuro,Obsoleto,Obstáculo,Oculto,Ofegante,Oportuno,Opressivo,Orgulho,Original,Otimista,Otimizar,Ousadia,Pacato,Pânico,Patético,Peculiar,Perene,Perspicaz,Persuasivo,Péssimo,Pioneiro,Plácido,Plausível,Polêmico,Ponderar,Poupar,Pragmático,Precioso,Preconceito,Prepotente,Previsível,Privilégio,Proatividade,Procrastinação,Propício,Propósito,Provisório,Radical,Rancor,Rebelde,Receio,Recíproco,Reconhecimento,Redenção,Reflexão,Relevante,Relutante,Repentino,Resiliência,Respeito,Ressalva,Retaliar,Revelação,Rigidez,Rigoroso,Romper,Sagaz,Sarcasmo,Satisfação,Selvagem,Sensato,Sereno,Significativo,Sincero,Solene,Sombrio,Sublime,Substituir,Sufocante,Sugestão,Supérfluo,Superficial,Supremo,Suspeito,Sussurro,Sutil,Tangível,Tenaz,Tensão,Terrível,Tolerante,Traição,Transformação,Trágico,Triunfo,Trivial,Unânime,Vazio,Verossímil,Versátil,Vigente,Vigoroso,Vingança,Virtude,Visão,Vislumbre,Vívido,Zelo`.split(",");

const DEFINITIONS = {
  "Abundância":["Grande quantidade; existência além do necessário.","fartura, riqueza, profusão"],"Acolhedor":["Que recebe com carinho e faz alguém se sentir bem.","hospitaleiro, afetuoso, receptivo"],"Alarde":["Divulgação ruidosa ou exagerada de alguma coisa.","ostentação, anúncio, rumor"],"Alheio":["Que não participa ou não percebe o que acontece.","distante, desatento, estranho"],"Alicerce":["Base que sustenta uma construção ou uma ideia.","fundamento, base, sustentação"],"Aliado":["Quem se une a outro em favor de um objetivo.","parceiro, companheiro, apoiador"],"Altruísta":["Que age pensando no bem de outras pessoas.","generoso, solidário, abnegado"],"Âmago":["Parte mais profunda ou essencial de algo.","essência, núcleo, íntimo"],"Apatia":["Falta de interesse, emoção ou disposição.","indiferença, desânimo, passividade"],"Apogeu":["Ponto mais alto de desenvolvimento ou sucesso.","auge, ápice, culminância"],"Aprimorar":["Tornar algo melhor ou mais perfeito.","aperfeiçoar, melhorar, refinar"],"Árduo":["Que exige muito esforço para ser realizado.","difícil, trabalhoso, penoso"],"Assertividade":["Capacidade de se expressar com clareza e respeito.","firmeza, objetividade, segurança"],"Astúcia":["Habilidade de perceber e resolver situações com esperteza.","sagacidade, esperteza, perspicácia"],"Audaz":["Que enfrenta riscos com coragem.","ousado, valente, destemido"],"Autêntico":["Que é verdadeiro e fiel à própria natureza.","genuíno, legítimo, verdadeiro"],"Autonomia":["Capacidade de agir e decidir por conta própria.","independência, liberdade, autogoverno"],"Banal":["Comum e sem originalidade ou importância.","trivial, corriqueiro, vulgar"],"Benevolente":["Que demonstra bondade e boa vontade.","bondoso, generoso, indulgente"],"Bravura":["Coragem diante do perigo ou da dificuldade.","valentia, heroísmo, ousadia"],"Cativante":["Que encanta e prende a atenção.","encantador, atraente, envolvente"],"Cauteloso":["Que age com cuidado para evitar riscos.","prudente, precavido, cuidadoso"],"Cético":["Que tende a duvidar antes de acreditar.","descrente, desconfiado, questionador"],"Clareza":["Qualidade do que é fácil de compreender.","nitidez, lucidez, transparência"],"Coerente":["Que apresenta lógica e harmonia entre suas partes.","lógico, consistente, compatível"],"Compaixão":["Sensibilidade ao sofrimento alheio e desejo de ajudar.","empatia, piedade, solidariedade"],"Conciso":["Que expressa muito usando poucas palavras.","breve, sucinto, resumido"],"Convicção":["Certeza firme a respeito de uma ideia.","certeza, crença, confiança"],"Crucial":["Extremamente importante para um resultado.","essencial, decisivo, fundamental"],"Curiosidade":["Desejo de conhecer, descobrir ou compreender.","interesse, investigação, vontade"],"Dedicação":["Empenho constante aplicado a uma atividade.","esforço, devoção, compromisso"],"Desapego":["Capacidade de abrir mão sem dependência excessiva.","desprendimento, renúncia, liberdade"],"Destemido":["Que não se deixa dominar pelo medo.","corajoso, intrépido, valente"],"Destreza":["Habilidade e agilidade para realizar algo.","perícia, habilidade, agilidade"],"Dilema":["Situação que exige escolher entre alternativas difíceis.","impasse, dúvida, escolha"],"Dinâmico":["Que apresenta movimento, energia ou mudanças.","ativo, ágil, enérgico"],"Efêmero":["Que dura por pouco tempo.","breve, passageiro, fugaz"],"Eficaz":["Que produz o resultado esperado.","eficiente, efetivo, útil"],"Eloquente":["Que se expressa de modo claro e convincente.","expressivo, persuasivo, convincente"],"Empatia":["Capacidade de compreender sentimentos de outra pessoa.","compreensão, sintonia, sensibilidade"],"Engenhoso":["Que encontra soluções criativas e inteligentes.","inventivo, habilidoso, criativo"],"Enigma":["Algo difícil de entender ou explicar.","mistério, incógnita, segredo"],"Entusiasmo":["Grande animação e interesse por alguma coisa.","empolgação, fervor, alegria"],"Essencial":["Absolutamente necessário; o que forma a essência.","fundamental, indispensável, básico"],"Estratégia":["Plano organizado para alcançar um objetivo.","plano, método, tática"],"Euforia":["Sensação intensa de alegria e entusiasmo.","exaltação, entusiasmo, animação"],"Êxito":["Resultado favorável; objetivo alcançado.","sucesso, triunfo, vitória"],"Foco":["Concentração da atenção em um objetivo.","atenção, alvo, concentração"],"Fugaz":["Que passa ou desaparece rapidamente.","efêmero, breve, passageiro"],"Genuíno":["Que é verdadeiro, puro e sem falsidade.","autêntico, legítimo, sincero"],"Gratidão":["Reconhecimento por um benefício recebido.","agradecimento, reconhecimento, apreço"],"Hábito":["Comportamento repetido com frequência.","costume, rotina, prática"],"Harmonia":["Combinação equilibrada e agradável entre partes.","equilíbrio, concórdia, sintonia"],"Hipótese":["Explicação provisória que precisa ser verificada.","suposição, teoria, possibilidade"],"Ímpeto":["Impulso forte e repentino para agir.","impulso, vigor, arroubo"],"Íntegro":["Que age com honestidade e princípios.","honesto, correto, incorruptível"],"Intrépido":["Que enfrenta perigos sem hesitar.","destemido, corajoso, audaz"],"Introspecção":["Observação atenta dos próprios pensamentos e sentimentos.","reflexão, autoanálise, interiorização"],"Intuição":["Compreensão imediata sem raciocínio consciente.","pressentimento, percepção, instinto"],"Jornada":["Caminho percorrido, real ou de desenvolvimento pessoal.","viagem, percurso, trajetória"],"Lealdade":["Fidelidade aos compromissos e às pessoas.","fidelidade, constância, dedicação"],"Legado":["Aquilo que alguém deixa para as gerações futuras.","herança, contribuição, patrimônio"],"Lúcido":["Que pensa e percebe com clareza.","claro, consciente, sensato"],"Magnânimo":["Muito generoso, capaz de perdoar e agir com grandeza.","generoso, nobre, benevolente"],"Mérito":["Qualidade ou ação que merece reconhecimento.","valor, merecimento, virtude"],"Meticuloso":["Que presta muita atenção aos menores detalhes.","minucioso, cuidadoso, rigoroso"],"Nostalgia":["Saudade ligada a lembranças do passado.","saudade, melancolia, lembrança"],"Nuança":["Pequena diferença de tom, sentido ou opinião.","matiz, gradação, sutileza"],"Obsoleto":["Que deixou de ser útil ou atual.","ultrapassado, antiquado, desatualizado"],"Otimizar":["Melhorar algo para obter o melhor resultado possível.","aperfeiçoar, potencializar, melhorar"],"Perene":["Que permanece por muito tempo ou continuamente.","duradouro, permanente, eterno"],"Perspicaz":["Que percebe e compreende rapidamente.","sagaz, atento, astuto"],"Plausível":["Que parece razoável ou possível de ser verdadeiro.","aceitável, crível, provável"],"Ponderar":["Examinar com atenção antes de decidir.","considerar, refletir, avaliar"],"Pragmático":["Que valoriza soluções práticas e resultados concretos.","prático, objetivo, realista"],"Proatividade":["Iniciativa para agir antes que seja necessário pedir.","iniciativa, antecipação, dinamismo"],"Procrastinação":["Ato de adiar tarefas ou decisões.","adiamento, demora, postergação"],"Propósito":["Razão ou objetivo que orienta uma ação.","objetivo, intenção, finalidade"],"Recíproco":["Que ocorre ou é oferecido de ambas as partes.","mútuo, correspondente, bilateral"],"Resiliência":["Capacidade de se recuperar e adaptar após dificuldades.","superação, resistência, adaptação"],"Ressalva":["Observação que limita ou faz uma exceção.","restrição, reserva, condição"],"Sagaz":["Que compreende situações com rapidez e inteligência.","perspicaz, astuto, esperto"],"Sarcasmo":["Ironia intensa usada para criticar ou provocar.","ironia, zombaria, deboche"],"Sensato":["Que age com equilíbrio e bom julgamento.","prudente, razoável, ajuizado"],"Sereno":["Que demonstra calma e tranquilidade.","calmo, tranquilo, sossegado"],"Sublime":["De beleza ou grandeza extraordinária.","magnífico, elevado, esplêndido"],"Sutil":["Delicado ou difícil de perceber imediatamente.","leve, discreto, tênue"],"Tangível":["Que pode ser tocado ou percebido concretamente.","concreto, palpável, real"],"Tenaz":["Que persiste com firmeza diante de obstáculos.","persistente, firme, obstinado"],"Trivial":["Muito comum, simples ou pouco importante.","banal, comum, corriqueiro"],"Verossímil":["Que tem aparência de verdade; que parece possível.","plausível, crível, provável"],"Versátil":["Que se adapta bem a diferentes funções.","adaptável, flexível, multifuncional"],"Virtude":["Qualidade moral positiva demonstrada nas ações.","mérito, bondade, excelência"],"Vívido":["Muito intenso, claro ou cheio de vida.","intenso, brilhante, marcante"],"Zelo":["Cuidado atento e dedicação por algo ou alguém.","cuidado, dedicação, atenção"]
};

// Complemento editorial: conceito curto, sinônimos e antônimos adequados à faixa etária.
const EXTRA_ENTRIES = `
Ameaçador|Que indica perigo ou intenção de causar medo.|intimidador, assustador|tranquilizador, acolhedor
Angústia|Sensação intensa de aflição, aperto ou preocupação.|aflição, agonia|alívio, tranquilidade
Ansiedade|Inquietação causada pela expectativa de algo futuro.|apreensão, nervosismo|calma, serenidade
Antecipar|Fazer ou perceber algo antes do momento esperado.|adiantar, prever|adiar, retardar
Arrogância|Atitude de quem se considera superior aos outros.|soberba, prepotência|humildade, modéstia
Auge|Momento de maior intensidade, sucesso ou desenvolvimento.|ápice, apogeu|declínio, queda
Autossabotagem|Ações próprias que dificultam alcançar um objetivo.|autoboicote, bloqueio|autoconfiança, progresso
Avassalador|Tão intenso que parece dominar ou superar tudo.|devastador, arrebatador|moderado, suave
Bizarro|Muito estranho ou fora do comum.|esquisito, incomum|normal, habitual
Brilhante|Que possui brilho ou demonstra grande inteligência.|luminoso, genial|opaco, medíocre
Brusco|Repentino ou realizado de maneira pouco delicada.|abrupto, ríspido|suave, delicado
Célebre|Muito conhecido e admirado por muitas pessoas.|famoso, notável|desconhecido, anônimo
Cínico|Que demonstra desprezo por valores ou age com falsidade.|dissimulado, insolente|sincero, íntegro
Clichê|Ideia ou expressão repetida que perdeu a originalidade.|chavão, lugar-comum|novidade, originalidade
Coincidência|Encontro inesperado de acontecimentos semelhantes.|acaso, casualidade|planejamento, intenção
Colossal|De tamanho, força ou importância extraordinários.|gigantesco, imenso|minúsculo, pequeno
Comovente|Que desperta emoção profunda ou ternura.|emocionante, tocante|indiferente, insensível
Complacente|Que aceita ou perdoa com facilidade excessiva.|tolerante, indulgente|exigente, rigoroso
Compreensão|Capacidade de entender ideias, situações ou pessoas.|entendimento, percepção|confusão, incompreensão
Conceder|Dar, permitir ou reconhecer algo solicitado.|oferecer, permitir|negar, recusar
Conflito|Oposição entre ideias, interesses ou pessoas.|desacordo, confronto|acordo, harmonia
Consequência|Resultado produzido por uma ação ou acontecimento.|efeito, resultado|causa, origem
Constante|Que permanece ou se repete sem grandes interrupções.|contínuo, persistente|instável, ocasional
Contagioso|Que pode passar entre pessoas, inclusive uma emoção.|transmissível, comunicável|isolado, contido
Contraditório|Que apresenta ideias ou afirmações incompatíveis.|incoerente, oposto|coerente, compatível
Contundente|Expresso com força, clareza e poder de convencer.|incisivo, firme|vago, hesitante
Corrupto|Que age de modo desonesto em benefício próprio.|desonesto, fraudulento|íntegro, honesto
Cúmplice|Quem participa ou colabora secretamente com uma ação.|parceiro, colaborador|opositor, denunciante
Decepcionante|Que não corresponde ao que se esperava.|frustrante, desanimador|satisfatório, animador
Decisivo|Que determina ou influencia fortemente um resultado.|determinante, crucial|irrelevante, secundário
Definitivo|Que resolve algo de modo final ou permanente.|final, permanente|provisório, temporário
Delicado|Que exige cuidado ou demonstra suavidade.|sensível, suave|bruto, resistente
Desafiador|Que exige esforço, habilidade ou coragem.|difícil, estimulante|fácil, simples
Desastroso|Que causa grande prejuízo ou termina muito mal.|catastrófico, terrível|bem-sucedido, favorável
Desconfiança|Dúvida sobre a honestidade ou segurança de algo.|suspeita, receio|confiança, certeza
Desconforto|Sensação física ou emocional de incômodo.|incômodo, mal-estar|conforto, bem-estar
Desespero|Aflição extrema acompanhada de perda de esperança.|agonia, desânimo|esperança, serenidade
Deslumbrante|Tão belo ou impressionante que causa admiração.|fascinante, magnífico|apagado, comum
Desolador|Que provoca profunda tristeza ou sensação de abandono.|devastador, triste|animador, reconfortante
Desprezo|Falta de consideração ou respeito por alguém.|desdém, rejeição|respeito, apreço
Devoção|Dedicação profunda a alguém, a uma causa ou crença.|dedicação, veneração|desinteresse, indiferença
Drástico|Muito intenso, severo ou capaz de produzir grande mudança.|radical, extremo|moderado, suave
Empenho|Esforço e dedicação empregados para alcançar algo.|dedicação, esforço|descaso, preguiça
Enigmático|Difícil de compreender ou cercado de mistério.|misterioso, obscuro|claro, evidente
Envolvente|Que desperta e mantém o interesse ou a atenção.|cativante, atraente|monótono, desinteressante
Equivalente|Que possui valor, função ou significado semelhante.|igual, correspondente|diferente, desigual
Esclarecer|Tornar uma informação mais clara e compreensível.|explicar, elucidar|confundir, ocultar
Espontâneo|Que acontece naturalmente, sem obrigação ou ensaio.|natural, voluntário|forçado, planejado
Evidente|Tão claro que pode ser percebido facilmente.|óbvio, manifesto|duvidoso, oculto
Exausto|Extremamente cansado e sem energia.|esgotado, fatigado|descansado, disposto
Excepcional|Que se destaca muito por fugir do comum.|extraordinário, excelente|comum, medíocre
Excêntrico|Que apresenta comportamento muito diferente do habitual.|extravagante, incomum|convencional, comum
Expectativa|Esperança ou previsão sobre o que poderá acontecer.|espera, perspectiva|indiferença, surpresa
Extraordinário|Muito acima do comum em qualidade ou intensidade.|excepcional, incrível|comum, ordinário
Fascinante|Que desperta grande encanto, curiosidade ou admiração.|encantador, cativante|tedioso, desinteressante
Fictício|Criado pela imaginação, sem existência real.|imaginário, inventado|real, verdadeiro
Fiel|Que mantém lealdade a alguém ou a um compromisso.|leal, constante|desleal, infiel
Forasteiro|Pessoa que veio de outro lugar e não pertence à região.|estrangeiro, visitante|nativo, morador
Formidável|Que causa grande admiração por ser excelente.|magnífico, extraordinário|péssimo, medíocre
Frágil|Que pode quebrar, sofrer dano ou se abalar facilmente.|delicado, vulnerável|forte, resistente
Frenético|Muito agitado, acelerado ou intenso.|agitado, alucinado|calmo, sereno
Frustrado|Decepcionado por não alcançar o que desejava.|decepcionado, contrariado|satisfeito, realizado
Furioso|Dominado por raiva muito intensa.|enfurecido, irado|calmo, sereno
Fútil|Com pouca importância ou profundidade.|superficial, banal|relevante, profundo
Gentil|Que trata os outros com educação e bondade.|amável, cortês|grosseiro, hostil
Gesto|Movimento ou atitude que expressa uma intenção ou sentimento.|sinal, atitude|imobilidade, omissão
Grandioso|Que impressiona por sua grandeza ou importância.|magnífico, majestoso|modesto, pequeno
Heroico|Que demonstra coragem extraordinária diante do perigo.|valente, corajoso|covarde, medroso
Hesitar|Demorar a agir por dúvida, medo ou indecisão.|vacilar, titubear|decidir, avançar
Hipócrita|Que demonstra sentimentos ou valores que não pratica.|falso, dissimulado|sincero, autêntico
Honra|Princípio ligado à dignidade, honestidade e respeito.|dignidade, integridade|desonra, vergonha
Hostil|Que demonstra agressividade ou falta de acolhimento.|agressivo, inimigo|amigável, acolhedor
Humor|Estado de espírito ou capacidade de perceber o cômico.|ânimo, comicidade|seriedade, mau humor
Identidade|Conjunto de características que torna alguém único.|individualidade, essência|anonimato, semelhança
Idôneo|Que merece confiança por agir com honestidade.|honesto, íntegro|desonesto, corrupto
Ilusão|Percepção ou esperança que não corresponde à realidade.|engano, fantasia|realidade, verdade
Imediato|Que acontece sem demora ou está muito próximo.|instantâneo, próximo|tardio, distante
Imenso|De tamanho, quantidade ou intensidade muito grandes.|enorme, vasto|pequeno, reduzido
Iminente|Que está prestes a acontecer.|próximo, imediato|distante, improvável
Impacto|Efeito forte causado por um choque, ação ou notícia.|efeito, repercussão|indiferença, suavidade
Imparável|Que não pode ser detido ou interrompido.|incontrolável, persistente|contido, interrompido
Imparcial|Que julga sem favorecer nenhum dos lados.|neutro, justo|parcial, tendencioso
Impecável|Sem erro, defeito ou descuido perceptível.|perfeito, irrepreensível|defeituoso, falho
Imperceptível|Tão discreto que quase não pode ser percebido.|invisível, sutil|evidente, perceptível
Implacável|Que não cede nem demonstra tolerância.|inflexível, rigoroso|tolerante, flexível
Imponente|Que inspira respeito ou admiração pela grandeza.|majestoso, grandioso|insignificante, modesto
Imprescindível|Tão necessário que não pode ser dispensado.|essencial, indispensável|dispensável, supérfluo
Imprudente|Que age sem considerar os riscos ou consequências.|descuidado, precipitado|prudente, cauteloso
Impulsivo|Que age rapidamente, sem refletir o suficiente.|precipitado, espontâneo|ponderado, cauteloso
Inabalável|Que permanece firme mesmo diante de dificuldades.|firme, resistente|frágil, instável
Inacreditável|Tão surpreendente que parece difícil de acreditar.|incrível, extraordinário|comum, previsível
Incalculável|Tão grande ou complexo que não pode ser calculado.|imensurável, infinito|calculável, limitado
Incessante|Que não para nem sofre interrupção.|contínuo, constante|interrompido, ocasional
Inconsciente|Sem percepção do que ocorre ou sem reflexão consciente.|desatento, adormecido|consciente, atento
Indeciso|Que encontra dificuldade para fazer uma escolha.|hesitante, inseguro|decidido, resoluto
Indiferente|Que não demonstra interesse, preferência ou emoção.|apático, insensível|interessado, sensível
Indispensável|Absolutamente necessário para determinada finalidade.|essencial, imprescindível|dispensável, desnecessário
Inédito|Que ainda não havia sido apresentado ou publicado.|novo, original|conhecido, publicado
Inerente|Que faz parte da natureza essencial de algo.|intrínseco, próprio|externo, separado
Inesperado|Que acontece sem ter sido previsto.|imprevisto, surpreendente|esperado, previsto
Inevitável|Que não pode ser impedido ou evitado.|certo, incontornável|evitável, incerto
Infame|Conhecido por ações ruins e merecedor de reprovação.|desonrado, vergonhoso|honrado, admirável
Influência|Capacidade de afetar decisões, ações ou pensamentos.|poder, interferência|impotência, neutralidade
Injustiça|Falta de respeito à igualdade, aos direitos ou ao mérito.|desigualdade, abuso|justiça, equidade
Inocente|Que não tem culpa ou não possui malícia.|inculpado, ingênuo|culpado, malicioso
Inovador|Que apresenta ideias, métodos ou soluções novas.|criativo, pioneiro|tradicional, ultrapassado
Inspirador|Que desperta vontade, coragem ou boas ideias.|motivador, estimulante|desanimador, frustrante
Instinto|Reação natural que ocorre sem aprendizado ou reflexão.|impulso, intuição|raciocínio, cálculo
Intenso|Que apresenta muita força, energia ou profundidade.|forte, profundo|fraco, suave
Intolerante|Que não aceita diferenças de opinião ou comportamento.|inflexível, rígido|tolerante, compreensivo
Intrincado|Muito complexo, cheio de partes ou difícil de resolver.|complicado, emaranhado|simples, claro
Intrigante|Que desperta curiosidade e vontade de descobrir.|curioso, misterioso|óbvio, desinteressante
Inusitado|Diferente do esperado; pouco comum.|incomum, surpreendente|habitual, previsível
Inventivo|Que possui facilidade para criar ideias e soluções.|criativo, engenhoso|repetitivo, pouco criativo
Invisível|Que não pode ser visto ou percebido pela visão.|oculto, imperceptível|visível, aparente
Irônico|Que expressa o contrário do sentido literal para provocar reflexão.|sarcástico, mordaz|literal, direto
Irreversível|Que não pode voltar ao estado anterior.|definitivo, permanente|reversível, reparável
Jovial|Que demonstra alegria, energia e espírito jovem.|alegre, animado|sombrio, abatido
Julgamento|Ato de analisar e formar uma opinião ou decisão.|avaliação, decisão|indecisão, suspensão
Lógica|Organização coerente de ideias e raciocínios.|raciocínio, coerência|absurdo, incoerência
Lúdico|Relacionado a jogos, brincadeiras e aprendizagem prazerosa.|divertido, recreativo|sério, enfadonho
Majestoso|Que impressiona pela beleza, grandeza ou dignidade.|imponente, grandioso|modesto, simples
Mágoa|Tristeza ou ressentimento causado por uma ofensa.|ressentimento, tristeza|perdão, alegria
Maravilhoso|Que causa encanto e grande admiração.|magnífico, esplêndido|horrível, péssimo
Medíocre|De qualidade apenas comum ou abaixo do esperado.|comum, inferior|excelente, brilhante
Melancólico|Marcado por tristeza calma e prolongada.|triste, abatido|alegre, eufórico
Memorável|Tão marcante que merece ser lembrado.|inesquecível, marcante|esquecível, comum
Minucioso|Que observa ou realiza algo nos menores detalhes.|detalhista, meticuloso|superficial, descuidado
Misterioso|Que não pode ser explicado ou compreendido facilmente.|enigmático, secreto|claro, evidente
Monumental|De proporções ou importância extraordinariamente grandes.|gigantesco, grandioso|pequeno, insignificante
Motivação|Razão ou impulso que leva uma pessoa a agir.|estímulo, incentivo|desânimo, apatia
Nocivo|Que causa dano à saúde, ao ambiente ou ao bem-estar.|prejudicial, danoso|benéfico, saudável
Notável|Que merece atenção por se destacar dos demais.|marcante, célebre|insignificante, comum
Obcecado|Dominado por um pensamento ou interesse persistente.|fixado, compulsivo|desinteressado, indiferente
Obscuro|Com pouca luz ou difícil de compreender.|escuro, confuso|claro, evidente
Obstáculo|Aquilo que impede ou dificulta um caminho ou objetivo.|barreira, impedimento|ajuda, passagem
Oculto|Que está escondido ou não foi revelado.|secreto, escondido|visível, revelado
Ofegante|Que respira com dificuldade ou rapidez após esforço.|arquejante, cansado|tranquilo, descansado
Oportuno|Que acontece no momento mais adequado.|conveniente, apropriado|inconveniente, inoportuno
Opressivo|Que exerce pressão, domínio ou causa sensação de sufoco.|tirânico, sufocante|libertador, leve
Orgulho|Satisfação pelo próprio valor ou por uma conquista.|dignidade, satisfação|vergonha, humildade
Original|Que foi criado primeiro ou apresenta novidade.|autêntico, inovador|copiado, comum
Otimista|Que tende a esperar resultados positivos.|esperançoso, confiante|pessimista, descrente
Ousadia|Coragem para enfrentar riscos ou romper padrões.|audácia, coragem|medo, cautela
Pacato|Calmo, tranquilo e pouco agitado.|sossegado, sereno|agitado, turbulento
Pânico|Medo súbito e tão intenso que dificulta o controle.|terror, desespero|calma, coragem
Patético|Que provoca pena ou parece extremamente inadequado.|lamentável, ridículo|admirável, digno
Peculiar|Que possui característica própria e diferente do comum.|particular, singular|comum, habitual
Persuasivo|Que possui capacidade de convencer alguém.|convincente, influente|inconvincente, fraco
Péssimo|De qualidade extremamente ruim.|horrível, terrível|excelente, ótimo
Pioneiro|Quem realiza ou explora algo antes dos demais.|precursor, inovador|seguidor, sucessor
Plácido|Muito calmo, tranquilo e sem agitação.|sereno, sossegado|agitado, turbulento
Polêmico|Que provoca opiniões contrárias e discussão pública.|controverso, discutível|consensual, pacífico
Poupar|Guardar recursos ou evitar esforço, dano ou sofrimento.|economizar, preservar|gastar, desperdiçar
Precioso|De grande valor material, afetivo ou simbólico.|valioso, estimado|sem valor, comum
Preconceito|Julgamento formado sem conhecimento ou reflexão adequada.|intolerância, discriminação|respeito, abertura
Prepotente|Que impõe sua vontade e se considera superior.|arrogante, autoritário|humilde, respeitoso
Previsível|Que pode ser imaginado ou calculado antecipadamente.|esperado, provável|inesperado, surpreendente
Privilégio|Vantagem ou direito especial não disponível a todos.|benefício, vantagem|desvantagem, privação
Propício|Que apresenta condições favoráveis para algo.|favorável, adequado|desfavorável, impróprio
Provisório|Que existe apenas por um período limitado.|temporário, passageiro|definitivo, permanente
Radical|Que atinge a raiz de uma questão ou propõe mudança profunda.|profundo, extremo|moderado, superficial
Rancor|Ressentimento persistente causado por uma ofensa.|mágoa, ressentimento|perdão, benevolência
Rebelde|Que resiste a regras, autoridade ou padrões estabelecidos.|insubmisso, contestador|obediente, conformado
Receio|Medo moderado ou preocupação diante de um risco.|temor, apreensão|confiança, coragem
Reconhecimento|Ato de identificar ou valorizar mérito e contribuição.|valorização, gratidão|desprezo, desconhecimento
Redenção|Ato de reparar um erro e recuperar dignidade ou liberdade.|reparação, libertação|condenação, perdição
Reflexão|Análise cuidadosa de pensamentos, fatos ou atitudes.|meditação, ponderação|impulsividade, distração
Relevante|Que possui importância para determinado assunto.|importante, significativo|irrelevante, insignificante
Relutante|Que demonstra resistência ou falta de vontade para agir.|hesitante, resistente|disposto, decidido
Repentino|Que acontece de forma rápida e inesperada.|súbito, abrupto|gradual, previsto
Respeito|Consideração pelos direitos, sentimentos e limites dos outros.|consideração, estima|desprezo, desrespeito
Retaliar|Responder a uma agressão causando prejuízo semelhante.|revidar, vingar|perdoar, conciliar
Revelação|Descoberta ou divulgação de algo antes desconhecido.|descoberta, anúncio|ocultação, segredo
Rigidez|Falta de flexibilidade física, mental ou nas regras.|inflexibilidade, dureza|flexibilidade, suavidade
Rigoroso|Que exige precisão e cumprimento cuidadoso de regras.|exigente, severo|tolerante, flexível
Romper|Quebrar, interromper ou deixar uma relação ou limite.|quebrar, interromper|unir, continuar
Satisfação|Sentimento agradável de ter uma necessidade atendida.|contentamento, prazer|insatisfação, frustração
Selvagem|Que vive na natureza ou age sem controle e delicadeza.|indomado, feroz|domesticado, civilizado
Significativo|Que possui sentido, importância ou efeito considerável.|relevante, expressivo|insignificante, irrelevante
Sincero|Que expressa com honestidade o que pensa ou sente.|franco, verdadeiro|falso, hipócrita
Solene|Formal e sério, próprio de ocasiões importantes.|cerimonioso, grave|informal, descontraído
Sombrio|Com pouca luz ou marcado por tristeza e ameaça.|escuro, melancólico|luminoso, alegre
Substituir|Colocar alguém ou algo no lugar de outro.|trocar, repor|manter, conservar
Sufocante|Que dificulta respirar ou provoca forte sensação de pressão.|opressivo, abafado|arejado, libertador
Sugestão|Ideia apresentada para ser considerada por alguém.|proposta, conselho|ordem, imposição
Supérfluo|Que ultrapassa o necessário e pode ser dispensado.|desnecessário, excessivo|essencial, necessário
Superficial|Que se limita à parte externa e não se aprofunda.|raso, leviano|profundo, minucioso
Supremo|Que ocupa o grau ou posição mais elevada.|máximo, superior|inferior, mínimo
Suspeito|Que desperta dúvida ou pode estar envolvido em algo errado.|duvidoso, provável|inocente, confiável
Sussurro|Fala produzida em voz muito baixa.|murmúrio, cochicho|grito, clamor
Tensão|Estado de preocupação, conflito ou força acumulada.|nervosismo, pressão|relaxamento, tranquilidade
Terrível|Que causa medo, sofrimento ou forte desaprovação.|horrível, assustador|excelente, agradável
Tolerante|Que respeita diferenças e aceita falhas dentro de limites.|compreensivo, paciente|intolerante, inflexível
Traição|Quebra da confiança, fidelidade ou compromisso.|deslealdade, perfídia|lealdade, fidelidade
Transformação|Mudança importante de forma, estado ou comportamento.|mudança, evolução|permanência, conservação
Trágico|Marcado por grande sofrimento ou resultado desastroso.|dramático, fatal|feliz, afortunado
Triunfo|Grande vitória alcançada após esforço ou disputa.|vitória, êxito|derrota, fracasso
Unânime|Aceito ou decidido por todas as pessoas de um grupo.|consensual, geral|dividido, discordante
Vazio|Que não contém nada ou transmite ausência de sentido.|oco, desocupado|cheio, completo
Vigente|Que está atualmente em validade ou funcionamento.|válido, atual|revogado, expirado
Vigoroso|Que demonstra força, energia e vitalidade.|forte, enérgico|fraco, debilitado
Vingança|Ato de causar dano em resposta a uma ofensa.|retaliação, revanche|perdão, reconciliação
Visão|Capacidade de ver ou maneira de compreender uma situação.|perspectiva, percepção|cegueira, incompreensão
Vislumbre|Visão rápida ou compreensão inicial e incompleta.|relance, indício|observação, certeza
`.trim().split("\n").forEach((line) => {
  const [word, definition, synonyms, antonyms] = line.split("|");
  DEFINITIONS[word] = [definition, synonyms, antonyms];
});

const ANTONYM_OVERRIDES = {
  Abundância: "escassez, falta", Acolhedor: "hostil, frio", Alarde: "discrição, silêncio", Alheio: "atento, envolvido",
  Alicerce: "instabilidade, fragilidade", Aliado: "adversário, inimigo", Altruísta: "egoísta, individualista", Âmago: "superfície, exterior",
  Apatia: "entusiasmo, interesse", Apogeu: "declínio, queda", Aprimorar: "piorar, prejudicar", Árduo: "fácil, simples",
  Assertividade: "passividade, agressividade", Astúcia: "ingenuidade, inexperiência", Audaz: "medroso, cauteloso", Autêntico: "falso, imitado",
  Autonomia: "dependência, submissão", Banal: "original, extraordinário", Benevolente: "cruel, maldoso", Bravura: "covardia, medo",
  Cativante: "tedioso, desinteressante", Cauteloso: "imprudente, descuidado", Cético: "crédulo, confiante", Clareza: "confusão, obscuridade",
  Coerente: "incoerente, contraditório", Compaixão: "crueldade, indiferença", Conciso: "prolixo, extenso", Convicção: "dúvida, incerteza",
  Crucial: "irrelevante, secundário", Curiosidade: "desinteresse, apatia", Dedicação: "descaso, negligência", Desapego: "apego, dependência",
  Destemido: "medroso, covarde", Destreza: "inabilidade, desajeitamento", Dilema: "certeza, solução", Dinâmico: "estático, parado",
  Efêmero: "duradouro, permanente", Eficaz: "ineficaz, inútil", Eloquente: "inexpressivo, confuso", Empatia: "indiferença, insensibilidade",
  Engenhoso: "pouco criativo, banal", Enigma: "solução, explicação", Entusiasmo: "apatia, desânimo", Essencial: "dispensável, supérfluo",
  Estratégia: "improviso, desorganização", Euforia: "tristeza, desânimo", Êxito: "fracasso, derrota", Foco: "distração, dispersão",
  Fugaz: "duradouro, permanente", Genuíno: "falso, artificial", Gratidão: "ingratidão, indiferença", Hábito: "exceção, novidade",
  Harmonia: "conflito, desordem", Hipótese: "certeza, fato", Ímpeto: "hesitação, apatia", Íntegro: "corrupto, desonesto",
  Intrépido: "covarde, medroso", Introspecção: "distração, exteriorização", Intuição: "raciocínio, análise", Jornada: "parada, permanência",
  Lealdade: "traição, deslealdade", Legado: "esquecimento, abandono", Lúcido: "confuso, inconsciente", Magnânimo: "mesquinho, rancoroso",
  Mérito: "demérito, desvalor", Meticuloso: "descuidado, superficial", Nostalgia: "desapego, indiferença", Nuança: "uniformidade, igualdade",
  Obsoleto: "moderno, atual", Otimizar: "desperdiçar, piorar", Perene: "efêmero, passageiro", Perspicaz: "ingênuo, desatento",
  Plausível: "improvável, absurdo", Ponderar: "precipitar, ignorar", Pragmático: "idealista, teórico", Proatividade: "passividade, inércia",
  Procrastinação: "iniciativa, prontidão", Propósito: "desorientação, acaso", Recíproco: "unilateral, desigual", Resiliência: "fragilidade, desistência",
  Ressalva: "aprovação, concordância", Sagaz: "ingênuo, lento", Sarcasmo: "sinceridade, elogio", Sensato: "insensato, imprudente",
  Sereno: "agitado, nervoso", Sublime: "medíocre, vulgar", Sutil: "evidente, grosseiro", Tangível: "abstrato, intangível",
  Tenaz: "inconstante, desistente", Trivial: "extraordinário, original", Verossímil: "inverossímil, improvável", Versátil: "limitado, inflexível",
  Virtude: "defeito, vício", Vívido: "apagado, pálido", Zelo: "descuido, negligência"
};

const EXAMPLE_OVERRIDES = {
  Empatia: "Bia demonstrou empatia ao ouvir a amiga sem interromper.", Resiliência: "Depois da nota baixa, ela estudou novamente com resiliência.",
  Procrastinação: "Deixar o trabalho para domingo foi um caso de procrastinação.", Assertividade: "Ela usou assertividade para discordar sem desrespeitar ninguém.",
  Gratidão: "Bia escreveu uma mensagem de gratidão à professora.", Ponderar: "Antes de responder, ela decidiu ponderar os dois lados.",
  Autonomia: "Com autonomia, ela organizou sozinha seu horário de estudos.", Consequência: "Melhorar a nota foi consequência de estudar todos os dias.",
  Altruísta: "Foi altruísta ao dividir o lanche com quem havia esquecido o seu.", Perspicaz: "A aluna perspicaz percebeu uma pista que todos ignoraram.",
  Conciso: "O resumo ficou conciso: explicou tudo em três frases.", Coerente: "A conclusão ficou coerente com os argumentos do texto.",
  Efêmero: "O arco-íris foi efêmero e desapareceu em poucos minutos.", Intrépido: "O bombeiro intrépido entrou no local para ajudar.",
  Sutil: "Ela percebeu uma mudança sutil no tom de voz da amiga.", Versátil: "O tablet é versátil: serve para estudar, desenhar e ler.",
  Zelo: "Ela cuidou dos livros da biblioteca com muito zelo.", Propósito: "Seu propósito era aprender uma palavra nova todos os dias."
};

const LUMINA_WORDS = WORD_NAMES.map((word) => {
  const known = DEFINITIONS[word];
  return {
    word,
    definition: known?.[0] || `Termo usado para expressar a ideia de ${word.toLowerCase()} em uma situação.`,
    example: EXAMPLE_OVERRIDES[word] || `Bia usou “${word.toLowerCase()}” para descrever com precisão a situação.`,
    synonyms: known?.[1] || "termo semelhante, ideia próxima",
    antonyms: known?.[2] || ANTONYM_OVERRIDES[word] || "sem antônimo direto"
  };
});
