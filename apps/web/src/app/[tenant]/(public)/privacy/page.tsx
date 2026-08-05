import Link from "next/link";

const sections = [
  ["Quais dados utilizamos", "Podemos receber dados de identificação e contato, informações enviadas em formulários, dados sobre veículos ou operações de interesse e registros técnicos de acesso necessários para segurança e funcionamento do site."],
  ["Por que utilizamos", "Usamos essas informações para responder solicitações, apresentar veículos e serviços, encaminhar propostas, prevenir fraudes, melhorar a experiência e cumprir obrigações legais ou regulatórias."],
  ["Compartilhamento", "Dados são compartilhados somente quando necessário para atender uma solicitação, viabilizar uma negociação, operar fornecedores essenciais ou cumprir uma obrigação legal. Não comercializamos dados pessoais."],
  ["Segurança e retenção", "Adotamos medidas técnicas e organizacionais compatíveis com a natureza dos dados. As informações são mantidas pelo período necessário à finalidade informada, ao exercício regular de direitos e às obrigações aplicáveis."],
  ["Seus direitos", "Você pode solicitar confirmação de tratamento, acesso, correção, informação sobre compartilhamento e, quando aplicável, exclusão, oposição ou revogação do consentimento."],
];

export default async function PrivacyPage({ params }: { params: Promise<{ tenant: string }> }) {
  const { tenant } = await params;
  return <main className="flex-1 bg-surface"><header className="border-b bg-white"><div className="page-shell max-w-4xl py-14 sm:py-20"><p className="eyebrow">Transparência e segurança</p><h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Política de privacidade</h1><p className="mt-5 max-w-2xl leading-7 text-muted">Entenda como os dados enviados pelos canais públicos são utilizados e quais escolhas estão disponíveis para você.</p><p className="mt-5 text-xs text-muted">Última atualização: 4 de agosto de 2026</p></div></header><div className="page-shell max-w-4xl py-12 sm:py-16"><div className="panel p-6 sm:p-9"><p className="leading-7 text-muted">Esta política se aplica à navegação na área pública, aos formulários de contato e às solicitações relacionadas a compra, venda, financiamento, frete e serviços.</p>{sections.map(([title, copy]) => <section key={title} className="mt-9 border-t pt-8"><h2 className="text-xl font-semibold">{title}</h2><p className="mt-3 leading-7 text-muted">{copy}</p></section>)}<section className="mt-9 border-t pt-8"><h2 className="text-xl font-semibold">Fale conosco</h2><p className="mt-3 leading-7 text-muted">Para dúvidas ou solicitações sobre seus dados, utilize nosso canal de atendimento.</p><Link href={`/${tenant}/contact`} className="mt-5 inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white">Abrir atendimento →</Link></section></div></div></main>;
}
