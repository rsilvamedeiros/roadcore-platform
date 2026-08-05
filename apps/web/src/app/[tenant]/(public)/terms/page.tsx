import Link from "next/link";

const sections = [
  ["Finalidade da plataforma", "A área pública apresenta anúncios, conteúdos e canais de solicitação relacionados a veículos pesados e serviços. O envio de um formulário não representa reserva, aprovação de crédito ou conclusão de contrato."],
  ["Informações dos anúncios", "Preços, características, disponibilidade, quilometragem e condições devem ser confirmados antes da negociação. Imagens e descrições procuram representar o bem, mas não substituem vistoria e conferência documental."],
  ["Propostas e financiamento", "Simulações são estimativas sem valor contratual. Crédito, taxas, prazos e aprovação dependem da análise e das condições da instituição responsável."],
  ["Uso adequado", "Não é permitido utilizar o site para fraude, violação de direitos, coleta automatizada indevida, interferência técnica ou envio de informações falsas ou ilícitas."],
  ["Conteúdo informativo", "Artigos e materiais têm finalidade educacional geral e não substituem orientação técnica, jurídica, financeira, contábil ou de órgãos públicos."],
  ["Alterações", "Estes termos podem ser atualizados para refletir mudanças de serviço, segurança ou legislação. A versão vigente e sua data permanecem disponíveis nesta página."],
];

export default async function TermsPage({ params }: { params: Promise<{ tenant: string }> }) {
  const { tenant } = await params;
  return <main className="flex-1 bg-surface"><header className="border-b bg-white"><div className="page-shell max-w-4xl py-14 sm:py-20"><p className="eyebrow">Regras de utilização</p><h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Termos de uso</h1><p className="mt-5 max-w-2xl leading-7 text-muted">Condições aplicáveis à navegação, aos anúncios e às solicitações enviadas pela área pública.</p><p className="mt-5 text-xs text-muted">Última atualização: 4 de agosto de 2026</p></div></header><div className="page-shell max-w-4xl py-12 sm:py-16"><div className="panel p-6 sm:p-9"><p className="leading-7 text-muted">Ao utilizar esta área pública, você declara ter lido e compreendido estas condições. Contratos específicos de compra, venda ou prestação de serviços podem estabelecer regras adicionais.</p>{sections.map(([title, copy]) => <section key={title} className="mt-9 border-t pt-8"><h2 className="text-xl font-semibold">{title}</h2><p className="mt-3 leading-7 text-muted">{copy}</p></section>)}<div className="mt-9 flex flex-wrap gap-3 border-t pt-8"><Link href={`/${tenant}/contact`} className="rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white">Tirar uma dúvida</Link><Link href={`/${tenant}/privacy`} className="rounded-xl border bg-white px-5 py-3 text-sm font-bold">Ver política de privacidade</Link></div></div></div></main>;
}
