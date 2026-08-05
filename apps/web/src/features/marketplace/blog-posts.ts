export interface BlogPost {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  readTime: string;
  intro: string;
  sections: Array<{ title: string; paragraphs: string[] }>;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "como-escolher-caminhao-usado",
    tag: "Compra",
    title: "Como escolher um caminhão usado sem cair em armadilhas",
    excerpt: "Um checklist prático de documentação, mecânica e histórico.",
    readTime: "6 min de leitura",
    intro: "Uma boa compra começa antes da visita ao pátio. Definir a aplicação, conferir o histórico e avaliar o conjunto mecânico reduz surpresas e ajuda a comparar propostas com critérios objetivos.",
    sections: [
      { title: "Comece pela aplicação", paragraphs: ["Peso, tipo de carga, distância, topografia e frequência de uso determinam a configuração adequada. Comprar potência ou capacidade além da necessidade aumenta o investimento e o custo operacional.", "Compare entre-eixos, tração, relação de diferencial, cabine e implemento com a rotina real da operação."] },
      { title: "Confira histórico e documentação", paragraphs: ["Valide propriedade, restrições, multas, gravames e registros relevantes antes de negociar. Manual, notas de manutenção e histórico de proprietários ajudam a entender como o veículo foi utilizado."] },
      { title: "Faça uma inspeção técnica", paragraphs: ["Motor, transmissão, diferencial, freios, suspensão, pneus e estrutura devem ser avaliados com o veículo frio e também em funcionamento. Quando possível, conte com um mecânico de confiança e faça um teste de rodagem."] },
    ],
  },
  {
    slug: "entrada-prazo-cet-financiamento",
    tag: "Financiamento",
    title: "Entrada, prazo e CET: o que comparar antes de financiar",
    excerpt: "Entenda os números que realmente mudam o custo da compra.",
    readTime: "5 min de leitura",
    intro: "A menor parcela nem sempre representa a melhor condição. Para comparar propostas, é preciso observar entrada, prazo, taxa, tarifas e o custo efetivo total.",
    sections: [
      { title: "Olhe o custo efetivo total", paragraphs: ["O CET reúne juros, tarifas, seguros e impostos em uma única referência. Use esse número, junto do valor total pago, para comparar propostas de instituições diferentes."] },
      { title: "Equilibre entrada e capital de giro", paragraphs: ["Uma entrada maior reduz juros, mas não deve comprometer o caixa necessário para combustível, manutenção e início da operação. Simule cenários preservando uma reserva saudável."] },
      { title: "Escolha um prazo sustentável", paragraphs: ["Prazos longos reduzem a parcela e elevam o custo final. A prestação precisa caber até nos meses mais fracos, considerando também seguro, impostos e manutenção do veículo."] },
    ],
  },
  {
    slug: "sinais-sistema-freios",
    tag: "Manutenção",
    title: "7 sinais de que o sistema de freios precisa de atenção",
    excerpt: "Prevenção para reduzir riscos e paradas inesperadas.",
    readTime: "4 min de leitura",
    intro: "Alterações no comportamento do pedal, ruídos e perda de eficiência nunca devem ser tratadas como normais. Uma inspeção rápida pode evitar desgaste maior e, principalmente, acidentes.",
    sections: [
      { title: "Sinais durante a condução", paragraphs: ["Pedal com curso diferente, veículo puxando para um lado, vibração, demora na resposta e necessidade de maior distância para parar pedem verificação imediata."] },
      { title: "Ruídos, vazamentos e alertas", paragraphs: ["Chiados persistentes, ruído metálico, queda de pressão, vazamentos e luzes no painel indicam que o sistema deve ser inspecionado antes de seguir viagem."] },
      { title: "Prevenção é parte da operação", paragraphs: ["Inclua lonas, pastilhas, discos, tambores, válvulas, mangueiras e sistema pneumático no plano preventivo. Registre intervenções e respeite os intervalos recomendados pelo fabricante."] },
    ],
  },
  {
    slug: "calcular-custo-por-quilometro",
    tag: "Gestão",
    title: "Como calcular o custo por quilômetro da sua operação",
    excerpt: "Uma conta essencial para fretes mais rentáveis.",
    readTime: "7 min de leitura",
    intro: "Conhecer o custo por quilômetro evita preços baseados apenas no mercado e mostra quais rotas, veículos e clientes realmente geram margem.",
    sections: [
      { title: "Separe custos fixos e variáveis", paragraphs: ["Depreciação, salários, licenciamento e seguro existem mesmo com o caminhão parado. Combustível, pneus, pedágios e parte da manutenção variam conforme a quilometragem e a operação."] },
      { title: "Use a quilometragem produtiva", paragraphs: ["Considere quilômetros carregados e vazios. Ignorar deslocamentos sem carga reduz artificialmente o custo e pode transformar uma rota aparentemente lucrativa em prejuízo."] },
      { title: "Atualize os parâmetros", paragraphs: ["Preço do diesel, consumo, pneus e manutenção mudam. Revise a memória de cálculo mensalmente e compare o previsto com o realizado."] },
    ],
  },
  {
    slug: "cavalo-6x2-ou-6x4",
    tag: "Mercado",
    title: "Cavalos 6x2 ou 6x4: qual escolher?",
    excerpt: "Compare aplicações, consumo e capacidade operacional.",
    readTime: "5 min de leitura",
    intro: "A escolha entre 6x2 e 6x4 depende de peso, piso, topografia e implemento. Não existe configuração melhor em todos os cenários.",
    sections: [
      { title: "Quando o 6x2 faz sentido", paragraphs: ["Em rodovias pavimentadas e operações dentro dos limites adequados, o 6x2 tende a oferecer menor peso próprio, consumo e custo de manutenção."] },
      { title: "Onde o 6x4 se destaca", paragraphs: ["A tração em dois eixos melhora aderência e capacidade em rampas, pisos ruins e operações severas, sendo comum em cargas pesadas e implementos basculantes."] },
      { title: "Decida pela rota", paragraphs: ["Analise PBTC, legislação, aclives, acesso aos clientes e frequência de trechos não pavimentados antes de comparar preços de aquisição."] },
    ],
  },
  {
    slug: "transferencia-caminhao-entre-estados",
    tag: "Documentação",
    title: "Transferência de caminhão entre estados",
    excerpt: "Os principais documentos e cuidados do processo.",
    readTime: "6 min de leitura",
    intro: "A transferência interestadual exige atenção a prazos, vistoria e regras do órgão de trânsito de destino. Organizar os documentos antes do pagamento reduz atrasos.",
    sections: [
      { title: "Valide a situação do veículo", paragraphs: ["Consulte débitos, multas, restrições, gravames e autenticidade dos documentos. Divergências devem ser resolvidas antes da conclusão do negócio."] },
      { title: "Organize compra e vistoria", paragraphs: ["Formalize a negociação, preencha a autorização de transferência conforme o procedimento vigente e agende a vistoria exigida no estado de destino."] },
      { title: "Confirme as exigências locais", paragraphs: ["Taxas e procedimentos podem variar. Consulte o Detran responsável ou um despachante credenciado e preserve comprovantes de todas as etapas."] },
    ],
  },
];
